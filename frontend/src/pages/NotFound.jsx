import Seo from '../i18n/Seo'
import LocalLink from '../i18n/LocalLink'
import { useUI } from '../i18n/useLang'
import PageWrapper from '../components/PageWrapper'

export default function NotFound() {
  const u = useUI().notFound
  return (
    <PageWrapper>
      <Seo path="/404" title={u.title + ' – ZahrionTech'} description={u.text} noindex />

      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-32">
        <p className="font-mono text-sm text-brand-400 mb-4">404</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 mb-4">
          {u.title}
        </h1>
        <p className="dark:text-slate-400 text-slate-600 max-w-md mb-8">
          {u.text}
        </p>
        <LocalLink
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity"
        >
          {u.back}
        </LocalLink>
      </section>
    </PageWrapper>
  )
}
