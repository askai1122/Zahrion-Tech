import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Building2, ArrowRight, CheckCircle2, Search, PenTool, Code2, Rocket, GraduationCap, HeartPulse, Hotel, Warehouse } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'

const industries = [
  { icon: GraduationCap, title: 'School Management Software', desc: 'Student records, attendance, fee management, and parent communication in one system.' },
  { icon: HeartPulse, title: 'Hospital & Clinic Management Software', desc: 'Patient records, appointment scheduling, billing, and staff management for healthcare providers.' },
  { icon: Hotel, title: 'Hotel Management Software', desc: 'Room booking, check-in/check-out, housekeeping status, and billing for hotels and guesthouses.' },
  { icon: Warehouse, title: 'Warehouse & Distribution Management', desc: 'Stock tracking, order fulfillment, and supplier coordination for warehouses and distributors.' },
]

const included = [
  'Workflow mapped to your exact operations',
  'Role-based access for staff and management',
  'Custom reports and real-time dashboards',
  'Automated notifications & reminders',
  'Data migration from your current system',
  'Training and ongoing support after launch',
]

const process = [
  { icon: Search, title: 'Operations Discovery', desc: 'We learn how your organization actually runs day-to-day before proposing a system.' },
  { icon: PenTool, title: 'System Design', desc: 'We design screens and data flows around your staff\u2019s real workflow, not a generic template.' },
  { icon: Code2, title: 'Development', desc: 'We build and test against real scenarios from your business, with regular check-ins.' },
  { icon: Rocket, title: 'Rollout & Training', desc: 'We deploy, migrate your existing data, and train your team to use the system confidently.' },
]

const faqs = [
  { q: 'Do you build custom management software for schools, hospitals, and hotels?', a: 'Yes. We build custom business management software tailored to your industry — student and fee management for schools, patient and appointment management for clinics, booking and housekeeping for hotels — rather than a generic one-size-fits-all system.' },
  { q: 'Can you migrate our data from our current system or spreadsheets?', a: 'Yes, data migration from spreadsheets or an existing (even outdated) system is part of our rollout process, so you\u2019re not starting from zero.' },
  { q: 'Is the software cloud-based or installed locally?', a: 'Either — we build cloud-based systems accessible from anywhere, or on-premise/offline-capable systems if your business needs to operate without reliable internet. We recommend the right fit based on your situation.' },
  { q: 'How much does custom business management software cost?', a: 'It depends on the number of modules (student records, billing, appointments, inventory, etc.) and how many staff/locations will use it. We provide a fixed quote after a discovery call so there are no surprises.' },
  { q: 'Do you support ongoing changes as our organization grows?', a: 'Yes, we build these systems to be modular so new features (an additional department, a new location, a new report) can be added later without a full rebuild.' },
]

export default function BusinessManagementSoftware() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Custom Business Management Software – Schools, Hospitals, Hotels – ZahrionTech</title>
        <meta
          name="description"
          content="Custom business management software for schools, hospitals, clinics, hotels, and warehouses in the USA, UK, and Europe. Built around how your organization actually operates."
        />
        <link rel="canonical" href="https://zahriontech.com/business-management-software" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/business-management-software" />
        <meta property="og:title" content="Custom Business Management Software – ZahrionTech" />
        <meta property="og:description" content="Management software for schools, hospitals, hotels, and warehouses." />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Business Management Software Development',
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: [
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Country', name: 'Germany' },
              { '@type': 'Continent', name: 'Europe' },
            ],
            description: 'Custom business management software for schools, hospitals, clinics, hotels, and warehouses/distribution businesses.',
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
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-emerald-500/10 bg-emerald-50 dark:text-emerald-400 text-emerald-600 dark:border-emerald-500/20 border-emerald-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
              Business Management Software
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Management Software <span className="gradient-text">Built for Your Organization</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Schools, hospitals, hotels, and warehouses all run differently. We build management software around
              how your organization actually operates — for clients across the USA, UK, and Europe.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Built for Your Industry" title="Management Software for" highlight="Every Organization" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industries.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mb-4">
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
          <SectionHeading tag="What's Included" title="A System That Fits" highlight="How You Work" />
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
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                <span className="dark:text-slate-300 text-slate-700 text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Our Process" title="From Operations to" highlight="Working Software" />
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mb-4 mx-auto">
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
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-400/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-3">
                <Building2 className="text-emerald-400" size={30} /> Ready to modernize your operations?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us about your organization and get a free, no-obligation quote.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-medium hover:opacity-90 transition-opacity">
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
