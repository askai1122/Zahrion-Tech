import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="flex flex-col gap-3 max-w-3xl mx-auto">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="glass rounded-2xl overflow-hidden dark:border-white/5 border-slate-200 border"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display font-semibold dark:text-white text-slate-900 text-base">
                {item.q}
              </span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 dark:text-brand-400 text-brand-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {/* Always mounted: collapsed answers must still exist in the HTML
                so crawlers and answer engines can read them. */}
            <motion.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
              aria-hidden={!isOpen}
            >
              <p className="px-6 pb-5 dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                {item.a}
              </p>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
