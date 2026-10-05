// Generates public/sitemap.xml (EN + DE URLs with hreflang alternates). Runs automatically before `npm run build`.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://zahriontech.com'
const today = new Date().toISOString().slice(0, 10)

const pages = [
  ['/', 'weekly', 1.0], ['/about', 'monthly', 0.7], ['/services', 'monthly', 0.9], ['/portfolio', 'monthly', 0.7],
  ['/contact', 'monthly', 0.6], ['/blog', 'weekly', 0.8],
  ['/hire-web-developer', 'monthly', 0.9], ['/hire-mobile-app-developer', 'monthly', 0.9],
  ['/hire-nodejs-developer', 'monthly', 0.9], ['/hire-software-developer', 'monthly', 0.9],
  ['/custom-pos-software-development', 'monthly', 0.9], ['/custom-cms-development', 'monthly', 0.9],
  ['/billing-software-development', 'monthly', 0.9], ['/veterinary-clinic-app-development', 'monthly', 0.8],
]
const enOnly = [
  '/software-development-agency-nashville', '/custom-software-development-edmonton',
  '/it-outsourcing-hartford', '/pos-software-systems-chicago',
]

// read posts straight from the data files
const read = f => fs.readFileSync(path.join(root, 'src/data', f), 'utf8')
const parse = src => [...src.matchAll(/lang: '(\w+)', slug: '([^']+)', pair: '([^']+)'[\s\S]*?date: '([\d-]+)'/g)]
  .map(m => ({ lang: m[1], slug: m[2], pair: m[3], date: m[4] }))
const posts = [...parse(read('blogEn.js')), ...parse(read('blogDe.js'))]

const en = p => SITE + (p === '/' ? '/' : p)
const de = p => SITE + (p === '/' ? '/de' : '/de' + p)
const alt = (e, d) =>
  `    <xhtml:link rel="alternate" hreflang="en" href="${e}"/>\n` +
  `    <xhtml:link rel="alternate" hreflang="de" href="${d}"/>\n` +
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${e}"/>\n`
const url = (loc, freq, prio, extra = '', lastmod = today) =>
  `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${prio.toFixed(1)}</priority>\n${extra}  </url>\n`

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
for (const [p, f, pr] of pages) {
  const a = alt(en(p), de(p))
  xml += url(en(p), f, pr, a) + url(de(p), f, pr, a)
}
for (const p of enOnly) xml += url(en(p), 'monthly', 0.8)
for (const post of posts.filter(x => x.lang === 'en')) {
  const twin = posts.find(x => x.lang === 'de' && x.slug === post.pair)
  const e = en('/blog/' + post.slug), d = de('/blog/' + (twin ? twin.slug : post.pair))
  const a = alt(e, d)
  xml += url(e, 'monthly', 0.6, a, post.date) + url(d, 'monthly', 0.6, a, twin ? twin.date : post.date)
}
xml += '</urlset>\n'
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), xml)
console.log('sitemap.xml written:', (xml.match(/<loc>/g) || []).length, 'URLs')
