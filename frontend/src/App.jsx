import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import HireWebDeveloper from './pages/HireWebDeveloper'
import HireMobileAppDeveloper from './pages/HireMobileAppDeveloper'
import HireNodeJsDeveloper from './pages/HireNodeJsDeveloper'
import HireSoftwareDeveloper from './pages/HireSoftwareDeveloper'
import CustomPOSSoftware from './pages/CustomPOSSoftware'
import CustomCMSDevelopment from './pages/CustomCMSDevelopment'
import BillingSoftwareDevelopment from './pages/BillingSoftwareDevelopment'
import VeterinaryClinicApp from './pages/VeterinaryClinicApp'
import LocationServicePage from './pages/LocationServicePage'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'
import ServicePage from './pages/ServicePage'
import LangHead from './components/LangHead'
import LanguageDetector from './components/LanguageDetector'
import { staticPages, servicePaths } from './i18n/routes'

// German versions of the static pages (English routes below are unchanged)
const deStatic = [
  ['home', <Home />], ['about', <About />], ['services', <Services />],
  ['portfolio', <Portfolio />], ['contact', <Contact />], ['blog', <Blog />],
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
      <LangHead />
      <LanguageDetector />
      <Navbar />
      <main className="flex-1 mt-[50px]">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hire-web-developer" element={<HireWebDeveloper />} />
            <Route path="/hire-mobile-app-developer" element={<HireMobileAppDeveloper />} />
            <Route path="/hire-nodejs-developer" element={<HireNodeJsDeveloper />} />
            <Route path="/hire-software-developer" element={<HireSoftwareDeveloper />} />
            <Route path="/custom-pos-software-development" element={<CustomPOSSoftware />} />
            <Route path="/custom-cms-development" element={<CustomCMSDevelopment />} />
            <Route path="/billing-software-development" element={<BillingSoftwareDevelopment />} />
            <Route path="/veterinary-clinic-app-development" element={<VeterinaryClinicApp />} />
            <Route path="/software-development-agency-nashville" element={<LocationServicePage />} />
            <Route path="/custom-software-development-edmonton" element={<LocationServicePage />} />
            <Route path="/it-outsourcing-hartford" element={<LocationServicePage />} />
            <Route path="/pos-software-systems-chicago" element={<LocationServicePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* New English service pages (data-driven; the existing English pages above are untouched) */}
            {Object.entries(servicePaths).filter(([, v]) => !v.legacy).map(([key, v]) => (
              <Route key={`en-${key}`} path={v.en} element={<ServicePage serviceKey={key} />} />
            ))}

            {/* German site: /de/... */}
            {deStatic.map(([key, el]) => (
              <Route key={`de-${key}`} path={staticPages[key].de} element={el} />
            ))}
            <Route path="/de/blog/:slug" element={<BlogPost />} />
            {Object.entries(servicePaths).map(([key, v]) => (
              <Route key={`de-${key}`} path={v.de} element={<ServicePage serviceKey={key} />} />
            ))}
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
