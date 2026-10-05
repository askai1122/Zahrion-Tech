import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LANG_KEY, isDePath, localize, prefersGerman } from './config'
import { posts } from '../data/blogData'

// Runs once per page load. Sends German visitors to the /de version of whatever
// page they landed on. An explicit choice made with the language switcher always wins.
export default function LangDetect() {
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isDePath(pathname) || pathname.startsWith('/admin')) return
    let saved = null
    try { saved = localStorage.getItem(LANG_KEY) } catch {}
    const wantDe = saved ? saved === 'de' : prefersGerman()
    if (!wantDe) return
    let bare = pathname
    if (pathname.startsWith('/blog/')) {
      // blog posts use different slugs in German: jump to the translated post (or the blog index)
      const cur = posts.find(p => p.lang === 'en' && p.slug === pathname.slice(6))
      bare = cur && cur.pair ? '/blog/' + cur.pair : '/blog'
    }
    const target = localize(bare, 'de')
    if (target !== pathname) navigate(target + search + hash, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
