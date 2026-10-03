import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PawPrint, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'

const included = [
  'Online appointment booking, synced to your front-desk calendar',
  'Pet health records clients can view from their phone',
  'Automated vaccination and check-up reminders',
  'In-app prescription refill requests',
  'Push notifications for appointment confirmations',
  'Your clinic\u2019s own branding — not a shared directory app',
]

const faqs = [
  { q: 'Why build a branded app instead of using a shared pet-care app?', a: 'Shared directory apps put your clinic next to competitors and take a cut of bookings. A branded app is entirely yours — your name, your logo, your client relationship, with no referral fees.' },
  { q: 'Can clients book appointments and see their pet\u2019s records in the app?', a: 'Yes — appointment booking, vaccination history, and upcoming reminders are all visible to the pet owner, synced with your clinic\u2019s scheduling system.' },
  { q: 'Does it work for multi-vet or multi-location practices?', a: 'Yes, the app can route bookings to specific vets or locations and keep each practice\u2019s calendar and records separate.' },
  { q: 'Can we send automated reminders for vaccinations and check-ups?', a: 'Yes, automated push notifications and email reminders are a core feature — this is usually the biggest driver of repeat visits for clinics that add it.' },
  { q: 'How long does a custom veterinary clinic app take to build?', a: 'A focused booking-and-records app typically takes 6-10 weeks for iOS and Android. We scope this exactly on a free discovery call based on your clinic\u2019s workflow.' },
]

export default function VeterinaryClinicApp() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Custom Branded App for Veterinary Clinics – ZahrionTech</title>
        <meta name="description" content="ZahrionTech builds custom branded mobile apps for veterinary clinics — appointment booking, pet health records, and automated reminders, under your own name." />
        <link rel="canonical" href="https://zahriontech.com/veterinary-clinic-app-development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/veterinary-clinic-app-development" />
        <meta property="og:title" content="Custom Branded App for Veterinary Clinics – ZahrionTech" />
        <meta property="og:description" content="A branded mobile app for your veterinary practice — booking, records, and reminders." />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Veterinary Clinic App Development',
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' }],
            description: 'Custom branded mobile app development for veterinary clinics, including appointment booking, pet health records, and automated reminders.',
          })}
        </script>
      </Helmet>

      <section className="relative pt-32 pb-20 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
              Veterinary Clinic App Development
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              A Branded App for <span className="gradient-text">Your Veterinary Clinic</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Give pet owners booking, records, and reminders under your clinic's own name — not a shared
              directory app that sends clients to competitors. ZahrionTech builds custom-branded apps for
              single-location and multi-vet veterinary practices.
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
          <SectionHeading tag="What's Included" title="Built for How Clinics" highlight="Actually Run" />
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
                <PawPrint className="text-brand-400" size={30} /> Ready to bring bookings in-house?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us about your clinic — we'll scope a branded app around how your front desk actually runs.</p>
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
