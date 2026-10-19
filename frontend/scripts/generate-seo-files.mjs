// Generates, from the single page index (src/i18n/pageIndex.js):
//   public/sitemap.xml            sitemap INDEX (the only sitemap that is submitted to Search Console)
//   public/sitemap-core.xml       home, static pages, services, location pages
//   public/sitemap-blog.xml       blog posts
//   public/sitemap-ai-<country>.xml   AI calling agent hub + city pages, one file per country
//   public/robots.txt
//   vercel.json                   clean URLs, no trailing slash, every 301 from src/i18n/redirects.js
// Runs automatically before `vite build` (package.json "prebuild"). Never edit these files by hand.
import { writeFileSync, readdirSync, unlinkSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { buildPages } from '../src/i18n/pageIndex.js'
import { SITE } from '../src/i18n/routes.js'
import { redirects } from '../src/i18n/redirects.js'
import { COUNTRIES, CITIES, AI_DATE } from '../src/data/aiCities.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pub = join(root, 'public')
const pages = buildPages()
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// remove sitemap files of a previous run so renamed/removed groups never linger
for (const f of readdirSync(pub)) if (/^sitemap.*\.xml$/.test(f)) unlinkSync(join(pub, f))

const urlEntry = p => {
  const alt = p.alternates
    .map(a => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}"/>`)
    .join('\n')
  return [
    '  <url>',
    `    <loc>${esc(p.canonical)}</loc>`,
    alt,
    p.lastmod ? `    <lastmod>${p.lastmod}</lastmod>` : '',
    `    <changefreq>${p.changefreq}</changefreq>`,
    `    <priority>${p.priority.toFixed(1)}</priority>`,
    '  </url>',
  ].filter(Boolean).join('\n')
}
const urlset = list => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${list.map(urlEntry).join('\n')}
</urlset>
`

// ── which sitemap file does a page belong to? ──
const countryOfAiPage = p => {
  if (p.path.startsWith('/de/ki-telefonagent/')) return 'germany'
  return p.path.split('/')[2] // /ai-calling-agent/<country>[/<city>]
}
const groups = new Map([['core', []], ['blog', []]])
for (const k of Object.keys(COUNTRIES)) groups.set(`ai-${k}`, [])
for (const p of pages) {
  if (p.type === 'article') groups.get('blog').push(p)
  else if (p.type === 'ai-hub' || p.type === 'ai-city') groups.get(`ai-${countryOfAiPage(p)}`).push(p)
  else groups.get('core').push(p)
}

const index = []
for (const [name, list] of groups) {
  if (!list.length) continue
  const file = `sitemap-${name}.xml`
  writeFileSync(join(pub, file), urlset(list))
  const last = list.map(p => p.lastmod).filter(Boolean).sort().at(-1) || AI_DATE
  index.push(`  <sitemap>\n    <loc>${SITE}/${file}</loc>\n    <lastmod>${last}</lastmod>\n  </sitemap>`)
}
writeFileSync(join(pub, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${index.join('\n')}
</sitemapindex>
`)

// ── robots.txt ──
writeFileSync(join(pub, 'robots.txt'), `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: ${SITE}/sitemap.xml
`)

// ── vercel.json ──
// Every indexable page is prerendered to a static HTML file at build time (scripts/prerender-head.mjs),
// and static files take precedence over rewrites. Only the client-only /admin route needs a rewrite, so every
// unknown URL answers with a real 404 (public/404.html) instead of a "soft 404" that Google reports as an error.
// trailingSlash:false keeps one canonical URL form (/de/softwareentwicklung, not /de/softwareentwicklung/).
writeFileSync(join(root, 'vercel.json'), JSON.stringify({
  cleanUrls: true,
  trailingSlash: false,
  redirects: redirects({ withWww: process.env.SEO_WWW_REDIRECT === '1' }),
  rewrites: [{ source: '/admin', destination: '/index.html' }],
}, null, 2) + '\n')

const n = k => groups.get(k).length
console.log(`[seo] sitemap index: ${index.length} files, ${pages.length} URLs (core ${n('core')}, blog ${n('blog')}, AI ${pages.filter(p => p.type.startsWith('ai-')).length}); ${redirects().length} redirects; ${CITIES.length} cities`)
