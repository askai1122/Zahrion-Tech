# SEO runbook (ZahrionTech)

- `npm run build` = optimise AI-page variants -> generate sitemaps/robots/vercel.json -> vite build -> prerender every URL to static HTML -> **SEO audit (fails the build on any error)**.
- Add a city: append one line in `src/data/aiCities.js` (`slug|Name|REGION|ind1,ind2,ind3`), run `npm run build`. Sitemap, prerender, internal links and variants update automatically.
- Retire/move a URL: add it to `src/i18n/redirects.js` (301). Never delete a page without a redirect.
- Never edit `vercel.json`, `public/sitemap*.xml`, `public/robots.txt`, `src/data/aiVariants.js` by hand (generated).
- Search Console: submit only `https://zahriontech.com/sitemap.xml`. In Vercel > Domains make `zahriontech.com` the primary and redirect `www.zahriontech.com` -> `zahriontech.com` there (not in vercel.json, to avoid redirect loops).
- http->https and www->apex "Page with redirect" entries in GSC are expected, not errors.
