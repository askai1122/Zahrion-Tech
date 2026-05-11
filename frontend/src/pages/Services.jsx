import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Globe, Monitor, Smartphone, Share2, UserCheck, Wrench, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    color: 'from-brand-500 to-cyan-400',
    desc: 'From landing pages to complex web applications. We build fast, SEO-friendly, accessible websites using React, Next.js, and modern backend stacks.',
    features: ['Custom React / Next.js apps', 'RESTful & GraphQL APIs', 'SEO optimization', 'CMS integration', 'Performance tuning', 'Responsive design'],
  },
  {
    icon: Monitor,
    title: 'Desktop App Development',
    color: 'from-accent-500 to-pink-500',
    desc: 'Cross-platform desktop apps for Windows, macOS, and Linux using Electron or Tauri — with native performance and beautiful UIs.',
    features: ['Electron / Tauri apps', 'Cross-platform support', 'Auto-updater', 'Offline-first', 'Native OS integration', 'Secure local storage'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    color: 'from-emerald-500 to-teal-400',
    desc: 'Native-quality iOS & Android apps with Flutter or React Native. Smooth, performant, and pixel-perfect on every device.',
    features: ['Flutter & React Native', 'App Store publishing', 'Push notifications', 'Offline mode', 'Payment integration', 'Analytics & crash reporting'],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    color: 'from-orange-500 to-yellow-400',
    desc: 'Content strategy, creative design, scheduling, and analytics management across Instagram, Facebook, LinkedIn, Twitter, and TikTok.',
    features: ['Content strategy', 'Graphic & video creation', 'Scheduling & automation', 'Community management', 'Analytics & reporting', 'Paid ads management'],
  },
  {
    icon: UserCheck,
    title: 'Personal Assistant Services',
    color: 'from-pink-500 to-rose-400',
    desc: 'Dedicated virtual assistance for busy entrepreneurs — email management, research, scheduling, data entry, and more.',
    features: ['Email & calendar management', 'Research & reports', 'Data entry', 'Customer support', 'Task management', 'Document preparation'],
  },
  {
    icon: Wrench,
    title: 'Bug Fixing & Maintenance',
    color: 'from-slate-500 to-slate-400',
    desc: 'Fast, reliable debugging and long-term maintenance for any tech stack. We diagnose, fix, and future-proof your codebase.',
    features: ['Any framework or stack', 'Performance audits', 'Security patching', 'Code refactoring', 'Dependency updates', '24/7 monitoring option'],
  },
]

export default function Services() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Services – ZahrionTech</title>
        <meta name="description" content="Explore ZahrionTech's full range of services: web development, mobile apps, desktop software, social media management, bug fixing and more." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-16 grid-pattern overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
              What We Offer
            </span>
            <h1 className="font-poppins font-black text-5xl sm:text-6xl dark:text-white text-slate-900 mb-4">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto">
              Everything you need to build, grow, and maintain your digital presence — under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-2xl p-8 flex flex-col lg:flex-row gap-8"
            >
              <div className="lg:w-1/3">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5`}>
                  <svc.icon size={26} className="text-white" />
                </div>
                <h2 className="font-display font-bold text-2xl dark:text-white text-slate-900 mb-3">{svc.title}</h2>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 mt-6 text-sm font-medium dark:text-brand-400 text-brand-600 hover:underline">
                  Get a quote <ArrowRight size={14} />
                </Link>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {svc.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 dark:bg-white/3 bg-slate-50 rounded-xl px-4 py-3">
                    <CheckCircle2 size={16} className="text-brand-400 flex-shrink-0" />
                    <span className="dark:text-black text-slate-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-10 neon-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10" />
            <div className="relative">
              <h2 className="font-poppins font-black text-3xl dark:text-white text-slate-900 mb-3">Not sure which service you need?</h2>
              <p className="dark:text-slate-400 text-slate-600 mb-6">Book a free 30-minute consultation and we'll figure it out together.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
