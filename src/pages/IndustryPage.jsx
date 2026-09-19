import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, AlertTriangle, CheckCircle2, Layers } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import Seo, { faqSchema, serviceSchema } from '../components/Seo'
import { industryBySlug, industries } from '../data/industries'
import { locations } from '../data/locations'

export default function IndustryPage() {
  const { industrySlug } = useParams()
  const ind = industryBySlug[industrySlug]
  if (!ind) return <Navigate to="/industries" replace />

  const path = `/industries/${ind.slug}`
  const others = industries.filter(i => i.slug !== ind.slug).slice(0, 8)
  const topCities = locations.slice(0, 12)

  return (
    <PageWrapper>
      <Seo
        title={ind.title}
        description={ind.desc}
        path={path}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
          { name: ind.name, path },
        ]}
        schema={[
          serviceSchema({
            name: ind.h1,
            description: ind.desc,
            path,
            areaServed: { '@type': 'Country', name: 'United States' },
          }),
          faqSchema(ind.faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <Layers size={12} /> {ind.name}
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              {ind.h1}
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {ind.desc} Built for businesses across the United States, with fixed quotes, direct
              engineer access and full source-code ownership.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold hover:opacity-90 transition-all neon-glow">
                Get a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="The Problem" title="What Usually" highlight="Brings People Here" />
          <div className="grid sm:grid-cols-2 gap-4">
            {ind.pain.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex items-start gap-3 glass rounded-xl px-5 py-4">
                <AlertTriangle size={17} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="What We Build" title="Included in a" highlight={`${ind.name} Build`} />
          <div className="grid sm:grid-cols-2 gap-4">
            {ind.build.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex items-start gap-3 glass rounded-xl px-5 py-4">
                <CheckCircle2 size={17} className="text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related capability terms — real internal linking, not a keyword dump */}
      <section className="py-16 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-semibold dark:text-white text-slate-900 text-xl mb-5 text-center">
            Related capabilities
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {ind.related.map(r => (
              <span key={r} className="px-4 py-2 rounded-lg glass text-sm dark:text-slate-300 text-slate-700 border dark:border-white/5 border-slate-200">
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="FAQ" title="Questions We Get" highlight="Most Often" />
          <FAQAccordion items={ind.faqs} />
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-semibold dark:text-white text-slate-900 text-xl mb-6">
            Available across the United States
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {topCities.map(c => (
              <Link key={c.slug} to={`/software-development-company/${c.slug}`} className="px-4 py-2 rounded-lg glass text-sm dark:text-slate-300 text-slate-700 dark:hover:text-brand-400 hover:text-brand-500 transition-colors border dark:border-white/5 border-slate-200">
                {c.city}, {c.abbr}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-semibold dark:text-white text-slate-900 text-xl mb-6">
            Other industries we build for
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {others.map(o => (
              <Link key={o.slug} to={`/industries/${o.slug}`} className="px-4 py-2 rounded-lg glass text-sm dark:text-slate-300 text-slate-700 dark:hover:text-brand-400 hover:text-brand-500 transition-colors border dark:border-white/5 border-slate-200">
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-black text-3xl sm:text-4xl dark:text-white text-slate-900 mb-4">
            Let's scope your <span className="gradient-text">{ind.name.toLowerCase()}</span> build
          </h2>
          <p className="dark:text-slate-400 text-slate-600 mb-8 leading-relaxed">
            One call, no obligation. We will tell you what it takes, what it costs, and whether an
            off-the-shelf product would serve you better than a custom build.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold hover:opacity-90 transition-all neon-glow">
            Talk to a Developer <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
