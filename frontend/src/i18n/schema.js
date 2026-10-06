// JSON-LD builders. Every schema type here mirrors content that is visible on the page.
// No address / geo / phone / rating data is emitted because none is publicly claimed by the site.
import { SITE, servicePaths } from './routes.js'
import { ui } from './ui.js'

const ORG_ID = `${SITE}/#organization`
const LOGO = `${SITE}/zahriontech-logo.png`

export function organizationSchema(lang) {
  const de = lang === 'de'
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: 'ZahrionTech',
    url: SITE,
    logo: LOGO,
    description: de
      ? 'Softwareentwicklung für Unternehmen: individuelle Software, Webanwendungen, Mobile Apps sowie CRM-, ERP-, POS- und SaaS-Lösungen für Kunden in Deutschland, Europa und den USA.'
      : 'Software development agency specializing in web, mobile and desktop development for clients across the United States, United Kingdom, Germany, and Europe.',
    areaServed: [
      { '@type': 'Country', name: de ? 'Deutschland' : 'Germany' },
      { '@type': 'Country', name: de ? 'Vereinigte Staaten' : 'United States' },
      { '@type': 'Country', name: de ? 'Vereinigtes Königreich' : 'United Kingdom' },
      { '@type': 'Continent', name: 'Europe' },
    ],
    serviceType: de
      ? ['Softwareentwicklung', 'Individuelle Softwareentwicklung', 'Webentwicklung', 'Mobile App Entwicklung', 'CRM-Entwicklung', 'ERP-Entwicklung', 'POS-Software', 'SaaS-Entwicklung', 'Node.js Entwicklung']
      : ['Web Development', 'Mobile App Development', 'Desktop App Development', 'Node.js Backend Development', 'Social Media Management', 'Bug Fixing & Maintenance'],
    sameAs: [
      'https://www.instagram.com/zahriontech/',
      'https://www.linkedin.com/company/116019231',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: de ? 'ZahrionTech Leistungen' : 'ZahrionTech Services',
      itemListElement: Object.entries(servicePaths).map(([key, v]) => ({
        '@type': 'Offer',
        url: SITE + v[lang],
        itemOffered: { '@type': 'Service', name: ui[lang].serviceLabels[key] },
      })),
    },
  }
}

export function websiteSchema(lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    name: 'ZahrionTech',
    url: SITE + (lang === 'de' ? '/de' : '/'),
    inLanguage: lang === 'de' ? 'de-DE' : 'en',
    publisher: { '@id': ORG_ID },
  }
}

export function serviceSchema({ name, description, url, lang }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: name,
    description,
    url,
    inLanguage: lang === 'de' ? 'de-DE' : 'en',
    provider: { '@id': ORG_ID },
    areaServed: lang === 'de'
      ? [{ '@type': 'Country', name: 'Deutschland' }, { '@type': 'Continent', name: 'Europe' }]
      : [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' }, { '@type': 'Country', name: 'Germany' }, { '@type': 'Continent', name: 'Europe' }],
  }
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function articleSchema({ title, description, date, url, lang }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    inLanguage: lang === 'de' ? 'de-DE' : 'en',
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: 'ZahrionTech', url: SITE },
    publisher: { '@type': 'Organization', name: 'ZahrionTech', logo: { '@type': 'ImageObject', url: LOGO } },
    image: LOGO,
  }
}
