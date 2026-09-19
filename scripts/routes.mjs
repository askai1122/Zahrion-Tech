import { readFileSync } from 'node:fs'

// Light parse of the data files so scripts don't need a build step or a bundler.
const read = p => readFileSync(new URL(p, import.meta.url), 'utf8')

const slugsFrom = (src) =>
  [...src.matchAll(/^\s*\{\s*\n?\s*slug: '([^']+)'/gm)].map(m => m[1])

const locSrc = read('../src/data/locations.js')
const indSrc = read('../src/data/industries.js')

export const citySlugs = [...locSrc.matchAll(/\{\s*slug:\s*'([^']+)'/g)].map(m => m[1])
export const industrySlugs = [...indSrc.matchAll(/slug:\s*'([^']+)',\s*\n\s*name:/g)].map(m => m[1])

export const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/industries', priority: '0.9', changefreq: 'weekly' },
  { path: '/locations', priority: '0.9', changefreq: 'weekly' },
  { path: '/hire-software-developer', priority: '0.9', changefreq: 'monthly' },
  { path: '/hire-web-developer', priority: '0.9', changefreq: 'monthly' },
  { path: '/hire-mobile-app-developer', priority: '0.9', changefreq: 'monthly' },
  { path: '/hire-nodejs-developer', priority: '0.8', changefreq: 'monthly' },
  { path: '/hire-python-developer', priority: '0.8', changefreq: 'monthly' },
  { path: '/pos-software-development', priority: '0.9', changefreq: 'monthly' },
  { path: '/crm-erp-development', priority: '0.9', changefreq: 'monthly' },
  { path: '/business-management-software', priority: '0.9', changefreq: 'monthly' },
  { path: '/portfolio', priority: '0.7', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
]

export const allRoutes = [
  ...staticRoutes,
  ...industrySlugs.map(s => ({ path: `/industries/${s}`, priority: '0.85', changefreq: 'monthly' })),
  ...citySlugs.map(s => ({ path: `/software-development-company/${s}`, priority: '0.8', changefreq: 'monthly' })),
]
