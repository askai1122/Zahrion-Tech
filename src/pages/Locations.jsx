import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import { locations } from '../data/locations'
import { COUNTRY_INFO } from '../data/countries'

const COUNTRY_ORDER = ['US', 'UAE', 'UK', 'CA']

export default function Locations() {
  const byCountry = locations.reduce((acc, l) => {
    const key = l.country || 'US'
    ;(acc[key] = acc[key] || []).push(l)
    return acc
  }, {})

  return (
    <PageWrapper>
      <Seo
        title="Software Development Company — USA, UAE, UK & Canada | ZahrionTech"
        description="ZahrionTech builds custom software, websites, mobile apps, POS, CRM and ERP systems for businesses across the United States, the UAE (Dubai), the UK and Canada. Find your city."
        path="/locations"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Locations served by ZahrionTech',
          itemListElement: locations.map((l, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: `Software Development in ${l.city}`,
            url: `https://zahriontech.com/software-development-company/${l.slug}`,
          })),
        }}
      />

      <section className="relative pt-32 pb-16 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <MapPin size={12} /> Four Countries, {locations.length} Cities
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Serving Businesses in the <span className="gradient-text">USA, UAE, UK & Canada</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              We work remotely with clients across four countries, with calls scheduled in your local
              business hours. Pick your country, then your city.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center mt-10">
            {COUNTRY_ORDER.filter(k => k !== 'US').map(k => (
              <Link key={k} to={`/software-development-company/${k.toLowerCase()}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass dark:text-white text-slate-900 font-medium text-sm border dark:border-white/10 border-slate-200 dark:hover:border-brand-500/30 hover:border-brand-300 transition-all">
                {COUNTRY_INFO[k].flag} {COUNTRY_INFO[k].name} Overview <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {COUNTRY_ORDER.map(countryKey => {
            const ci = COUNTRY_INFO[countryKey]
            const cityList = byCountry[countryKey] || []
            if (!cityList.length) return null
            const byState = cityList.reduce((acc, l) => {
              (acc[l.state] = acc[l.state] || []).push(l)
              return acc
            }, {})
            const states = Object.keys(byState).sort()

            return (
              <div key={countryKey} className="mb-16">
                <SectionHeading tag={`${ci.flag} ${ci.name}`} title="Software Development in" highlight={ci.name} />
                <div className="space-y-10">
                  {states.map(state => (
                    <div key={state}>
                      <h3 className="font-display font-semibold dark:text-white text-slate-900 text-sm uppercase tracking-wider mb-4 border-b dark:border-white/5 border-slate-200 pb-2">
                        {state}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {byState[state].map(l => (
                          <Link key={l.slug} to={`/software-development-company/${l.slug}`} className="glass rounded-xl px-5 py-4 dark:hover:border-brand-500/30 hover:border-brand-300 border dark:border-white/5 border-slate-200 transition-all group">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-display font-semibold dark:text-white text-slate-900 text-sm">
                                {l.city}
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
              </div>
            )
          })}

          <p className="dark:text-slate-500 text-slate-500 text-sm text-center mt-12 max-w-2xl mx-auto leading-relaxed">
            Not listed? We take on projects well beyond these metros —
            these are simply where we have the most delivery experience.{' '}
            <Link to="/contact" className="dark:text-brand-400 text-brand-600">Get in touch</Link> wherever you are based.
          </p>
        </div>
      </section>
    </PageWrapper>
  )
}
