import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { allRoutes } from './routes.mjs'

const SITE = 'https://zahriontech.com'
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const today = new Date().toISOString().split('T')[0]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    r => `  <url>
    <loc>${SITE}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /
Disallow: /admin

# Answer engines — explicitly allowed, these increasingly drive qualified traffic
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${SITE}/sitemap.xml
`

for (const dir of [join(root, 'public'), join(root, 'dist')]) {
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'sitemap.xml'), xml, 'utf8')
  writeFileSync(join(dir, 'robots.txt'), robots, 'utf8')
}

console.log(`[sitemap] ${allRoutes.length} URLs written to public/ and dist/`)
