import { Link } from 'react-router-dom'
import { useLang } from '../hooks/useLang'
import { equivalentPath, staticPages } from '../i18n/routes'

const options = [
  { code: 'de', short: 'DE', long: 'Deutsch' },
  { code: 'en', short: 'EN', long: 'English' },
]

// Always visible; links to the equivalent page in the other language (or that language's home
// when no translation exists). These are plain <a href> links, so crawlers can follow them.
export default function LangSwitcher() {
  const { lang, pathname } = useLang()
  const other = lang === 'de' ? 'en' : 'de'
  const to = equivalentPath(pathname, other) || staticPages.home[other]

  const choose = code => {
    try { localStorage.setItem('zt_lang', code) } catch {}
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'language_switch', { from_language: lang, to_language: code })
    }
  }

  return (
    <div
      role="group"
      aria-label="Sprache / Language"
      className="flex items-center gap-0.5 h-9 px-1 rounded-lg dark:bg-white/5 bg-slate-100 text-xs font-medium"
    >
      {options.map(o =>
        o.code === lang ? (
          <span
            key={o.code}
            lang={o.code}
            aria-current="true"
            className="px-2 py-1 rounded-md text-brand-400 dark:bg-brand-500/10 bg-brand-50"
          >
            <span className="hidden lg:inline">{o.long}</span>
            <span className="lg:hidden">{o.short}</span>
          </span>
        ) : (
          <Link
            key={o.code}
            to={to}
            lang={o.code}
            hrefLang={o.code}
            title={o.long}
            onClick={() => choose(o.code)}
            className="px-2 py-1 rounded-md dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900 transition-colors"
          >
            <span className="hidden lg:inline">{o.long}</span>
            <span className="lg:hidden">{o.short}</span>
          </Link>
        )
      )}
    </div>
  )
}
