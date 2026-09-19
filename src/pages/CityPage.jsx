import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Building2, CheckCircle2, Clock, Users } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import Seo, { faqSchema, serviceSchema, SITE } from '../components/Seo'
import { locationBySlug, locations } from '../data/locations'
import { services } from '../data/services'
import { industries } from '../data/industries'

const list = arr => {
  if (arr.length === 1) return arr[0]
  return `${arr.slice(0, -1).join(', ')} and ${arr[arr.length - 1]}`
}

export default function CityPage() {
  const { citySlug } = useParams()
  const loc = locationBySlug[citySlug]
  if (!loc) return <Navigate to="/locations" replace />

  const path = `/software-development-company/${loc.slug}`
  const title = `Software Development Company in ${loc.city}, ${loc.abbr} | Custom Software | ${'ZahrionTech'}`
  const description = `Hire software developers in ${loc.city}, ${loc.state}. Custom software, web and mobile apps, POS, CRM and ERP development for ${loc.city} businesses. Transparent pricing, code you own.`

  const faqs = [
    {
      q: `Do you work with businesses based in ${loc.city}?`,
      a: `Yes. We work with clients across the ${loc.metro} metro area and the wider ${loc.state} region, from solo founders through to established multi-location operators. Projects run remotely with scheduled calls in ${loc.city} business hours, so you are never waiting overnight for an answer to a simple question.`,
    },
    {
      q: `What does custom software cost for a ${loc.city} business?`,
      a: `It depends entirely on scope, and we quote before you commit. A focused internal tool or a single-location POS usually lands in the low five figures; a multi-module platform costs more and is normally phased so the first release is earning its keep before the next one starts. You will get a written breakdown by milestone rather than a single number with nothing behind it.`,
    },
    {
      q: `Which industries in ${loc.city} do you build for?`,
      a: `The ${loc.metro} economy leans heavily on ${list(loc.econ)}, and most of our ${loc.city} work reflects that — typically ${loc.demand}. That said, the engineering is the same whatever the sector; the difference is how carefully we learn your workflow before writing code.`,
    },
    {
      q: `Will I own the code you write for my ${loc.city} business?`,
      a: `Yes, completely. You receive the full source code, the repositories, and the deployment configuration. There is no per-seat licence, no lock-in, and no scenario where walking away from us costs you your software.`,
    },
    {
      q: `Can you take over a project another developer started?`,
      a: `Yes, and it is a large share of what we do. We start with a paid code audit so you get an honest assessment of what is salvageable before deciding whether to continue the existing codebase or rebuild the weakest parts.`,
    },
    {
      q: `How do we start?`,
      a: `A free discovery call. Tell us what you are trying to build or which process is currently costing you time, and we will come back with a recommended approach, a realistic timeline and a budget range — with no obligation to proceed.`,
    },
  ]

  const nearby = locations
    .filter(l => l.slug !== loc.slug && l.state === loc.state)
    .concat(locations.filter(l => l.slug !== loc.slug && l.state !== loc.state))
    .slice(0, 6)

  const featuredIndustries = industries.slice(0, 8)

  return (
    <PageWrapper>
      <Seo
        title={title}
        description={description}
        path={path}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: `${loc.city}, ${loc.abbr}`, path },
        ]}
        schema={[
          serviceSchema({
            name: `Custom Software Development in ${loc.city}, ${loc.abbr}`,
            description,
            path,
            areaServed: {
              '@type': 'City',
              name: loc.city,
              containedInPlace: { '@type': 'State', name: loc.state },
            },
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: `ZahrionTech — Software Development for ${loc.city}`,
            url: `${SITE}${path}`,
            image: `${SITE}/zahriontech-logo.png`,
            areaServed: { '@type': 'City', name: `${loc.city}, ${loc.abbr}` },
            geo: { '@type': 'GeoCoordinates', latitude: loc.lat, longitude: loc.lng },
            priceRange: '$$',
          },
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <MapPin size={12} /> {loc.city}, {loc.abbr} · {loc.metro}
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Software Development Company in{' '}
              <span className="gradient-text">{loc.city}, {loc.abbr}</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {loc.hook} We build custom software, websites, mobile apps, POS systems and internal tools
              for businesses across the {loc.metro} area — with fixed quotes, direct access to the
              engineers doing the work, and full ownership of the code at the end.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow">
                Get a Quote for Your {loc.city} Project <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass dark:text-white text-slate-900 font-poppins font-semibold text-base border dark:border-white/10 border-slate-200">
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local context — unique per city */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag={`${loc.city} Market`} title="Software Built for the" highlight={`${loc.city} Economy`} />
          <div className="prose-none space-y-5 dark:text-slate-400 text-slate-600 leading-relaxed text-base max-w-3xl mx-auto">
            <p>
              The {loc.metro} metro is home to roughly {loc.pop} people, and its business base is concentrated
              in {list(loc.econ)}. That shapes what {loc.city} companies actually need from software —
              in practice, most of what we are asked to build here falls into {loc.demand}.
            </p>
            <p>
              A generic template site or a shrink-wrapped SaaS subscription rarely fits those workflows
              cleanly. The businesses that come to us have usually already tried one, hit a wall on a
              specific requirement, and are now paying monthly for something that solves 70% of the problem
              while staff handle the other 30% by hand. That 30% is where a custom build pays for itself.
            </p>
            <p>
              We work with clients across the metro, including teams based in {list(loc.districts)}.
              All work is delivered remotely with scheduled calls aligned to {loc.city} business hours,
              which in practice means faster turnarounds than most local agencies manage with a full
              project queue.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            {[
              { icon: Building2, label: 'Metro population', value: loc.pop },
              { icon: Clock, label: 'Working hours', value: `${loc.city} business hours` },
              { icon: Users, label: 'Client size', value: 'Solo founders to 500+ staff' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass rounded-xl px-5 py-6 text-center">
                <Icon size={20} className="text-brand-400 mx-auto mb-3" />
                <div className="font-display font-semibold dark:text-white text-slate-900 text-sm">{value}</div>
                <div className="dark:text-slate-500 text-slate-500 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Services"
            title={`What We Build for`}
            highlight={`${loc.city} Businesses`}
            subtitle={`Every service below is available to clients across ${loc.state} and the rest of the United States.`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Link to={`/${s.slug}`} className="block glass rounded-xl p-5 h-full dark:hover:border-brand-500/30 hover:border-brand-300 border dark:border-white/5 border-slate-200 transition-all">
                  <h3 className="font-display font-semibold dark:text-white text-slate-900 text-sm mb-2">
                    {s.short} in {loc.city}
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed">{s.blurb}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Industries" title="Industry Software for" highlight={`${loc.city} Companies`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {featuredIndustries.map(ind => (
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
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="FAQ" title={`Working With Us in`} highlight={loc.city} />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Nearby */}
      <section className="py-16 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-semibold dark:text-white text-slate-900 text-xl mb-6">
            We also serve nearby metros
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {nearby.map(n => (
              <Link key={n.slug} to={`/software-development-company/${n.slug}`} className="px-4 py-2 rounded-lg glass text-sm dark:text-slate-300 text-slate-700 dark:hover:text-brand-400 hover:text-brand-500 transition-colors border dark:border-white/5 border-slate-200">
                {n.city}, {n.abbr}
              </Link>
            ))}
          </div>
          <Link to="/locations" className="inline-flex items-center gap-2 mt-6 dark:text-brand-400 text-brand-600 text-sm font-medium">
            See all locations <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-black text-3xl sm:text-4xl dark:text-white text-slate-900 mb-4">
            Ready to start your <span className="gradient-text">{loc.city}</span> project?
          </h2>
          <p className="dark:text-slate-400 text-slate-600 mb-8 leading-relaxed">
            Tell us what you are trying to build. You will get a straight answer on approach, timeline and
            budget — and an honest "you do not need custom software for this" if that is the truth.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold hover:opacity-90 transition-all neon-glow">
            Talk to a Developer <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
