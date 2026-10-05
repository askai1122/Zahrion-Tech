import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Search, PenTool, Code2, Rocket, Globe, Smartphone, Server, Code, ShoppingCart, LayoutGrid, Receipt, PawPrint } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import Seo from '../i18n/Seo'
import LocalLink from '../i18n/LocalLink'
import { useLang } from '../i18n/useLang'
import { servicePages } from '../i18n/content/servicePages'
import { SITE } from '../i18n/config'

const ICONS = { Globe, Smartphone, Server, Code, ShoppingCart, LayoutGrid, Receipt, PawPrint }
const STEP_ICONS = [Search, PenTool, Code2, Rocket]
const COUNTRY = { US: 'United States', GB: 'United Kingdom', DE: 'Germany' }

// Literal class names so Tailwind keeps them.
const THEMES = {
  brand: {
    glow: 'bg-brand-500/10',
    badge: 'dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200',
    dot: 'bg-brand-400', btn: 'from-brand-500 to-accent-500', check: 'text-brand-400',
    step: 'from-brand-500 to-cyan-400', ctaBg: 'from-brand-500/10 to-accent-500/10', ctaIcon: 'text-brand-400',
  },
  emerald: {
    glow: 'bg-emerald-500/10',
    badge: 'dark:bg-emerald-500/10 bg-emerald-50 dark:text-emerald-400 text-emerald-600 dark:border-emerald-500/20 border-emerald-200',
    dot: 'bg-emerald-400', btn: 'from-emerald-500 to-teal-400', check: 'text-emerald-400',
    step: 'from-emerald-500 to-teal-400', ctaBg: 'from-emerald-500/10 to-teal-400/10', ctaIcon: 'text-emerald-400',
  },
  accent: {
    glow: 'bg-accent-500/10',
    badge: 'dark:bg-accent-500/10 bg-pink-50 dark:text-accent-400 text-pink-600 dark:border-accent-500/20 border-pink-200',
    dot: 'bg-accent-400', btn: 'from-accent-500 to-pink-500', check: 'text-accent-400',
    step: 'from-accent-500 to-pink-500', ctaBg: 'from-accent-500/10 to-pink-500/10', ctaIcon: 'text-accent-400',
  },
}

export default function ServicePage({ slug }) {
  const { lang } = useLang()
  const page = servicePages[slug]
  const c = page[lang]
  const t = THEMES[page.theme]
  const Icon = ICONS[page.icon]
  const path = '/' + slug

  const areaServed = page.areas.map(a =>
    a === 'EU' ? { '@type': 'Continent', name: 'Europe' } : { '@type': 'Country', name: COUNTRY[a] }
  )

  return (
    <PageWrapper>
      <Seo path={path} title={c.title} description={c.desc} ogDescription={c.ogDesc}>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: c.serviceType,
            inLanguage: lang,
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: SITE },
            areaServed,
            description: c.schemaDesc,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: lang,
            mainEntity: c.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          })}
        </script>
      </Seo>

      <section className="relative pt-32 pb-20 grid-pattern overflow-hidden">
        <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] ${t.glow} rounded-full blur-3xl pointer-events-none`} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono ${t.badge} border mb-6`}>
              <span className={`w-1.5 h-1.5 rounded-full ${t.dot} animate-pulse-slow`} />
              {c.badge}
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              {c.h1}<span className="gradient-text">{c.h1hl}</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">{c.intro}</p>
            <div className="mt-10">
              <LocalLink to="/contact" className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r ${t.btn} text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow`}>
                {c.heroBtn} <ArrowRight size={18} />
              </LocalLink>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag={c.incl.tag} title={c.incl.title} highlight={c.incl.hl} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.included.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex items-center gap-3 glass rounded-xl px-5 py-4">
                <CheckCircle2 size={18} className={`${t.check} flex-shrink-0`} />
                <span className="dark:text-slate-300 text-slate-700 text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {c.process && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading tag={c.proc.tag} title={c.proc.title} highlight={c.proc.hl} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.process.map((p, i) => {
                const S = STEP_ICONS[i]
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass rounded-2xl p-6 text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.step} flex items-center justify-center mb-4 mx-auto`}>
                      <S size={22} className="text-white" />
                    </div>
                    <h3 className="font-display font-semibold dark:text-white text-slate-900 text-base mb-2">{p.title}</h3>
                    <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <section className={`py-20 ${c.process ? 'dark:bg-slate-900/50 bg-slate-100/50' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="FAQ" title={lang === 'de' ? 'Häufige' : 'Common'} highlight={lang === 'de' ? 'Fragen' : 'Questions'} />
          <FAQAccordion items={c.faqs} />
        </div>
      </section>

      <section className={`py-20 ${c.process ? '' : 'dark:bg-slate-900/50 bg-slate-100/50'}`}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass rounded-3xl p-10 neon-glow relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${t.ctaBg}`} />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-3">
                <Icon className={t.ctaIcon} size={30} /> {c.ctaTitle}
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">{c.ctaText}</p>
              <LocalLink to="/contact" className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${t.btn} text-white font-medium hover:opacity-90 transition-opacity`}>
                {c.ctaBtn} <ArrowRight size={16} />
              </LocalLink>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
