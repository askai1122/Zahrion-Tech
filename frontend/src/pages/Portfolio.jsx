import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'

const categories = ['All', 'Web App', 'Mobile App', 'Desktop App', 'Social Media']

const projects = [
  {
    title: 'FinTrack Dashboard',
    tag: 'Web App',
    desc: 'A real-time financial analytics dashboard with interactive charts, budget tracking, and multi-account management.',
    tech: ['React', 'Node.js', 'SQLite', 'Chart.js'],
    color: 'from-brand-500/25 to-cyan-500/15',
    accent: 'brand',
  },
  {
    title: 'ShopEase Mobile',
    tag: 'Mobile App',
    desc: 'A full-featured e-commerce app with cart, payments, order tracking and push notifications built with Flutter.',
    tech: ['Flutter', 'Firebase', 'Stripe', 'REST API'],
    color: 'from-emerald-500/25 to-teal-500/15',
    accent: 'emerald',
  },
  {
    title: 'StockPro Desktop',
    tag: 'Desktop App',
    desc: 'Cross-platform inventory management desktop app with barcode scanning, reports, and offline-first sync.',
    tech: ['Electron', 'React', 'SQLite', 'Node.js'],
    color: 'from-orange-500/25 to-yellow-500/15',
    accent: 'orange',
  },
  {
    title: 'BrandWave Social',
    tag: 'Social Media',
    desc: 'Complete social media rebrand and management for a lifestyle brand — 3× engagement growth in 60 days.',
    tech: ['Instagram', 'TikTok', 'Canva Pro', 'Meta Ads'],
    color: 'from-pink-500/25 to-rose-500/15',
    accent: 'pink',
  },
  {
    title: 'MediConnect Portal',
    tag: 'Web App',
    desc: 'Telemedicine web platform with video consultations, appointment booking, prescriptions, and patient records.',
    tech: ['Next.js', 'WebRTC', 'PostgreSQL', 'Tailwind'],
    color: 'from-accent-500/25 to-pink-500/15',
    accent: 'accent',
  },
  {
    title: 'DeliveryX Driver App',
    tag: 'Mobile App',
    desc: 'Gig economy driver app with real-time GPS tracking, earnings dashboard, and delivery management.',
    tech: ['React Native', 'Google Maps', 'Socket.io', 'Node.js'],
    color: 'from-cyan-500/25 to-brand-500/15',
    accent: 'cyan',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.tag === active)

  return (
    <PageWrapper>
      <Helmet>
        <title>Portfolio – ZahrionTech</title>
        <meta name="description" content="Browse ZahrionTech's portfolio of web apps, mobile apps, desktop software and social media campaigns." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-16 grid-pattern overflow-hidden">
        <div className="absolute -top-20 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
              Our Work
            </span>
            <h1 className="font-poppins font-black text-5xl sm:text-6xl dark:text-white text-slate-900 mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto">
              Real products shipped for real clients — from startups to established businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/25'
                    : 'dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 dark:hover:bg-white/10 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group glass rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Card top */}
                  <div className={`relative h-44 bg-gradient-to-br ${p.color} grid-pattern`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display font-black text-4xl dark:text-white/10 text-slate-900/10 select-none">
                        {p.title.split(' ')[0]}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono dark:bg-white/10 bg-white/60 dark:text-white text-slate-700">
                        {p.tag}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-8 h-8 rounded-lg dark:bg-white/10 bg-white/60 flex items-center justify-center dark:text-white text-slate-700 hover:scale-110 transition-transform">
                        <Github size={14} />
                      </button>
                      <button className="w-8 h-8 rounded-lg dark:bg-white/10 bg-white/60 flex items-center justify-center dark:text-white text-slate-700 hover:scale-110 transition-transform">
                        <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <h3 className="font-display font-bold dark:text-white text-slate-900 text-lg mb-2">{p.title}</h3>
                    <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map(t => (
                        <span key={t} className="px-2 py-1 rounded-md text-xs font-mono dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3">
              Want to be our next <span className="gradient-text">success story?</span>
            </h2>
            <p className="dark:text-slate-400 text-slate-600 mb-6">Let's build something great together.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity">
              Start a Project <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
