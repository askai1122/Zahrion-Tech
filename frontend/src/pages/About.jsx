import Seo from '../i18n/Seo'
import { useLang } from '../i18n/useLang'
import { about as aboutContent } from '../i18n/content/pages'
import { motion } from 'framer-motion'
import { Code2, Lightbulb, Rocket, Shield } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'

const valueMeta = [
  { icon: Code2, color: 'from-brand-500 to-cyan-400' },
  { icon: Lightbulb, color: 'from-accent-500 to-pink-500' },
  { icon: Rocket, color: 'from-emerald-500 to-teal-400' },
  { icon: Shield, color: 'from-orange-500 to-yellow-400' },
]

export default function About() {
  const { lang } = useLang()
  const c = aboutContent[lang]
  const values = valueMeta.map((m, i) => ({ ...m, title: c.values[i][0], desc: c.values[i][1] }))
  return (
    <PageWrapper>
      <Seo path="/about" title={c.title} description={c.desc} />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden grid-pattern">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
              {c.badge}
            </span>
            <h1 className="font-poppins font-black text-5xl sm:text-6xl dark:text-white text-slate-900 leading-tight mb-6">
              {c.h1a}<span className="gradient-text">{c.h1b}</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg leading-relaxed">
              {c.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag={c.head.tag} title={c.head.title} highlight={c.head.hl} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mx-auto mb-4`}>
                  <v.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display font-semibold dark:text-white text-slate-900 mb-2">{v.title}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
