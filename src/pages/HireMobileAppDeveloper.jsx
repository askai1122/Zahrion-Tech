import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Smartphone, ArrowRight, CheckCircle2, Search, PenTool, Code2, Rocket } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'

const included = [
  'iOS & Android apps (Flutter / React Native)',
  'Pixel-perfect, native-feeling UI',
  'App Store & Play Store publishing',
  'Push notifications & offline mode',
  'Payment gateway integration',
  'Analytics & crash reporting setup',
]

const process = [
  { icon: Search, title: 'Discovery Call', desc: 'We understand your app idea, target users, and must-have features.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'Clickable prototypes so you can see and approve the app before development starts.' },
  { icon: Code2, title: 'Development', desc: 'Cross-platform build with Flutter or React Native for iOS and Android from one codebase.' },
  { icon: Rocket, title: 'Launch & Support', desc: 'We handle App Store / Play Store submission and provide post-launch support.' },
]

const faqs = [
  { q: 'How much does it cost to hire a mobile app developer?', a: 'Cost depends on app complexity — a simple MVP with a few screens costs far less than an app with real-time features, payments, or backend integrations. We give you a fixed quote after understanding your requirements, with no hidden fees.' },
  { q: 'Do you build for both iOS and Android?', a: 'Yes. We typically use Flutter or React Native, which lets us build for both platforms from a single codebase — saving you time and cost compared to building two separate native apps.' },
  { q: 'How long does it take to build a mobile app?', a: 'A simple MVP app usually takes 4-8 weeks. Apps with more complex features (payments, real-time chat, backend dashboards) can take 10-16 weeks. You get a clear timeline before we start.' },
  { q: 'Will you publish the app to the App Store and Play Store for me?', a: 'Yes, publishing and store submission (including handling review feedback) is part of our mobile app development service.' },
  { q: 'Can you add a backend/admin dashboard to manage the app?', a: 'Yes. We build the backend API and an admin dashboard alongside the mobile app when needed, so you can manage users, content, and data from one place.' },
  { q: 'Do you work with clients in the USA, UK, and Europe?', a: 'Yes, we regularly build apps for clients across the United States, United Kingdom, Germany, and the rest of Europe, with overlapping call hours and clear async updates throughout the project.' },
]

export default function HireMobileAppDeveloper() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Hire a Mobile App Developer in USA, UK & Europe – ZahrionTech</title>
        <meta
          name="description"
          content="Hire a mobile app developer for your business in the USA, UK, Germany, or Europe. Build your iOS and Android app with Flutter or React Native, App Store publishing included."
        />
        <link rel="canonical" href="https://zahriontech.com/hire-mobile-app-developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/hire-mobile-app-developer" />
        <meta property="og:title" content="Hire a Mobile App Developer in USA, UK & Europe – ZahrionTech" />
        <meta property="og:description" content="iOS & Android app development for USA, UK, and European businesses." />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Mobile App Development',
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: [
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Country', name: 'Germany' },
              { '@type': 'Continent', name: 'Europe' },
            ],
            description: 'iOS and Android mobile app development using Flutter and React Native for clients in the USA, UK, Germany, and Europe.',
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
              Mobile App Development
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Hire a Mobile App Developer <span className="gradient-text">in the USA, UK & Europe</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Serving businesses in the United States, UK, Germany, and across Europe — from MVP to full-featured app,
              ZahrionTech's mobile developers build smooth, native-quality iOS and Android apps with Flutter and
              React Native, and take care of App Store publishing too.
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

      {/* What's included */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="What's Included" title="Everything Your App" highlight="Needs to Launch" />
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
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Our Process" title="From Idea to" highlight="App Store" />
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
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="FAQ" title="Common" highlight="Questions" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-10 neon-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-400/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-3">
                <Smartphone className="text-emerald-400" size={30} /> Ready to build your app?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us about your app idea and get a free, no-obligation quote.</p>
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
