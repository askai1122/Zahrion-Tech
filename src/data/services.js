// Existing service pages, used for internal linking from city and industry pages.
export const services = [
  { slug: 'hire-software-developer', label: 'Hire a Software Developer', short: 'Custom Software Development', blurb: 'Dedicated engineers for web, mobile, desktop and backend builds.' },
  { slug: 'hire-web-developer', label: 'Hire a Web Developer', short: 'Web Development', blurb: 'Fast, accessible, search-friendly websites and web applications.' },
  { slug: 'hire-mobile-app-developer', label: 'Hire a Mobile App Developer', short: 'Mobile App Development', blurb: 'iOS and Android apps, native or cross-platform.' },
  { slug: 'hire-nodejs-developer', label: 'Hire a Node.js Developer', short: 'Node.js Backend Development', blurb: 'APIs, real-time services and scalable backend systems.' },
  { slug: 'hire-python-developer', label: 'Hire a Python Developer', short: 'Python Development', blurb: 'Automation, data pipelines, APIs and AI integration.' },
  { slug: 'pos-software-development', label: 'POS Software Development', short: 'POS Software', blurb: 'Point of sale systems for retail, restaurants and pharmacies.' },
  { slug: 'crm-erp-development', label: 'CRM & ERP Development', short: 'CRM & ERP', blurb: 'Customer and operations systems built around your process.' },
  { slug: 'business-management-software', label: 'Business Management Software', short: 'Business Management Software', blurb: 'One system for inventory, billing, staff and reporting.' },
]

export const serviceBySlug = Object.fromEntries(services.map(s => [s.slug, s]))
