// Combined blog access: the two original English posts (unchanged) + the new DE/EN articles.
import { posts as legacyPosts } from './blogData.js'
import { blogArticles } from './blogArticles.js'

const legacyLinks = {
  'custom-pos-software-cost-2026': ['pos', 'custom', 'erp'],
  'custom-cms-vs-wordpress': ['cms', 'web', 'nextjs'],
}

const all = [
  ...legacyPosts.map(p => ({ ...p, lang: 'en', pair: null, links: legacyLinks[p.slug] || [] })),
  ...blogArticles,
]

export const allPosts = all

export function getPosts(lang) {
  return all
    .filter(p => p.lang === lang)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(lang, slug) {
  return all.find(p => p.lang === lang && p.slug === slug) || null
}
