// SEO guard: runs after the build (npm run build -> postbuild) and FAILS the build when something that would
// cause a Google Search Console error is detected. Run manually with `npm run audit` after `npm run build`.
//
// What it prevents (each maps to a Search Console report):
//  - "Excluded by noindex"            -> any indexable page, or any sitemap URL, carrying a noindex
//  - "Page with redirect"             -> sitemap URLs that are redirect sources; redirect chains/loops; redirects to missing pages
//  - "Duplicate without user-selected canonical" / "Duplicate, Google chose different canonical"
//                                     -> missing/wrong/duplicate canonicals, www or trailing-slash canonicals, duplicate titles/descriptions, near-duplicate text
//  - "Discovered/Crawled - currently not indexed" (partly)
//                                     -> orphan pages (no internal link), thin pages, broken internal links
//  - hreflang errors                  -> non-reciprocal / missing-target alternates
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { buildPages } from '../src/i18n/pageIndex.js'
import { SITE, staticPages, servicePaths } from '../src/i18n/routes.js'
import { redirects } from '../src/i18n/redirects.js'
import { ui } from '../src/i18n/ui.js'
import { aiHubLinks } from '../src/data/aiCallingContent.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const pages = buildPages()
const errors = []
const warns = []
const err = m => errors.push(m)
const warn = m => warns.push(m)

const byPath = new Map(pages.map(p => [p.path, p]))
const strip = html => html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim()
const fileFor = p => (p === '/' ? join(dist, 'index.html') : join(dist, `${p.slice(1)}.html`))

// ── 1. per-page checks on the built HTML ───────────────────────────
if (!existsSync(dist)) { console.error('[audit] dist/ missing: run `npm run build` first'); process.exit(1) }
const titles = new Map(), descs = new Map(), canons = new Map()
const texts = {}
for (const p of pages) {
  const f = fileFor(p.path)
  if (!existsSync(f)) { err(`missing built file for ${p.path}`); continue }
  const html = readFileSync(f, 'utf8')
  const one = (re, what) => {
    const m = [...html.matchAll(re)]
    if (m.length !== 1) err(`${p.path}: expected exactly 1 ${what}, found ${m.length}`)
    return m[0] && m[0][1]
  }
  const title = one(/<title>([^<]*)<\/title>/g, '<title>')
  const desc = one(/<meta name="description" content="([^"]*)"/g, 'meta description')
  const canon = one(/<link rel="canonical" href="([^"]*)"/g, 'canonical')
  const robots = one(/<meta name="robots" content="([^"]*)"/g, 'meta robots')
  if (robots && /noindex|none/i.test(robots)) err(`${p.path}: indexable page has robots="${robots}"`)
  if (/noindex/i.test(html)) err(`${p.path}: the word "noindex" appears in the HTML`)
  const expected = SITE + (p.path === '/' ? '/' : p.path)
  if (canon && canon !== expected) err(`${p.path}: canonical is ${canon}, expected ${expected}`)
  if (canon && (/\/\/www\./.test(canon) || (canon.length > SITE.length + 1 && canon.endsWith('/')))) err(`${p.path}: canonical has www or trailing slash: ${canon}`)
  if (!new RegExp(`<html lang="${p.lang}"`).test(html)) err(`${p.path}: <html lang> is not "${p.lang}"`)
  if (!/<h1>[^<]+<\/h1>/.test(html)) err(`${p.path}: no <h1> in the prerendered HTML`)
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]) } catch { err(`${p.path}: invalid JSON-LD`) }
  }
  if (title) { if (titles.has(title)) err(`duplicate <title> on ${p.path} and ${titles.get(title)}: "${title}"`); titles.set(title, p.path) }
  if (desc) { if (descs.has(desc)) err(`duplicate meta description on ${p.path} and ${descs.get(desc)}`); descs.set(desc, p.path) }
  if (canon) { if (canons.has(canon)) err(`duplicate canonical ${canon} on ${p.path} and ${canons.get(canon)}`); canons.set(canon, p.path) }
  if (title && title.length > 70) warn(`${p.path}: title is ${title.length} chars (may be truncated)`)
  if (desc && (desc.length > 170 || desc.length < 70)) warn(`${p.path}: description is ${desc.length} chars`)
  const root_ = html.match(/<div id="root"><noscript>([\s\S]*?)<\/noscript><\/div>/)
  const text = root_ ? strip(root_[1]) : ''
  texts[p.path] = text
  const words = text.split(' ').filter(Boolean).length
  const legacy = p.type === 'home' || p.type === 'page' || (p.type === 'service' && !p.features)
  if (words < 120) (legacy ? warn : err)(`${p.path}: only ${words} words in prerendered HTML (thin page)`)
  // internal links inside the prerendered HTML must resolve
  for (const m of html.matchAll(/<a href="(\/[^"#?]*)"/g)) {
    const href = m[1].replace(/(.)\/$/, '$1')
    if (!byPath.has(href)) err(`${p.path}: prerendered link to missing page ${href}`)
  }
}

// ── 2. hreflang ────────────────────────────────────────────────────
for (const p of pages) {
  if (!p.alternates.length) continue
  const langs = p.alternates.map(a => a.hreflang)
  if (!langs.includes(p.lang)) err(`${p.path}: hreflang set has no self-reference`)
  for (const a of p.alternates) {
    const path = a.href.replace(SITE, '') || '/'
    const t = byPath.get(path)
    if (!t) { err(`${p.path}: hreflang ${a.hreflang} points to missing page ${a.href}`); continue }
    if (a.hreflang !== 'x-default') {
      if (t.lang !== a.hreflang) err(`${p.path}: hreflang ${a.hreflang} points to a ${t.lang} page`)
      if (!t.alternates.some(b => b.href === SITE + (p.path === '/' ? '/' : p.path))) err(`${p.path}: hreflang to ${a.href} is not reciprocal`)
    }
  }
}

// ── 3. sitemaps ────────────────────────────────────────────────────
const redirectSources = new Set(redirects().filter(r => !r.has && !/[:(*]/.test(r.source)).map(r => r.source))
const redirectRegex = redirects().filter(r => !r.has && /:path\*/.test(r.source)).map(r => r.source.replace(':path*', ''))
const idx = join(dist, 'sitemap.xml')
if (!existsSync(idx)) err('dist/sitemap.xml missing')
else {
  const files = [...readFileSync(idx, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
  const seen = new Set()
  for (const loc of files) {
    const fp = join(dist, loc.replace(SITE + '/', ''))
    if (!existsSync(fp)) { err(`sitemap index references missing file ${loc}`); continue }
    for (const m of readFileSync(fp, 'utf8').matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)) {
      const url = m[1]
      const path = url.replace(SITE, '') || '/'
      if (seen.has(url)) err(`URL listed twice in sitemaps: ${url}`)
      seen.add(url)
      if (!url.startsWith(SITE)) err(`sitemap URL on wrong host: ${url}`)
      if (url.length > SITE.length + 1 && url.endsWith('/')) err(`sitemap URL with trailing slash: ${url}`)
      if (!byPath.has(path)) err(`sitemap URL without a page: ${url}`)
      if (redirectSources.has(path) || redirectRegex.some(r => path.startsWith(r + '/'))) err(`sitemap URL is a redirect source: ${url}`)
    }
  }
  for (const p of pages) if (!seen.has(SITE + (p.path === '/' ? '/' : p.path))) err(`page missing from sitemaps: ${p.path}`)
}
const robots = existsSync(join(dist, 'robots.txt')) ? readFileSync(join(dist, 'robots.txt'), 'utf8') : ''
if (!/Sitemap: https:\/\/zahriontech\.com\/sitemap\.xml/.test(robots)) err('robots.txt does not reference the sitemap')
if (/Disallow:\s*\/\s*$/m.test(robots)) err('robots.txt disallows the whole site')

// ── 4. redirects: destination exists, no chains, no loops ──────────
const rs = redirects()
const fixed = new Map(rs.filter(r => !r.has && !/[:(*]/.test(r.source)).map(r => [r.source, r.destination]))
for (const r of rs) {
  if (r.has) continue
  if (/[:(*]/.test(r.source)) {
    if (!byPath.has(r.destination)) err(`redirect ${r.source} -> ${r.destination}: destination page does not exist`)
    continue
  }
  if (byPath.has(r.source)) err(`redirect source ${r.source} is also a real page`)
  if (r.destination === r.source) err(`redirect loop: ${r.source}`)
  if (fixed.has(r.destination)) err(`redirect chain: ${r.source} -> ${r.destination} -> ${fixed.get(r.destination)}`)
  if (!byPath.has(r.destination)) err(`redirect ${r.source} -> ${r.destination}: destination page does not exist`)
}
const www = rs[0]
if (!www || !www.has || !/\$1$/.test(www.destination)) err('www -> apex redirect missing (first redirect in redirects.js)')
const vj = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'))
if (vj.cleanUrls !== true || vj.trailingSlash !== false) err('vercel.json must have cleanUrls:true and trailingSlash:false')
if ((vj.rewrites || []).some(r => r.source !== '/admin')) err('vercel.json has a catch-all rewrite: unknown URLs would return 200 (soft 404)')
if (!existsSync(join(dist, '404.html'))) err('dist/404.html missing (unknown URLs must return a real 404)')
else if (!/noindex/.test(readFileSync(join(dist, '404.html'), 'utf8'))) err('404.html must be noindex')

// ── 5. internal-link graph: no orphans, no broken React links ──────
const inbound = new Map(pages.map(p => [p.path, 0]))
const link = (from, href) => { if (href !== from && inbound.has(href)) inbound.set(href, inbound.get(href) + 1) }
for (const p of pages) for (const l of p.links || []) {
  if (!byPath.has(l.href)) err(`${p.path}: data link to missing page ${l.href}`)
  link(p.path, l.href)
}
const resolveKey = (lang, key) => key.startsWith('svc:') ? servicePaths[key.slice(4)][lang] : staticPages[key] ? staticPages[key][lang] : key
for (const lang of ['en', 'de']) {
  const U = ui[lang]
  const sitewide = [
    ...U.nav.links.map(l => staticPages[l.key][lang]),
    ...U.footer.groups.flatMap(g => g.items.map(([k]) => resolveKey(lang, k))),
    ...U.servicesPage.cards.map(c => c.to && resolveKey(lang, c.to)).filter(Boolean),
    ...(lang === 'de' ? ['/de/ki-telefonagent/deutschland'] : aiHubLinks('en').map(l => l.href)),
  ]
  for (const href of sitewide) {
    if (!byPath.has(href)) err(`ui ${lang}: link to missing page ${href}`)
    for (const p of pages.filter(x => x.lang === lang)) link(p.path, href)
  }
}
// service pages link to their related services; blog posts link to services; blog index lists posts (all in p.links above)
for (const p of pages) {
  if (!p.type.startsWith('ai-') && p.type !== 'home' && inbound.get(p.path) === 0) err(`orphan page (no internal links point to it): ${p.path}`)
  if (p.type.startsWith('ai-') && inbound.get(p.path) < 3) err(`AI page has fewer than 3 internal links: ${p.path} (${inbound.get(p.path)})`)
}

// ── 6. near-duplicate content (doorway-page guard) ─────────────────
const shingles = t => { const w = t.toLowerCase().split(' '); const s = new Set(); for (let i = 0; i + 5 <= w.length; i++) s.add(w.slice(i, i + 5).join(' ')); return s }
const sh = {}
for (const p of pages.filter(x => x.type === 'ai-city')) sh[p.path] = shingles(texts[p.path] || '')
let maxSim = 0, maxPair = ''
const keys = Object.keys(sh)
for (let i = 0; i < keys.length; i++) for (let j = i + 1; j < keys.length; j++) {
  const a = sh[keys[i]], b = sh[keys[j]]
  let inter = 0
  for (const x of a) if (b.has(x)) inter++
  const sim = inter / (a.size + b.size - inter)
  if (sim > maxSim) { maxSim = sim; maxPair = `${keys[i]} <> ${keys[j]}` }
}
const SIM_LIMIT = 0.50
if (maxSim > SIM_LIMIT) err(`city pages are too similar (${(maxSim * 100).toFixed(0)}% > ${SIM_LIMIT * 100}%): ${maxPair}. Add more city-specific content before publishing more pages`)

// ── report ─────────────────────────────────────────────────────────
console.log(`[audit] ${pages.length} pages, ${titles.size} unique titles, most similar city pair: ${(maxSim * 100).toFixed(0)}% (${maxPair})`)
for (const w of warns.slice(0, 15)) console.warn('  warn:', w)
if (warns.length > 15) console.warn(`  ... ${warns.length - 15} more warnings`)
if (errors.length) {
  console.error(`\n[audit] FAILED with ${errors.length} error(s):`)
  for (const e of errors.slice(0, 60)) console.error('  ✗', e)
  if (errors.length > 60) console.error(`  ... ${errors.length - 60} more`)
  process.exit(1)
}
console.log('[audit] OK: no SEO errors found')
