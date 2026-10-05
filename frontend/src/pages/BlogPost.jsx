import { motion } from 'framer-motion'
import { ArrowRight, Clock, ArrowLeft, ExternalLink } from 'lucide-react'
import { useParams } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import Seo from '../i18n/Seo'
import LocalLink from '../i18n/LocalLink'
import { useLang, useUI } from '../i18n/useLang'
import { posts } from '../data/blogData'
import NotFound from './NotFound'
import { SITE, TOOLSTACK } from '../i18n/config'

// Inline [text](url) links. Internal paths use LocalLink, external ones open normally (dofollow).
function RichText({ text }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!m) return part
    const [, label, href] = m
    const cls = 'text-brand-400 underline underline-offset-2 hover:text-brand-300'
    return href.startsWith('/')
      ? <LocalLink key={i} to={href} className={cls}>{label}</LocalLink>
      : <a key={i} href={href} target="_blank" rel="noopener" className={cls}>{label}</a>
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const { lang } = useLang()
  const u = useUI().blog
  const post = posts.find(p => p.lang === lang && p.slug === slug)

  if (!post) return <NotFound />

  const twin = post.pair ? posts.find(p => p.lang !== lang && p.slug === post.pair) : null
  const paths = twin
    ? { [lang]: `/blog/${post.slug}`, [twin.lang]: `/blog/${twin.slug}` }
    : { en: `/blog/${post.slug}`, de: `/blog/${post.slug}` }
  const canonicalUrl = SITE + (lang === 'de' ? '/de' : '') + `/blog/${post.slug}`
  const tool = post.tool ? TOOLSTACK[post.tool] : null

  return (
    <PageWrapper>
      <Seo path={`/blog/${post.slug}`} paths={twin ? paths : { en: paths.en, de: paths.de }} title={post.title + u.titleSuffix} description={post.description} ogTitle={post.title} type="article">
        {post.keywords && <meta name="keywords" content={post.keywords} />}
        <meta property="article:published_time" content={post.date} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            inLanguage: lang,
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: canonicalUrl,
            image: SITE + '/zahriontech-logo.png',
            author: { '@type': 'Organization', name: 'ZahrionTech', url: SITE },
            publisher: { '@type': 'Organization', name: 'ZahrionTech', logo: { '@type': 'ImageObject', url: SITE + '/zahriontech-logo.png' } },
            ...(tool ? { mentions: { '@type': 'WebApplication', name: post.toolName, url: tool } } : {}),
          })}
        </script>
      </Seo>

      <article className="pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <LocalLink to="/blog" className="inline-flex items-center gap-2 text-sm text-brand-400 mb-8 hover:underline">
            <ArrowLeft size={14} /> {u.back}
          </LocalLink>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 mb-5">
              {post.tag}
            </span>
            <h1 className="font-poppins font-black text-3xl sm:text-4xl dark:text-white text-slate-900 leading-tight mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-xs dark:text-slate-500 text-slate-500 mb-10">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(u.dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            </div>

            <div className="prose-custom flex flex-col gap-4">
              {post.body.map((block, i) => {
                if (block.h) return <h2 key={i} className="font-display font-semibold text-xl dark:text-white text-slate-900 mt-4">{block.h}</h2>
                if (block.ul) return (
                  <ul key={i} className="list-disc pl-6 flex flex-col gap-2 dark:text-slate-400 text-slate-600 leading-relaxed">
                    {block.ul.map((li, j) => <li key={j}><RichText text={li} /></li>)}
                  </ul>
                )
                if (block.tool) return (
                  <a key={i} href={TOOLSTACK[block.tool]} target="_blank" rel="noopener" className="glass rounded-2xl p-6 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                    <div>
                      <div className="text-xs font-mono text-brand-400 mb-1">{u.toolBox}</div>
                      <div className="font-display font-semibold dark:text-white text-slate-900">{block.title}</div>
                      <div className="dark:text-slate-400 text-slate-600 text-sm mt-1">{block.text}</div>
                    </div>
                    <span className="flex items-center gap-1 text-sm text-brand-400 font-medium whitespace-nowrap">{u.toolBtn} <ExternalLink size={14} /></span>
                  </a>
                )
                return <p key={i} className="dark:text-slate-400 text-slate-600 leading-relaxed"><RichText text={block.p} /></p>
              })}
            </div>

            <div className="mt-14 glass rounded-2xl p-8 text-center">
              <h3 className="font-display font-semibold text-lg dark:text-white text-slate-900 mb-2">{u.ctaTitle}</h3>
              <p className="dark:text-slate-400 text-slate-600 text-sm mb-5">{u.ctaText}</p>
              <LocalLink to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity">
                {u.ctaBtn} <ArrowRight size={16} />
              </LocalLink>
            </div>
          </motion.div>
        </div>
      </article>
    </PageWrapper>
  )
}
