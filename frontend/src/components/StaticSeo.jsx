import SeoHead from './SeoHead'
import { useLang } from '../hooks/useLang'
import { staticMeta } from '../i18n/meta'
import { staticPages, absolute } from '../i18n/routes'

// SEO block for the static pages (home, about, services, portfolio, contact, blog index).
export default function StaticSeo({ pageKey }) {
  const { lang } = useLang()
  return (
    <SeoHead
      meta={staticMeta[pageKey][lang]}
      canonical={absolute(staticPages[pageKey][lang])}
      lang={lang}
    />
  )
}
