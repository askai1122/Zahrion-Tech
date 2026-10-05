import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import LangDetect from './i18n/LangDetect'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import ServicePage from './pages/ServicePage'
import LocationServicePage from './pages/LocationServicePage'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'

const SERVICE_SLUGS = [
  'hire-web-developer',
  'hire-mobile-app-developer',
  'hire-nodejs-developer',
  'hire-software-developer',
  'custom-pos-software-development',
  'custom-cms-development',
  'billing-software-development',
  'veterinary-clinic-app-development',
]

// English-only US/Canada city landing pages
const LOCATION_SLUGS = [
  'software-development-agency-nashville',
  'custom-software-development-edmonton',
  'it-outsourcing-hartford',
  'pos-software-systems-chicago',
]

// Every public page exists twice: "/..." (English) and "/de/..." (German)
const localizedRoutes = prefix => [
  <Route key={prefix + 'home'} path={prefix || '/'} element={<Home />} />,
  <Route key={prefix + 'about'} path={prefix + '/about'} element={<About />} />,
  <Route key={prefix + 'services'} path={prefix + '/services'} element={<Services />} />,
  <Route key={prefix + 'portfolio'} path={prefix + '/portfolio'} element={<Portfolio />} />,
  <Route key={prefix + 'contact'} path={prefix + '/contact'} element={<Contact />} />,
  <Route key={prefix + 'blog'} path={prefix + '/blog'} element={<Blog />} />,
  <Route key={prefix + 'post'} path={prefix + '/blog/:slug'} element={<BlogPost />} />,
  ...SERVICE_SLUGS.map(slug => (
    <Route key={prefix + slug} path={`${prefix}/${slug}`} element={<ServicePage slug={slug} />} />
  )),
]

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.startsWith('/admin') || sessionStorage.getItem('nx_visitor_tracked')) return

    sessionStorage.setItem('nx_visitor_tracked', '1')
    fetch('https://api.zahriontech.com/api/visitors/track', { method: 'POST' }).catch(() => {})
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-950 bg-slate-50 transition-colors duration-300">
      <LangDetect />
      <Navbar />
      <main className="flex-1 mt-[50px]">
        <AnimatePresence mode="wait">
          <Routes>
            {localizedRoutes('')}
            {localizedRoutes('/de')}
            {LOCATION_SLUGS.map(slug => (
              <Route key={slug} path={`/${slug}`} element={<LocationServicePage />} />
            ))}
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
