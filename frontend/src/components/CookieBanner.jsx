import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang } from '../i18n/useLang'

const KEY = 'zt-consent'
const T = {
  en: {
    text: 'We use Google Analytics to understand how the site is used. It only runs if you accept.',
    accept: 'Accept', reject: 'Reject',
  },
  de: {
    text: 'Wir verwenden Google Analytics, um die Nutzung der Website zu verstehen. Es wird nur mit Ihrer Einwilligung aktiviert.',
    accept: 'Akzeptieren', reject: 'Ablehnen',
  },
}

function applyConsent(granted) {
  if (typeof window.gtag !== 'function') return
  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

// Google Consent Mode v2 banner. index.html sets every consent type to "denied" by default;
// analytics only starts collecting after the visitor accepts.
export default function CookieBanner() {
  const { lang } = useLang()
  const { pathname } = useLocation()
  const [show, setShow] = useState(false)

  useEffect(() => {
    let saved = null
    try { saved = localStorage.getItem(KEY) } catch {}
    if (saved === 'granted') applyConsent(true)
    else if (saved === 'denied') applyConsent(false)
    else setShow(true)
  }, [])

  if (!show || pathname.startsWith('/admin')) return null
  const t = T[lang]
  const choose = granted => {
    try { localStorage.setItem(KEY, granted ? 'granted' : 'denied') } catch {}
    applyConsent(granted)
    setShow(false)
  }

  return (
    <div role="dialog" aria-live="polite" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:max-w-md z-[60] glass dark:bg-slate-900/95 bg-white/95 rounded-2xl p-5 shadow-2xl dark:border-white/10 border-slate-200 border">
      <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-4">{t.text}</p>
      <div className="flex gap-3">
        <button onClick={() => choose(false)} className="flex-1 px-4 py-2 rounded-lg text-sm font-medium dark:bg-white/5 bg-slate-100 dark:text-slate-200 text-slate-700 dark:hover:bg-white/10 hover:bg-slate-200 transition-all">{t.reject}</button>
        <button onClick={() => choose(true)} className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-brand-500 to-accent-500 text-white hover:opacity-90 transition-opacity">{t.accept}</button>
      </div>
    </div>
  )
}
