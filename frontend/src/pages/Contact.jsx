import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import toast from 'react-hot-toast'
import PageWrapper from '../components/PageWrapper'
import StaticSeo from '../components/StaticSeo'
import { icons } from '../components/icons'
import { useLang } from '../hooks/useLang'

export default function Contact() {
  const { lang, c } = useLang()
  const cp = c.contactPage
  const info = cp.info
  const services = cp.services
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error(cp.toasts.required)
      return
    }
    setLoading(true)
    try {
      const res = await fetch('https://api.zahriontech.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // `service` keeps the English value the backend already knows; German leads are tagged in the message.
        body: JSON.stringify(lang === 'de' ? { ...form, message: `${form.message}\n\n— Gesendet über die deutsche Website (/de)` } : form),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
        toast.success(cp.toasts.ok)
        setForm({ name: '', email: '', service: '', message: '' })
      } else {
        toast.error(data.error || cp.toasts.fail)
      }
    } catch {
      toast.error(cp.toasts.network)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageWrapper>
      <StaticSeo pageKey="contact" />

      {/* Hero */}
      <section className="relative pt-32 pb-8 grid-pattern overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
              {cp.tag}
            </span>
            <h1 lang={lang} className="font-poppins font-black text-5xl sm:text-6xl dark:text-white text-slate-900 mb-4 [overflow-wrap:anywhere]">
              {cp.h1[0]}<span className="gradient-text">{cp.h1[1]}</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-xl mx-auto">
              {cp.sub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Info sidebar */}
            <div className="flex flex-col gap-4">
              {info.map((item, i) => {
                const InfoIcon = icons[item.icon]
                return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                    <InfoIcon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="dark:text-slate-500 text-slate-500 text-xs mb-0.5">{item.label}</div>
                    <div className="dark:text-white text-slate-900 font-medium text-sm">{item.value}</div>
                  </div>
                </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="glass rounded-2xl p-6 mt-2"
              >
                <h3 className="font-display font-semibold dark:text-white text-slate-900 mb-3 text-sm">{cp.whyTitle}</h3>
                {cp.why.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={14} className="text-brand-400 flex-shrink-0" />
                    <span className="dark:text-slate-400 text-slate-600 text-sm">{pt}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 glass rounded-2xl p-8"
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mb-6 neon-glow">
                    <CheckCircle2 size={36} className="text-white" />
                  </div>
                  <h2 className="font-display font-bold text-2xl dark:text-white text-slate-900 mb-2">{cp.sent.title}</h2>
                  <p className="dark:text-slate-400 text-slate-600 mb-6">{cp.sent.text}</p>
                  <button onClick={() => setSent(false)} className="px-5 py-2 rounded-lg dark:bg-white/5 bg-slate-100 dark:text-slate-300 text-slate-700 text-sm hover:opacity-80 transition-opacity">
                    {cp.sent.again}
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block dark:text-slate-400 text-slate-600 text-xs mb-1.5 font-medium">{cp.form.name}</label>
                      <input
                        name="name" value={form.name} onChange={onChange}
                        placeholder={cp.form.namePh}
                        className="w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-slate-100 dark:text-white text-slate-900 dark:border-white/10 border-slate-200 border text-sm placeholder:dark:text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block dark:text-slate-400 text-slate-600 text-xs mb-1.5 font-medium">{cp.form.email}</label>
                      <input
                        name="email" type="email" value={form.email} onChange={onChange}
                        placeholder={cp.form.emailPh}
                        className="w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-slate-100 dark:text-white text-slate-900 dark:border-white/10 border-slate-200 border text-sm placeholder:dark:text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block dark:text-slate-400 text-slate-600 text-xs mb-1.5 font-medium">{cp.form.service}</label>
                    <select
                      name="service" value={form.service} onChange={onChange}
                      className="w-full px-4 py-3 rounded-xl dark:bg-slate-900 bg-slate-100 dark:text-white text-slate-900 dark:border-white/10 border-slate-200 border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                    >
                      <option value="">{cp.form.servicePh}</option>
                      {services.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block dark:text-slate-400 text-slate-600 text-xs mb-1.5 font-medium">{cp.form.message}</label>
                    <textarea
                      name="message" value={form.message} onChange={onChange} rows={6}
                      placeholder={cp.form.messagePh}
                      className="w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-slate-100 dark:text-white text-slate-900 dark:border-white/10 border-slate-200 border text-sm placeholder:dark:text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit" disabled={loading}
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 neon-glow"
                  >
                    {loading ? (
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <><Send size={16} /> {cp.form.submit}</>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
