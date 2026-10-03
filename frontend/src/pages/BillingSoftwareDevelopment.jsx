import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Receipt, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'

const included = [
  'Recurring and one-time invoicing, automated',
  'Stripe, PayPal, or your preferred payment gateway built in',
  'Usage-based or tiered billing logic, exactly as you price it',
  'Automatic late-payment reminders and retry logic',
  'Client-facing billing portal and admin dashboard',
  'Exports clean to your accounting software',
]

const faqs = [
  { q: 'Why build custom billing software instead of using a billing platform?', a: 'Billing platforms like Chargebee or Recurly charge a percentage of revenue on top of a subscription fee, and they box you into their pricing-model rules. Custom billing software is a one-time build, has no revenue cut, and can match any pricing model you invent — tiered, usage-based, hybrid.' },
  { q: 'Can it handle usage-based or metered billing?', a: 'Yes. We build billing logic around how you actually charge, including metered usage, overage charges, tiered plans, and mixed one-time plus recurring invoices.' },
  { q: 'Which payment processors can it connect to?', a: 'Most commonly Stripe or PayPal, but we can integrate any processor with a developer API, including region-specific gateways for the UK and EU.' },
  { q: 'Will it integrate with our accounting software?', a: 'Yes, we build exports or direct integrations to common accounting tools like QuickBooks and Xero so your books stay accurate without manual re-entry.' },
  { q: 'How long does a billing system build take?', a: 'A standard recurring billing system typically takes 3-6 weeks depending on the number of pricing models and integrations. We scope this precisely on a free discovery call.' },
]

export default function BillingSoftwareDevelopment() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Billing Software Development Company – ZahrionTech</title>
        <meta name="description" content="ZahrionTech builds custom billing and invoicing software — recurring billing, usage-based pricing, and payment integration, with no revenue-share fees." />
        <link rel="canonical" href="https://zahriontech.com/billing-software-development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/billing-software-development" />
        <meta property="og:title" content="Billing Software Development Company – ZahrionTech" />
        <meta property="og:description" content="Custom recurring billing and invoicing software, built around your exact pricing model." />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Billing Software Development',
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' }],
            description: 'Custom billing and invoicing software development, including recurring billing, usage-based pricing, and payment gateway integration.',
          })}
        </script>
      </Helmet>

      <section className="relative pt-32 pb-20 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
              Billing Software Development
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Billing Software That Matches <span className="gradient-text">How You Actually Price</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              No revenue-share fees, no pricing-model restrictions. ZahrionTech builds custom recurring
              billing and invoicing systems — tiered, usage-based, or hybrid — wired directly into your
              payment processor and accounting software.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow">
                Get a Free Quote <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="What's Included" title="Billing, Built Around" highlight="Your Pricing Model" />
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
                <Receipt className="text-brand-400" size={30} /> Tired of paying a cut of your own revenue?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us how you price — we'll quote a billing system built around it, not the other way round.</p>
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
