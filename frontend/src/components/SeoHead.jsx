import { Helmet } from 'react-helmet-async'
import { SITE } from '../i18n/routes'

const IMG = `${SITE}/zahriontech-logo.png`

// Metadata block for the data-driven pages. JSON-LD is NOT emitted here: scripts/prerender-head.mjs
// writes it once into each page's static <head>, so it is never duplicated after hydration.
// Legacy English service pages keep their own Helmet blocks.
export default function SeoHead({ meta, canonical, lang, type = 'website' }) {
  const locale = lang === 'de' ? 'de_DE' : 'en_US'
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={meta.ogTitle || meta.title} />
      <meta property="og:description" content={meta.ogDescription || meta.description} />
      <meta property="og:image" content={IMG} />
      <meta property="og:image:alt" content="ZahrionTech Logo" />
      <meta property="og:locale" content={locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.ogTitle || meta.title} />
      <meta name="twitter:description" content={meta.ogDescription || meta.description} />
      <meta name="twitter:image" content={IMG} />
    </Helmet>
  )
}
