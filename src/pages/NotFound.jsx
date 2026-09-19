import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import Seo from '../components/Seo'
import { services } from '../data/services'

export default function NotFound() {
  return (
    <PageWrapper>
      <Seo title="Page Not Found | ZahrionTech" description="This page does not exist." path="/404" noindex />
      <section className="pt-40 pb-32 text-center max-w-2xl mx-auto px-4">
        <h1 className="font-poppins font-black text-5xl dark:text-white text-slate-900 mb-4">404</h1>
        <p className="dark:text-slate-400 text-slate-600 mb-10">
          That page doesn't exist. Here's where most people were heading:
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {[{ slug: '', label: 'Home' }, { slug: 'services', label: 'Services' }, { slug: 'industries', label: 'Industries' }, { slug: 'locations', label: 'Locations' }, ...services].map(s => (
            <Link key={s.slug} to={`/${s.slug}`} className="px-4 py-2 rounded-lg glass text-sm dark:text-slate-300 text-slate-700 border dark:border-white/5 border-slate-200">
              {s.label}
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
