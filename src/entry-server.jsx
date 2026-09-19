import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'

/**
 * Build-time only. Renders a route to static HTML + head tags so that Googlebot
 * (and every other crawler, plus LLM answer engines) receives real content in
 * the initial HTML response instead of an empty <div id="root">.
 *
 * React's createRoot() discards whatever is already inside #root on hydration,
 * so the static markup is replaced cleanly by the live app with no mismatch risk.
 */
export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StaticRouter>
    </HelmetProvider>
  )
  const { helmet } = helmetContext
  // prioritizeSeoTags moves title/description/canonical/OG into helmet.priority,
  // so it has to be emitted first or those tags silently vanish.
  const head = helmet
    ? [
        helmet.priority?.toString() ?? '',
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ].filter(Boolean).join('\n    ')
    : ''
  return { html, head }
}
