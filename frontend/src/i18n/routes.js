// Single source of truth for English <-> German URL mapping.
// Plain ESM (no JSX) so both the React app and the Node build scripts can import it.
//
// English URLs are unchanged from the existing site. German URLs live under /de
// (no trailing slash, to match the existing English URL style).

export const SITE = 'https://zahriontech.com'
export const LANGS = ['en', 'de']
export const DEFAULT_LANG = 'en'

// key -> { en, de }
export const staticPages = {
  home:      { en: '/',          de: '/de' },
  about:     { en: '/about',     de: '/de/ueber-uns' },
  services:  { en: '/services',  de: '/de/leistungen' },
  portfolio: { en: '/portfolio', de: '/de/referenzen' },
  contact:   { en: '/contact',   de: '/de/kontakt' },
  blog:      { en: '/blog',      de: '/de/blog' },
}

// Service pages (each has an English and a German version)
// `legacy: true` = the English page already existed as its own React component.
export const servicePaths = {
  software: { en: '/hire-software-developer',            de: '/de/softwareentwicklung',        legacy: true },
  custom:   { en: '/custom-software-development',        de: '/de/individuelle-software' },
  web:      { en: '/hire-web-developer',                 de: '/de/webentwicklung',             legacy: true },
  app:      { en: '/hire-mobile-app-developer',          de: '/de/app-entwicklung',            legacy: true },
  crm:      { en: '/crm-software-development',           de: '/de/crm-entwicklung' },
  erp:      { en: '/erp-software-development',           de: '/de/erp-entwicklung' },
  pos:      { en: '/custom-pos-software-development',    de: '/de/pos-software',               legacy: true },
  saas:     { en: '/saas-development',                   de: '/de/saas-entwicklung' },
  node:     { en: '/hire-nodejs-developer',              de: '/de/nodejs-entwicklung',         legacy: true },
  react:    { en: '/react-development',                  de: '/de/react-entwicklung' },
  nextjs:   { en: '/nextjs-development',                 de: '/de/nextjs-entwicklung' },
  cms:      { en: '/custom-cms-development',             de: '/de/cms-entwicklung',            legacy: true },
  billing:  { en: '/billing-software-development',       de: '/de/abrechnungssoftware',        legacy: true },
  vet:      { en: '/veterinary-clinic-app-development',  de: '/de/tierarzt-app-entwicklung',   legacy: true },
}

// English-only pages (US/Canada location landing pages). No German equivalent.
export const englishOnlyPaths = [
  '/software-development-agency-nashville',
  '/custom-software-development-edmonton',
  '/it-outsourcing-hartford',
  '/pos-software-systems-chicago',
]

// Blog: translated article pairs. Each pair shares a `pair` key.
export const blogPairs = {
  cost:      { en: 'custom-software-development-cost',     de: 'was-kostet-individuelle-software' },
  vs:        { en: 'custom-vs-off-the-shelf-software',      de: 'individuelle-software-vs-standardsoftware' },
  process:   { en: 'software-development-process',          de: 'software-entwickeln-lassen' },
  crm:       { en: 'custom-crm-development',                de: 'crm-software-entwickeln-lassen' },
  app:       { en: 'mobile-app-development-cost-process',   de: 'app-entwickeln-lassen-kosten-ablauf' },
  saasmvp:   { en: 'saas-mvp-development',                  de: 'saas-mvp-entwickeln-lassen' },
}

// ---------- helpers ----------

const trim = p => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p)

export function langOfPath(pathname) {
  const p = trim(pathname || '/')
  return p === '/de' || p.startsWith('/de/') ? 'de' : 'en'
}

export function blogPath(lang, slug) {
  return lang === 'de' ? `/de/blog/${slug}` : `/blog/${slug}`
}

// All translatable "page records": { en, de } path pairs
function allPairs() {
  const pairs = []
  for (const v of Object.values(staticPages)) pairs.push(v)
  for (const v of Object.values(servicePaths)) pairs.push(v)
  for (const v of Object.values(blogPairs)) {
    pairs.push({ en: blogPath('en', v.en), de: blogPath('de', v.de) })
  }
  return pairs
}

/**
 * Returns the equivalent path in `targetLang` or null when no translation exists.
 */
export function equivalentPath(pathname, targetLang) {
  const p = trim(pathname || '/')
  const from = langOfPath(p)
  if (from === targetLang) return p
  for (const pair of allPairs()) {
    if (pair[from] === p) return pair[targetLang]
  }
  return null
}

/**
 * hreflang alternates for a path: [{hreflang, href}] including x-default.
 * Returns [] when the page has no translation (so no dangling hreflang is emitted).
 */
export function alternatesFor(pathname) {
  const p = trim(pathname || '/')
  const en = equivalentPath(p, 'en')
  const de = equivalentPath(p, 'de')
  if (!en || !de) return []
  return [
    { hreflang: 'en', href: SITE + (en === '/' ? '/' : en) },
    { hreflang: 'de', href: SITE + de },
    { hreflang: 'x-default', href: SITE + (en === '/' ? '/' : en) },
  ]
}

export const absolute = path => SITE + (path === '/' ? '/' : trim(path))
