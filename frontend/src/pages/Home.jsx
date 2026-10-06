import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, ChevronRight } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import StaticSeo from '../components/StaticSeo'
import { icons } from '../components/icons'
import { useLang, resolveHref } from '../hooks/useLang'

export default function Home() {
  const { lang, c } = useLang()
  const h = c.home
  const { stats, services, testimonials, portfolioItems } = h
  return (
    <PageWrapper>
      <StaticSeo pageKey="home" />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 grid-pattern noise">
        {/* Ambient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-brand-500/5 to-transparent rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-white/5 bg-slate-100 dark:text-slate-300 text-slate-600 dark:border-white/10 border-slate-200 border mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {h.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            lang={lang}
            className={`font-poppins font-black dark:text-white text-slate-900 leading-[1.05] mb-6 ${
              lang === 'de'
                ? '[overflow-wrap:anywhere] [hyphens:auto] text-[1.65rem] min-[390px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'
                : 'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl'
            }`}
          >
            {h.h1[0]}
            <span className="block gradient-text">{h.h1[1]}</span>
            {h.h1[2]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="dark:text-slate-400 text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {h.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to={resolveHref(lang, 'contact')}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow"
            >
              {h.primaryCta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={resolveHref(lang, 'portfolio')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl dark:bg-white/5 bg-slate-100 dark:text-slate-200 text-slate-700 font-semibold text-base dark:hover:bg-white/10 hover:bg-slate-200 dark:border-white/10 border-slate-200 border transition-all"
            >
              {h.secondaryCta}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-20 max-w-3xl mx-auto"
          >
            {stats.map((s, i) => (
              <div key={i} className="glass rounded-xl p-4">
                <div className="font-display font-black text-2xl sm:text-3xl gradient-text">{s.value}</div>
                <div className="dark:text-slate-400 text-slate-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <div className="w-px h-12 bg-gradient-to-b from-brand-400 to-transparent" />
        </motion.div>
      </section>

      {/* ── Services Overview ────────────────────────────── */}
      <section className="py-24 relative dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading {...h.servicesHeading} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const SvcIcon = icons[svc.icon]
              const href = resolveHref(lang, svc.to)
              const card = (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group glass rounded-2xl p-6 dark:hover:border-brand-500/30 hover:border-brand-300 transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <SvcIcon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-semibold dark:text-white text-slate-900 text-lg mb-2">{svc.label}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                <div className="flex items-center gap-1 mt-4 dark:text-brand-400 text-brand-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {h.learnMore} <ChevronRight size={14} />
                </div>
              </motion.div>
              )
              return href ? (
                <Link key={i} to={href} className="block">{card}</Link>
              ) : card
            })}
          </div>
          <div className="text-center mt-12">
            <Link to={resolveHref(lang, 'services')} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl dark:bg-white/5 bg-slate-200 dark:text-slate-300 text-slate-700 font-medium dark:hover:bg-white/10 hover:bg-slate-300 transition-all text-sm">
              {h.viewAll} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading {...h.portfolioHeading} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative rounded-2xl bg-gradient-to-br ${p.color} dark:border-white/5 border-slate-200 border overflow-hidden cursor-pointer`}
                style={{ minHeight: 220 }}
              >
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="relative p-8 h-full flex flex-col justify-between">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono dark:bg-white/10 bg-white/60 dark:text-white text-slate-700">
                    {p.tag}
                  </span>
                  <div>
                    <h3 className="font-display font-bold dark:text-white text-slate-900 text-xl mb-2">{p.title}</h3>
                    <div className="flex items-center gap-1 dark:text-brand-300 text-brand-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {h.viewCase} <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to={resolveHref(lang, 'portfolio')} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity text-sm">
              {h.seeAll} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-24 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading {...h.testimonialsHeading} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-display font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-medium dark:text-white text-slate-900 text-sm">{t.name}</div>
                    <div className="dark:text-slate-500 text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass rounded-3xl p-12 overflow-hidden neon-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-poppins font-black text-4xl sm:text-5xl dark:text-white text-slate-900 mb-4">
                {h.cta.pre}<span className="gradient-text">{h.cta.highlight}</span>
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-8 text-lg">
                {h.cta.text}
              </p>
              <Link
                to={resolveHref(lang, 'contact')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold text-base hover:opacity-90 transition-all neon-glow"
              >
                {h.cta.button} <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
