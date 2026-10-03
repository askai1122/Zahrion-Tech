import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

export default function NotFound() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Page Not Found – ZahrionTech</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-32">
        <p className="font-mono text-sm text-brand-400 mb-4">404</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="dark:text-slate-400 text-slate-600 max-w-md mb-8">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </section>
    </PageWrapper>
  )
}
