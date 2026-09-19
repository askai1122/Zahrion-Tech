import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import { locations } from '../data/locations'

export default function Locations() {
  const byState = locations.reduce((acc, l) => {
    (acc[l.state] = acc[l.state] || []).push(l)
    return acc
  }, {})
  const states = Object.keys(byState).sort()

  return (
    <PageWrapper>
      <Seo
        title="Software Development Company Serving the United States | ZahrionTech"
        description="ZahrionTech builds custom software, websites, mobile apps, POS, CRM and ERP systems for businesses in 50+ US metro areas. Find your city."
        path="/locations"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'US metro areas served by ZahrionTech',
          itemListElement: locations.map((l, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: `Software Development in ${l.city}, ${l.abbr}`,
            url: `https://zahriontech.com/software-development-company/${l.slug}`,
          })),
        }}
      />

      <section className="relative pt-32 pb-16 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <MapPin size={12} /> Nationwide Coverage
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Serving Businesses Across the <span className="gradient-text">United States</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              We work remotely with clients in {locations.length}+ US metro areas, with calls scheduled in
              your local business hours. Pick your city to see what we typically build there.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Locations" title="Find Your" highlight="City" />
          <div className="space-y-10">
            {states.map(state => (
              <div key={state}>
                <h2 className="font-display font-semibold dark:text-white text-slate-900 text-sm uppercase tracking-wider mb-4 border-b dark:border-white/5 border-slate-200 pb-2">
                  {state}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {byState[state].map(l => (
                    <Link key={l.slug} to={`/software-development-company/${l.slug}`} className="glass rounded-xl px-5 py-4 dark:hover:border-brand-500/30 hover:border-brand-300 border dark:border-white/5 border-slate-200 transition-all group">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display font-semibold dark:text-white text-slate-900 text-sm">
                          {l.city}, {l.abbr}
                        </span>
                        <ArrowRight size={14} className="dark:text-brand-400 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="dark:text-slate-500 text-slate-500 text-xs mt-1">{l.metro} · {l.pop}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="dark:text-slate-500 text-slate-500 text-sm text-center mt-12 max-w-2xl mx-auto leading-relaxed">
            Not listed? We work with businesses in every US state — these are simply the metros where we
            have the most experience. <Link to="/contact" className="dark:text-brand-400 text-brand-600">Get in touch</Link> wherever you are based.
          </p>
        </div>
      </section>
    </PageWrapper>
  )
}
