import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ChevronRight, PhoneCall } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import SeoHead from '../components/SeoHead'
import { absolute, staticPages } from '../i18n/routes'
import { getAiPage, aiUi } from '../data/aiCallingContent'
import NotFound from './NotFound'

// One component for every AI Calling Agent location page (country hubs + city pages).
// All text comes from src/data/aiCallingContent.js, the same source the prerender step uses.
export default function AiPlacePage() {
  const { pathname } = useLocation()
  const page = getAiPage(pathname.replace(/\/$/, ''))
  if (!page) return <NotFound />
  const { lang, kind } = page
  const t = aiUi(lang)
  const contact = staticPages.contact[lang]
  const serviceHref = lang === 'de' ? '/de/ki-telefonagent' : '/ai-calling-agent'
  const hubHref = kind === 'city' ? page.crumbs[2].path : null
  const placeName = kind === 'city' ? page.city.name : page.h1.highlight

  return (
    <PageWrapper>
      <SeoHead meta={page.meta} canonical={absolute(page.path)} lang={lang} />

      <section className="relative pt-32 pb-16 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center justify-center gap-1 text-xs dark:text-slate-500 text-slate-500">
            {page.crumbs.map((c, i) => (
              <span key={c.path} className="inline-flex items-center gap-1">
                {i > 0 && <ChevronRight size={12} />}
                {i < page.crumbs.length - 1
                  ? <Link to={c.path} className="hover:text-brand-400">{c.name}</Link>
                  : <span aria-current="page">{c.name}</span>}
              </span>
            ))}
          </nav>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <PhoneCall size={12} />
              {page.badge}
            </span>
            <h1 lang={lang} className="font-poppins font-black dark:text-white text-slate-900 leading-tight mb-6 [overflow-wrap:anywhere] [hyphens:auto] text-[1.65rem] min-[390px]:text-3xl sm:text-5xl lg:text-6xl">
              {page.h1.pre} <span className="gradient-text">{page.h1.highlight}</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">{page.intro}</p>
            <div className="mt-10">
              <Link to={contact} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow">
                {t.cta} <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading {...t.featuresHeading} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 glass rounded-xl px-5 py-4">
                <CheckCircle2 size={18} className="text-brand-400 flex-shrink-0" />
                <span className="dark:text-slate-300 text-slate-700 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          {(kind === 'city' ? page.sections.slice(1) : page.sections).map((s, i) => (
            <article key={i} className="glass rounded-2xl p-6 sm:p-8">
              <h2 lang={lang} className="font-display font-semibold text-xl dark:text-white text-slate-900 mb-3 [overflow-wrap:anywhere]">{s.h}</h2>
              <p className="dark:text-slate-400 text-slate-600 leading-relaxed">{s.p}</p>
            </article>
          ))}
        </div>
      </section>

      {kind === 'hub' && (
        <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading {...t.hubCitiesHeading} />
            <div className="flex flex-col gap-8">
              {page.groups.map(g => (
                <div key={g.region}>
                  <h2 lang={lang} className="font-display font-semibold text-lg dark:text-white text-slate-900 mb-3">{g.region}</h2>
                  <ul className="flex flex-wrap gap-2">
                    {g.cities.map(c => (
                      <li key={c.href}>
                        <Link to={c.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-lg glass text-sm dark:text-slate-200 text-slate-700 hover:text-brand-400 transition-colors">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading {...t.faqHeading} />
          <FAQAccordion items={page.faqs} />
        </div>
      </section>

      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {kind === 'city' && <SectionHeading {...t.nearbyHeading} />}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {kind === 'city' && page.nearby.map(n => (
              <Link key={n.href} to={n.href} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass dark:text-slate-200 text-slate-700 text-sm font-medium hover:text-brand-400 transition-colors">
                {n.label} <ArrowRight size={14} />
              </Link>
            ))}
            {hubHref && (
              <Link to={hubHref} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass dark:text-slate-200 text-slate-700 text-sm font-medium hover:text-brand-400 transition-colors">
                {t.hub(page.crumbs[2].name)} <ArrowRight size={14} />
              </Link>
            )}
            <Link to={serviceHref} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass dark:text-slate-200 text-slate-700 text-sm font-medium hover:text-brand-400 transition-colors">
              {t.service} <ArrowRight size={14} />
            </Link>
            <Link to={staticPages.blog[lang]} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass dark:text-slate-200 text-slate-700 text-sm font-medium hover:text-brand-400 transition-colors">
              {t.blog} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="glass rounded-3xl p-10 neon-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-3">
                <PhoneCall className="text-brand-400 flex-shrink-0" size={30} /> {t.ctaTitle(placeName)}
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">{t.ctaText}</p>
              <Link to={contact} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity">
                {t.ctaButton} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
