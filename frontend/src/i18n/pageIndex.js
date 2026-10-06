// Builds the list of every indexable page with its metadata, structured data and hreflang.
// Used by scripts/generate-seo-files.mjs (sitemap, vercel.json) and scripts/prerender-head.mjs
// (per-URL static HTML head). Plain ESM, no JSX.
import { SITE, staticPages, servicePaths, englishOnlyPaths, blogPath, alternatesFor, absolute } from './routes.js'
import { staticMeta, legacyServiceMetaEn } from './meta.js'
import { servicesDe } from '../data/servicePagesDe.js'
import { servicesEn } from '../data/servicePagesEn.js'
import { allPosts } from '../data/blogAll.js'
import { locationPages } from '../data/locationPageData.js'
import { ui } from './ui.js'
import { organizationSchema, websiteSchema, serviceSchema, faqSchema, articleSchema } from './schema.js'

const NEW_PAGE_DATE = '2026-10-06'

const staticH1 = {
  home: { en: 'We Build Digital Products That Scale', de: 'Individuelle Softwareentwicklung für Unternehmen' },
  about: { en: "We're a Team of Builders", de: 'Wir sind ein Team von Machern' },
  services: { en: 'Our Services', de: 'Unsere Leistungen' },
  portfolio: { en: 'Featured Projects', de: 'Ausgewählte Projekte' },
  contact: { en: 'Start Your Project', de: 'Starten Sie Ihr Projekt' },
  blog: { en: 'From the ZahrionTech Blog', de: 'Aus dem ZahrionTech Blog' },
}

const staticIntro = {
  home: {
    en: 'From concept to deployment — we craft high-performance websites, mobile apps, and enterprise software for businesses across the USA, UK, Germany, and Europe.',
    de: ui.de.home.sub,
  },
  about: { en: ui.en.about.p, de: ui.de.about.p },
  services: { en: ui.en.servicesPage.sub, de: ui.de.servicesPage.sub },
  portfolio: { en: ui.en.portfolioPage.sub, de: ui.de.portfolioPage.sub },
  contact: { en: ui.en.contactPage.sub, de: ui.de.contactPage.sub },
  blog: { en: ui.en.blogPage.sub, de: ui.de.blogPage.sub },
}

function navLinks(lang) {
  const out = ui[lang].nav.links.map(l => ({ href: staticPages[l.key][lang], label: l.label }))
  const order = ['custom', 'software', 'web', 'app', 'crm', 'erp', 'pos', 'saas']
  const svcLabels = ui[lang].serviceLabels
  for (const k of order) out.push({ href: servicePaths[k][lang], label: svcLabels[k] })
  return out
}

export function buildPages() {
  const pages = []

  // ── static pages ──
  for (const [key, paths] of Object.entries(staticPages)) {
    for (const lang of ['en', 'de']) {
      const path = paths[lang]
      const m = staticMeta[key][lang]
      pages.push({
        path, lang, type: key === 'home' ? 'home' : 'page', key,
        ...m,
        h1: staticH1[key][lang],
        intro: staticIntro[key][lang],
        lastmod: lang === 'de' ? NEW_PAGE_DATE : undefined,
        priority: key === 'home' ? 1.0 : key === 'services' ? 0.9 : key === 'blog' ? 0.8 : key === 'contact' ? 0.6 : 0.7,
        changefreq: key === 'home' || key === 'blog' ? 'weekly' : 'monthly',
        schema: key === 'home' ? [organizationSchema(lang), websiteSchema(lang)] : [],
        links: navLinks(lang),
      })
    }
  }

  // ── service pages ──
  for (const [key, paths] of Object.entries(servicePaths)) {
    // German
    const d = servicesDe[key]
    pages.push({
      path: paths.de, lang: 'de', type: 'service', key,
      ...d.meta, h1: `${d.h1.pre} ${d.h1.highlight}`, intro: d.intro,
      features: d.features, faqs: d.faqs,
      lastmod: NEW_PAGE_DATE, priority: 0.9, changefreq: 'monthly',
      schema: [
        serviceSchema({ name: d.badge, description: d.meta.description, url: absolute(paths.de), lang: 'de' }),
        faqSchema(d.faqs),
      ],
      links: d.related.map(r => ({ href: servicePaths[r].de, label: ui.de.serviceLabels[r] })).concat(navLinks('de').slice(0, 6)),
    })
    // English
    if (paths.legacy) {
      const m = legacyServiceMetaEn[key]
      pages.push({
        path: paths.en, lang: 'en', type: 'service', key, ...m, intro: '',
        priority: 0.9, changefreq: 'monthly', schema: [], links: navLinks('en').slice(0, 6),
      })
    } else {
      const e = servicesEn[key]
      pages.push({
        path: paths.en, lang: 'en', type: 'service', key,
        ...e.meta, h1: `${e.h1.pre} ${e.h1.highlight}`, intro: e.intro,
        features: e.features, faqs: e.faqs,
        lastmod: NEW_PAGE_DATE, priority: 0.9, changefreq: 'monthly',
        schema: [
          serviceSchema({ name: e.badge, description: e.meta.description, url: absolute(paths.en), lang: 'en' }),
          faqSchema(e.faqs),
        ],
        links: e.related.map(r => ({ href: servicePaths[r].en, label: ui.en.serviceLabels[r] })).concat(navLinks('en').slice(0, 6)),
      })
    }
  }

  // ── English-only location pages ──
  for (const loc of locationPages) {
    const { cityName, region, serviceLabel, headline, intro } = loc
    pages.push({
      path: '/' + loc.slug, lang: 'en', type: 'location', key: loc.slug,
      title: `${serviceLabel} in ${cityName}, ${region} – ZahrionTech`,
      description: `ZahrionTech provides ${serviceLabel.toLowerCase()} for businesses in ${cityName}, ${region} — custom-built software, transparent pricing, full code ownership.`,
      ogTitle: `${serviceLabel} in ${cityName}, ${region} – ZahrionTech`,
      ogDescription: `Custom software development for businesses in ${cityName}, ${region}.`,
      h1: `${headline.pre} ${headline.highlight}`, intro,
      priority: 0.8, changefreq: 'monthly', schema: [], links: navLinks('en').slice(0, 6),
    })
  }

  // ── blog posts ──
  for (const p of allPosts) {
    const path = blogPath(p.lang, p.slug)
    pages.push({
      path, lang: p.lang, type: 'article', key: p.slug,
      title: p.seoTitle || (p.lang === 'de' ? `${p.title} | ZahrionTech` : `${p.title} – ZahrionTech Blog`),
      description: p.description,
      ogTitle: p.title, ogDescription: p.description,
      h1: p.title, intro: p.description,
      body: p.body,
      lastmod: p.date, priority: 0.6, changefreq: 'monthly',
      schema: [articleSchema({ title: p.title, description: p.description, date: p.date, url: absolute(path), lang: p.lang })],
      links: (p.links || []).map(r => ({ href: servicePaths[r][p.lang], label: ui[p.lang].serviceLabels[r] })),
    })
  }

  // hreflang + canonical
  for (const pg of pages) {
    pg.canonical = absolute(pg.path)
    pg.alternates = alternatesFor(pg.path)
  }
  return pages
}

export { SITE }
