import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code, ArrowRight, CheckCircle2, Search, PenTool, Code2, Rocket } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'

const included = [
  'Dedicated developer(s) for your project',
  'Web, mobile, or desktop software',
  'Direct communication, no middlemen',
  'Fixed-price or milestone-based billing',
  'Code you fully own, no lock-in',
  'Post-launch maintenance available',
]

const process = [
  { icon: Search, title: 'Tell Us What You Need', desc: 'Share your project — a new build, an existing codebase, or just an idea to shape.' },
  { icon: PenTool, title: 'Scope & Quote', desc: 'We break down the work into clear milestones with a transparent, fixed quote.' },
  { icon: Code2, title: 'Build', desc: 'Our engineers get to work, with regular check-ins so you always know where things stand.' },
  { icon: Rocket, title: 'Deliver & Support', desc: 'You get working software, full source code, and ongoing support if you need it.' },
]

const faqs = [
  { q: 'I need a software developer — where do I start?', a: 'Start with a free discovery call. Tell us what you\u2019re trying to build (or what problem you\u2019re solving), and we\u2019ll recommend the right approach, technology, and a realistic budget/timeline before any commitment.' },
  { q: 'What kind of software engineer do I need?', a: 'It depends on your project: a website needs a web developer, an app needs a mobile developer, and most modern projects also need a backend/API developer. If you\u2019re not sure, tell us your goal and we\u2019ll tell you which skillset applies — you don\u2019t need to figure this out yourself.' },
  { q: 'Do you work with startups and small businesses, or only large companies?', a: 'Both. We work with solo founders building an MVP, small businesses that need a working tool, and larger teams that need extra development capacity.' },
  { q: 'Will I own the code after the project is done?', a: 'Yes. You receive full ownership of the source code and all deliverables — there is no ongoing lock-in to our team.' },
  { q: 'Can you take over or fix an existing project another developer started?', a: 'Yes, we regularly step into existing codebases to fix bugs, finish incomplete features, or take over long-term maintenance.' },
  { q: 'Do you work with clients in the USA, UK, and Europe?', a: 'Yes, we work with clients across the United States, United Kingdom, Germany, and the rest of Europe as our primary markets, with overlapping call hours and clear async communication throughout your project.' },
]

export default function HireSoftwareDeveloper() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Hire a Software Developer in USA, UK & Europe – Top Rated Agency – ZahrionTech</title>
        <meta
          name="description"
          content="Need a software developer or software engineer for your startup or small business in the USA, UK, Germany, or Europe? ZahrionTech is a top rated, affordable custom software development agency with transparent pricing."
        />
        <link rel="canonical" href="https://zahriontech.com/hire-software-developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/hire-software-developer" />
        <meta property="og:title" content="Hire a Software Developer in USA, UK & Europe – ZahrionTech" />
        <meta property="og:description" content="Custom software development for USA, UK, and European startups and businesses." />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Custom Software Development',
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: [
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Country', name: 'Germany' },
              { '@type': 'Continent', name: 'Europe' },
            ],
            description: 'Custom software development services covering web, mobile, desktop, and backend engineering for clients in the USA, UK, Germany, and Europe.',
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
              Custom Software Development
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Need a Software Developer <span className="gradient-text">in the USA, UK, or Europe?</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Whatever you're building — a website, mobile app, internal tool, or full software platform —
              ZahrionTech's engineers turn your idea into working software for clients across the United States,
              UK, Germany, and Europe, with transparent pricing and no lock-in.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-poppins font-semibold text-base hover:opacity-90 transition-all neon-glow"
              >
                Talk to a Developer <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="What You Get" title="Working With" highlight="Our Engineers" />
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
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Our Process" title="Simple, Transparent" highlight="From Day One" />
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
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-3">
                <Code className="text-brand-400" size={30} /> Have a project in mind?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us what you need built and get a free, no-obligation quote.</p>
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
