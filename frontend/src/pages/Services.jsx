import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import StaticSeo from '../components/StaticSeo'
import { icons } from '../components/icons'
import { useLang, resolveHref } from '../hooks/useLang'

export default function Services() {
  const { lang, c } = useLang()
  const sp = c.servicesPage
  const contactTo = resolveHref(lang, 'contact')
  return (
    <PageWrapper>
      <StaticSeo pageKey="services" />

      {/* Hero */}
      <section className="relative pt-32 pb-16 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
              {sp.tag}
            </span>
            <h1 lang={lang} className="font-poppins font-black text-5xl sm:text-6xl dark:text-white text-slate-900 mb-4 [overflow-wrap:anywhere]">
              {sp.h1[0]}<span className="gradient-text">{sp.h1[1]}</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto">
              {sp.sub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          {sp.cards.map((svc, i) => {
            const SvcIcon = icons[svc.icon]
            const slug = resolveHref(lang, svc.to)
            return (
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
                  <SvcIcon size={26} className="text-white" />
                </div>
                <h2 className="font-display font-bold text-2xl dark:text-white text-slate-900 mb-3">{svc.title}</h2>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                <div className="flex items-center gap-4 mt-6 flex-wrap">
                  {slug && (
                    <Link to={slug} className="inline-flex items-center gap-2 text-sm font-medium dark:text-brand-400 text-brand-600 hover:underline">
                      {sp.learnMore} <ArrowRight size={14} />
                    </Link>
                  )}
                  <Link to={contactTo} className="inline-flex items-center gap-2 text-sm font-medium dark:text-slate-400 text-slate-600 hover:underline">
                    {sp.quote} <ArrowRight size={14} />
                  </Link>
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
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-10 neon-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3">{sp.cta.title}</h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">{sp.cta.text}</p>
              <Link to={contactTo} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity">
                {sp.cta.button} <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
