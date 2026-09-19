import { Helmet } from 'react-helmet-async'
import { SITE, LOGO, BRAND } from './Seo'

/**
 * Emitted once, on every page. Gives Google (and answer engines like ChatGPT,
 * Perplexity and Claude) a stable entity to attach the whole site to.
 */
export default function GlobalSchema() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE}/#organization`,
        name: BRAND,
        url: SITE,
        logo: { '@type': 'ImageObject', url: LOGO },
        description:
          'Custom software development agency building web applications, mobile apps, POS systems, CRM, ERP and business management software for clients across the United States.',
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Germany' },
        ],
        knowsAbout: [
          'Custom software development',
          'Web application development',
          'Mobile app development',
          'Point of sale (POS) software',
          'CRM software',
          'ERP software',
          'Content management systems',
          'E-commerce development',
          'Business management software',
          'API and backend engineering',
        ],
        sameAs: [
          'https://www.instagram.com/zahriontech/',
          'https://www.linkedin.com/company/116019231',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'support@zahriontech.com',
          availableLanguage: ['English'],
          areaServed: 'US',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: SITE,
        name: BRAND,
        publisher: { '@id': `${SITE}/#organization` },
        inLanguage: 'en-US',
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  )
}
