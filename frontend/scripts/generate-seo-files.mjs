// Generates public/sitemap.xml (with hreflang alternates), public/robots.txt and vercel.json
// from the single page index. Runs automatically before `vite build` (see package.json "prebuild").
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { buildPages } from '../src/i18n/pageIndex.js'
import { SITE } from '../src/i18n/routes.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pages = buildPages()
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// ── sitemap.xml: only indexable URLs (no /admin, no API, no query URLs, no 404) ──
const urls = pages.map(p => {
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
})
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`
writeFileSync(join(root, 'public/sitemap.xml'), sitemap)

// ── robots.txt ──
writeFileSync(join(root, 'public/robots.txt'), `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: ${SITE}/sitemap.xml
`)

// ── vercel.json ──
// Every indexable page is prerendered to a static HTML file at build time (scripts/prerender-head.mjs),
// and static files take precedence over rewrites. Only the client-only /admin route needs a rewrite.
// trailingSlash:false keeps one canonical URL form (/de/softwareentwicklung, not /de/softwareentwicklung/).
writeFileSync(join(root, 'vercel.json'), JSON.stringify({
  rewrites: [{ source: '/admin', destination: '/index.html' }],
  cleanUrls: true,
  trailingSlash: false,
}, null, 2) + '\n')

console.log(`[seo] sitemap.xml: ${pages.length} URLs (${pages.filter(p => p.lang === 'de').length} German)`)
