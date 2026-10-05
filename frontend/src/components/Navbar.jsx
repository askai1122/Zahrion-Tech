import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LocalLink from '../i18n/LocalLink'
import { useLang, useUI } from '../i18n/useLang'
import { LANG_KEY, EN_ONLY, localize, stripLang } from '../i18n/config'
import { Languages } from 'lucide-react'
import { posts } from '../data/blogData'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, search } = useLocation()
  const { lang, basePath } = useLang()
  const u = useUI()
  const links = u.nav
  const navigate = useNavigate()
  const switchLang = () => {
    const next = lang === 'de' ? 'en' : 'de'
    try { localStorage.setItem(LANG_KEY, next) } catch {}
    // blog posts have different slugs per language: jump to the translated post when one exists
    let bare = basePath
    if (basePath.startsWith('/blog/')) {
      const cur = posts.find(p => p.lang === lang && p.slug === basePath.slice(6))
      bare = cur && cur.pair ? '/blog/' + cur.pair : '/blog'
    }
    if (EN_ONLY.includes(bare)) { navigate(next === 'de' ? '/de' : '/'); return }
    navigate(localize(bare, next) + search)
  }
  const isActive = to => stripLang(pathname) === to

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass dark:bg-slate-900/80 bg-white/80 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[40px] pb-[30px] flex items-center justify-between">
        {/* Logo */}
        <LocalLink to="/" className="flex items-center group">
          <img
            src="/zahriontech-logo.png"
            alt="ZahrionTech"
            className="h-14 w-auto max-w-[220px] object-contain"
          />
        </LocalLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <li key={l.to}>
              <LocalLink
                to={l.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(l.to)
                    ? 'text-brand-400 dark:bg-brand-500/10 bg-brand-50'
                    : 'dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:hover:bg-white/5 hover:bg-slate-100'
                }`}
              >
                {l.label}
              </LocalLink>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={switchLang}
            aria-label={u.switchLabel}
            title={u.switchLabel}
            className="h-9 px-2.5 rounded-lg dark:bg-white/5 bg-slate-100 flex items-center gap-1.5 text-xs font-semibold dark:text-slate-300 text-slate-600 dark:hover:bg-white/10 hover:bg-slate-200 transition-all"
          >
            <Languages size={14} />{u.switchTo}
          </button>
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg dark:bg-white/5 bg-slate-100 flex items-center justify-center dark:text-slate-300 text-slate-600 dark:hover:bg-white/10 hover:bg-slate-200 transition-all"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <LocalLink
            to="/contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 text-white text-sm font-medium hover:opacity-90 transition-opacity neon-glow"
          >
            {u.getStarted}
          </LocalLink>
          <button
            onClick={() => setOpen(p => !p)}
            className="md:hidden w-9 h-9 rounded-lg dark:bg-white/5 bg-slate-100 flex items-center justify-center dark:text-slate-300 text-slate-600"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass dark:bg-slate-900/95 bg-white/95 border-t dark:border-white/5 border-slate-200"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {links.map(l => (
                <li key={l.to}>
                  <LocalLink
                    to={l.to}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                      isActive(l.to)
                        ? 'text-brand-400 dark:bg-brand-500/10 bg-brand-50'
                        : 'dark:text-slate-300 text-slate-700 dark:hover:bg-white/5 hover:bg-slate-100'
                    }`}
                  >
                    {l.label}
                  </LocalLink>
                </li>
              ))}
              <li className="pt-2">
                <LocalLink to="/contact" className="block px-4 py-3 rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 text-white text-sm font-medium text-center">
                  {u.getStarted}
                </LocalLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
