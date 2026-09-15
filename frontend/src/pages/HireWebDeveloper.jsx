import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, ArrowRight, CheckCircle2, Search, PenTool, Code2, Rocket } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'

const included = [
  'Custom website design (no templates)',
  'React / Next.js development',
  'SEO-friendly, fast-loading pages',
  'Mobile-responsive on every device',
  'CMS / admin dashboard if needed',
  'Ongoing support after launch',
]

const process = [
  { icon: Search, title: 'Discovery Call', desc: 'We learn about your business, goals, and what your website needs to achieve.' },
  { icon: PenTool, title: 'Design & Planning', desc: 'Wireframes and UI design tailored to your brand, approved before we write a line of code.' },
  { icon: Code2, title: 'Development', desc: 'Clean, scalable code using modern frameworks — with regular progress updates.' },
  { icon: Rocket, title: 'Launch & Support', desc: 'We deploy your site, test everything, and stay available for updates and fixes.' },
]

const faqs = [
  { q: 'How much does it cost to hire a web developer?', a: 'Pricing depends on scope — a simple business website differs greatly from a custom web application with logins, dashboards, or payments. We provide a fixed quote after a free discovery call, so you know the full cost upfront before committing.' },
  { q: 'How long does it take to build a website?', a: 'A standard business website typically takes 2-4 weeks. More complex web applications with custom features can take 6-12 weeks. We give you a realistic timeline before starting so there are no surprises.' },
  { q: 'Do you build websites that rank on Google?', a: 'Yes. Every website we build is structured for SEO from day one — clean semantic HTML, fast load times, mobile optimization, and proper meta tags — so your site has a real chance to rank, not just look good.' },
  { q: 'Can you redesign or fix my existing website?', a: 'Yes, we take on redesigns, migrations, and bug fixes for existing sites in addition to building new ones from scratch.' },
  { q: 'What technologies do you use?', a: 'Primarily React and Next.js on the frontend, with Node.js, Express, or other backend stacks depending on your needs — chosen based on what fits your project best, not a one-size-fits-all template.' },
]

export default function HireWebDeveloper() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Hire a Web Developer | Custom Website Development – ZahrionTech</title>
        <meta
          name="description"
          content="Hire an experienced web developer to build a fast, custom, SEO-optimized website or web application. Transparent pricing, modern tech stack, ongoing support."
        />
        <link rel="canonical" href="https://zahriontech.com/hire-web-developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/hire-web-developer" />
        <meta property="og:title" content="Hire a Web Developer – ZahrionTech" />
        <meta property="og:description" content="Custom website & web application development. Fast, SEO-friendly, built to scale." />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Web Development',
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: 'Worldwide',
            description: 'Custom web development services including React and Next.js websites and web applications.',
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
              Web Development
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              Hire a Web Developer <span className="gradient-text">Who Builds for Results</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you need a business website, an e-commerce store, or a custom web application,
              ZahrionTech's web developers build fast, SEO-friendly, mobile-ready sites using React and Next.js —
              designed to actually convert visitors into customers.
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

      {/* What's included */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="What's Included" title="Everything Your Website" highlight="Needs to Perform" />
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
          <SectionHeading tag="Our Process" title="From Idea to" highlight="Live Website" />
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
                <Globe className="text-brand-400" size={30} /> Ready to build your website?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us about your project and get a free, no-obligation quote.</p>
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
