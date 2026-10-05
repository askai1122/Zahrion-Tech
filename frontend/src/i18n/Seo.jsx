import { Helmet } from 'react-helmet-async'
import { SITE, EN_ONLY } from './config'
import { useLang } from './useLang'

const url = (lang, path) => SITE + (lang === 'de' ? (path === '/' ? '/de' : '/de' + path) : path === '/' ? '/' : path)

/**
 * Per-page SEO: title, description, canonical, hreflang (en / de / x-default), Open Graph, <html lang>.
 * `path` is the English (language-neutral) route, e.g. "/hire-web-developer".
 * `paths` overrides per-language paths (used for blog posts that have different slugs per language).
 */
export default function Seo({ path, paths, title, description, ogTitle, ogDescription, type = 'website', noindex, children }) {
  const { lang } = useLang()
  const enOnly = EN_ONLY.includes(path)
  const p = paths || { en: path, de: path }
  const canonical = url(lang, p[lang])
  const other = lang === 'de' ? 'en' : 'de'

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={canonical} />
      {!enOnly && <link rel="alternate" hrefLang="en" href={url('en', p.en)} />}
      {!enOnly && <link rel="alternate" hrefLang="de" href={url('de', p.de)} />}
      {!enOnly && <link rel="alternate" hrefLang="x-default" href={url('en', p.en)} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={SITE + '/zahriontech-logo.png'} />
      <meta property="og:locale" content={lang === 'de' ? 'de_DE' : 'en_US'} />
      <meta property="og:locale:alternate" content={other === 'de' ? 'de_DE' : 'en_US'} />
      {children}
    </Helmet>
  )
}
