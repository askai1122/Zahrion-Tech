import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import SeoHead from '../components/SeoHead'
import { icons } from '../components/icons'
import { useLang } from '../hooks/useLang'
import { servicePaths, staticPages, absolute } from '../i18n/routes'
import { servicesDe } from '../data/servicePagesDe'
import { servicesEn } from '../data/servicePagesEn'

// Data-driven service page. Section markup/classes are copied from the existing service pages
// (HireSoftwareDeveloper etc.) so it looks identical to the rest of the site.
export default function ServicePage({ serviceKey }) {
  const { lang, c } = useLang()
  const data = (lang === 'de' ? servicesDe : servicesEn)[serviceKey]
  const t = c.svcPage
  const path = servicePaths[serviceKey][lang]
  const canonical = absolute(path)
  const Icon = icons[data.icon] || icons.Code
  const contact = staticPages.contact[lang]

  return (
    <PageWrapper>
      <SeoHead
        meta={data.meta}
        canonical={canonical}
        lang={lang}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
              {data.badge}
            </span>
            <h1
              lang={lang}
              className={`font-poppins font-black dark:text-white text-slate-900 leading-tight mb-6 [overflow-wrap:anywhere] ${
                lang === 'de'
                  ? '[hyphens:auto] text-[1.65rem] min-[390px]:text-3xl sm:text-5xl lg:text-6xl'
                  : 'text-4xl sm:text-5xl lg:text-6xl'
              }`}
            >
              {data.h1.pre} <span className="gradient-text">{data.h1.highlight}</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">{data.intro}</p>
            <div className="mt-10">
              <Link
                to={contact}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow"
              >
                {t.cta1} <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading {...t.featuresHeading} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 glass rounded-xl px-5 py-4"
              >
                <CheckCircle2 size={18} className="text-brand-400 flex-shrink-0" />
                <span className="dark:text-slate-300 text-slate-700 text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading {...t.benefitsHeading} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 flex items-center justify-center mb-4 mx-auto">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-semibold dark:text-white text-slate-900 text-base mb-2">{b.title}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading {...t.processHeading} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.map((p, i) => {
              const PIcon = icons[p.icon]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 flex items-center justify-center mb-4 mx-auto">
                    <PIcon size={22} className="text-white" />
                  </div>
                  <h3 className="font-display font-semibold dark:text-white text-slate-900 text-base mb-2">{p.title}</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use cases + technologies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading {...t.useCasesHeading} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.useCases.map((u, i) => (
              <div key={i} className="flex items-center gap-3 glass rounded-xl px-5 py-4">
                <CheckCircle2 size={18} className="text-brand-400 flex-shrink-0" />
                <span className="dark:text-slate-300 text-slate-700 text-sm">{u}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label={t.techHeading}>
            {data.tech.map(x => (
              <span key={x} className="px-3 py-1 rounded-full text-xs font-mono dark:bg-white/5 bg-slate-100 dark:text-slate-300 text-slate-600">
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading {...t.faqHeading} />
          <FAQAccordion items={data.faqs} />
        </div>
      </section>

      {/* Related services (internal linking) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading {...t.relatedHeading} />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {data.related.map(k => (
              <Link
                key={k}
                to={servicePaths[k][lang]}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass dark:text-slate-200 text-slate-700 text-sm font-medium hover:text-brand-400 transition-colors"
              >
                {c.serviceLabels[k]} <ArrowRight size={14} />
              </Link>
            ))}
            <Link
              to={staticPages.blog[lang]}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass dark:text-slate-200 text-slate-700 text-sm font-medium hover:text-brand-400 transition-colors"
            >
              Blog <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-10 neon-glow relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-3">
                <Icon className="text-brand-400 flex-shrink-0" size={30} /> {t.ctaTitle}
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">{t.ctaText}</p>
              <Link
                to={contact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                {t.ctaButton} <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
