import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import { useLang, resolveHref } from '../hooks/useLang'
import { staticPages } from '../i18n/routes'

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: 'https://www.instagram.com/zahriontech/' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/116019231' },
  { icon: Mail, href: 'mailto:hello@zahriontech.com' },
]

export default function Footer() {
  const { lang, c } = useLang()
  const f = c.footer
  return (
    <footer className="relative dark:bg-slate-900 bg-slate-100 border-t dark:border-white/5 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to={staticPages.home[lang]} className="flex items-center mb-4">
              <img
                src="/zahriontech-logo.png"
                alt="ZahrionTech"
                className="h-14 w-auto max-w-[220px] object-contain"
              />
            </Link>
            <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed max-w-xs">
              {f.tagline}
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href }) => (
                <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="w-9 h-9 rounded-lg dark:bg-white/5 bg-slate-200 flex items-center justify-center dark:text-slate-400 text-slate-600 dark:hover:bg-brand-500/20 hover:bg-brand-50 dark:hover:text-brand-400 hover:text-brand-500 transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {f.groups.map(({ title, items }) => (
            <div key={title}>
              <h4 className="font-display font-semibold dark:text-white text-slate-900 mb-4 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="flex flex-col gap-2">
                {items.map(([key, label]) => (
                  <li key={label}>
                    <Link to={resolveHref(lang, key)} className="dark:text-slate-400 text-slate-600 text-sm dark:hover:text-brand-400 hover:text-brand-500 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t dark:border-white/5 border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="dark:text-slate-500 text-slate-500 text-sm">
            © {new Date().getFullYear()} ZahrionTech. {f.rights}
          </p>
        
        </div>
      </div>
    </footer>
  )
}
