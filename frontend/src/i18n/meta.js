// Per-page SEO metadata for static pages and for the legacy English service pages.
// English values are copied from the existing Helmet blocks (unchanged) so the build-time
// prerender produces the same metadata the pages set at runtime.
// German values are unique per page (title, description, OG title/description).

export const staticMeta = {
  home: {
    en: {
      title: 'ZahrionTech – Software Development for USA, UK & EU',
      description: 'ZahrionTech builds custom websites, mobile apps, and software for businesses in the USA, UK, Germany, and Europe.',
      ogTitle: 'ZahrionTech – Software Development for USA, UK & EU',
      ogDescription: 'Custom web, mobile, and software development for businesses across the USA, UK, Germany, and Europe.',
    },
    de: {
      title: 'Individuelle Softwareentwicklung für Unternehmen | ZahrionTech',
      description: 'ZahrionTech entwickelt individuelle Software, Webanwendungen, Mobile Apps, CRM-, ERP- und SaaS-Lösungen für Unternehmen. Jetzt Projekt besprechen.',
      ogTitle: 'Individuelle Softwareentwicklung für Unternehmen | ZahrionTech',
      ogDescription: 'Individuelle Software, Webanwendungen, Mobile Apps, CRM-, ERP-, POS- und SaaS-Lösungen – ZahrionTech, Ihr Partner für Softwareentwicklung.',
    },
  },
  about: {
    en: {
      title: 'About Us – ZahrionTech',
      description: 'Learn about ZahrionTech — our mission, team, and the values that drive every product we build for clients across the USA, UK, Germany, and Europe.',
      ogTitle: 'About Us – ZahrionTech',
      ogDescription: 'Learn about ZahrionTech — our mission, team, and the values that drive every product we build for clients across the USA, UK, Germany, and Europe.',
    },
    de: {
      title: 'Über uns – Softwareentwicklung mit Anspruch | ZahrionTech',
      description: 'Lernen Sie ZahrionTech kennen: Mission, Team und die Werte hinter jeder Software, die wir für Kunden in Deutschland, Europa und den USA entwickeln.',
      ogTitle: 'Über uns | ZahrionTech',
      ogDescription: 'Mission, Team und Werte: So arbeitet ZahrionTech als Partner für individuelle Softwareentwicklung.',
    },
  },
  services: {
    en: {
      title: 'Services – ZahrionTech',
      description: "Explore ZahrionTech's services for clients in the USA, UK, Germany, and Europe: web, mobile, and desktop development, and more.",
      ogTitle: 'Services – ZahrionTech',
      ogDescription: 'Web development, mobile apps, desktop software, and more — for clients in the USA, UK, Germany, and Europe.',
    },
    de: {
      title: 'Leistungen – Software-, Web- und App-Entwicklung | ZahrionTech',
      description: 'Individuelle Software, Webentwicklung, Mobile Apps, CRM, ERP, POS und SaaS: alle Leistungen von ZahrionTech im Überblick – mit kostenlosem Erstgespräch.',
      ogTitle: 'Leistungen – Software-, Web- und App-Entwicklung | ZahrionTech',
      ogDescription: 'Individuelle Software, Webentwicklung, Mobile Apps, CRM, ERP, POS und SaaS aus einer Hand.',
    },
  },
  portfolio: {
    en: {
      title: 'Portfolio – ZahrionTech',
      description: "Browse ZahrionTech's portfolio of web apps, mobile apps, desktop software and social media campaigns.",
      ogTitle: 'Portfolio – ZahrionTech',
      ogDescription: "Browse ZahrionTech's portfolio of web apps, mobile apps, desktop software and social media campaigns.",
    },
    de: {
      title: 'Referenzen – Web-, Mobile- und Desktop-Projekte | ZahrionTech',
      description: 'Ausgewählte Projekte von ZahrionTech: Webanwendungen, Mobile Apps und Desktop-Software, umgesetzt für Startups und etablierte Unternehmen.',
      ogTitle: 'Referenzen | ZahrionTech',
      ogDescription: 'Webanwendungen, Mobile Apps und Desktop-Software: ausgewählte Projekte von ZahrionTech.',
    },
  },
  contact: {
    en: {
      title: 'Contact Us – ZahrionTech',
      description: "Get in touch with ZahrionTech. Serving clients across the USA, UK, Germany, and Europe. Tell us about your project and we'll respond within 24 hours.",
      ogTitle: 'Contact Us – ZahrionTech',
      ogDescription: 'Get in touch with ZahrionTech. Serving clients across the USA, UK, Germany, and Europe.',
    },
    de: {
      title: 'Kontakt & Angebot anfragen | ZahrionTech',
      description: 'Projekt besprechen: Schildern Sie ZahrionTech Ihr Vorhaben und erhalten Sie innerhalb von 24 Stunden eine Rückmeldung. Kostenloses Erstgespräch möglich.',
      ogTitle: 'Kontakt & Angebot anfragen | ZahrionTech',
      ogDescription: 'Projekt besprechen und Angebot anfragen – Rückmeldung innerhalb von 24 Stunden.',
    },
  },
  blog: {
    en: {
      title: 'Blog – ZahrionTech',
      description: 'Practical breakdowns on custom software, CMS, POS systems, and billing software — costs, trade-offs, and when off-the-shelf stops working.',
      ogTitle: 'Blog – ZahrionTech',
      ogDescription: 'Practical breakdowns on custom software, CMS, POS systems, and billing software.',
    },
    de: {
      title: 'Blog: Softwareentwicklung & individuelle Software | ZahrionTech',
      description: 'Praxisnahe Beiträge zu Kosten, Ablauf und Technologie-Entscheidungen bei Softwareentwicklung, CRM, ERP, POS, Apps und SaaS – verständlich erklärt.',
      ogTitle: 'Blog: Softwareentwicklung & individuelle Software | ZahrionTech',
      ogDescription: 'Kosten, Ablauf und Technologie-Entscheidungen bei Softwareprojekten – verständlich erklärt.',
    },
  },
}

// Existing English service pages (their React components keep their own Helmet; this copy is
// only used by the build-time prerender so crawlers see the same head without running JS).
export const legacyServiceMetaEn = {
  web: {
    title: 'Hire a Web Developer in USA, UK & Europe – ZahrionTech',
    description: 'Hire an experienced web developer for your business in the USA, UK, Germany, or Europe. Fast, custom, SEO-optimized websites.',
    ogTitle: 'Hire a Web Developer in USA, UK & Europe – ZahrionTech',
    ogDescription: 'Custom website & web application development for USA, UK, and European businesses.',
    h1: 'Hire a Web Developer in the USA, UK & Europe',
  },
  app: {
    title: 'Hire a Mobile App Developer | ZahrionTech',
    description: 'Hire a mobile app developer for your business in the USA, UK, Germany, or Europe. iOS and Android apps with Flutter or React Native.',
    ogTitle: 'Hire a Mobile App Developer | ZahrionTech',
    ogDescription: 'iOS & Android app development for USA, UK, and European businesses.',
    h1: 'Hire a Mobile App Developer',
  },
  node: {
    title: 'Hire a Node.js Developer in USA, UK & Europe – ZahrionTech',
    description: 'Hire an experienced Node.js developer for your business in the USA, UK, Germany, or Europe. Scalable backend and API development.',
    ogTitle: 'Hire a Node.js Developer in USA, UK & Europe – ZahrionTech',
    ogDescription: 'Scalable Node.js backend and API development for USA, UK, and European businesses.',
    h1: 'Hire a Node.js Developer in the USA, UK & Europe',
  },
  software: {
    title: 'Hire a Software Developer in USA, UK & Europe – ZahrionTech',
    description: 'Need a software developer in the USA, UK, Germany, or Europe? ZahrionTech builds custom web, mobile, and desktop software.',
    ogTitle: 'Hire a Software Developer in USA, UK & Europe – ZahrionTech',
    ogDescription: 'Custom software development for USA, UK, and European startups and businesses.',
    h1: 'Need a Software Developer in the USA, UK, or Europe?',
  },
  pos: {
    title: 'Custom POS Software Development Company – ZahrionTech',
    description: 'ZahrionTech builds custom point-of-sale software for retail, restaurants, and multi-location businesses — inventory sync, payments, and full ownership of your code.',
    ogTitle: 'Custom POS Software Development Company – ZahrionTech',
    ogDescription: 'Custom point-of-sale systems built around your checkout flow — inventory, payments, multi-location sync.',
    h1: 'Custom POS Software Development',
  },
  cms: {
    title: 'Custom CMS Development Company – ZahrionTech',
    description: 'ZahrionTech is a custom CMS development company building content management systems shaped around your exact content and team — no plugin bloat, no licensing fees.',
    ogTitle: 'Custom CMS Development Company – ZahrionTech',
    ogDescription: 'A content management system built around your content, your team, and your workflow.',
    h1: 'Custom CMS Development',
  },
  billing: {
    title: 'Billing Software Development Company – ZahrionTech',
    description: 'ZahrionTech builds custom billing and invoicing software — recurring billing, usage-based pricing, and payment integration, with no revenue-share fees.',
    ogTitle: 'Billing Software Development Company – ZahrionTech',
    ogDescription: 'Custom recurring billing and invoicing software, built around your exact pricing model.',
    h1: 'Billing Software Development',
  },
  vet: {
    title: 'Custom Branded App for Veterinary Clinics – ZahrionTech',
    description: 'ZahrionTech builds custom branded mobile apps for veterinary clinics — appointment booking, pet health records, and automated reminders, under your own name.',
    ogTitle: 'Custom Branded App for Veterinary Clinics – ZahrionTech',
    ogDescription: 'A branded mobile app for your veterinary practice — booking, records, and reminders.',
    h1: 'Custom Branded App for Veterinary Clinics',
  },
}
