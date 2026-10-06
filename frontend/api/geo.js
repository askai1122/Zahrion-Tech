// Vercel Function: returns the visitor's country (ISO code) from Vercel's edge geo header.
// Used only as a FALLBACK language signal (see src/components/LanguageDetector.jsx). Not cached.
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'private, no-store')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.status(200).json({ country: req.headers['x-vercel-ip-country'] || null })
}
