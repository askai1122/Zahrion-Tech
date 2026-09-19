import { mkdirSync, readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { allRoutes } from './routes.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrEntry = join(root, 'dist-ssr', 'entry-server.mjs')

if (!existsSync(ssrEntry)) {
  console.error('\n[prerender] dist-ssr/entry-server.mjs not found. Run "npm run build:ssr" first.\n')
  process.exit(1)
}

const { render } = await import(pathToFileURL(ssrEntry).href)
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const stripStaticSeo = tpl =>
  tpl
    .replace(/<title>[\s\S]*?<\/title>\s*/g, '')
    .replace(/<meta name="description"[^>]*>\s*/g, '')
    .replace(/<meta name="keywords"[^>]*>\s*/g, '')
    .replace(/<meta name="robots"[^>]*>\s*/g, '')
    .replace(/<meta property="og:[^>]*>\s*/g, '')
    .replace(/<meta name="twitter:[^>]*>\s*/g, '')
    .replace(/<link rel="canonical"[^>]*>\s*/g, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, '')

let ok = 0
for (const route of allRoutes) {
  const { html, head } = render(route.path)

  // Helmet owns every SEO tag on prerendered pages, so strip the template's
  // static copies first — duplicate titles/canonicals are worse than none.
  let page = stripStaticSeo(template)
    .replace('</head>', `  ${head}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  const outDir = route.path === '/' ? dist : join(dist, route.path)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), page, 'utf8')
  ok++
}

// Ship a 404 too
const { html: nfHtml, head: nfHead } = render('/this-route-does-not-exist')
writeFileSync(
  join(dist, '404.html'),
  stripStaticSeo(template).replace('</head>', `  ${nfHead}\n</head>`).replace('<div id="root"></div>', `<div id="root">${nfHtml}</div>`),
  'utf8'
)

rmSync(join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`[prerender] wrote ${ok} static HTML pages + 404.html`)
