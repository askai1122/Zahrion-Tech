// Post-build: writes one static HTML file per indexable URL with the correct <title>, description,
// canonical, hreflang, Open Graph, JSON-LD and a <noscript> text version of the page.
// Why: the site is a client-side React SPA. Without this, every URL would ship the same English
// homepage <head> to crawlers that do not execute JavaScript, and hreflang could not be read reliably.
// React still renders the full interactive page on top (createRoot replaces #root's children).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { buildPages } from '../src/i18n/pageIndex.js'
import { organizationSchema } from '../src/i18n/schema.js'
import { SITE } from '../src/i18n/routes.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const templatePath = join(dist, 'index.html')
if (!existsSync(templatePath)) { console.error('[prerender] dist/index.html missing – run vite build first'); process.exit(1) }

const template = readFileSync(templatePath, 'utf8')
const START = '<!--SEO_HEAD_START-->'
const END = '<!--SEO_HEAD_END-->'
if (!template.includes(START) || !template.includes(END)) { console.error('[prerender] SEO markers missing in index.html'); process.exit(1) }

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const IMG = `${SITE}/zahriontech-logo.png`

// Pages whose React component sets its own Helmet block (legacy English service + location pages):
// their tags are emitted unmarked (runtime Helmet adds identical values). Every other page uses
// <SeoHead>, whose tags are marked data-rh so react-helmet-async replaces (not duplicates) them.
const ownHelmet = p => p.lang === 'en' && (p.type === 'location' || (p.type === 'service' && !p.features))

function headFor(p) {
  const rh = ownHelmet(p) ? '' : ' data-rh="true"'
  const de = p.lang === 'de'
  const L = []
  L.push(`  <title>${esc(p.title)}</title>`)
  L.push(`  <meta name="description" content="${esc(p.description)}"${rh} />`)
  L.push(`  <meta name="robots" content="index, follow" />`)
  L.push(`  <link rel="canonical" href="${esc(p.canonical)}"${rh} />`)
  for (const a of p.alternates) L.push(`  <link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}" data-rh="true" />`)
  L.push(`  <meta property="og:type" content="${p.type === 'article' ? 'article' : 'website'}"${rh} />`)
  L.push(`  <meta property="og:url" content="${esc(p.canonical)}"${rh} />`)
  L.push(`  <meta property="og:title" content="${esc(p.ogTitle || p.title)}"${rh} />`)
  L.push(`  <meta property="og:description" content="${esc(p.ogDescription || p.description)}"${rh} />`)
  L.push(`  <meta property="og:image" content="${IMG}"${rh} />`)
  if (!ownHelmet(p)) L.push(`  <meta property="og:image:alt" content="ZahrionTech Logo"${rh} />`)
  L.push(`  <meta property="og:locale" content="${de ? 'de_DE' : 'en_US'}"${rh} />`)
  L.push(`  <meta property="og:locale:alternate" content="${de ? 'en_US' : 'de_DE'}" />`)
  L.push(`  <meta name="twitter:card" content="summary_large_image"${rh} />`)
  L.push(`  <meta name="twitter:title" content="${esc(p.ogTitle || p.title)}"${rh} />`)
  L.push(`  <meta name="twitter:description" content="${esc(p.ogDescription || p.description)}"${rh} />`)
  L.push(`  <meta name="twitter:image" content="${IMG}"${rh} />`)
  const schemas = [organizationSchema(p.lang), ...(p.schema || []).filter(s => s['@type'] !== 'ProfessionalService')]
  for (const s of schemas) L.push(`  <script type="application/ld+json">${JSON.stringify(s).replace(/</g, '\\u003c')}</script>`)
  return L.join('\n')
}

function noscriptFor(p) {
  const parts = [`<h1>${esc(p.h1 || p.title)}</h1>`]
  if (p.intro) parts.push(`<p>${esc(p.intro)}</p>`)
  if (p.features) parts.push(`<ul>${p.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul>`)
  if (p.body) parts.push(p.body.map(b => (b.h ? `<h2>${esc(b.h)}</h2>` : `<p>${esc(b.p)}</p>`)).join(''))
  if (p.faqs) parts.push(p.faqs.map(f => `<h2>${esc(f.q)}</h2><p>${esc(f.a)}</p>`).join(''))
  if (p.links && p.links.length) parts.push(`<nav>${p.links.map(l => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join(' | ')}</nav>`)
  return `<div id="root"><noscript>${parts.join('')}</noscript></div>`
}

let count = 0
for (const p of buildPages()) {
  let html = template.replace(new RegExp(`${START}[\\s\\S]*?${END}`), `${START}\n${headFor(p)}\n  ${END}`)
  html = html.replace('<html lang="en">', `<html lang="${p.lang}">`)
  html = html.replace('<div id="root"></div>', noscriptFor(p))
  // flat files + cleanUrls: /de/softwareentwicklung -> dist/de/softwareentwicklung.html ; "/" -> dist/index.html
  const file = p.path === '/' ? join(dist, 'index.html') : join(dist, `${p.path.slice(1)}.html`)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
  count++
}
console.log(`[prerender] wrote ${count} static HTML files`)
