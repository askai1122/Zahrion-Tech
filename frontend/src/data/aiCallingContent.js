// Content builders for the AI Calling Agent location pages (city + country hub).
// Pure functions of the city registry (aiCities.js), so the React page, the sitemap, the per-URL
// prerendered <head>/<noscript> and the SEO audit all read exactly the same text.
// Rules: no invented prices, client names, statistics or legal claims beyond well-known public regulation.
import { CITIES, COUNTRIES, citiesOf, cityPath, hubPath, cityByPath } from './aiCities.js'
import { EN, DE, hash, pick, pickN, orList } from './aiCityCopy.js'
import { SALTS } from './aiVariants.js'

// ───────────────────────── industries ─────────────────────────
// key -> { en: [label, text], de: [label, text] }; {c} = city name
export const IND = {
  fin: {
    en: ['finance & accounting', 'Banks, advisers and accounting firms in {c} get a lot of routine calls: opening hours, document checklists, appointment requests. The agent answers these, books consultations with the right adviser and routes anything involving account details to a verified human.'],
    de: ['Finanzen & Steuerberatung', 'Banken, Berater und Steuerkanzleien in {c} erhalten viele Routineanrufe zu Öffnungszeiten, Unterlagen und Terminen. Der Agent beantwortet diese, bucht Beratungstermine bei der richtigen Person und leitet alles, was Kontodaten betrifft, an einen verifizierten Mitarbeiter weiter.'],
  },
  hlt: {
    en: ['healthcare', 'Clinics and practices in {c} lose time to scheduling calls. The agent books, confirms and reschedules appointments, answers opening-hours and location questions, and flags urgent callers to staff immediately instead of handling anything clinical itself.'],
    de: ['Gesundheit & Praxen', 'Praxen und Kliniken in {c} verlieren viel Zeit mit Terminanrufen. Der Agent bucht, bestätigt und verschiebt Termine, beantwortet Fragen zu Öffnungszeiten und Anfahrt und übergibt dringende Anrufer sofort an Ihr Team – medizinische Auskünfte gibt er nicht.'],
  },
  leg: {
    en: ['legal services', 'Law firms in {c} cannot afford to miss a first call from a prospective client. The agent collects the matter type and contact details, asks the intake questions you define and books a consultation, while never giving legal advice.'],
    de: ['Recht & Kanzleien', 'Kanzleien in {c} können sich keinen verpassten Erstkontakt leisten. Der Agent erfasst Anliegen und Kontaktdaten, stellt Ihre Vorabfragen und vereinbart einen Beratungstermin – Rechtsberatung gibt er ausdrücklich nicht.'],
  },
  med: {
    en: ['media & entertainment', 'Studios, agencies and venues in {c} get bursts of calls around launches and events. The agent handles ticket, booking and schedule questions at any volume and sends press or partnership enquiries to the right person.'],
    de: ['Medien & Veranstaltungen', 'Agenturen, Produktionen und Veranstalter in {c} erleben Anrufspitzen rund um Events und Launches. Der Agent beantwortet Fragen zu Tickets, Buchungen und Terminen in jeder Menge und leitet Presse- und Kooperationsanfragen an die richtige Person.'],
  },
  hos: {
    en: ['hospitality & restaurants', 'Hotels and restaurants in {c} get most calls during service, when staff are busiest. The agent takes reservations, answers menu and directions questions and confirms bookings, so nobody has to leave a guest to pick up the phone.'],
    de: ['Gastronomie & Hotellerie', 'Hotels und Restaurants in {c} bekommen die meisten Anrufe genau dann, wenn das Team am meisten zu tun hat. Der Agent nimmt Reservierungen an, beantwortet Fragen zu Speisekarte und Anfahrt und bestätigt Buchungen.'],
  },
  re: {
    en: ['real estate', 'Agents and property managers in {c} lose leads when calls go to voicemail. The agent answers listing enquiries, qualifies buyers or tenants on budget and timing, books viewings in your calendar and logs each lead in your CRM.'],
    de: ['Immobilien', 'Makler und Hausverwaltungen in {c} verlieren Interessenten an die Mailbox. Der Agent beantwortet Objektanfragen, fragt Budget und Zeitrahmen ab, vereinbart Besichtigungen in Ihrem Kalender und trägt jeden Kontakt ins CRM ein.'],
  },
  log: {
    en: ['logistics & transport', 'Freight, courier and warehouse operations in {c} field constant status and delivery-window calls. The agent looks up shipment status through your systems, reschedules deliveries and escalates exceptions to dispatch.'],
    de: ['Logistik & Transport', 'Speditionen, Kurierdienste und Lager in {c} bekommen laufend Anrufe zu Sendungsstatus und Lieferfenstern. Der Agent fragt den Status in Ihren Systemen ab, verschiebt Zustelltermine und eskaliert Ausnahmen an die Disposition.'],
  },
  ene: {
    en: ['energy & utilities', 'Energy and field-service companies in {c} deal with outage reports, billing questions and site-visit scheduling. The agent triages the call, collects the details your crew needs and books or confirms visits.'],
    de: ['Energie & Versorger', 'Energieversorger und Servicebetriebe in {c} bearbeiten Störungsmeldungen, Abrechnungsfragen und Einsatztermine. Der Agent ordnet den Anruf ein, erfasst die Angaben für Ihr Team und bucht oder bestätigt Termine.'],
  },
  hs: {
    en: ['home & field services', 'Plumbers, electricians, HVAC and cleaning companies in {c} cannot answer the phone on a job. The agent picks up, asks what is wrong, gives your standard call-out information and books the visit into your schedule.'],
    de: ['Handwerk & Dienstleister', 'Handwerker, Elektriker, Haustechnik- und Reinigungsbetriebe in {c} können auf der Baustelle nicht ans Telefon. Der Agent nimmt ab, fragt nach dem Problem, nennt Ihre Standardinformationen und trägt den Einsatz in Ihren Plan ein.'],
  },
  tec: {
    en: ['technology & software', 'Software and IT companies in {c} use voice agents for first-line support and demo booking. The agent answers product questions from your knowledge base, qualifies inbound leads and creates tickets or meetings automatically.'],
    de: ['IT & Software', 'IT- und Softwareunternehmen in {c} setzen Sprachagenten für den First-Level-Support und die Demo-Terminierung ein. Der Agent beantwortet Produktfragen aus Ihrer Wissensbasis, qualifiziert Anfragen und legt Tickets oder Termine automatisch an.'],
  },
  tou: {
    en: ['tourism & travel', 'Tour operators, attractions and travel agencies in {c} get seasonal call spikes. The agent answers availability and itinerary questions, takes booking requests and replies in the caller’s language.'],
    de: ['Tourismus & Reisen', 'Reiseveranstalter, Sehenswürdigkeiten und Reisebüros in {c} erleben saisonale Anrufspitzen. Der Agent beantwortet Fragen zu Verfügbarkeit und Programm, nimmt Buchungsanfragen auf und antwortet in der Sprache des Anrufers.'],
  },
  aut: {
    en: ['automotive', 'Dealerships and workshops in {c} can book service appointments, answer parts and opening-hours questions and qualify sales enquiries without tying up the front desk.'],
    de: ['Automobil & Werkstätten', 'Autohäuser und Werkstätten in {c} können Servicetermine buchen, Fragen zu Teilen und Öffnungszeiten beantworten und Verkaufsanfragen qualifizieren, ohne den Empfang zu blockieren.'],
  },
  mfg: {
    en: ['manufacturing & industry', 'Manufacturers and suppliers in {c} take order-status, quote-request and supplier calls all day. The agent answers the routine ones from your ERP data and routes technical or commercial questions to the right department.'],
    de: ['Industrie & Fertigung', 'Hersteller und Zulieferer in {c} nehmen den ganzen Tag Anrufe zu Auftragsstatus, Angeboten und Lieferanten entgegen. Der Agent beantwortet Routinefragen aus Ihren ERP-Daten und leitet technische oder kaufmännische Fragen an die richtige Abteilung.'],
  },
  edu: {
    en: ['education', 'Schools, colleges and training providers in {c} face enrolment peaks. The agent answers course, fee and deadline questions, books campus tours or advisory calls and sends the details by SMS or email.'],
    de: ['Bildung & Hochschulen', 'Schulen, Hochschulen und Weiterbildungsanbieter in {c} haben Anmeldespitzen. Der Agent beantwortet Fragen zu Kursen, Gebühren und Fristen, vereinbart Beratungsgespräche und verschickt Details per SMS oder E-Mail.'],
  },
  ins: {
    en: ['insurance', 'Insurance brokers and agencies in {c} handle repeat questions about quotes, policy documents and claims status. The agent collects the first-notice details, books broker callbacks and escalates anything that needs a licensed adviser.'],
    de: ['Versicherungen', 'Versicherungsmakler und Agenturen in {c} beantworten ständig dieselben Fragen zu Angeboten, Unterlagen und Schadenstatus. Der Agent nimmt die ersten Schadendaten auf, vereinbart Rückrufe und gibt alles, was eine Beratung braucht, an Ihr Team.'],
  },
  ret: {
    en: ['retail & e-commerce', 'Retailers and online shops in {c} get calls about orders, returns and stock. The agent checks order status through your shop system, explains your return policy and hands complaints to a person.'],
    de: ['Handel & E-Commerce', 'Händler und Onlineshops in {c} erhalten Anrufe zu Bestellungen, Retouren und Verfügbarkeit. Der Agent prüft den Bestellstatus in Ihrem Shopsystem, erklärt Ihre Rückgaberegeln und übergibt Beschwerden an einen Mitarbeiter.'],
  },
  agr: {
    en: ['agriculture & food', 'Farms, co-ops and food suppliers in {c} are often away from the desk. The agent takes orders and delivery requests, confirms pickup windows and logs everything for later.'],
    de: ['Landwirtschaft & Lebensmittel', 'Betriebe, Genossenschaften und Lebensmittellieferanten in {c} sind oft nicht am Schreibtisch. Der Agent nimmt Bestellungen und Lieferwünsche an, bestätigt Abholzeiten und protokolliert alles.'],
  },
  gov: {
    en: ['public sector & services', 'Public bodies and their contractors in {c} can use a voice agent for out-of-hours information lines, appointment booking and routing callers to the correct department.'],
    de: ['Öffentlicher Sektor', 'Behörden und Auftragnehmer in {c} können einen Sprachagenten für Informationshotlines außerhalb der Servicezeiten, Terminvergabe und die Weiterleitung an die richtige Stelle nutzen.'],
  },
  nfp: {
    en: ['non-profits & associations', 'Non-profits and associations in {c} rely on small teams. The agent answers membership and donation questions, registers people for events and passes sensitive calls to staff.'],
    de: ['Vereine & Verbände', 'Vereine und Verbände in {c} arbeiten oft mit kleinen Teams. Der Agent beantwortet Fragen zu Mitgliedschaft und Spenden, meldet Personen zu Veranstaltungen an und gibt sensible Anrufe an Mitarbeitende weiter.'],
  },
}

// ───────────────────────── regulation (public, well-known rules; not legal advice) ─────────────────────────
const US_ALL_PARTY = new Set(['CA', 'CT', 'FL', 'IL', 'MD', 'MA', 'MT', 'NV', 'NH', 'PA', 'WA'])

function rulesEn(c) {
  const R = c.regionName
  switch (c.country) {
    case 'usa': {
      const consent = c.hub
        ? 'Call-recording rules vary by state, and several states require every party\u2019s consent, so we recommend disclosing recording and AI use at the start of every call.'
        : US_ALL_PARTY.has(c.region)
        ? `${R} is generally treated as an all-party-consent state for recording phone calls, so the agent opens each call with a clear recording and AI disclosure.`
        : `${R} generally follows one-party consent for recording calls, but callers are often in other states, so we recommend disclosing recording and AI use at the start of every call.`
      return `In the United States, outbound calls that use an AI-generated voice fall under the Telephone Consumer Protection Act (TCPA): the FCC has confirmed that AI voices count as “artificial” voices, so outbound calls generally need the called person’s prior express consent. Calls are limited to 8 a.m.–9 p.m. in the recipient’s local time, and the National Do Not Call Registry and your own opt-out list must be respected. Answering inbound calls from your own customers is far less restricted. ${consent} This is general information, not legal advice; have your counsel review any outbound calling programme.`
    }
    case 'uk':
      return 'In the UK, outbound marketing calls are governed by the Privacy and Electronic Communications Regulations (PECR) and UK GDPR. Numbers registered with the Telephone Preference Service (TPS or CTPS) must be screened out, fully automated marketing calls need prior consent, callers must identify the business, and Ofcom’s rules on abandoned and silent calls limit how dialling campaigns behave. Recorded calls need a lawful basis and a clear notice. Answering inbound calls from your own customers is much simpler. This is general information, not legal advice.'
    case 'canada': {
      const qc = c.region === 'QC' ? ' In Quebec, customers also expect service in French, so we build bilingual French/English call flows.' : ''
      return `In Canada, outbound telemarketing is regulated by the CRTC’s Unsolicited Telecommunications Rules and the National Do Not Call List, and commercial electronic messages by CASL. Telemarketing calls are limited to set hours, callers must identify themselves and opt-outs must be honoured. Personal data is covered by PIPEDA or the applicable provincial privacy law in ${c.regionName}.${qc} Answering inbound calls from your own customers is far less restricted. This is general information, not legal advice.`
    }
    case 'australia':
      return 'In Australia, outbound telemarketing is regulated by the Do Not Call Register Act 2006 and the Telemarketing and Research Calls Industry Standard 2017, enforced by the ACMA. Numbers on the Do Not Call Register are off-limits for most marketing calls, calls are limited to weekdays 9 a.m.–8 p.m. and Saturdays 9 a.m.–5 p.m. (none on Sundays or public holidays), and callers must identify themselves and end the call on request. Personal information is handled under the Privacy Act 1988. This is general information, not legal advice.'
    default:
      return ''
  }
}

function rulesDe(c) {
  return `Für Werbeanrufe an Verbraucher verlangt § 7 UWG eine vorherige ausdrückliche Einwilligung; im B2B-Bereich ist zumindest eine mutmaßliche Einwilligung nötig. Verstöße kann die Bundesnetzagentur mit Bußgeldern von bis zu 300.000 Euro ahnden. Hinzu kommen die DSGVO (Rechtsgrundlage, Information, Speicherung von Gesprächsdaten), das Verbot der Gesprächsaufzeichnung ohne Einwilligung (§ 201 StGB) und die Transparenzpflicht der EU-KI-Verordnung, wonach Anrufer erkennen müssen, dass sie mit einer KI sprechen. Eingehende Anrufe Ihrer eigenen Kunden zu beantworten ist deutlich unkritischer. Dies ist allgemeine Information und keine Rechtsberatung.`
}

function outboundCheckEn(c) {
  switch (c.country) {
    case 'usa': return 'prior express consent under the TCPA, the National Do Not Call Registry, calling hours in the recipient’s time zone and your state’s call-recording rules'
    case 'uk': return 'PECR consent rules, TPS/CTPS screening, Ofcom’s abandoned-call rules and UK GDPR for recorded calls'
    case 'canada': return 'the CRTC Unsolicited Telecommunications Rules, the National Do Not Call List, CASL where messages are involved and privacy law'
    default: return 'the Do Not Call Register, permitted calling hours, identification requirements and the Privacy Act 1988'
  }
}

const fill = (t, c) => t.replaceAll('{c}', c.name)


// ───────────────────────── call scenarios per industry (5 each; 2 are picked per city) ─────────────────────────
const SCEN = {
  fin: { en: ['booking consultations with the right adviser', 'document checklists for new clients', 'opening-hours and branch questions', 'callback requests for loan or mortgage enquiries', 'appointment reminders before tax and review meetings'],
         de: ['Beratungstermine bei der passenden Person buchen', 'Unterlagenlisten für Neukunden nennen', 'Fragen zu Öffnungszeiten und Standorten beantworten', 'Rückrufwünsche zu Krediten und Finanzierungen aufnehmen', 'Erinnerungen vor Steuer- und Beratungsterminen versenden'] },
  hlt: { en: ['new-patient bookings', 'appointment reminders and reschedules', 'opening hours, directions and parking questions', 'routing urgent callers straight to staff', 'fee and insurance questions from your FAQ'],
         de: ['Neupatienten-Termine buchen', 'Terminerinnerungen und Verschiebungen', 'Fragen zu Öffnungszeiten, Anfahrt und Parken', 'dringende Anrufer direkt an das Team weiterleiten', 'Fragen zu Kosten und Versicherung aus Ihrer FAQ'] },
  leg: { en: ['first-contact intake for new matters', 'booking initial consultations', 'collecting contact details for urgent matters', 'explaining how your fees and process work', 'routing existing clients to the right fee earner'],
         de: ['Erstaufnahme neuer Mandate', 'Erstberatungstermine buchen', 'Kontaktdaten bei dringenden Fällen erfassen', 'Ablauf und Vergütung Ihrer Kanzlei erklären', 'Bestandsmandanten an die richtige Person weiterleiten'] },
  med: { en: ['ticket and showtime questions', 'venue booking enquiries', 'press and partnership routing', 'event schedule and directions', 'waiting-list sign-ups'],
         de: ['Fragen zu Tickets und Spielzeiten', 'Anfragen zur Raum- und Veranstaltungsbuchung', 'Weiterleitung von Presse- und Kooperationsanfragen', 'Veranstaltungsprogramm und Anfahrt', 'Eintragungen in Wartelisten'] },
  hos: { en: ['table reservations and changes', 'group and event enquiries', 'menu, allergen-note and directions questions', 'room availability and check-in times', 'confirming bookings by SMS'],
         de: ['Tischreservierungen und Änderungen', 'Anfragen für Gruppen und Feiern', 'Fragen zu Speisekarte und Anfahrt', 'Zimmerverfügbarkeit und Check-in-Zeiten', 'Buchungsbestätigung per SMS'] },
  re: { en: ['listing enquiries and viewing bookings', 'qualifying buyers on budget and timing', 'tenant maintenance requests', 'valuation-request callbacks', 'logging every lead in your CRM'],
         de: ['Objektanfragen und Besichtigungstermine', 'Interessenten nach Budget und Zeitrahmen qualifizieren', 'Reparaturmeldungen von Mietern', 'Rückrufe für Wertermittlungen', 'jeden Kontakt automatisch im CRM erfassen'] },
  log: { en: ['shipment status look-ups', 'delivery-window changes', 'proof-of-delivery requests', 'exception reports routed to dispatch', 'collection bookings'],
         de: ['Abfrage des Sendungsstatus', 'Änderungen von Lieferfenstern', 'Anfragen zum Liefernachweis', 'Ausnahmemeldungen an die Disposition', 'Abholaufträge annehmen'] },
  ene: { en: ['outage and fault reports', 'meter-reading and billing questions', 'site-visit scheduling', 'collecting address and fault details for crews', 'after-hours emergency routing'],
         de: ['Störungs- und Schadensmeldungen', 'Fragen zu Zählerständen und Abrechnung', 'Einsatzterminierung', 'Adress- und Störungsdaten für die Einsatzteams erfassen', 'Weiterleitung von Notfällen außerhalb der Servicezeiten'] },
  hs: { en: ['emergency call-out triage', 'quote and site-visit bookings', 'job-status updates for customers', 'collecting photos and details by SMS link', 'after-hours message taking'],
         de: ['Einordnung von Notdiensteinsätzen', 'Angebots- und Besichtigungstermine', 'Statusauskünfte zu laufenden Aufträgen', 'Fotos und Details per SMS-Link einsammeln', 'Nachrichtenannahme außerhalb der Arbeitszeit'] },
  tec: { en: ['first-line support triage', 'demo and onboarding bookings', 'password and account-access routing', 'sales enquiry qualification', 'ticket creation from the call'],
         de: ['Ersteinschätzung im First-Level-Support', 'Demo- und Onboarding-Termine', 'Weiterleitung bei Passwort- und Zugangsproblemen', 'Qualifizierung von Vertriebsanfragen', 'Ticketanlage direkt aus dem Gespräch'] },
  tou: { en: ['availability and itinerary questions', 'group booking requests', 'seasonal opening times', 'multilingual visitor questions', 'booking confirmations by SMS'],
         de: ['Fragen zu Verfügbarkeit und Programm', 'Anfragen für Gruppenbuchungen', 'saisonale Öffnungszeiten', 'mehrsprachige Gästefragen', 'Buchungsbestätigungen per SMS'] },
  aut: { en: ['service and MOT-style appointment booking', 'parts availability questions', 'test-drive bookings', 'collection-ready notifications', 'sales lead qualification'],
         de: ['Service- und Inspektionstermine', 'Fragen zur Teileverfügbarkeit', 'Probefahrt-Termine', 'Benachrichtigung bei Abholbereitschaft', 'Qualifizierung von Verkaufsanfragen'] },
  mfg: { en: ['order-status enquiries', 'quote-request intake', 'supplier delivery-slot bookings', 'routing technical questions to engineers', 'spare-parts availability checks'],
         de: ['Anfragen zum Auftragsstatus', 'Aufnahme von Angebotsanfragen', 'Anlieferfenster für Lieferanten buchen', 'technische Fragen an Ingenieure weiterleiten', 'Prüfung der Ersatzteilverfügbarkeit'] },
  edu: { en: ['course and fee questions', 'open-day and campus-tour bookings', 'application-deadline reminders', 'routing to admissions advisers', 'sending course details by SMS or email'],
         de: ['Fragen zu Kursen und Gebühren', 'Termine für Infotage und Führungen', 'Erinnerungen an Bewerbungsfristen', 'Weiterleitung an die Studienberatung', 'Kursinformationen per SMS oder E-Mail verschicken'] },
  ins: { en: ['first-notice-of-loss intake', 'quote callbacks', 'policy document requests', 'claim-status questions', 'renewal reminders'],
         de: ['Aufnahme von Schadenmeldungen', 'Rückrufe zu Angeboten', 'Anfragen zu Versicherungsunterlagen', 'Fragen zum Schadenstatus', 'Erinnerungen an Vertragsverlängerungen'] },
  ret: { en: ['order-status look-ups', 'return and exchange policy questions', 'stock-availability checks', 'store opening hours and directions', 'routing complaints to a person'],
         de: ['Abfrage des Bestellstatus', 'Fragen zu Rückgabe und Umtausch', 'Prüfung der Verfügbarkeit', 'Öffnungszeiten und Anfahrt', 'Beschwerden an einen Mitarbeiter weitergeben'] },
  agr: { en: ['order and delivery requests', 'pickup-window confirmations', 'seasonal stock and price questions', 'market-day and opening-time information', 'logging every order for later'],
         de: ['Bestell- und Lieferwünsche', 'Bestätigung von Abholzeiten', 'Fragen zu saisonalem Sortiment und Preisen', 'Informationen zu Markttagen und Öffnungszeiten', 'Protokollierung jeder Bestellung'] },
  gov: { en: ['out-of-hours information lines', 'appointment booking for services', 'routing callers to the correct department', 'document and opening-hours questions', 'collecting details for follow-up'],
         de: ['Informationshotlines außerhalb der Servicezeiten', 'Terminvergabe für Dienstleistungen', 'Weiterleitung an die zuständige Stelle', 'Fragen zu Unterlagen und Öffnungszeiten', 'Erfassung von Angaben für die Nachbearbeitung'] },
  nfp: { en: ['membership questions', 'donation and gift-aid information', 'event registrations', 'volunteer sign-ups', 'routing sensitive calls to staff'],
         de: ['Fragen zur Mitgliedschaft', 'Informationen zu Spenden und Bescheinigungen', 'Anmeldungen zu Veranstaltungen', 'Anmeldungen von Ehrenamtlichen', 'sensible Anrufe an Mitarbeitende weiterleiten'] },
}
function scenarios(c, lang, salt = 0) {
  const out = []
  for (const k of c.inds) {
    const list = SCEN[k][lang]
    const h = hash(c.slug + k + salt)
    const a = h % list.length
    const b = (a + 1 + ((h >>> 3) % (list.length - 1))) % list.length
    out.push(list[a], list[b])
  }
  return out
}

// ───────────────────────── shared (service-level) copy ─────────────────────────
export const FEATURES = {
  en: [
    'Answers inbound calls instantly, day and night',
    'Books, reschedules and cancels appointments in your calendar',
    'Qualifies leads and passes the promising ones to your team',
    'Outbound reminders and follow-up calls where you have consent',
    'Call summaries and transcripts written into your CRM',
    'Hands over to a human whenever the caller asks',
  ],
  de: [
    'Nimmt eingehende Anrufe sofort an – Tag und Nacht',
    'Bucht, verschiebt und storniert Termine in Ihrem Kalender',
    'Qualifiziert Anfragen und gibt vielversprechende an Ihr Team weiter',
    'Ausgehende Erinnerungs- und Nachfassanrufe, wo Einwilligungen vorliegen',
    'Gesprächszusammenfassungen und Transkripte direkt im CRM',
    'Übergibt jederzeit an einen Menschen, wenn der Anrufer es möchte',
  ],
}

const UI = {
  en: {
    badge: c => `AI Calling Agent · ${c.name}`,
    hubBadge: 'AI Calling Agent',
    cta: 'Talk to Our Team',
    featuresHeading: { tag: 'What You Get', title: 'An AI Agent That', highlight: 'Answers Your Phone' },
    industriesHeading: { tag: 'Industries', title: 'Where It', highlight: 'Fits Best' },
    rulesHeading: { tag: 'Compliance', title: 'Calling Rules to', highlight: 'Keep in Mind' },
    nearbyHeading: { tag: 'Nearby', title: 'More', highlight: 'Locations' },
    faqHeading: { tag: 'FAQ', title: 'Common', highlight: 'Questions' },
    ctaTitle: c => `Want an AI calling agent in ${c}?`,
    ctaText: 'Tell us how your calls work today and we will come back with a scoped proposal.',
    ctaButton: 'Get Started',
    service: 'AI Calling Agent service',
    hub: country => `All ${country} locations`,
    blog: 'AI calling agent articles',
    home: 'Home', crumbService: 'AI Calling Agent',
    hubCitiesHeading: { tag: 'Locations', title: 'Cities We', highlight: 'Serve' },
  },
  de: {
    badge: c => `KI-Telefonagent · ${c.name}`,
    hubBadge: 'KI-Telefonagent',
    cta: 'Projekt besprechen',
    featuresHeading: { tag: 'Leistungsumfang', title: 'Ein KI-Agent, der', highlight: 'Ihr Telefon beantwortet' },
    industriesHeading: { tag: 'Branchen', title: 'Wo er', highlight: 'besonders passt' },
    rulesHeading: { tag: 'Rechtliches', title: 'Regeln für', highlight: 'Telefonanrufe' },
    nearbyHeading: { tag: 'In der Nähe', title: 'Weitere', highlight: 'Standorte' },
    faqHeading: { tag: 'FAQ', title: 'Häufige', highlight: 'Fragen' },
    ctaTitle: c => `KI-Telefonagent für ${c}?`,
    ctaText: 'Schildern Sie uns, wie Ihre Anrufe heute ablaufen – wir melden uns mit einem konkreten Vorschlag.',
    ctaButton: 'Angebot anfragen',
    service: 'Leistung KI-Telefonagent',
    hub: () => 'Alle Standorte in Deutschland',
    blog: 'Artikel zum KI-Telefonagenten',
    home: 'Start', crumbService: 'KI-Telefonagent',
    hubCitiesHeading: { tag: 'Standorte', title: 'Städte, die wir', highlight: 'betreuen' },
  },
}
export const aiUi = lang => UI[lang]

// ───────────────────────── city page ─────────────────────────
function titleSuffix(c) {
  if (c.country === 'uk') return 'UK'
  if (c.country === 'usa' || c.country === 'canada' || c.country === 'australia') return c.region
  return ''
}

function relatedCities(c, n = 6) {
  const list = citiesOf(c.country)
  const idx = list.findIndex(x => x.slug === c.slug)
  const same = list.filter(x => x.region === c.region && x.slug !== c.slug)
  const after = [...list.slice(idx + 1), ...list.slice(0, idx)]
  const out = []
  for (const x of [...same.slice(0, 3), ...after]) {
    if (out.length >= n) break
    if (!out.includes(x)) out.push(x)
  }
  return out
}

// Variant salt per city (src/data/aiVariants.js). scripts/optimize-ai-variants.mjs picks the salt that keeps each page
// as different as possible from the pages already published for the same country. 0 = default.
export const saltOf = c => SALTS[`${c.country}/${c.slug}`] || 0

export function buildCityPage(c, salt = saltOf(c)) {
  return c.country === 'germany' ? buildCityDe(c, salt) : buildCityEn(c, salt)
}

// Splits an industry paragraph into sentences and drops one of the later ones per city, so two cities that share
// an industry still read differently.
function indParagraph(k, c, lang, salt) {
  const text = fill(IND[k][lang][1], c)
  const s = (text.match(/[^.]+\.(\s|$)/g) || [text]).map(x => x.trim())
  if (s.length <= 2) return s.join(' ')
  const drop = 1 + (hash(c.slug + k + salt) % (s.length - 1))
  return s.filter((_, i) => i !== drop).join(' ')
}

function ctxFor(c, lang, salt) {
  const labels = c.inds.map(k => IND[k][lang][0])
  const nb = relatedCities(c)
  return {
    c: c.name, r: c.regionName, tz: c.tz, labels, list: scenarios(c, lang, salt),
    nb: nb.slice(0, 5).map(x => x.name), nearby: nb,
    outbound: c.country === 'germany' ? '' : outboundCheckEn(c),
  }
}

function rulesCityEn(c, x) {
  const base = pick(EN.rules[c.country], c.slug + 'rules')
  let extra = ''
  if (c.country === 'usa') {
    const consent = US_ALL_PARTY.has(c.region) ? EN.usaAllParty(x) : EN.usaOneParty(x)
    extra = `${consent} ${EN.usaState[c.region] || ''}`
  } else if (c.country === 'canada') extra = `Personal data is covered by PIPEDA or the applicable provincial privacy law in ${x.r}. ${EN.canadaRegion[c.region] || ''}`
  else if (c.country === 'uk') extra = EN.ukNation[c.region] || ''
  else if (c.country === 'australia') extra = `${EN.auRegion(x)} Personal information is handled under the Privacy Act 1988.`
  return [base, extra.trim(), EN.rulesTail].filter(Boolean).join(' ')
}

function buildCityEn(c, salt) {
  const x = ctxFor(c, 'en', salt)
  const seed = c.country + c.slug + salt
  const suffix = titleSuffix(c)
  const intro = pick(EN.intros, seed + 'i')(x)
  const sections = [
    { h: pick(EN.whyHeads, seed + 'wh')(x), p: intro },
    ...c.inds.map(k => ({ h: pick(EN.indHeads, seed + k + 'h')(x, IND[k].en[0]), p: indParagraph(k, c, 'en', salt) })),
    { h: pick(EN.scenHeads, seed + 'sh')(x), p: pick(EN.scen, seed + 's')(x) },
    { h: pick(EN.coverHeads, seed + 'ch')(x), p: pick(EN.cover, seed + 'c')(x) },
    { h: pick(EN.rulesHeads, seed + 'rh')(x), p: rulesCityEn(c, x) },
    { h: pick(EN.setupHeads, seed + 'uh')(x), p: pick(EN.setup, seed + 'u')(x) },
  ]
  const faqs = pickN(EN.faq, 5, seed + 'f').map(f => f(x))
  const nb = x.nearby
  return {
    kind: 'city', lang: 'en', city: c, path: cityPath(c),
    meta: {
      title: `AI Calling Agent in ${c.name}, ${suffix} – ZahrionTech`,
      description: `AI calling agent for ${c.name}, ${c.regionName} businesses: 24/7 call answering, booking and lead qualification for ${orList(x.labels.slice(0, 2), 'and')}.`,
      ogTitle: `AI Calling Agent in ${c.name}, ${suffix} – ZahrionTech`,
      ogDescription: `24/7 AI call answering, booking and lead qualification for ${c.name} businesses.`,
    },
    badge: UI.en.badge(c),
    h1: { pre: 'AI Calling Agent for', highlight: `${c.name} Businesses` },
    intro,
    features: pickN(EN.features, 6, seed + 'ft'), sections, faqs,
    nearby: nb.map(n => ({ href: cityPath(n), label: `AI Calling Agent ${n.name}` })),
    crumbs: [
      { name: UI.en.home, path: '/' },
      { name: UI.en.crumbService, path: '/ai-calling-agent' },
      { name: COUNTRIES[c.country].short, path: hubPath(c.country) },
      { name: c.name, path: cityPath(c) },
    ],
    areaServed: { type: 'City', name: c.name, country: COUNTRIES[c.country].name },
  }
}

function buildCityDe(c, salt) {
  const x = ctxFor(c, 'de', salt)
  const seed = c.country + c.slug + salt
  const intro = pick(DE.intros, seed + 'i')(x)
  const rules = [pick(DE.rules, seed + 'rules'), DE.rulesRegion(x), DE.rulesTail].join(' ')
  const sections = [
    { h: pick(DE.whyHeads, seed + 'wh')(x), p: intro },
    ...c.inds.map(k => ({ h: pick(DE.indHeads, seed + k + 'h')(x, IND[k].de[0]), p: indParagraph(k, c, 'de', salt) })),
    { h: pick(DE.scenHeads, seed + 'sh')(x), p: pick(DE.scen, seed + 's')(x) },
    { h: pick(DE.coverHeads, seed + 'ch')(x), p: pick(DE.cover, seed + 'c')(x) },
    { h: pick(DE.rulesHeads, seed + 'rh')(x), p: rules },
    { h: pick(DE.setupHeads, seed + 'uh')(x), p: pick(DE.setup, seed + 'u')(x) },
  ]
  const faqs = pickN(DE.faq, 5, seed + 'f').map(f => f(x))
  const nb = x.nearby
  return {
    kind: 'city', lang: 'de', city: c, path: cityPath(c),
    meta: {
      title: `KI-Telefonagent in ${c.name} | ZahrionTech`,
      description: `KI-Telefonagent für Unternehmen in ${c.name} (${c.regionName}): Anrufe rund um die Uhr annehmen, Termine buchen, Anfragen qualifizieren – für ${orList(x.labels.slice(0, 2), 'und')}.`,
      ogTitle: `KI-Telefonagent in ${c.name} | ZahrionTech`,
      ogDescription: `KI-Anrufannahme, Terminbuchung und Lead-Qualifizierung für Unternehmen in ${c.name}.`,
    },
    badge: UI.de.badge(c),
    h1: { pre: 'KI-Telefonagent für Unternehmen in', highlight: c.name },
    intro,
    features: pickN(DE.features, 6, seed + 'ft'), sections, faqs,
    nearby: nb.map(n => ({ href: cityPath(n), label: `KI-Telefonagent ${n.name}` })),
    crumbs: [
      { name: UI.de.home, path: '/de' },
      { name: UI.de.crumbService, path: '/de/ki-telefonagent' },
      { name: 'Deutschland', path: hubPath('germany') },
      { name: c.name, path: cityPath(c) },
    ],
    areaServed: { type: 'City', name: c.name, country: 'Deutschland' },
  }
}

// ───────────────────────── country hub page ─────────────────────────
export function buildHubPage(country) {
  const co = COUNTRIES[country]
  const list = citiesOf(country)
  const de = co.lang === 'de'
  // group by region, regions in order of first appearance
  const groups = []
  for (const c of list) {
    let g = groups.find(x => x.region === c.regionName)
    if (!g) groups.push(g = { region: c.regionName, cities: [] })
    g.cities.push({ href: cityPath(c), label: c.name })
  }
  groups.sort((a, b) => a.region.localeCompare(b.region, de ? 'de' : 'en'))
  const n = list.length
  if (de) {
    return {
      kind: 'hub', lang: 'de', country, path: co.hubPath,
      meta: {
        title: 'KI-Telefonagent in Deutschland – Städte & Regionen | ZahrionTech',
        description: `KI-Telefonagent für Unternehmen in ${n} deutschen Städten: Anrufannahme rund um die Uhr, Terminbuchung und Lead-Qualifizierung, gebaut von ZahrionTech.`,
        ogTitle: 'KI-Telefonagent in Deutschland – Städte & Regionen | ZahrionTech',
        ogDescription: 'KI-Anrufannahme, Terminbuchung und Lead-Qualifizierung für Unternehmen in ganz Deutschland.',
      },
      badge: UI.de.hubBadge,
      h1: { pre: 'KI-Telefonagent für Unternehmen in', highlight: 'ganz Deutschland' },
      intro: `ZahrionTech entwickelt KI-Telefonagenten, die Anrufe annehmen, Termine buchen und Anfragen qualifizieren. Da der Agent in der Cloud läuft, setzen wir ihn für Unternehmen in ganz Deutschland ein – wählen Sie Ihre Stadt, um zu sehen, welche Branchen und rechtlichen Punkte dort typisch sind.`,
      features: FEATURES.de,
      sections: [
        { h: 'Was ein KI-Telefonagent für Ihr Unternehmen übernimmt', p: 'Der Agent beantwortet eingehende Anrufe in natürlicher Sprache, bucht Termine direkt in Ihrem Kalender, stellt Ihre Vorabfragen, schreibt Zusammenfassungen ins CRM und übergibt an Mitarbeitende, sobald ein Mensch gefragt ist. Ausgehende Anrufe sind möglich, wo Einwilligungen vorliegen.' },
        { h: 'Rechtlicher Rahmen in Deutschland', p: rulesDe({ country: 'germany' }) },
      ],
      faqs: [
        { q: 'Für welche Städte in Deutschland bieten Sie den KI-Telefonagenten an?', a: `Da der Agent in der Cloud läuft und wir remote arbeiten, können wir Unternehmen in ganz Deutschland betreuen. Die Seiten dieser Übersicht beschreiben ${n} Städte mit typischen Branchen und Besonderheiten.` },
        { q: 'Ist ein KI-Telefonagent in Deutschland rechtlich zulässig?', a: 'Eingehende Anrufe Ihrer eigenen Kunden zu beantworten ist unkritisch, sofern Sie transparent informieren und die DSGVO beachten. Für ausgehende Werbeanrufe gelten strenge Einwilligungsregeln nach § 7 UWG. Lassen Sie Ihr Vorhaben rechtlich prüfen.' },
        { q: 'Spricht der Agent Deutsch?', a: 'Ja. Er spricht Deutsch und lässt sich zusätzlich für weitere Sprachen konfigurieren, etwa Englisch oder Türkisch.' },
      ],
      groups,
      crumbs: [
        { name: UI.de.home, path: '/de' },
        { name: UI.de.crumbService, path: '/de/ki-telefonagent' },
        { name: 'Deutschland', path: co.hubPath },
      ],
      areaServed: { type: 'Country', name: 'Deutschland' },
      serviceHref: '/de/ki-telefonagent',
    }
  }
  const nm = co.name === 'United States' ? 'the United States' : co.name === 'United Kingdom' ? 'the United Kingdom' : co.name
  return {
    kind: 'hub', lang: 'en', country, path: co.hubPath,
    meta: {
      title: `AI Calling Agent in ${co.short} – ${n} Cities | ZahrionTech`,
      description: `AI calling agents for businesses across ${nm}: 24/7 call answering, booking and lead qualification, with local rules for ${n} cities.`,
      ogTitle: `AI Calling Agent in ${co.short} – ${n} Cities | ZahrionTech`,
      ogDescription: `24/7 AI call answering, booking and lead qualification for businesses across ${nm}.`,
    },
    badge: UI.en.hubBadge,
    h1: { pre: 'AI Calling Agent for Businesses Across', highlight: nm },
    intro: `ZahrionTech builds AI calling agents that answer calls, book appointments and qualify leads. Because the agent runs in the cloud, we serve businesses across ${nm}. Pick your city to see the industries and calling rules that matter locally.`,
    features: FEATURES.en,
    sections: [
      { h: 'What an AI calling agent handles for your business', p: 'The agent answers inbound calls in natural speech, books appointments straight into your calendar, asks the qualifying questions you define, writes summaries into your CRM and hands over to your staff when a human is needed. Outbound calls are possible where you have the required consent.' },
      { h: `Calling rules in ${nm}`, p: rulesEn({ country, regionName: co.name, region: '', hub: true }) },
    ],
    faqs: [
      { q: `Which ${co.short} cities do you serve?`, a: `The agent runs in the cloud and we work remotely, so we can serve businesses anywhere in ${nm}. The pages below describe ${n} cities with their typical industries and local considerations.` },
      { q: 'Is an AI calling agent legal for my business?', a: 'Answering inbound calls from your own customers is lightly regulated. Outbound calls are not: consent, do-not-call lists, calling hours and AI-disclosure rules apply. Always confirm requirements with your own legal adviser before launching outbound calling.' },
      { q: 'Can the agent speak more than one language?', a: 'Yes. Agents can be configured for English plus other languages your callers use, for example Spanish, French or Punjabi, and can switch based on what the caller speaks.' },
    ],
    groups,
    crumbs: [
      { name: UI.en.home, path: '/' },
      { name: UI.en.crumbService, path: '/ai-calling-agent' },
      { name: co.short, path: co.hubPath },
    ],
    areaServed: { type: 'Country', name: co.name },
    serviceHref: '/ai-calling-agent',
  }
}

// every AI location page, for sitemap / prerender / audit (built once, on first use)
let _all = null
export function allAiPages() {
  if (_all) return _all
  _all = []
  for (const country of Object.keys(COUNTRIES)) {
    _all.push(buildHubPage(country))
    for (const c of citiesOf(country)) _all.push(buildCityPage(c))
  }
  return _all
}

// one page by URL path, built on demand (the browser never builds all pages)
const _one = new Map()
export function getAiPage(path) {
  if (_one.has(path)) return _one.get(path)
  let page = null
  const hub = Object.values(COUNTRIES).find(co => co.hubPath === path)
  if (hub) page = buildHubPage(hub.key)
  else if (cityByPath[path]) page = buildCityPage(cityByPath[path])
  _one.set(path, page)
  return page
}

export { CITIES }

// plain text of a page as a crawler sees it (used by the variant optimiser and the audit)
export const pageText = p => [p.h1.pre, p.h1.highlight, p.intro, ...p.features, ...(p.sections || []).slice(p.kind === 'city' ? 1 : 0).flatMap(x => [x.h, x.p]), ...p.faqs.flatMap(f => [f.q, f.a])].join(' ')

export const aiHubLinks = lang => (lang === 'de'
  ? [{ href: hubPath('germany'), label: 'KI-Telefonagent in Deutschland' }]
  : ['usa', 'uk', 'canada', 'australia'].map(k => ({ href: hubPath(k), label: `AI Calling Agent in ${COUNTRIES[k].short}` })))
