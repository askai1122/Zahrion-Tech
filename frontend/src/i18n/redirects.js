// Every permanent (301) redirect of the site, in ONE place. scripts/generate-seo-files.mjs writes them into
// vercel.json, and scripts/seo-audit.mjs verifies that no redirect source is in the sitemap, no redirect
// destination is missing or redirects again (chains), and no redirect loops exist.
//
// Why these exist (Google Search Console report, Oct 2026):
//  - www.zahriontech.com and zahriontech.com were both served  -> "Duplicate without user-selected canonical"
//  - old URLs (/industries/*, /software-development-company/*, old /de/* paths and old blog posts) answered with a
//    noindex page or a redirect                                  -> "Excluded by noindex" / "Page with redirect"
import { SITE, staticPages, servicePaths } from './routes.js'

const HOST = new URL(SITE).host // zahriontech.com

// Old German blog posts that no longer exist -> closest current page
const RETIRED_BLOG = [
  ['/de/blog/heic-in-jpg-umwandeln', '/de/blog'],
  ['/de/blog/pdf-verkleinern-ohne-qualitaetsverlust', '/de/blog'],
  ['/de/blog/dsgvo-konforme-webentwicklung-checkliste', '/de/blog'],
  ['/de/blog/individualsoftware-oder-standardsoftware', '/de/blog/individuelle-software-vs-standardsoftware'],
  ['/de/blog/kosten-kassensoftware-individuell-2026', '/de/pos-software'],
  ['/de/blog/individuelles-cms-oder-wordpress', '/de/cms-entwicklung'],
  ['/blog/heic-to-jpg-converter-guide', '/blog'],
  ['/blog/compress-pdf-without-losing-quality', '/blog'],
  ['/blog/gdpr-compliant-web-development-checklist', '/blog'],
]

// Old English location URLs -> current location pages
const LEGACY_LOCATIONS = [
  ['/software-development-company/nashville', '/software-development-agency-nashville'],
  ['/software-development-company/edmonton', '/custom-software-development-edmonton'],
  ['/software-development-company/hartford', '/it-outsourcing-hartford'],
  ['/software-development-company/chicago', '/pos-software-systems-chicago'],
]

const LEGACY_INDUSTRIES = [
  ['/industries/erp-software-development', '/erp-software-development'],
  ['/industries/accounting-invoicing-software', '/billing-software-development'],
  ['/industries/pos-software', '/custom-pos-software-development'],
]

export function redirects() {
  const out = []
  const add = (source, destination) => out.push({ source, destination, permanent: true })

  // 1. non-canonical host -> canonical host (www -> apex)
  out.push({
    source: '/(.*)',
    has: [{ type: 'host', value: `www.${HOST}` }],
    destination: `${SITE}/$1`,
    permanent: true,
  })

  // 2. exact legacy URLs
  for (const [from, to] of [...RETIRED_BLOG, ...LEGACY_LOCATIONS, ...LEGACY_INDUSTRIES]) add(from, to)

  // 3. English slugs used under /de (e.g. /de/hire-software-developer) -> real German URL
  for (const v of Object.values(servicePaths)) {
    const legacy = '/de' + v.en
    if (legacy !== v.de) add(legacy, v.de)
  }
  for (const [key, v] of Object.entries(staticPages)) {
    if (key === 'home') continue
    const legacy = '/de' + v.en
    if (legacy !== v.de) add(legacy, v.de)
  }

  // 4. old section roots (after the exact rules above, first match wins)
  add('/industries/:path*', '/custom-software-development')
  add('/software-development-company/:path*', '/custom-software-development')
  add('/industries', '/services')
  add('/software-development-company', '/custom-software-development')
  add('/de/industries/:path*', '/de/individuelle-software')
  add('/de/software-development-company/:path*', '/de/individuelle-software')
  return out
}
