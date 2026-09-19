import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Layers, ArrowRight } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import { industries } from '../data/industries'

export default function IndustriesHub() {
  return (
    <PageWrapper>
      <Seo
        title="Industry Software Development — POS, CRM, ERP, CMS & More | ZahrionTech"
        description="Custom software built for specific industries: restaurant and retail POS, pharmacy, healthcare, CRM, ERP, CMS, logistics, construction, education, hospitality and more."
        path="/industries"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries' }]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Industries served by ZahrionTech',
          itemListElement: industries.map((i, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: i.h1,
            url: `https://zahriontech.com/industries/${i.slug}`,
          })),
        }}
      />

      <section className="relative pt-32 pb-16 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <Layers size={12} /> Industry Expertise
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Software Built for <span className="gradient-text">Your Industry</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Generic software forces your business to work the way the vendor imagined. These are the
              industries where we already know the workflows, the edge cases and the regulations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Industries" title="Pick Your" highlight="Sector" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={ind.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}>
                <Link to={`/industries/${ind.slug}`} className="block glass rounded-xl p-6 h-full dark:hover:border-brand-500/30 hover:border-brand-300 border dark:border-white/5 border-slate-200 transition-all group">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="font-display font-semibold dark:text-white text-slate-900 text-base">{ind.name}</h2>
                    <ArrowRight size={15} className="dark:text-brand-400 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                  </div>
                  <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{ind.h1}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
