import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingCart, ArrowRight, CheckCircle2, Search, PenTool, Code2, Rocket, Store, UtensilsCrossed, Pill, Warehouse } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'

const verticals = [
  { icon: Store, title: 'Retail POS Software', desc: 'Barcode scanning, multi-location inventory sync, customer loyalty, and sales reporting for retail stores.' },
  { icon: UtensilsCrossed, title: 'Restaurant POS Software', desc: 'Table management, kitchen display integration, split billing, and online order sync for restaurants.' },
  { icon: Pill, title: 'Pharmacy POS Software', desc: 'Batch/expiry tracking, prescription records, and automated reorder alerts for pharmacies.' },
  { icon: Warehouse, title: 'Supermarket & Wholesale POS', desc: 'High-volume checkout, bulk pricing rules, supplier management, and multi-branch inventory control.' },
]

const included = [
  'Custom-built billing & checkout flow',
  'Real-time inventory & stock management',
  'Multi-location / multi-branch support',
  'Sales, tax, and profit reporting dashboards',
  'Barcode & receipt printer integration',
  'Cloud-based or on-premise deployment',
]

const process = [
  { icon: Search, title: 'Business Discovery', desc: 'We map your exact billing, inventory, and reporting workflow before designing anything.' },
  { icon: PenTool, title: 'System Design', desc: 'Database and screen flows are planned around how your staff actually work day-to-day.' },
  { icon: Code2, title: 'Development', desc: 'We build the POS system, test it against real transaction scenarios, and refine based on your feedback.' },
  { icon: Rocket, title: 'Rollout & Training', desc: 'We deploy to your location(s), train your staff, and stay available for support afterward.' },
]

const faqs = [
  { q: 'Do you build custom POS software or use an off-the-shelf template?', a: 'We build custom POS software tailored to your specific business — your product catalog, tax rules, discount structure, and reporting needs — rather than forcing you into a generic template that doesn\u2019t fit how you actually operate.' },
  { q: 'Can the POS system work across multiple store locations?', a: 'Yes. We build multi-location support with centralized inventory and sales reporting, so you can see performance across all your branches from one dashboard.' },
  { q: 'Do you build POS software for restaurants, pharmacies, and retail specifically?', a: 'Yes — each industry has different needs (table management for restaurants, batch/expiry tracking for pharmacies, barcode-heavy checkout for retail). We design the system around your specific vertical rather than a one-size-fits-all approach.' },
  { q: 'Can the POS system integrate with our existing inventory or accounting software?', a: 'In most cases, yes. We build integrations with common accounting tools and can sync inventory data with your existing systems where an API or export format is available.' },
  { q: 'How much does custom POS software development cost?', a: 'It depends on the number of locations, features (inventory, multi-branch sync, hardware integrations), and whether it\u2019s web-based or needs offline support. We provide a fixed quote after understanding your specific requirements.' },
]

export default function POSSoftwareDevelopment() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Custom POS Software Development for Retail, Restaurants & Pharmacies – ZahrionTech</title>
        <meta
          name="description"
          content="Custom POS software development for retail, restaurant, pharmacy, and supermarket businesses in the USA, UK, and Europe. Billing, inventory, and multi-location support built around how you operate."
        />
        <link rel="canonical" href="https://zahriontech.com/pos-software-development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/pos-software-development" />
        <meta property="og:title" content="Custom POS Software Development – ZahrionTech" />
        <meta property="og:description" content="POS and billing software for retail, restaurant, pharmacy, and supermarket businesses." />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'POS Software Development',
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: [
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Country', name: 'Germany' },
              { '@type': 'Continent', name: 'Europe' },
            ],
            description: 'Custom point-of-sale (POS) and billing software development for retail, restaurant, pharmacy, and supermarket businesses.',
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-orange-500/10 bg-orange-50 dark:text-orange-400 text-orange-600 dark:border-orange-500/20 border-orange-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse-slow" />
              POS & Billing Software
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Custom POS Software <span className="gradient-text">Built Around Your Business</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you run a retail store, restaurant, pharmacy, or supermarket, we build point-of-sale and
              billing systems that match your exact workflow — not a rigid template — for businesses across the
              USA, UK, and Europe.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Built for Your Industry" title="POS Software for" highlight="Every Business Type" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {verticals.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center mb-4">
                  <v.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-semibold dark:text-white text-slate-900 text-base mb-2">{v.title}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="What's Included" title="A Complete" highlight="POS System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {included.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 glass rounded-xl px-5 py-4"
              >
                <CheckCircle2 size={18} className="text-orange-400 flex-shrink-0" />
                <span className="dark:text-slate-300 text-slate-700 text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Our Process" title="From Workflow to" highlight="Working System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center mb-4 mx-auto">
                  <p.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-semibold dark:text-white text-slate-900 text-base mb-2">{p.title}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="FAQ" title="Common" highlight="Questions" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-10 neon-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-400/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-3">
                <ShoppingCart className="text-orange-400" size={30} /> Ready for a POS system that fits?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us about your business and get a free, no-obligation quote.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-medium hover:opacity-90 transition-opacity">
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
