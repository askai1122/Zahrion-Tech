import { Helmet } from 'react-helmet-async'

export const SITE = 'https://zahriontech.com'
export const BRAND = 'ZahrionTech'
export const LOGO = `${SITE}/zahriontech-logo.png`

/**
 * Seo
 * One place for title/description/canonical/OG/Twitter + JSON-LD.
 *
 * Deliberately does NOT emit a <meta name="keywords"> stuffed with hundreds of
 * terms. Google has ignored that tag since 2009, and competitors can read it.
 * Keywords belong in headings, body copy and internal anchor text instead.
 */
export default function Seo({
  title,
  description,
  path = '/',
  image = LOGO,
  type = 'website',
  schema = [],
  breadcrumbs = [],
  noindex = false,
}) {
  const url = `${SITE}${path === '/' ? '/' : path}`
  const blocks = Array.isArray(schema) ? schema : [schema]

  if (breadcrumbs.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: `${SITE}${b.path}`,
      })),
    })
  }

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(b)}</script>
      ))}
    </Helmet>
  )
}

export const faqSchema = faqs => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const serviceSchema = ({ name, description, areaServed, path }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  name,
  description,
  url: `${SITE}${path}`,
  provider: {
    '@type': 'ProfessionalService',
    name: BRAND,
    url: SITE,
    logo: LOGO,
    sameAs: ['https://www.instagram.com/zahriontech/', 'https://www.linkedin.com/company/116019231'],
  },
  areaServed,
})
