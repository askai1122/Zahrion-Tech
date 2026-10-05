import { motion } from 'framer-motion'
import { Globe, Monitor, Smartphone, Share2, UserCheck, Wrench, CheckCircle2, ArrowRight } from 'lucide-react'
import LocalLink from '../i18n/LocalLink'
import Seo from '../i18n/Seo'
import { useLang } from '../i18n/useLang'
import { services as svcContent } from '../i18n/content/pages'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'

const meta = [
  { icon: Globe, color: 'from-brand-500 to-cyan-400', slug: '/hire-web-developer' },
  { icon: Monitor, color: 'from-accent-500 to-pink-500', slug: '/hire-software-developer' },
  { icon: Smartphone, color: 'from-emerald-500 to-teal-400', slug: '/hire-mobile-app-developer' },
  { icon: Share2, color: 'from-orange-500 to-yellow-400', slug: null },
  { icon: UserCheck, color: 'from-pink-500 to-rose-400', slug: null },
  { icon: Wrench, color: 'from-slate-500 to-slate-400', slug: '/hire-software-developer' },
]

export default function Services() {
  const { lang } = useLang()
  const c = svcContent[lang]
  const services = meta.map((m, i) => ({ ...m, ...c.items[i] }))
  return (
    <PageWrapper>
      <Seo path="/services" title={c.title} description={c.desc} ogDescription={c.ogDesc} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
              {c.badge}
            </span>
            <h1 className="font-poppins font-black text-5xl sm:text-6xl dark:text-white text-slate-900 mb-4">
              {c.h1a}<span className="gradient-text">{c.h1b}</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto">
              {c.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-2xl p-8 flex flex-col lg:flex-row gap-8"
            >
              <div className="lg:w-1/3">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5`}>
                  <svc.icon size={26} className="text-white" />
                </div>
                <h2 className="font-display font-bold text-2xl dark:text-white text-slate-900 mb-3">{svc.title}</h2>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                <div className="flex items-center gap-4 mt-6 flex-wrap">
                  {svc.slug && (
                    <LocalLink to={svc.slug} className="inline-flex items-center gap-2 text-sm font-medium dark:text-brand-400 text-brand-600 hover:underline">
                      {c.learn} <ArrowRight size={14} />
                    </LocalLink>
                  )}
                  <LocalLink to="/contact" className="inline-flex items-center gap-2 text-sm font-medium dark:text-slate-400 text-slate-600 hover:underline">
                    {c.quote} <ArrowRight size={14} />
                  </LocalLink>
                </div>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {svc.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 dark:bg-white/3 bg-slate-50 rounded-xl px-4 py-3">
                    <CheckCircle2 size={16} className="text-brand-400 flex-shrink-0" />
                    <span className="dark:text-black text-slate-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-10 neon-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3">{c.ctaTitle}</h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">{c.ctaText}</p>
              <LocalLink to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity">
                {c.ctaBtn} <ArrowRight size={16} />
              </LocalLink>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
