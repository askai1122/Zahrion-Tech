import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LayoutGrid, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'

const included = [
  'Custom content types built for what you actually publish',
  'Role-based editor accounts for your team',
  'No per-plugin or per-seat subscription fees',
  'Headless option — feed content to web, mobile, and apps from one place',
  'Built-in SEO fields, redirects, and sitemap generation',
  'You own the code and the database, fully portable',
]

const faqs = [
  { q: 'Why build a custom CMS instead of using WordPress or Webflow?', a: 'Off-the-shelf CMS platforms are great for generic blogs, but they get slow and plugin-heavy once your content model is specific — product catalogs, bookings, multi-brand sites. A custom CMS gives you exactly the editing experience your team needs, with no plugin conflicts or renewal fees.' },
  { q: 'Can our non-technical team actually use it?', a: 'Yes — that\u2019s the main design goal. We build the editor interface around how your content team actually works, so publishing a page or product takes a few clicks, not a developer.' },
  { q: 'What is a headless CMS and do we need one?', a: 'A headless CMS stores and manages your content separately from how it\u2019s displayed, so the same content can power your website, mobile app, and any other screen at once. If you only have one website, a traditional CMS is usually simpler and cheaper to build.' },
  { q: 'Can you migrate our existing content from WordPress or another CMS?', a: 'Yes, we handle content migration as part of the build so you don\u2019t lose existing pages, posts, or SEO rankings in the move.' },
  { q: 'How long does a custom CMS build take?', a: 'A focused CMS for a single site typically takes 3-6 weeks. More complex multi-brand or headless setups take longer — we\u2019ll scope it exactly on a free call.' },
]

export default function CustomCMSDevelopment() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Custom CMS Development Company – ZahrionTech</title>
        <meta name="description" content="ZahrionTech is a custom CMS development company building content management systems shaped around your exact content and team — no plugin bloat, no licensing fees." />
        <link rel="canonical" href="https://zahriontech.com/custom-cms-development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/custom-cms-development" />
        <meta property="og:title" content="Custom CMS Development Company – ZahrionTech" />
        <meta property="og:description" content="A content management system built around your content, your team, and your workflow." />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Custom CMS Development',
            provider: { '@type': 'ProfessionalService', name: 'ZahrionTech', url: 'https://zahriontech.com' },
            areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' }],
            description: 'Custom content management system development, including headless CMS builds, tailored to specific content models and editorial workflows.',
          })}
        </script>
      </Helmet>

      <section className="relative pt-32 pb-20 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
              Custom CMS Development
            </span>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              A CMS Built for <span className="gradient-text">What You Actually Publish</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              When WordPress needs twelve plugins to do what you need, it's time for something built to fit.
              ZahrionTech builds custom content management systems — traditional or headless — around your
              exact content types, editorial team, and publishing workflow.
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
          <SectionHeading tag="What's Included" title="Content Management," highlight="Shaped Around You" />
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
                <LayoutGrid className="text-brand-400" size={30} /> Outgrown your current CMS?
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Tell us what you publish and how your team works — we'll scope a CMS that fits it.</p>
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
