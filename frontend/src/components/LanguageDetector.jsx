import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { langOfPath, equivalentPath } from '../i18n/routes'

// If true, a visitor located in Germany is shown German even when their browser language is English.
// Default false: browser language is the stronger signal; geography is only a fallback.
const GEO_OVERRIDES_ENGLISH_BROWSER = false

const BOT = /googlebot|google-inspectiontool|adsbot|bingbot|slurp|duckduckbot|baiduspider|yandex|applebot|facebookexternalhit|linkedinbot|twitterbot|headlesschrome|lighthouse/i

function read(key) { try { return localStorage.getItem(key) } catch { return null } }

async function countryFromGeo() {
  try {
    const ctrl = new AbortController()
    const t = setTimeout(() => ctrl.abort(), 1500)
    const res = await fetch('/api/geo', { signal: ctrl.signal, cache: 'no-store' })
    clearTimeout(t)
    if (!res.ok) return null
    const data = await res.json()
    return data && data.country ? String(data.country).toUpperCase() : null
  } catch { return null }
}

/**
 * Runs once per browser session on the landing page only. It is a client-side navigation
 * (no server redirect), is skipped for crawlers, and never fires after the first page view,
 * so search engines can crawl both languages and users can always switch back.
 *
 * Priority: 1) explicit choice (localStorage zt_lang)  2) browser language  3) geo (Germany) fallback
 */
export default function LanguageDetector() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    let done = false
    try { done = !!sessionStorage.getItem('zt_lang_checked'); sessionStorage.setItem('zt_lang_checked', '1') } catch {}
    if (done) return
    if (BOT.test(navigator.userAgent || '')) return
    if (pathname.startsWith('/admin')) return
    if (langOfPath(pathname) === 'de') return // German URL requested: respect it

    const target = equivalentPath(pathname, 'de')
    if (!target) return // no German equivalent for this page

    const saved = read('zt_lang')
    if (saved === 'en') return
    if (saved === 'de') { navigate(target, { replace: true }); return }

    const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || '']).map(l => String(l).toLowerCase())
    const first = langs[0] || ''
    if (first.startsWith('de')) { navigate(target, { replace: true }); return }
    if (first.startsWith('en') && !GEO_OVERRIDES_ENGLISH_BROWSER) return

    let cancelled = false
    countryFromGeo().then(country => {
      if (!cancelled && country === 'DE') navigate(target, { replace: true })
    })
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
