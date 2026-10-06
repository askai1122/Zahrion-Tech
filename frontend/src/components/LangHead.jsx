import { Helmet } from 'react-helmet-async'
import { useLang } from '../hooks/useLang'
import { alternatesFor } from '../i18n/routes'

// Global <html lang> + hreflang alternates for every route that has a translation.
// Pages without a translation emit no hreflang (avoids dangling alternates).
export default function LangHead() {
  const { lang, pathname } = useLang()
  const alts = alternatesFor(pathname)
  return (
    <Helmet htmlAttributes={{ lang }}>
      {alts.map(a => (
        <link key={a.hreflang} rel="alternate" hrefLang={a.hreflang} href={a.href} />
      ))}
    </Helmet>
  )
}
