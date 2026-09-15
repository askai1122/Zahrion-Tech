import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Server, ArrowRight, CheckCircle2, Search, PenTool, Code2, Rocket } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'

const included = [
  'REST & GraphQL API development',
  'Database design (PostgreSQL, MongoDB, MySQL)',
  'Authentication & role-based access',
  'Third-party integrations (Stripe, Twilio, etc.)',
  'Cloud deployment (AWS, Railway, DigitalOcean)',
  'Performance optimization & monitoring',
]

const process = [
  { icon: Search, title: 'Requirements Review', desc: 'We map out your data model, integrations, and scalability needs before writing code.' },
  { icon: PenTool, title: 'Architecture Planning', desc: 'We design a clean, maintainable backend architecture suited to your expected load and growth.' },
  { icon: Code2, title: 'Development', desc: 'Well-tested Node.js/Express APIs with proper error handling and documentation.' },
  { icon: Rocket, title: 'Deployment & Support', desc: 'We deploy to production and stay available for scaling, monitoring, and fixes.' },
]

const faqs = [
  { q: 'What can a Node.js developer build for my business?', a: 'Node.js is used to build the backend/API layer that powers websites, mobile apps, and dashboards — handling data, user accounts, payments, and integrations with other services. If your project needs a server behind it, that\u2019s where Node.js comes in.' },
  { q: 'How much does it cost to hire a Node.js developer?', a: 'It depends on the complexity of your backend — number of endpoints, integrations, and expected traffic. We provide a fixed quote after reviewing your requirements, so costs are clear upfront.' },
  { q: 'Can you connect the backend to our existing app or website?', a: 'Yes. We regularly integrate new backends with existing frontends, mobile apps, or third-party platforms without requiring a full rebuild.' },
  { q: 'Do you handle hosting and deployment?', a: 'Yes, we deploy to cloud platforms like AWS, Railway, or DigitalOcean and can also manage ongoing hosting and monitoring if you prefer not to handle it in-house.' },
  { q: 'Is Node.js good for scaling as our user base grows?', a: 'Yes, Node.js is well suited for handling high-concurrency workloads and scales well when the architecture is designed properly from the start \u2014 which is part of what we plan for in the architecture phase.' },
]

export default function HireNodeJsDeveloper() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Hire a Node.js Developer | Backend & API Development – ZahrionTech</title>
        <meta
          name="description"
          content="Hire an experienced Node.js developer to build a secure, scalable backend or API for your website, mobile app, or platform. Clear pricing, cloud deployment included."
        />
        <link rel="canonical" href="https://zahriontech.com/hire-nodejs-developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/hire-nodejs-developer" />
        <meta property="og:title" content="Hire a Node.js Developer – ZahrionTech" />
        <meta property="og:description" content="Scalable Node.js backend and API development, deployed and supported end-to-end." />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Node.js Backend Development',
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: 'Worldwide',
            description: 'Node.js backend, REST/GraphQL API development, and cloud deployment services.',
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
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-accent-500/10 bg-pink-50 dark:text-accent-400 text-pink-600 dark:border-accent-500/20 border-pink-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse-slow" />
              Backend Development
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Hire a Node.js Developer <span className="gradient-text">for a Backend That Scales</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Power your website, mobile app, or platform with a secure, well-architected Node.js backend.
              We build APIs, databases, and integrations that stay reliable as your user base grows.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-pink-500 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow"
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
          <SectionHeading tag="What's Included" title="A Backend Built" highlight="to Last" />
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
                <CheckCircle2 size={18} className="text-accent-400 flex-shrink-0" />
                <span className="dark:text-slate-300 text-slate-700 text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Our Process" title="From Architecture to" highlight="Production" />
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
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
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-pink-500/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-3">
                <Server className="text-accent-400" size={30} /> Ready to build your backend?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us about your project and get a free, no-obligation quote.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity">
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
