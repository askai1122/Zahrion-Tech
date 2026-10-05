export const SITE = 'https://zahriontech.com'
export const LANG_KEY = 'zt-lang'

// Pages that only exist in English (US city landing pages, admin). No /de version.
export const EN_ONLY = [
  '/admin',
  '/software-development-agency-nashville',
  '/custom-software-development-edmonton',
  '/it-outsourcing-hartford',
  '/pos-software-systems-chicago',
]

export const isDePath = p => p === '/de' || p.startsWith('/de/')
export const stripLang = p => (isDePath(p) ? p.slice(3) || '/' : p)

export function localize(to, lang) {
  if (typeof to !== 'string') return to
  if (lang !== 'de') return to
  if (!to.startsWith('/') || to.startsWith('//')) return to
  const bare = to.split(/[?#]/)[0]
  if (EN_ONLY.includes(bare) || isDePath(bare)) return to
  return to === '/' ? '/de' : '/de' + to
}

// Browser-based German visitor detection: first preferred language is German,
// or the browser timezone is Germany (Berlin / Büsingen).
export function prefersGerman() {
  try {
    const first = (navigator.languages && navigator.languages[0]) || navigator.language || ''
    if (/^de(-|$)/i.test(first)) return true
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    return tz === 'Europe/Berlin' || tz === 'Europe/Busingen'
  } catch {
    return false
  }
}

export const TOOLSTACK = {
  home: 'https://www.toolstack.tools/',
  heic: 'https://www.toolstack.tools/heic-to-jpg',
  // TODO: confirm the exact URL of the PDF compressor tool on toolstack.tools
  pdf: 'https://www.toolstack.tools/pdf-compressor',
}
