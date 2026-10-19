// Variant pools for the AI Calling Agent city pages (plain ESM, no JSX).
// Why this file exists: with hundreds of city pages, one fixed template makes every page ~70% identical, which Google
// treats as doorway content ("Crawled/Discovered - currently not indexed"). Every block below therefore exists in several
// phrasings, and aiCallingContent.js picks a different combination per city (deterministic hash of the city slug), so
// two city pages share far less text. scripts/seo-audit.mjs measures the real overlap and fails the build above the limit.
// Rules for copy: no invented prices, client names, statistics or legal claims beyond well-known public regulation.

export const hash = s => [...s].reduce((a, ch) => (a * 31 + ch.charCodeAt(0)) >>> 0, 7)
export const pick = (arr, seed) => arr[hash(seed) % arr.length]
// deterministic subset in a city-specific order
export const pickN = (arr, n, seed) =>
  arr.map((x, i) => [hash(seed + '#' + i), x]).sort((a, b) => a[0] - b[0]).slice(0, n).map(p => p[1])
export const orList = (arr, w) => arr.length < 2 ? arr.join('') : arr.slice(0, -1).join(', ') + ` ${w} ` + arr.at(-1)
const up = s => s.charAt(0).toUpperCase() + s.slice(1)

// ctx = { c: city name, r: region name, tz, labels: [industry labels], nb: [nearby city names], list: scenario phrases }

// ───────────────────────────── ENGLISH ─────────────────────────────
export const EN = {
  intros: [
    x => `Phone calls are still where many customers in ${x.c} decide whether to do business with you. A ZahrionTech AI calling agent answers every call instantly, books appointments, qualifies enquiries and passes the important ones to your team – around the clock, on ${x.tz}.`,
    x => `Missed calls are missed revenue. For businesses in ${x.c}, ${x.r}, an AI calling agent picks up on the first ring, handles routine questions, books appointments and logs every conversation in your CRM, so your staff only deal with the calls that need a human.`,
    x => `If your ${x.c} team spends the day answering the same phone questions, an AI calling agent can take that load. ZahrionTech builds voice agents that handle inbound calls and, where you have consent, outbound calls for ${x.c} businesses – connected to your calendar, CRM and phone system.`,
    x => `Small teams in ${x.c} rarely have someone free to answer every call. A voice agent built by ZahrionTech picks up when your staff cannot, understands what the caller wants and either solves it on the call or hands over with a written summary.`,
    x => `Customers in ${x.c} expect an answer the first time they call. An AI calling agent gives them one at any hour: it greets the caller, answers the common questions, books the slot and records the details for your team.`,
    x => `Running a business in ${x.c} means juggling the phone with everything else. ZahrionTech designs AI calling agents that take the repetitive calls off your plate – opening hours, bookings, order and status questions – and pass anything unusual to a person.`,
    x => `A ringing phone in ${x.c} is rarely convenient: it comes during a job, a meeting or a rush. ZahrionTech builds AI calling agents that answer those calls in a natural voice, deal with the routine ones and leave your team a clean summary of the rest.`,
    x => `Most calls to ${x.c} businesses ask one of a handful of questions. An AI calling agent from ZahrionTech knows the answers, books the appointment or takes the message, and keeps a record in your CRM so nothing depends on someone remembering to call back.`,
    x => `When a customer in ${x.c} cannot get through, the next number they try is your competitor’s. A voice agent keeps your line open: it picks up, helps, and tells your staff what happened – all without adding to your headcount.`,
    x => `Voice AI has become good enough to hold a real conversation, and businesses in ${x.c} are starting to use it for the front line of their phones. ZahrionTech builds agents that fit your processes, speak naturally and know exactly when to hand over.`,
  ],
  whyHeads: [x => `Why ${x.c} businesses use AI calling agents`, x => `What an AI calling agent does for ${x.c} businesses`, x => `Answering the phone in ${x.c}: where AI helps`],
  indHeads: [(x, l) => `AI calling agents for ${l} in ${x.c}`, (x, l) => `How ${l} businesses in ${x.c} use a voice agent`, (x, l) => `${up(l)} in ${x.c}: calls an AI agent can take`],
  scenHeads: [x => `Calls the agent typically handles in ${x.c}`, x => `What the first version covers for ${x.c} businesses`, x => `Where we start in ${x.c}`],
  scen: [
    x => `For ${orList(x.labels, 'and')} businesses in ${x.c} we usually start with ${orList(x.list, 'and')}. The first version covers the call types that cost you the most time, and further ones are added once the agent runs reliably.`,
    x => `A typical first release for ${x.c} covers ${orList(x.list, 'and')}. We begin with the calls that cost your team the most time and extend the agent once it is stable.`,
    x => `In ${x.c}, the calls we most often automate first are ${orList(x.list, 'and')}. Rarely used cases stay with your staff until the agent has proven itself on the high-volume ones.`,
    x => `Most ${x.c} projects begin with ${orList(x.list, 'and')}. Each call type is tested with realistic recordings before it goes live.`,
    x => `Our usual starting list for ${x.c} is ${orList(x.list, 'and')}. These are high-volume, predictable calls, so the agent can prove itself quickly before it takes on anything more nuanced.`,
    x => `If we were scoping your ${x.c} project today, the first call types would likely be ${orList(x.list, 'and')}. Everything else can wait until those run smoothly.`,
    x => `${up(orList(x.list, 'and'))}: these are the calls ${x.labels[0]} teams in ${x.c} tell us eat the most time, so they are the first ones we automate.`,
  ],
  coverHeads: [x => `Serving ${x.c} and ${x.r}`, x => `Locations around ${x.c}`],
  cover: [
    x => `Besides ${x.c} itself, we work with businesses in ${orList(x.nb, 'and')} and across ${x.r}. Because the agent runs in the cloud, there is nothing to install on site, and phone numbers can follow your existing telephony provider.`,
    x => `The same setup serves nearby locations such as ${orList(x.nb, 'and')}. If you have branches across ${x.r}, one agent can answer for all of them and route each call by location.`,
    x => `Teams in ${x.c} and around it – including ${orList(x.nb, 'and')} – use the same approach: one agent, one script, one view of all calls. You can add further locations in ${x.r} later without starting over.`,
    x => `Our work for ${x.c} carries over to the surrounding area, from ${orList(x.nb, 'and')} to the rest of ${x.r}. You pick the phone numbers and opening hours per location; the agent and its reporting stay in one place.`,
    x => `Covering ${x.c} usually means covering the region: customers call from ${orList(x.nb, 'and')} as well. A single agent can recognise the location a caller needs and book into the right branch or calendar.`,
    x => `We are not tied to one office: the agent answers for ${x.c}, ${orList(x.nb, 'and')} and anywhere else in ${x.r} where you operate, and everything is logged together in your CRM.`,
  ],
  rulesHeads: [x => `Calling rules to keep in mind in ${x.r}`, x => `Compliance for phone calls in ${x.r}`, x => `Regulation: what applies to AI calls in ${x.r}`],
  setupHeads: [x => `How the agent is set up for ${x.c}`, x => `Getting an AI calling agent live in ${x.c}`, x => `From first call to go-live in ${x.c}`],
  setup: [
    x => `The agent runs in the cloud, so ${x.c} businesses do not need new hardware. We connect it to your phone number or SIP trunk, your calendar and your CRM, write the call script and knowledge base with you, and test it with real call scenarios before it answers a live call. It works on ${x.tz} schedules, including after-hours and holiday coverage.`,
    x => `We start with a short call about how your ${x.c} phones are handled today: who answers, what callers ask, where the work ends up. From that we configure the voice, the conversation flow, the booking rules and the handover to staff, test it with realistic calls and go live in stages. Business hours, holidays and after-hours rules follow ${x.tz}.`,
    x => `Setup is a project, not a subscription form. We map your common call types, connect the agent to the booking and CRM tools you already use in ${x.c}, tune the voice and wording, and review real transcripts with you after launch to improve answers. Scheduling logic follows ${x.tz}.`,
    x => `First we listen to how calls reach your ${x.c} business today. Then we build the conversation flow, connect calendar and CRM, agree when the agent hands over to a person and run test calls with your team. After launch we read transcripts together and tighten the answers. All times follow ${x.tz}.`,
    x => `Nothing has to be installed in your ${x.c} office. The agent is configured in the cloud, attached to a number you choose and linked to the tools your staff already use. We rehearse it on realistic calls, switch it on for a small share of traffic first, and widen coverage when the results look right.`,
    x => `A launch for a ${x.c} business has four stages: scope the call types, build and connect the agent, test with scripted and real-world calls, then go live and improve from transcripts. Opening hours, holidays and after-hours rules are set for ${x.tz}.`,
    x => `For ${x.c} we keep the first project deliberately small: a few call types, one calendar, one CRM. When that works we add languages, locations or outbound reminders. Scheduling follows ${x.tz} from day one.`,
    x => `You tell us how calls should go – what to say, what to ask, when to give up and hand over. We turn that into a conversation flow, connect it to your tools in ${x.c} and rehearse it until it sounds like your business. Hours and holidays follow ${x.tz}.`,
  ],
  features: [
    'Answers inbound calls instantly, day and night',
    'Books, reschedules and cancels appointments in your calendar',
    'Qualifies leads and passes the promising ones to your team',
    'Outbound reminders and follow-up calls where you have consent',
    'Call summaries and transcripts written into your CRM',
    'Hands over to a human whenever the caller asks',
    'Works with your existing phone number or SIP trunk',
    'Looks up orders, bookings and statuses through your systems',
    'Sends an SMS or email confirmation after the call',
    'Switches language to match the caller',
  ],
  faq: [
    x => ({ q: `Can an AI calling agent answer calls for my ${x.c} business 24/7?`, a: `Yes. The agent runs continuously, so calls are answered instantly outside office hours, at weekends and during peak times. For anything it cannot or should not handle, it takes a message or transfers to your team during the hours you define.` }),
    x => ({ q: `Which ${x.c} industries do you build AI calling agents for?`, a: `Any business that handles repeat phone enquiries. In ${x.c} the most common fits are ${orList(x.labels, 'and')}, but the agent is configured around your own call types.` }),
    () => ({ q: 'Does the AI agent tell callers it is an AI?', a: 'Yes, by default. The agent introduces itself as an automated assistant, can announce call recording where required, and hands over to a person whenever the caller asks. We configure the wording to match the rules that apply to you.' }),
    x => ({ q: `What should I check before using outbound AI calls in ${x.r}?`, a: `Outbound calling is far more regulated than answering inbound calls. Check ${x.outbound} before launching any outbound campaign. We build in consent checks and opt-out handling, but you should confirm requirements with your own legal adviser.` }),
    () => ({ q: 'How long does it take to launch an AI calling agent?', a: 'A focused agent that answers, handles FAQs and books appointments can usually go live within a few weeks of agreeing scope. Connecting it to a CRM or booking system adds time. After a first call we give you a concrete timeline.' }),
    x => ({ q: `Do you work with ${x.c} businesses remotely?`, a: `Yes. The agent runs in the cloud and we work with you over video calls and shared documentation, so you do not need a local vendor. Local numbers for ${x.c} can be used where your telephony provider supports them.` }),
    () => ({ q: 'What happens if the agent does not understand the caller?', a: 'It asks the caller to repeat or rephrase, and if that does not help it offers to take a message or transfer to a person, with a short written summary so nobody has to start over. We review these moments in the transcripts after launch.' }),
    () => ({ q: 'Which phone systems does the agent work with?', a: 'Most business setups: SIP trunks, VoIP providers and cloud phone systems. In many cases you simply forward calls from your existing number to the agent. We check your telephony provider during scoping.' }),
    () => ({ q: 'Can the agent book into my existing calendar?', a: 'Yes. It can read availability and create, move or cancel bookings in common calendar and booking tools, or in your own system through an API. You decide which slots it may offer.' }),
    () => ({ q: 'How are call recordings and transcripts handled?', a: 'Only as you decide. We configure whether calls are recorded, how long transcripts are kept and who can see them, and we recommend telling callers when recording is on. Retention and access rules should be agreed with your own privacy adviser.' }),
    x => ({ q: `Can the agent cope with different accents and languages in ${x.c}?`, a: `Agents can be configured for more than one language and switch based on what the caller speaks. We test with recordings that reflect your real callers, because accuracy depends on audio quality and vocabulary, and we improve it from transcripts after launch.` }),
    () => ({ q: 'Do I need technical staff to run the agent?', a: 'No. We build, host and maintain the agent. You get call summaries and transcripts in the tools you already use, and you can ask us to change scripts, opening hours or handover rules whenever your business changes.' }),
    x => ({ q: `How much does an AI calling agent cost for a ${x.c} business?`, a: 'It depends on scope: the number of call types, integrations, languages and call volume, plus the telephony and speech usage costs of your provider. We do not quote a flat price without understanding your calls. After a first conversation you receive a scoped proposal.' }),
    () => ({ q: 'Can I keep my existing business phone number?', a: 'Usually yes. Depending on your provider you either forward calls to the agent or move the number to a provider that supports it. Your customers keep dialling the number they already know.' }),
    x => ({ q: `Can the agent transfer a call to my team in ${x.c}?`, a: 'Yes. You define when it transfers: on request, for complaints, for certain keywords or outside the agent’s remit. If nobody is available it takes a message and sends it to you straight away.' }),
    () => ({ q: 'How do you test the agent before it answers real customers?', a: 'We run scripted test calls for every call type, then realistic calls with your team, and review the transcripts together. Go-live is staged, often starting with after-hours calls, so you see real results before widening coverage.' }),
  ],
  // ── regulation, city version (short; the full text lives on the country hub) ──
  rules: {
    usa: [
      'Outbound calls that use an AI-generated voice fall under the Telephone Consumer Protection Act: the FCC treats AI voices as “artificial” voices, so outbound calls generally need the called person’s prior express consent, must respect the National Do Not Call Registry and your own opt-out list, and are limited to 8 a.m.–9 p.m. in the recipient’s local time. Answering inbound calls from your own customers is far less restricted.',
      'Two things matter most in the United States: inbound calls from your own customers are lightly regulated, while outbound AI-voice calls are covered by the TCPA, which generally requires prior express consent, honouring the Do Not Call Registry and calling only between 8 a.m. and 9 p.m. in the recipient’s time zone.',
      'If you plan to use the agent for outbound calls in the U.S., check TCPA consent first: under FCC guidance, AI-generated voices count as “artificial” voices. Respect the National Do Not Call Registry, keep an opt-out list and call only between 8 a.m. and 9 p.m. recipient time. Answering inbound calls for your own customers is much simpler.',
    ],
    uk: [
      'In the UK, outbound marketing calls are governed by the Privacy and Electronic Communications Regulations (PECR) and UK GDPR. Numbers registered with the Telephone Preference Service (TPS or CTPS) must be screened out, fully automated marketing calls need prior consent and callers must identify the business. Answering inbound calls from your own customers is much simpler.',
      'Outbound calling from the UK means PECR and UK GDPR: screen against the TPS and CTPS registers, obtain consent before fully automated marketing calls, identify your business and keep Ofcom’s rules on abandoned and silent calls in mind when dialling. Recorded calls need a lawful basis and a clear notice. Inbound calls from your own customers are far less restricted.',
      'Before using an AI voice for outbound calls in the UK, check PECR consent, TPS/CTPS screening and caller identification, and design dialling so it never causes abandoned or silent calls under Ofcom’s rules. For inbound calls you mainly need a clear notice if calls are recorded.',
    ],
    canada: [
      'In Canada, outbound telemarketing is regulated by the CRTC’s Unsolicited Telecommunications Rules and the National Do Not Call List, and commercial electronic messages by CASL. Telemarketing calls are limited to set hours, callers must identify themselves and opt-outs must be honoured. Answering inbound calls from your own customers is far less restricted.',
      'Outbound calling in Canada means the CRTC’s telemarketing rules and the National Do Not Call List, with CASL applying to any follow-up messages. Callers must identify themselves, observe permitted calling hours and honour opt-out requests. Inbound calls from your own customers are much less regulated.',
      'Planning outbound AI calls in Canada? Check the National Do Not Call List, the CRTC’s calling-hour and identification rules and CASL for any text or email follow-up. Inbound call answering is the simpler place to start.',
    ],
    australia: [
      'In Australia, outbound telemarketing is regulated by the Do Not Call Register Act 2006 and the Telemarketing and Research Calls Industry Standard 2017, enforced by the ACMA. Numbers on the Do Not Call Register are off-limits for most marketing calls, calls are limited to weekdays 9 a.m.–8 p.m. and Saturdays 9 a.m.–5 p.m. (none on Sundays or public holidays), and callers must identify themselves and end the call on request.',
      'For outbound calls in Australia, the Do Not Call Register Act 2006 and the 2017 Telemarketing Industry Standard apply: wash numbers against the register, call only within the permitted weekday and Saturday hours, identify the caller and end the call when asked. Inbound calls from your own customers are far less restricted.',
      'Outbound AI calling in Australia is overseen by the ACMA under the Do Not Call Register Act 2006 and the telemarketing industry standard, with limits on calling hours and on calling registered numbers. Answering inbound calls from your own customers is the simpler starting point.',
    ],
  },
  rulesTail: 'This is general information, not legal advice; have your counsel review any outbound calling programme.',
  usaAllParty: x => `${x.r} is generally treated as an all-party-consent state for recording phone calls, so the agent opens each call with a clear recording and AI disclosure.`,
  usaOneParty: x => `${x.r} generally follows one-party consent for recording calls, but callers are often in other states, so we recommend disclosing recording and AI use at the start of every call.`,
  usaState: {
    FL: 'Florida’s Telephone Solicitation Act adds state-level consent and calling-time rules for automated marketing calls.',
    OK: 'Oklahoma’s Telephone Solicitation Act adds state-level consent rules for marketing calls.',
    MD: 'Maryland’s Stop the Spam Calls Act adds state-level restrictions on automated marketing calls.',
    TX: 'Texas requires many telemarketers to register with the state before making sales calls.',
  },
  canadaRegion: {
    QC: 'In Quebec, customers also expect service in French, and Law 25 sets additional privacy duties, so we build bilingual French/English call flows.',
    AB: 'In Alberta, private-sector privacy is governed by the provincial Personal Information Protection Act rather than PIPEDA.',
    BC: 'In British Columbia, private-sector privacy is governed by the provincial Personal Information Protection Act rather than PIPEDA.',
  },
  ukNation: {
    SCT: 'The same PECR rules apply in Scotland as across the rest of the UK.',
    WLS: 'In Wales, customers may also expect a Welsh-language option, which can be built into the call flow.',
    NIR: 'The same PECR rules apply in Northern Ireland as across the rest of the UK.',
  },
  auRegion: x => `${x.r}’s own surveillance-devices law also limits recording private conversations without consent.`,
}

// ───────────────────────────── DEUTSCH ─────────────────────────────
export const DE = {
  intros: [
    x => `Am Telefon entscheidet sich oft, ob ein Kunde aus ${x.c} bei Ihnen kauft oder zur Konkurrenz wechselt. Ein KI-Telefonagent von ZahrionTech nimmt jeden Anruf sofort an, bucht Termine, qualifiziert Anfragen und gibt wichtige Gespräche an Ihr Team weiter – rund um die Uhr.`,
    x => `Verpasste Anrufe sind verpasster Umsatz. Für Unternehmen in ${x.c} (${x.r}) nimmt ein KI-Telefonagent beim ersten Klingeln ab, beantwortet Routinefragen, bucht Termine und protokolliert jedes Gespräch in Ihrem CRM, sodass Ihr Team nur die Anrufe übernimmt, die einen Menschen brauchen.`,
    x => `Wenn Ihr Team in ${x.c} den Tag mit denselben Telefonfragen verbringt, kann ein KI-Telefonagent diese Last übernehmen. ZahrionTech entwickelt Sprachagenten für eingehende und – wo Einwilligungen vorliegen – ausgehende Anrufe, angebunden an Kalender, CRM und Telefonanlage.`,
    x => `Kleine Teams in ${x.c} haben selten jemanden frei, der jeden Anruf annimmt. Ein Sprachagent von ZahrionTech geht ran, wenn Ihre Mitarbeitenden es nicht können, versteht das Anliegen und löst es direkt im Gespräch oder übergibt mit einer schriftlichen Zusammenfassung.`,
    x => `Kunden in ${x.c} erwarten beim ersten Anruf eine Antwort. Ein KI-Telefonagent liefert sie zu jeder Uhrzeit: Er begrüßt den Anrufer, beantwortet die üblichen Fragen, bucht den Termin und hält die Details für Ihr Team fest.`,
    x => `Ein Unternehmen in ${x.c} zu führen heißt, das Telefon neben allem anderen zu bedienen. ZahrionTech gestaltet KI-Telefonagenten, die Ihnen die immer gleichen Anrufe abnehmen – Öffnungszeiten, Termine, Bestell- und Statusfragen – und Ungewöhnliches an eine Person weitergeben.`,
    x => `Ein klingelndes Telefon in ${x.c} kommt selten gelegen: mitten im Einsatz, im Termin oder im Stoßgeschäft. ZahrionTech baut KI-Telefonagenten, die solche Anrufe in natürlicher Stimme annehmen, Routinefälle erledigen und Ihrem Team eine saubere Zusammenfassung des Rests hinterlassen.`,
    x => `Die meisten Anrufe bei Unternehmen in ${x.c} drehen sich um eine Handvoll Fragen. Ein KI-Telefonagent von ZahrionTech kennt die Antworten, bucht den Termin oder nimmt die Nachricht auf und hält alles im CRM fest, damit kein Rückruf vom guten Willen eines Einzelnen abhängt.`,
    x => `Wer in ${x.c} nicht durchkommt, ruft als Nächstes bei der Konkurrenz an. Ein Sprachagent hält Ihre Leitung offen: Er nimmt ab, hilft und berichtet Ihrem Team, was passiert ist – ohne zusätzliches Personal.`,
    x => `Sprach-KI ist inzwischen gut genug für echte Gespräche, und Unternehmen in ${x.c} setzen sie als erste Linie am Telefon ein. ZahrionTech entwickelt Agenten, die zu Ihren Abläufen passen, natürlich sprechen und genau wissen, wann sie übergeben.`,
  ],
  whyHeads: [x => `Warum Unternehmen in ${x.c} KI-Telefonagenten einsetzen`, x => `Was ein KI-Telefonagent für Unternehmen in ${x.c} leistet`, x => `Telefon in ${x.c}: Wo KI Entlastung bringt`],
  indHeads: [(x, l) => `KI-Telefonagent für ${l} in ${x.c}`, (x, l) => `So nutzen ${l} in ${x.c} einen Sprachagenten`, (x, l) => `${l} in ${x.c}: Anrufe, die der Agent übernimmt`],
  scenHeads: [x => `Typische Anrufe, die der Agent in ${x.c} übernimmt`, x => `Was die erste Version für ${x.c} abdeckt`, x => `Womit wir in ${x.c} beginnen`],
  scen: [
    x => `Für ${orList(x.labels, 'und')} in ${x.c} starten wir in der Regel mit diesen Aufgaben: ${orList(x.list, 'und')}. Die erste Version deckt die Anrufarten ab, die Sie am meisten Zeit kosten; weitere kommen hinzu, sobald der Agent zuverlässig läuft.`,
    x => `Eine typische erste Version für ${x.c} umfasst ${orList(x.list, 'und')}. Wir beginnen mit den Anrufen, die Ihr Team am meisten Zeit kosten, und erweitern den Agenten, sobald er stabil läuft.`,
    x => `In ${x.c} automatisieren wir meist zuerst ${orList(x.list, 'und')}. Seltene Fälle bleiben bei Ihren Mitarbeitenden, bis sich der Agent bei den häufigen Anrufen bewährt hat.`,
    x => `Die meisten Projekte in ${x.c} beginnen mit ${orList(x.list, 'und')}. Jede Anrufart wird mit realistischen Aufnahmen getestet, bevor sie live geht.`,
    x => `Unsere übliche Startliste für ${x.c} lautet ${orList(x.list, 'und')}. Das sind häufige, gut planbare Anrufe, an denen sich der Agent schnell bewähren kann, bevor er Anspruchsvolleres übernimmt.`,
    x => `Würden wir Ihr Projekt in ${x.c} heute planen, wären ${orList(x.list, 'und')} wohl die ersten Anrufarten. Alles andere kann warten, bis diese reibungslos laufen.`,
    x => `${orList(x.list, 'und')}: Diese Anrufe fressen laut Teams aus ${x.labels[0]} in ${x.c} am meisten Zeit, deshalb automatisieren wir sie zuerst.`,
  ],
  coverHeads: [x => `Betreuung in ${x.c} und ${x.r}`, x => `Standorte rund um ${x.c}`],
  cover: [
    x => `Neben ${x.c} arbeiten wir mit Unternehmen in ${orList(x.nb, 'und')} sowie im gesamten Bundesland ${x.r}. Da der Agent in der Cloud läuft, muss vor Ort nichts installiert werden, und Rufnummern können bei Ihrem bisherigen Telefonanbieter bleiben.`,
    x => `Dasselbe Setup deckt benachbarte Standorte wie ${orList(x.nb, 'und')} ab. Haben Sie Filialen in ${x.r}, kann ein Agent für alle antworten und jeden Anruf nach Standort weiterleiten.`,
    x => `Teams in ${x.c} und Umgebung – etwa in ${orList(x.nb, 'und')} – nutzen denselben Ansatz: ein Agent, ein Gesprächsleitfaden, ein Überblick über alle Anrufe. Weitere Standorte in ${x.r} lassen sich später ergänzen, ohne neu zu beginnen.`,
    x => `Unsere Arbeit für ${x.c} lässt sich auf die Umgebung übertragen, von ${orList(x.nb, 'und')} bis in den Rest von ${x.r}. Rufnummern und Öffnungszeiten legen Sie pro Standort fest; Agent und Auswertung bleiben an einer Stelle.`,
    x => `Wer ${x.c} abdeckt, deckt meist die Region ab: Kunden rufen auch aus ${orList(x.nb, 'und')} an. Ein einziger Agent erkennt, an welchem Standort der Anrufer etwas braucht, und bucht in die richtige Filiale oder den richtigen Kalender.`,
    x => `Wir sind nicht an ein Büro gebunden: Der Agent antwortet für ${x.c}, ${orList(x.nb, 'und')} und überall sonst in ${x.r}, wo Sie tätig sind, und alles wird gemeinsam in Ihrem CRM protokolliert.`,
  ],
  rulesHeads: [x => `Rechtliche Regeln für Telefonanrufe in ${x.c}`, x => `Datenschutz und Werbeanrufe in ${x.r}`, x => `Was für KI-Anrufe in ${x.c} gilt`],
  setupHeads: [x => `So richten wir den Agenten für ${x.c} ein`, x => `Ein KI-Telefonagent in ${x.c}: vom Start bis Livegang`, x => `Von der Anfrage bis zum Livegang in ${x.c}`],
  setup: [
    x => `Der Agent läuft in der Cloud, Unternehmen in ${x.c} brauchen also keine neue Hardware. Wir verbinden ihn mit Ihrer Rufnummer oder Ihrem SIP-Trunk, Ihrem Kalender und Ihrem CRM, erarbeiten Gesprächsleitfaden und Wissensbasis gemeinsam mit Ihnen und testen mit realistischen Anrufen, bevor der erste echte Anruf eintrifft. Öffnungszeiten, Feiertage und Zeiten außerhalb der Servicezeit richten sich nach MEZ/MESZ.`,
    x => `Wir beginnen mit einem kurzen Gespräch darüber, wie Ihre Anrufe in ${x.c} heute laufen: wer abnimmt, was Anrufer fragen, wo die Arbeit landet. Daraus konfigurieren wir Stimme, Gesprächsablauf, Buchungsregeln und Übergabe an Mitarbeitende, testen mit realistischen Anrufen und gehen schrittweise live. Zeitlogik und Feiertage folgen MEZ/MESZ.`,
    x => `Die Einrichtung ist ein Projekt, kein Online-Formular. Wir erfassen Ihre häufigsten Anrufarten, binden den Agenten an Buchungs- und CRM-Werkzeuge an, die Sie in ${x.c} bereits nutzen, stimmen Stimme und Formulierungen ab und werten nach dem Start echte Transkripte mit Ihnen aus, um die Antworten zu verbessern.`,
    x => `Zuerst hören wir uns an, wie Anrufe heute bei Ihrem Unternehmen in ${x.c} ankommen. Danach bauen wir den Gesprächsablauf, verbinden Kalender und CRM, legen fest, wann der Agent an einen Menschen übergibt, und führen Testanrufe mit Ihrem Team durch. Nach dem Start lesen wir gemeinsam Transkripte und schärfen die Antworten nach.`,
    x => `In Ihrem Büro in ${x.c} muss nichts installiert werden. Der Agent wird in der Cloud konfiguriert, an eine Rufnummer Ihrer Wahl gehängt und mit den Werkzeugen Ihres Teams verbunden. Wir proben mit realistischen Anrufen, schalten ihn zunächst für einen kleinen Teil der Anrufe frei und weiten die Abdeckung aus, wenn die Ergebnisse stimmen.`,
    x => `Der Start für ein Unternehmen in ${x.c} läuft in vier Schritten: Anrufarten festlegen, Agent bauen und anbinden, mit Skript- und Praxisanrufen testen, dann live gehen und anhand der Transkripte verbessern. Öffnungszeiten, Feiertage und Regeln außerhalb der Servicezeit richten sich nach MEZ/MESZ.`,
    x => `Das erste Projekt für ${x.c} halten wir bewusst klein: wenige Anrufarten, ein Kalender, ein CRM. Läuft das, kommen Sprachen, Standorte oder ausgehende Erinnerungen hinzu. Die Zeitlogik folgt von Anfang an MEZ/MESZ.`,
    x => `Sie sagen uns, wie Anrufe ablaufen sollen – was gesagt, was gefragt und wann übergeben wird. Wir machen daraus einen Gesprächsablauf, verbinden ihn mit Ihren Werkzeugen in ${x.c} und proben, bis er nach Ihrem Unternehmen klingt. Zeiten und Feiertage richten sich nach MEZ/MESZ.`,
  ],
  features: [
    'Nimmt eingehende Anrufe sofort an – Tag und Nacht',
    'Bucht, verschiebt und storniert Termine in Ihrem Kalender',
    'Qualifiziert Anfragen und gibt vielversprechende an Ihr Team weiter',
    'Ausgehende Erinnerungs- und Nachfassanrufe, wo Einwilligungen vorliegen',
    'Gesprächszusammenfassungen und Transkripte direkt im CRM',
    'Übergibt jederzeit an einen Menschen, wenn der Anrufer es möchte',
    'Funktioniert mit Ihrer bestehenden Rufnummer oder Ihrem SIP-Trunk',
    'Fragt Bestellungen, Buchungen und Status in Ihren Systemen ab',
    'Verschickt nach dem Gespräch eine SMS- oder E-Mail-Bestätigung',
    'Wechselt die Sprache passend zum Anrufer',
  ],
  faq: [
    x => ({ q: `Kann ein KI-Telefonagent die Anrufe meines Unternehmens in ${x.c} rund um die Uhr annehmen?`, a: 'Ja. Der Agent läuft durchgehend und nimmt Anrufe außerhalb der Geschäftszeiten, am Wochenende und bei Spitzenlast sofort an. Was er nicht beantworten kann oder soll, nimmt er als Nachricht auf oder gibt es in den von Ihnen festgelegten Zeiten an Ihr Team weiter.' }),
    x => ({ q: `Für welche Branchen in ${x.c} entwickeln Sie KI-Telefonagenten?`, a: `Für jedes Unternehmen mit wiederkehrenden Telefonanfragen. In ${x.c} passen besonders häufig ${orList(x.labels, 'und')}; konfiguriert wird der Agent aber immer anhand Ihrer eigenen Anrufarten.` }),
    () => ({ q: 'Sagt der KI-Agent dem Anrufer, dass er eine KI ist?', a: 'Ja, standardmäßig. Der Agent stellt sich als automatischer Assistent vor, weist bei Bedarf auf die Aufzeichnung hin und übergibt jederzeit an einen Menschen, wenn der Anrufer das möchte. Die Formulierungen stimmen wir auf die für Sie geltenden Regeln ab.' }),
    () => ({ q: 'Was muss ich vor ausgehenden KI-Anrufen in Deutschland beachten?', a: 'Ausgehende Anrufe sind deutlich stärker reguliert als das Beantworten eingehender Anrufe. Prüfen Sie vor jeder Kampagne die Einwilligungslage nach § 7 UWG, die DSGVO-Grundlagen und die Kennzeichnung als KI. Wir bauen Einwilligungsprüfung und Opt-out-Handling ein, die rechtliche Bewertung sollten Sie aber mit Ihrer Rechtsberatung klären.' }),
    () => ({ q: 'Wie lange dauert es, bis ein KI-Telefonagent live ist?', a: 'Ein fokussierter Agent, der Anrufe annimmt, Fragen beantwortet und Termine bucht, ist nach Klärung des Umfangs meist innerhalb weniger Wochen live. Die Anbindung an CRM oder Buchungssystem verlängert das. Nach einem ersten Gespräch nennen wir Ihnen einen konkreten Zeitplan.' }),
    x => ({ q: `Arbeiten Sie auch aus der Ferne mit Unternehmen in ${x.c}?`, a: `Ja. Der Agent läuft in der Cloud und wir arbeiten per Videocall und gemeinsamer Dokumentation mit Ihnen, ein lokaler Dienstleister ist nicht nötig. Rufnummern mit Ortsvorwahl für ${x.c} lassen sich einsetzen, soweit Ihr Telefonanbieter sie unterstützt.` }),
    () => ({ q: 'Was passiert, wenn der Agent den Anrufer nicht versteht?', a: 'Er bittet um eine Wiederholung oder Umformulierung. Hilft das nicht, bietet er an, eine Nachricht aufzunehmen oder an eine Person zu verbinden – mit kurzer schriftlicher Zusammenfassung, damit niemand von vorn anfangen muss. Solche Momente werten wir nach dem Start in den Transkripten aus.' }),
    () => ({ q: 'Mit welchen Telefonsystemen arbeitet der Agent zusammen?', a: 'Mit den meisten Unternehmenslösungen: SIP-Trunks, VoIP-Anbietern und Cloud-Telefonanlagen. Häufig genügt es, Anrufe von Ihrer bestehenden Nummer auf den Agenten umzuleiten. Ihren Telefonanbieter prüfen wir bei der Klärung des Umfangs.' }),
    () => ({ q: 'Kann der Agent in meinen bestehenden Kalender buchen?', a: 'Ja. Er kann Verfügbarkeiten lesen und Termine in gängigen Kalender- und Buchungstools oder über eine Schnittstelle in Ihrem eigenen System anlegen, verschieben oder stornieren. Sie bestimmen, welche Zeitfenster er anbieten darf.' }),
    () => ({ q: 'Wie werden Aufzeichnungen und Transkripte behandelt?', a: 'So, wie Sie es festlegen. Wir konfigurieren, ob Gespräche aufgezeichnet werden, wie lange Transkripte aufbewahrt werden und wer sie einsehen darf, und empfehlen, Anrufer bei aktiver Aufzeichnung zu informieren. Aufbewahrung und Zugriff sollten Sie mit Ihrer Datenschutzberatung abstimmen.' }),
    x => ({ q: `Kommt der Agent mit Dialekten und Fremdsprachen in ${x.c} zurecht?`, a: 'Agenten lassen sich für mehrere Sprachen konfigurieren und wechseln je nach Sprache des Anrufers. Wir testen mit Aufnahmen, die Ihre echten Anrufer abbilden, denn die Genauigkeit hängt von Tonqualität und Fachvokabular ab, und verbessern den Agenten nach dem Start anhand der Transkripte.' }),
    () => ({ q: 'Brauche ich technisches Personal, um den Agenten zu betreiben?', a: 'Nein. Wir bauen, hosten und warten den Agenten. Sie erhalten Gesprächszusammenfassungen und Transkripte in den Werkzeugen, die Sie ohnehin nutzen, und können Skripte, Öffnungszeiten oder Übergaberegeln jederzeit bei uns anpassen lassen.' }),
    x => ({ q: `Was kostet ein KI-Telefonagent für ein Unternehmen in ${x.c}?`, a: 'Das hängt vom Umfang ab: Anzahl der Anrufarten, Anbindungen, Sprachen und Anrufvolumen sowie die Telefonie- und Sprachnutzungskosten Ihres Anbieters. Einen pauschalen Preis nennen wir nicht, ohne Ihre Anrufe zu kennen. Nach einem ersten Gespräch erhalten Sie ein konkretes Angebot.' }),
    () => ({ q: 'Kann ich meine bisherige Geschäftsnummer behalten?', a: 'In der Regel ja. Je nach Anbieter leiten Sie Anrufe auf den Agenten um oder portieren die Nummer zu einem Anbieter, der das unterstützt. Ihre Kunden wählen weiterhin die Nummer, die sie kennen.' }),
    x => ({ q: `Kann der Agent Anrufe an mein Team in ${x.c} weiterverbinden?`, a: 'Ja. Sie legen fest, wann er weiterverbindet: auf Wunsch, bei Beschwerden, bei bestimmten Stichworten oder außerhalb seines Aufgabenbereichs. Ist niemand erreichbar, nimmt er eine Nachricht auf und schickt sie Ihnen sofort zu.' }),
    () => ({ q: 'Wie testen Sie den Agenten, bevor er echte Kunden bedient?', a: 'Wir führen Testanrufe nach Skript für jede Anrufart durch, danach realistische Anrufe mit Ihrem Team, und werten die Transkripte gemeinsam aus. Der Livegang erfolgt gestaffelt, oft zuerst außerhalb der Geschäftszeiten, damit Sie echte Ergebnisse sehen, bevor die Abdeckung wächst.' }),
  ],
  rules: [
    'Für Werbeanrufe an Verbraucher verlangt § 7 UWG eine vorherige ausdrückliche Einwilligung; im B2B-Bereich ist zumindest eine mutmaßliche Einwilligung nötig. Verstöße kann die Bundesnetzagentur mit Bußgeldern von bis zu 300.000 Euro ahnden. Hinzu kommen die DSGVO, das Verbot der Gesprächsaufzeichnung ohne Einwilligung (§ 201 StGB) und die Transparenzpflicht der EU-KI-Verordnung, wonach Anrufer erkennen müssen, dass sie mit einer KI sprechen. Eingehende Anrufe Ihrer eigenen Kunden zu beantworten ist deutlich unkritischer.',
    'Bei ausgehenden Anrufen gilt in Deutschland: Verbraucher dürfen zu Werbezwecken nur mit vorheriger ausdrücklicher Einwilligung angerufen werden (§ 7 UWG), bei Unternehmen reicht eine mutmaßliche Einwilligung. Die Bundesnetzagentur kann Verstöße mit bis zu 300.000 Euro ahnden. Gespräche dürfen nicht ohne Einwilligung aufgezeichnet werden (§ 201 StGB), die DSGVO regelt Rechtsgrundlage und Information, und die KI-Verordnung verlangt, dass Anrufer erkennen, mit einer KI zu sprechen. Für eingehende Anrufe Ihrer eigenen Kunden gelten deutlich mildere Anforderungen.',
    'Wer den Agenten auch für ausgehende Anrufe nutzen möchte, sollte zuerst die Einwilligungslage klären: § 7 UWG verlangt bei Verbrauchern eine ausdrückliche vorherige Einwilligung, bei Gewerbetreibenden zumindest eine mutmaßliche. Dazu kommen DSGVO-Pflichten, das Aufzeichnungsverbot ohne Einwilligung nach § 201 StGB und die Kennzeichnung als KI nach der EU-KI-Verordnung. Das Annehmen eingehender Anrufe Ihrer Kunden ist der unkompliziertere Einstieg.',
  ],
  rulesTail: 'Dies ist allgemeine Information und keine Rechtsberatung.',
  rulesRegion: x => `Für die Datenschutzaufsicht bei privaten Unternehmen in ${x.r} ist die zuständige Landesdatenschutzbehörde Ansprechpartner.`,
}
