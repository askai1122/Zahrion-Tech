import { useLocation } from 'react-router-dom'
import { ui } from '../i18n/ui'
import { langOfPath, staticPages, servicePaths } from '../i18n/routes'

// Language is derived from the URL (/de/... = German) so every language has its own crawlable URL.
export function useLang() {
  const { pathname } = useLocation()
  const lang = langOfPath(pathname)
  return { lang, isDe: lang === 'de', c: ui[lang], pathname }
}

// 'svc:web' -> service path in `lang`; 'blog' -> static page path; otherwise treated as a literal path.
export function resolveHref(lang, key) {
  if (!key) return null
  if (key.startsWith('svc:')) return servicePaths[key.slice(4)][lang]
  if (staticPages[key]) return staticPages[key][lang]
  return key
}
