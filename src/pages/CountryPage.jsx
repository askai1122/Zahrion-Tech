import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import Seo, { faqSchema, serviceSchema, SITE } from '../components/Seo'
import { locations } from '../data/locations'
import { industries } from '../data/industries'
import { services } from '../data/services'
import { COUNTRY_INFO } from '../data/countries'

const COPY = {
  UAE: {
    heading: 'Software Development Company in the UAE',
    keyword: 'software development company UAE',
    intro:
      'Custom software, web and mobile apps, POS systems, CRM and ERP builds for businesses across Dubai, Abu Dhabi, Sharjah and every other emirate — delivered remotely with calls scheduled in UAE business hours.',
    marketNote:
      'The UAE runs on fast-moving trade, real estate and hospitality businesses, many of them digital-first from the day they get their trade licence. That speed cuts both ways: off-the-shelf software that almost fits gets adopted quickly, and just as quickly gets outgrown. We build the version that does not need replacing in eighteen months.',
    faqs: [
      { q: 'Do you build software for mainland and free zone companies?', a: 'Yes. Mainland businesses and free zone entities (DIFC, ADGM, JAFZA, RAKEZ, Shams and others) have different licensing and, occasionally, different data-residency expectations. We ask about your setup during scoping rather than assuming one model fits all.' },
      { q: 'Do you charge in AED?', a: 'Yes, we quote in AED for UAE clients, with the option to invoice in USD if that suits your accounting setup better. Quotes account for 5% UAE VAT where it applies.' },
      { q: 'Can you build bilingual Arabic/English software?', a: 'Yes. Right-to-left Arabic interfaces alongside English are a standard requirement for UAE-facing software, and we design the UI to support both from the start rather than bolting on translation later.' },
      { q: 'Which UAE industries do you have the most experience in?', a: 'Trade and e-commerce, real estate, hospitality and restaurants, retail, and logistics — a reflection of what the UAE economy is actually built on. See our industry pages below for what a build typically includes in each.' },
      { q: 'Do you work with businesses outside Dubai and Abu Dhabi?', a: 'Yes — Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain are all covered. Distance within the UAE has no bearing on how we deliver: everything is remote, with calls in your business hours.' },
    ],
  },
  CA: {
    heading: 'Software Development Company in Canada',
    keyword: 'software development company Canada',
    intro:
      'Custom software, web and mobile apps, POS systems, CRM and ERP builds for businesses across Toronto, Vancouver, Montreal, Calgary, Ottawa and every province in between — delivered remotely with calls scheduled in your local business hours.',
    marketNote:
      'Canadian buyers increasingly research software vendors online before ever booking a call, comparing reviews and checking for local relevance — often through AI tools as much as Google itself. Whether you need POS software in Toronto, an ERP build in Ontario, or a bilingual platform for Quebec, the underlying requirement is the same: software built around how your business actually runs, not around what a template assumes.',
    faqs: [
      { q: 'Do you build bilingual French/English software for Quebec?', a: 'Yes. For Quebec-facing products we design for French first, English second, not just a translated layer on top — and we account for Quebec\u2019s Law 25 privacy requirements where relevant.' },
      { q: 'Do you charge in CAD?', a: 'Yes, we quote in CAD for Canadian clients. Quotes account for GST/HST where it applies, and we are upfront about how provincial tax rules affect the final number.' },
      { q: 'How do you handle PIPEDA and data residency?', a: 'We design with PIPEDA\u2019s consent and access requirements in mind by default, and we can host data within Canada where your industry or your own policy requires it — tell us early and it shapes the architecture from day one.' },
      { q: 'Which Canadian industries do you have the most experience in?', a: 'Retail and restaurant POS, logistics and warehouse software, financial and insurance back-office tools, and healthcare/clinic systems — see the industry pages below for what a typical build looks like in each.' },
      { q: 'Do you only work with businesses in Toronto and Vancouver?', a: 'No — we work across every province, from Halifax to Victoria. Everything is delivered remotely with calls scheduled in your time zone, so being outside a major hub changes nothing about how the project runs.' },
    ],
  },
}

export default function CountryPage({ country }) {
  const ci = COUNTRY_INFO[country]
  const copy = COPY[country]
  const cities = locations.filter(l => (l.country || 'US') === country)
  const slug = country === 'UAE' ? 'uae' : 'canada'
  const path = `/software-development-company/${slug}`
  const title = `${copy.heading} | Custom Software, POS, CRM & ERP | ZahrionTech`
  const description = `ZahrionTech builds custom software for businesses across ${ci.name} — web and mobile apps, POS systems, CRM, ERP and business management software. ${cities.length} cities served.`

  return (
    <PageWrapper>
      <Seo
        title={title}
        description={description}
        path={path}
        hreflang={ci.hreflang}
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: ci.name, path }]}
        schema={[
          serviceSchema({
            name: copy.heading,
            description,
            path,
            areaServed: { '@type': 'Country', name: ci.name },
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: `Cities served in ${ci.name}`,
            itemListElement: cities.map((c, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: `Software Development in ${c.city}`,
              url: `${SITE}/software-development-company/${c.slug}`,
            })),
          },
          faqSchema(copy.faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              {ci.flag} {ci.name} · {cities.length} cities served
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Software Development Company in <span className="gradient-text">{ci.name}</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {copy.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow">
                Get a Quote in {ci.currency} <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass dark:text-white text-slate-900 font-poppins font-semibold text-base border dark:border-white/10 border-slate-200">
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market note */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag={`${ci.demonym} Market`} title="Built for How" highlight={`${ci.name} Does Business`} />
          <p className="dark:text-slate-400 text-slate-600 leading-relaxed text-base text-center">{copy.marketNote}</p>
          <div className="flex items-center justify-center gap-2 mt-8 dark:text-slate-500 text-slate-500 text-sm">
            <ShieldCheck size={16} className="text-brand-400" />
            Built with {ci.complianceNote}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Cities" title="Where We Work in" highlight={ci.name} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cities.map(c => (
              <Link key={c.slug} to={`/software-development-company/${c.slug}`} className="glass rounded-xl px-5 py-4 dark:hover:border-brand-500/30 hover:border-brand-300 border dark:border-white/5 border-slate-200 transition-all group">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display font-semibold dark:text-white text-slate-900 text-sm flex items-center gap-2">
                    <MapPin size={13} className="text-brand-400" /> {c.city}
                  </span>
                  <ArrowRight size={14} className="dark:text-brand-400 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="dark:text-slate-500 text-slate-500 text-xs mt-1 pl-5">{c.state} · {c.pop}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Services" title="What We Build for" highlight={`${ci.demonym} Clients`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(s => (
              <Link key={s.slug} to={`/${s.slug}`} className="block glass rounded-xl p-5 h-full dark:hover:border-brand-500/30 hover:border-brand-300 border dark:border-white/5 border-slate-200 transition-all">
                <h2 className="font-display font-semibold dark:text-white text-slate-900 text-sm mb-2">{s.short}</h2>
                <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed">{s.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Industries" title="Industry Software for" highlight={`${ci.name}`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {industries.slice(0, 12).map(ind => (
              <Link key={ind.slug} to={`/industries/${ind.slug}`} className="flex items-center gap-2 glass rounded-xl px-4 py-3 dark:hover:border-brand-500/30 hover:border-brand-300 border dark:border-white/5 border-slate-200 transition-all">
                <CheckCircle2 size={15} className="text-brand-400 flex-shrink-0" />
                <span className="dark:text-slate-300 text-slate-700 text-sm">{ind.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/industries" className="inline-flex items-center gap-2 dark:text-brand-400 text-brand-600 text-sm font-medium">
              View all industries we build for <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="FAQ" title={`Working With Us in`} highlight={ci.name} />
          <FAQAccordion items={copy.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-black text-3xl sm:text-4xl dark:text-white text-slate-900 mb-4">
            Ready to start your <span className="gradient-text">{ci.name}</span> project?
          </h2>
          <p className="dark:text-slate-400 text-slate-600 mb-8 leading-relaxed">
            Tell us what you are trying to build. You will get a straight answer on approach, timeline and
            a quote in {ci.currency} — no obligation to proceed.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold hover:opacity-90 transition-all neon-glow">
            Talk to a Developer <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
