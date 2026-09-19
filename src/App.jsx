import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import GlobalSchema from './components/GlobalSchema'
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
import HirePythonDeveloper from './pages/HirePythonDeveloper'
import POSSoftwareDevelopment from './pages/POSSoftwareDevelopment'
import CRMERPDevelopment from './pages/CRMERPDevelopment'
import BusinessManagementSoftware from './pages/BusinessManagementSoftware'
import HireSoftwareDeveloper from './pages/HireSoftwareDeveloper'
import Locations from './pages/Locations'
import CityPage from './pages/CityPage'
import IndustriesHub from './pages/IndustriesHub'
import IndustryPage from './pages/IndustryPage'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (pathname.startsWith('/admin') || sessionStorage.getItem('nx_visitor_tracked')) return

    sessionStorage.setItem('nx_visitor_tracked', '1')
    fetch('https://zahrion-tech-production.up.railway.app/api/visitors/track', { method: 'POST' }).catch(() => {})
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-950 bg-slate-50 transition-colors duration-300">
      <GlobalSchema />
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
            <Route path="/hire-python-developer" element={<HirePythonDeveloper />} />
            <Route path="/pos-software-development" element={<POSSoftwareDevelopment />} />
            <Route path="/crm-erp-development" element={<CRMERPDevelopment />} />
            <Route path="/business-management-software" element={<BusinessManagementSoftware />} />
            <Route path="/hire-software-developer" element={<HireSoftwareDeveloper />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/software-development-company/:citySlug" element={<CityPage />} />
            <Route path="/industries" element={<IndustriesHub />} />
            <Route path="/industries/:industrySlug" element={<IndustryPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
