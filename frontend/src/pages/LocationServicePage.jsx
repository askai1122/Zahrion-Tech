import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import { locationPages } from '../data/locationPageData'

export default function LocationServicePage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '')
  const data = locationPages.find(p => p.slug === slug)

  if (!data) return null

  const { cityName, region, serviceLabel, headline, intro, included, faqs } = data

  return (
    <PageWrapper>
      <Helmet>
        <title>{serviceLabel} in {cityName}, {region} – ZahrionTech</title>
        <meta name="description" content={`ZahrionTech provides ${serviceLabel.toLowerCase()} for businesses in ${cityName}, ${region} — custom-built software, transparent pricing, full code ownership.`} />
        <link rel="canonical" href={`https://zahriontech.com/${data.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://zahriontech.com/${data.slug}`} />
        <meta property="og:title" content={`${serviceLabel} in ${cityName}, ${region} – ZahrionTech`} />
        <meta property="og:description" content={`Custom software development for businesses in ${cityName}, ${region}.`} />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: serviceLabel,
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: { '@type': 'City', name: cityName },
            description: `${serviceLabel} for businesses in ${cityName}, ${region}.`,
          })}
        </script>
      </Helmet>

      <section className="relative pt-32 pb-20 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <MapPin size={12} />
              {serviceLabel} · {cityName}, {region}
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              {headline.pre} <span className="gradient-text">{headline.highlight}</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              {intro}
            </p>
            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow">
                Talk to Our Team <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="What You Get" title="Working With" highlight="Our Team" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {included.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex items-center gap-3 glass rounded-xl px-5 py-4">
                <CheckCircle2 size={18} className="text-brand-400 flex-shrink-0" />
                <span className="dark:text-slate-300 text-slate-700 text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="FAQ" title="Common" highlight="Questions" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass rounded-3xl p-10 neon-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-3">
                <MapPin className="text-brand-400" size={30} /> Have a project in {cityName}?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us what you need built and get a free, no-obligation quote.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity">
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
