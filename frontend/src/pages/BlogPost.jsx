import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Clock, ArrowLeft } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SeoHead from '../components/SeoHead'
import { useLang, resolveHref } from '../hooks/useLang'
import { getPost } from '../data/blogAll'
import { blogPath, servicePaths, absolute } from '../i18n/routes'

export default function BlogPost() {
  const { slug } = useParams()
  const { lang, c } = useLang()
  const bp = c.blogPage
  const post = getPost(lang, slug)

  if (!post) return null
  const canonical = absolute(blogPath(lang, post.slug))

  return (
    <PageWrapper>
      <SeoHead
        meta={{
          title: post.seoTitle || (lang === 'de' ? `${post.title} | ZahrionTech` : `${post.title} – ZahrionTech Blog`),
          description: post.description,
          ogTitle: post.title,
          ogDescription: post.description,
        }}
        canonical={canonical}
        lang={lang}
        type="article"
      />

      <article className="pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={resolveHref(lang, 'blog')} className="inline-flex items-center gap-2 text-sm text-brand-400 mb-8 hover:underline">
            <ArrowLeft size={14} /> {bp.back}
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 mb-5">
              {post.tag}
            </span>
            <h1 lang={lang} className="font-poppins font-black text-3xl sm:text-4xl dark:text-white text-slate-900 leading-tight mb-4 [overflow-wrap:anywhere]">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs dark:text-slate-500 text-slate-500 mb-10">
              <span>{new Date(post.date).toLocaleDateString(bp.dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            </div>

            <div className="prose-custom flex flex-col gap-4">
              {post.body.map((block, i) =>
                block.h ? (
                  <h2 key={i} className="font-display font-semibold text-xl dark:text-white text-slate-900 mt-4">{block.h}</h2>
                ) : (
                  <p key={i} className="dark:text-slate-400 text-slate-600 leading-relaxed">{block.p}</p>
                )
              )}
            </div>

            {post.links && post.links.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display font-semibold text-xl dark:text-white text-slate-900 mb-3">{bp.relatedTitle}</h2>
                <ul className="flex flex-col gap-2">
                  {post.links.map(k => (
                    <li key={k}>
                      <Link to={servicePaths[k][lang]} className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:underline">
                        {c.serviceLabels[k]} <ArrowRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-14 glass rounded-2xl p-8 text-center">
              <h3 className="font-display font-semibold text-lg dark:text-white text-slate-900 mb-2">{bp.ctaTitle}</h3>
              <p className="dark:text-slate-400 text-slate-600 text-sm mb-5">{bp.ctaText}</p>
              <Link to={resolveHref(lang, 'contact')} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity">
                {bp.ctaButton} <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </PageWrapper>
  )
}
