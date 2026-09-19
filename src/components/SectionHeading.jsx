import { motion } from 'framer-motion'

export default function SectionHeading({ tag, title, highlight, subtitle }) {
  const usePoppins = (
    (title === 'Featured' && highlight === 'Projects') ||
    (title === 'Services Built for' && highlight === 'Modern Businesses')
  )
  const headingFont = usePoppins ? 'font-poppins' : 'font-display'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {tag && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 dark:border-brand-500/20 border-brand-200 border mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
          {tag}
        </span>
      )}
      <h2 className={`${headingFont} font-bold text-3xl sm:text-4xl lg:text-5xl dark:text-white text-slate-900 mb-4`}>
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
