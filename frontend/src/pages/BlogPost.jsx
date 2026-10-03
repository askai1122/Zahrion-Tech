import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Clock, ArrowLeft } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import { posts } from '../data/blogData'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return null

  return (
    <PageWrapper>
      <Helmet>
        <title>{post.title} – ZahrionTech Blog</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://zahriontech.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://zahriontech.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="https://zahriontech.com/zahriontech-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { '@type': 'Organization', name: 'ZahrionTech' },
            publisher: { '@type': 'Organization', name: 'ZahrionTech', logo: { '@type': 'ImageObject', url: 'https://zahriontech.com/zahriontech-logo.png' } },
          })}
        </script>
      </Helmet>

      <article className="pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-brand-400 mb-8 hover:underline">
            <ArrowLeft size={14} /> Back to blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono dark:bg-brand-500/10 bg-brand-50 dark:text-brand-400 text-brand-600 mb-5">
              {post.tag}
            </span>
            <h1 className="font-poppins font-black text-3xl sm:text-4xl dark:text-white text-slate-900 leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs dark:text-slate-500 text-slate-500 mb-10">
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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

            <div className="mt-14 glass rounded-2xl p-8 text-center">
              <h3 className="font-display font-semibold text-lg dark:text-white text-slate-900 mb-2">Have a project like this in mind?</h3>
              <p className="dark:text-slate-400 text-slate-600 text-sm mb-5">Get a free, no-obligation quote from our team.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity">
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </PageWrapper>
  )
}
