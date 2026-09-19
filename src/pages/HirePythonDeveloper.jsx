import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Terminal, ArrowRight, CheckCircle2, Search, PenTool, Code2, Rocket } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'

const included = [
  'Django & Flask web applications',
  'Python automation & scripting',
  'REST API development',
  'Data pipelines & integrations',
  'Database design (PostgreSQL, MySQL)',
  'Cloud deployment (AWS, Railway, DigitalOcean)',
]

const process = [
  { icon: Search, title: 'Discovery Call', desc: 'We understand your project, data, and what the Python codebase needs to do.' },
  { icon: PenTool, title: 'Architecture Planning', desc: 'We map out models, endpoints, and integrations before writing production code.' },
  { icon: Code2, title: 'Development', desc: 'Clean, tested Python code using Django or Flask, with regular progress updates.' },
  { icon: Rocket, title: 'Deployment & Support', desc: 'We deploy to production and stay available for scaling, monitoring, and fixes.' },
]

const faqs = [
  { q: 'What can a Python developer build for my business?', a: 'Python is used for web applications (Django/Flask), backend APIs, automation scripts that save hours of manual work, and data-driven tools. If you\u2019re a startup or small business in the USA looking to automate a process or launch a web platform, Python is usually the fastest, most maintainable choice.' },
  { q: 'How much does it cost to hire a dedicated Python developer?', a: 'US-based freelance Python rates typically range $65-$120/hour depending on specialization, but working with an agency on a fixed-scope project is usually more predictable. We quote a fixed price after understanding your requirements, so there are no hourly-rate surprises.' },
  { q: 'Do you build with Django or Flask?', a: 'Both — we pick based on your project. Django suits larger applications needing built-in admin panels and structure out of the box; Flask suits lighter, more flexible APIs and microservices. We\u2019ll recommend the right fit during the discovery call.' },
  { q: 'Can a Python developer automate our manual business processes?', a: 'Yes. Python is one of the best languages for automating repetitive tasks — report generation, data entry, file processing, scraping, and connecting tools together via APIs. Many of our US small-business clients start here before building a full application.' },
  { q: 'Do you work with startups and small businesses in the USA?', a: 'Yes, US startups and small businesses are our primary focus, alongside clients in the UK, Germany, and the rest of Europe. We accommodate US working hours for calls and keep async communication clear throughout.' },
]

export default function HirePythonDeveloper() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Hire a Python Developer in the USA | Django & Flask Experts – ZahrionTech</title>
        <meta
          name="description"
          content="Hire a dedicated Python developer for your USA-based startup or small business. Django, Flask, automation, and API development with transparent, fixed pricing."
        />
        <link rel="canonical" href="https://zahriontech.com/hire-python-developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/hire-python-developer" />
        <meta property="og:title" content="Hire a Python Developer in the USA – ZahrionTech" />
        <meta property="og:description" content="Django & Flask development, automation, and APIs for US startups and small businesses." />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Python Development',
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: [
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Country', name: 'Germany' },
              { '@type': 'Continent', name: 'Europe' },
            ],
            description: 'Python development services including Django and Flask web applications, automation, and API integrations for clients in the USA, UK, Germany, and Europe.',
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
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-cyan-500/10 bg-cyan-50 dark:text-cyan-400 text-cyan-600 dark:border-cyan-500/20 border-cyan-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-slow" />
              Python Development
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Hire a Python Developer <span className="gradient-text">for Your US Business</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              From Django and Flask web applications to automation scripts that save your team hours every week —
              our dedicated Python developers build reliable, production-ready code for startups and small
              businesses across the USA, UK, Germany, and Europe.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-brand-500 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow"
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
          <SectionHeading tag="What's Included" title="Python Expertise" highlight="Built to Scale" />
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
                <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0" />
                <span className="dark:text-slate-300 text-slate-700 text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Our Process" title="From Requirements to" highlight="Production" />
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-brand-500 flex items-center justify-center mb-4 mx-auto">
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
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-brand-500/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-3">
                <Terminal className="text-cyan-400" size={30} /> Ready to build with Python?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us about your project and get a free, no-obligation quote.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-brand-500 text-white font-medium hover:opacity-90 transition-opacity">
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
