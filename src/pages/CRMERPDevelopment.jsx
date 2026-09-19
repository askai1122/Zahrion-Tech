import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Layers, ArrowRight, CheckCircle2, Search, PenTool, Code2, Rocket, Users, Calendar, Receipt, Boxes } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'

const modules = [
  { icon: Users, title: 'Customer Management (CRM)', desc: 'Track leads, deals, communication history, and follow-ups in one place — no more scattered spreadsheets.' },
  { icon: Boxes, title: 'Inventory & Resource Planning (ERP)', desc: 'Real-time stock, supplier, and resource tracking connected to your sales and operations.' },
  { icon: Receipt, title: 'Accounting & Invoicing', desc: 'Automated invoicing, expense tracking, and financial reporting built into your core system.' },
  { icon: Calendar, title: 'Appointment & Booking Management', desc: 'Scheduling, reminders, and calendar sync for service-based and appointment-driven businesses.' },
]

const included = [
  'Custom CRM built around your sales process',
  'ERP modules for inventory, HR, or finance',
  'Employee & role-based access management',
  'Custom reports & business dashboards',
  'Integrations with existing tools & APIs',
  'Cloud-hosted with secure data backups',
]

const process = [
  { icon: Search, title: 'Process Mapping', desc: 'We document your actual sales, operations, or HR workflow before designing any module.' },
  { icon: PenTool, title: 'System Architecture', desc: 'We plan the data model and module structure so the system grows with your business.' },
  { icon: Code2, title: 'Development', desc: 'We build module by module, with check-ins so you can test and give feedback early.' },
  { icon: Rocket, title: 'Rollout & Support', desc: 'We deploy, train your team, and stay available for updates as your processes evolve.' },
]

const faqs = [
  { q: 'What is the difference between a CRM and an ERP system?', a: 'A CRM focuses on managing customer relationships — leads, deals, communication history. An ERP is broader, covering internal operations like inventory, HR, and finance. Many of our clients start with one and expand into the other as they grow — we design the system so that\u2019s possible without a rebuild.' },
  { q: 'Do you build custom CRM/ERP software or use existing platforms like Salesforce?', a: 'We build fully custom systems tailored to your exact workflow. This makes sense when off-the-shelf platforms like Salesforce or SAP are too expensive, too generic, or don\u2019t match how your business actually operates — which is common for small and mid-sized businesses.' },
  { q: 'Can you add employee management or accounting features to our CRM?', a: 'Yes. We build modular systems, so employee management, accounting, invoicing, or booking management can be added as your business needs grow, without disrupting what\u2019s already working.' },
  { q: 'How long does custom CRM/ERP development take?', a: 'A focused CRM module typically takes 6-10 weeks. A fuller ERP system with multiple modules (inventory, HR, accounting) can take 3-6 months depending on scope. We break the build into phases so you get usable software early rather than waiting for everything at once.' },
  { q: 'Do you support businesses in the USA, UK, and Europe?', a: 'Yes, this is one of our core service areas for clients across the United States, United Kingdom, Germany, and the rest of Europe, with flexible communication across time zones.' },
]

export default function CRMERPDevelopment() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Custom CRM & ERP Software Development – ZahrionTech</title>
        <meta
          name="description"
          content="Custom CRM and ERP software development for growing businesses in the USA, UK, and Europe. Customer management, inventory, accounting, and employee management built around your workflow."
        />
        <link rel="canonical" href="https://zahriontech.com/crm-erp-development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/crm-erp-development" />
        <meta property="og:title" content="Custom CRM & ERP Software Development – ZahrionTech" />
        <meta property="og:description" content="Custom CRM and ERP systems for customer management, inventory, and operations." />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'CRM & ERP Software Development',
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: [
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Country', name: 'Germany' },
              { '@type': 'Continent', name: 'Europe' },
            ],
            description: 'Custom CRM and ERP software development, including customer management, inventory, accounting, and employee management modules.',
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
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
              CRM & ERP Development
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Custom CRM & ERP Software <span className="gradient-text">for Growing Businesses</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Replace scattered spreadsheets and rigid off-the-shelf platforms with a CRM or ERP system built
              around how your business actually runs — for teams across the USA, UK, and Europe.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Modules We Build" title="Everything Your Operations" highlight="Need in One System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 flex items-center justify-center mb-4">
                  <m.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-semibold dark:text-white text-slate-900 text-base mb-2">{m.title}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="What's Included" title="A System Built" highlight="to Grow With You" />
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
                <CheckCircle2 size={18} className="text-brand-400 flex-shrink-0" />
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 flex items-center justify-center mb-4 mx-auto">
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
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-3">
                <Layers className="text-brand-400" size={30} /> Ready to streamline your operations?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us about your business and get a free, no-obligation quote.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity">
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
