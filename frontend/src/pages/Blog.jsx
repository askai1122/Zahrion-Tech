import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeading from '../components/SectionHeading'
import { posts } from '../data/blogData'

export default function Blog() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Blog – ZahrionTech</title>
        <meta name="description" content="Practical breakdowns on custom software, CMS, POS systems, and billing software — costs, trade-offs, and when off-the-shelf stops working." />
        <link rel="canonical" href="https://zahriontech.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahriontech.com/blog" />
        <meta property="og:title" content="Blog – ZahrionTech" />
      </Helmet>

      <section className="relative pt-32 pb-20 grid-pattern overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-poppins font-black text-4xl sm:text-5xl dark:text-white text-slate-900 leading-tight mb-4">
              From the <span className="gradient-text">ZahrionTech Blog</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg max-w-xl mx-auto">
              Straight answers on cost, trade-offs, and when custom software is actually worth it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5">
            {posts.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Link to={`/blog/${post.slug}`} className="block glass rounded-2xl p-7 hover:bg-white/5 transition-colors group">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 mb-4">
                    {post.tag}
                  </span>
                  <h2 className="font-display font-semibold text-xl sm:text-2xl dark:text-white text-slate-900 mb-2 group-hover:text-brand-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs dark:text-slate-500 text-slate-500">
                      <Clock size={13} /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-brand-400 font-medium">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
