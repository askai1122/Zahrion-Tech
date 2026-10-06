# ZahrionTech – German localization & SEO implementation

Design is unchanged: every German page reuses the existing components, classes, spacing and animations.
The only visual additions are the language switcher in the navbar and a "Related services" link row on service pages.

---------------------------------------------------------------------

## 1. Before you deploy – things only you can resolve

| # | Item | Why it matters |
|---|------|----------------|
| 1 | **GA4 consent (Germany/EU).** The GA4 snippet is installed exactly as requested and loads for everyone. Under GDPR/TTDSG a German-facing site normally needs a consent banner before Google Analytics sets cookies. | Legal risk. Recommended: Google Consent Mode v2 + a cookie banner. Not added because you asked for the exact snippet. |
| 2 | **Impressum + Datenschutzerklärung.** A business site targeting Germany needs both, with your real company details. | Not created – I cannot invent legal/address data. Add `/de/impressum` and `/de/datenschutz` and link them in the footer. |
| 3 | **Confirm services.** CRM, ERP, SaaS, React and Next.js pages exist because your brief lists them as services. The old site never mentioned CRM/ERP/SaaS explicitly. Content is capability-based (no invented clients, numbers or prices). | Remove any page you cannot deliver (delete its entry in `servicePaths` + data files). |
| 4 | **German-language communication.** No page promises German-speaking staff. If you can work in German, say so on the contact page – it will lift conversion. | Honesty / conversion. |
| 5 | **TSE / invoicing law.** The POS and billing pages mention German requirements (TSE, E-Rechnung) only as "we discuss this in the first call". Confirm you can actually deliver that before promoting those pages. | Avoid over-promising. |
| 6 | **Native review.** Copy was written natively but should get a quick read by a German speaker. | Final polish. |
| 7 | **Claims kept from the existing site:** "kostenloses Erstgespräch", "Festpreisangebote", "100 % Zufriedenheitsgarantie". They are translations of claims already on the English site. | Keep only what is true. |

---------------------------------------------------------------------

## 2. Architecture

- **Routing:** English URLs unchanged. German lives under `/de` (no trailing slash, matching the English style).
  Single source of truth: `src/i18n/routes.js` (EN⇄DE map used by the app, sitemap, hreflang and the switcher).
- **Content:** `src/i18n/ui.js` (UI copy, EN mirrors existing text 1:1), `src/data/servicePagesDe.js` / `servicePagesEn.js`,
  `src/data/blogArticles.js`. One data-driven `ServicePage` component (copy of the existing service-page markup) renders all new pages.
- **Language detection** (`LanguageDetector.jsx`, runs once per session on the landing page, client-side, skipped for bots):
  1. explicit choice (switcher → `localStorage zt_lang`)  2. browser language (`de*` → German)  3. Germany geo fallback via `/api/geo` (Vercel header).
  An English browser located in Germany stays English by default; flip `GEO_OVERRIDES_ENGLISH_BROWSER` in that file if you prefer geo to win.
  No server redirects → Google can always crawl both versions.
- **Switcher:** "Deutsch | English" (DE | EN on small screens), links to the equivalent URL, falls back to the other language's home.
- **GA4:** exact snippet in `index.html` `<head>`; the switcher also sends a `language_switch` event.

### Build pipeline (new)
`npm run build` → `scripts/generate-seo-files.mjs` (sitemap.xml with hreflang, robots.txt, vercel.json) → `vite build` → `scripts/prerender-head.mjs`.
The site is a client-side SPA. The prerender step writes a static HTML file per URL (58) with its own `<title>`, description, canonical,
hreflang, Open Graph, JSON-LD and a `<noscript>` text version, so crawlers get correct metadata without running JavaScript.

### hreflang / canonical rules
- Every page that has a translation emits `en`, `de`, `x-default` (→ English). Canonical = the page's own URL.
- Pages without a translation (US location pages, two legacy English blog posts) emit **no** hreflang.
- Sitemap contains all 58 indexable URLs (26 German); no admin, API, or query URLs.

---------------------------------------------------------------------

## 3. Keyword research & page map

Method: German SERP/vocabulary review (what ranking pages actually say – e.g. *Individualsoftware*, *CRM-System*, *Mittelstand*, *Festpreis*,
*Softwareagentur*). **No search-volume data was available here** – validate priorities in Google Keyword Planner / Sistrix / Ahrefs before expanding.

| German page | Primary target | Supporting terms | English counterpart |
|---|---|---|---|
| `/de` (Home) | individuelle Softwareentwicklung für Unternehmen | Webanwendungen, Mobile Apps, CRM, ERP, POS, SaaS | `/` |
| `/de/softwareentwicklung` | Softwareentwicklung / Softwareentwicklungsunternehmen | Software Agentur, Software entwickeln lassen | `/hire-software-developer` |
| `/de/individuelle-software` | individuelle Software entwickeln lassen | Individualsoftware, maßgeschneiderte Software | `/custom-software-development` |
| `/de/webentwicklung` | Webentwicklung / Webentwicklungsagentur | Webanwendung entwickeln lassen, Full-Stack | `/hire-web-developer` |
| `/de/app-entwicklung` | App entwickeln lassen / Mobile App Entwicklung | App Entwicklungsagentur, Flutter, React Native | `/hire-mobile-app-developer` |
| `/de/crm-entwicklung` | CRM Software entwickeln lassen | CRM-System Mittelstand | `/crm-software-development` |
| `/de/erp-entwicklung` | ERP Software entwickeln lassen | individuelles ERP | `/erp-software-development` |
| `/de/pos-software` | POS Software entwickeln lassen | Kassensystem, Kassenlösung | `/custom-pos-software-development` |
| `/de/saas-entwicklung` | SaaS entwickeln lassen | MVP entwickeln lassen | `/saas-development` |
| `/de/nodejs-entwicklung` | Node.js Entwicklung | Backend, API | `/hire-nodejs-developer` |
| `/de/react-entwicklung` | React Entwicklung | Dashboards, Portale | `/react-development` |
| `/de/nextjs-entwicklung` | Next.js Entwicklung | mehrsprachige Websites | `/nextjs-development` |
| `/de/cms-entwicklung`, `/de/abrechnungssoftware`, `/de/tierarzt-app-entwicklung` | existing English services, localized | – | existing pages |

**Cannibalization watch:** Home and `/de/softwareentwicklung` overlap on "Softwareentwicklung". Home owns "individuelle Softwareentwicklung für Unternehmen";
the service page owns the broader agency/company terms. Check Search Console after ~6–8 weeks and differentiate further if both rank for the same query.

All 30 requested German keyword variants appear naturally across the German pages (audited by script, no keyword stuffing).
English keyword targets: software development, custom software development, web/mobile/SaaS/CRM/ERP/POS/Node.js/React/Next.js development, full stack, MVP – existing English metadata is unchanged.

---------------------------------------------------------------------

## 4. Blog strategy

**Published now (6 DE ⇄ 6 EN pairs, each linked to 3–4 service pages + contact CTA):**
Cost of custom software · Custom vs. off-the-shelf · Software development process / *Software entwickeln lassen* · Custom CRM · Mobile app cost & process · SaaS MVP.
Cost articles explain *cost drivers and pricing models* – deliberately no price tables or invented statistics.

**Backlog (from your brief, write next, each links to its service page):**
- Web: Webanwendung entwickeln lassen · Was kostet eine Webanwendung? · React vs. Next.js · Node.js für Webanwendungen
- Apps: Native vs. Cross-Platform · Was kostet eine individuelle App?
- CRM: CRM für KMU · Individuelles CRM vs. Standardlösung · Was sollte ein modernes CRM können?
- ERP: ERP Software entwickeln lassen · Standard-ERP vs. individuelle ERP · Funktionen und Vorteile
- POS: POS Software entwickeln lassen · Moderne Kassensysteme (inkl. TSE-Anforderungen) · Funktionen
- SaaS: SaaS Produkt entwickeln: Ablauf und Kosten · Von der Idee zum SaaS Produkt
- Software: Wie findet man die richtige Softwareentwicklungsagentur? · Individuelle Software: Vorteile und Einsatzbereiche

## 5. Backlink plan (white-hat only)

Linkable assets: the cost and process guides above, plus (next) a *Software-Entwicklung Kostenrechner/Checkliste*, a *React vs. Next.js* decision guide, and a *CRM/ERP Anforderungs-Checkliste (PDF)*.
Outreach: German IT/startup media and newsletters, Mittelstand/Gründer communities, developer communities (own articles + genuine participation), relevant directories (e.g. Clutch, GoodFirms, German agency directories) with accurate profiles.
No PBNs, no link networks, no purchased links.

## 6. ToolStack.tools

Not touched. It stays a separate topical entity (HEIC zu JPG, PDF komprimieren …). If it is a legitimate ZahrionTech product, add one natural link in the footer or about page – no forced anchors.

---------------------------------------------------------------------

## 7. Issues found in the existing site (fixed)

1. **Wrong canonical on inner pages (rendered DOM):** `index.html` hard-coded the home canonical/description while pages added their own via Helmet → most likely two conflicting canonicals/descriptions in the rendered DOM of every inner page (static home values + page values). Now each URL ships its own correct head, so the static values always match the page.
2. **Missing rewrites:** `vercel.json` listed only 9 routes; blog posts, CMS, POS, billing, vet and location pages returned 404 on direct load/refresh. Fixed (static file per URL).
3. **Sitemap** now generated from one page list (58 URLs) so it cannot drift.
4. Two legacy blog `<title>`s are 75–77 characters (will truncate in Google). Left untouched – shorten if you like.

## 8. After deploy

- Search Console: submit `https://zahriontech.com/sitemap.xml`; inspect `/de` and one German service page; check *International targeting / hreflang* after a week.
- Verify `https://zahriontech.com/api/geo` returns `{"country":"DE"}` from a German IP (Vercel Function in `api/geo.js`).
- Run Lighthouse on `/` and `/de/softwareentwicklung` (GA is loaded `async`; no other scripts were added).
- Breadcrumb schema was intentionally not added (no visible breadcrumbs on the site); add visible breadcrumbs first if you want it.
- Schema in use: ProfessionalService (with offer catalog), WebSite, Service, FAQPage, BlogPosting – all mirror visible content. No address, rating or phone data is published in markup.
