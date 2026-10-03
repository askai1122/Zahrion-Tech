import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingCart, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'

const included = [
  'Point-of-sale screens built around your actual checkout flow',
  'Inventory sync across multiple registers and locations',
  'Payment gateway integration (card, cash, mobile wallets)',
  'Staff accounts, permissions, and shift reporting',
  'Works offline and syncs when connection returns',
  'Full source code — no monthly licensing lock-in',
]

const faqs = [
  { q: 'Why build custom POS software instead of buying an off-the-shelf system?', a: 'Off-the-shelf POS platforms charge ongoing per-register fees and force your workflow to match their software. A custom build is a one-time development cost, fits your exact checkout and inventory process, and you own it outright — no recurring license.' },
  { q: 'Can it integrate with our existing inventory or accounting software?', a: 'Yes. We regularly connect POS systems to existing inventory databases, accounting tools like QuickBooks, and e-commerce platforms so stock and sales numbers stay in sync automatically.' },
  { q: 'Does it work for multiple store locations?', a: 'Yes, our POS builds support multi-location inventory and sales reporting from a single dashboard, with each register syncing centrally.' },
  { q: 'What happens if the internet goes down mid-sale?', a: 'We build offline-first: the register keeps taking sales locally and syncs automatically once the connection is back, so a dropped connection never stops a checkout.' },
  { q: 'How long does a custom POS build take?', a: 'A focused single-location POS typically takes 4-8 weeks depending on integrations (payment processors, inventory, loyalty programs). We scope this exactly on a free discovery call.' },
]

export default function CustomPOSSoftware() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Custom POS Software Development Company – ZahrionTech</title>
        <meta name="description" content="ZahrionTech builds custom point-of-sale software for retail, restaurants, and multi-location businesses — inventory sync, payments, and full ownership of your code." />
        <link rel="canonical" href="https://zahriontech.com/custom-pos-software-development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/custom-pos-software-development" />
        <meta property="og:title" content="Custom POS Software Development Company – ZahrionTech" />
        <meta property="og:description" content="Custom point-of-sale systems built around your checkout flow — inventory, payments, multi-location sync." />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Custom POS Software Development',
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' }],
            description: 'Custom point-of-sale software development for retail, restaurant, and multi-location businesses, including inventory sync and payment integration.',
          })}
        </script>
      </Helmet>

      <section className="relative pt-32 pb-20 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
              Custom POS Software Development
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              A Point-of-Sale System <span className="gradient-text">Built Around Your Business</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Stop paying monthly fees for POS software that almost fits. ZahrionTech builds custom point-of-sale
              systems for retail stores, restaurants, and multi-location businesses — checkout, inventory, and
              payments, all working exactly the way your team already does.
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
          <SectionHeading tag="What's Included" title="A POS System That" highlight="Fits Your Workflow" />
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
                <ShoppingCart className="text-brand-400" size={30} /> Ready to ditch monthly POS fees?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us how your checkout works today — we'll quote a system that fits it exactly.</p>
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
