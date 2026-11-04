// City registry for the AI Calling Agent location pages (plain ESM, imported by React AND Node build scripts).
// One line per city:  slug | display name | region code | up to three industry keys (see aiCallingContent.js)
// To add a city: append a line, run `npm run build`. The sitemap, prerender and audit pick it up automatically.
// Keep a city only if you can credibly serve it: every page is generated from this list.

export const AI_DATE = '2026-10-18'

export const COUNTRIES = {
  usa: {
    key: 'usa', lang: 'en', name: 'United States', short: 'USA', adj: 'American', tzNote: 'US time zones',
    hubPath: '/ai-calling-agent/usa',
  },
  uk: {
    key: 'uk', lang: 'en', name: 'United Kingdom', short: 'UK', adj: 'British', tzNote: 'UK time (GMT/BST)',
    hubPath: '/ai-calling-agent/uk',
  },
  canada: {
    key: 'canada', lang: 'en', name: 'Canada', short: 'Canada', adj: 'Canadian', tzNote: 'Canadian time zones',
    hubPath: '/ai-calling-agent/canada',
  },
  australia: {
    key: 'australia', lang: 'en', name: 'Australia', short: 'Australia', adj: 'Australian', tzNote: 'Australian time zones',
    hubPath: '/ai-calling-agent/australia',
  },
  germany: {
    key: 'germany', lang: 'de', name: 'Deutschland', short: 'Deutschland', adj: 'deutsch', tzNote: 'MEZ/MESZ',
    hubPath: '/de/ki-telefonagent/deutschland',
  },
}

// region code -> [region name, time zone label]
export const REGIONS = {
  usa: {
    AL: ['Alabama', 'Central Time'], AK: ['Alaska', 'Alaska Time'], AZ: ['Arizona', 'Mountain Time (no daylight saving)'],
    AR: ['Arkansas', 'Central Time'], CA: ['California', 'Pacific Time'], CO: ['Colorado', 'Mountain Time'],
    CT: ['Connecticut', 'Eastern Time'], DE: ['Delaware', 'Eastern Time'], DC: ['Washington, D.C.', 'Eastern Time'],
    FL: ['Florida', 'Eastern Time'], GA: ['Georgia', 'Eastern Time'], HI: ['Hawaii', 'Hawaii Time'],
    ID: ['Idaho', 'Mountain Time'], IL: ['Illinois', 'Central Time'], IN: ['Indiana', 'Eastern Time'],
    IA: ['Iowa', 'Central Time'], KS: ['Kansas', 'Central Time'], KY: ['Kentucky', 'Eastern Time'],
    LA: ['Louisiana', 'Central Time'], ME: ['Maine', 'Eastern Time'], MD: ['Maryland', 'Eastern Time'],
    MA: ['Massachusetts', 'Eastern Time'], MI: ['Michigan', 'Eastern Time'], MN: ['Minnesota', 'Central Time'],
    MS: ['Mississippi', 'Central Time'], MO: ['Missouri', 'Central Time'], MT: ['Montana', 'Mountain Time'],
    NE: ['Nebraska', 'Central Time'], NV: ['Nevada', 'Pacific Time'], NH: ['New Hampshire', 'Eastern Time'],
    NJ: ['New Jersey', 'Eastern Time'], NM: ['New Mexico', 'Mountain Time'], NY: ['New York', 'Eastern Time'],
    NC: ['North Carolina', 'Eastern Time'], ND: ['North Dakota', 'Central Time'], OH: ['Ohio', 'Eastern Time'],
    OK: ['Oklahoma', 'Central Time'], OR: ['Oregon', 'Pacific Time'], PA: ['Pennsylvania', 'Eastern Time'],
    RI: ['Rhode Island', 'Eastern Time'], SC: ['South Carolina', 'Eastern Time'], SD: ['South Dakota', 'Central Time'],
    TN: ['Tennessee', 'Central Time'], TX: ['Texas', 'Central Time'], UT: ['Utah', 'Mountain Time'],
    VT: ['Vermont', 'Eastern Time'], VA: ['Virginia', 'Eastern Time'], WA: ['Washington', 'Pacific Time'],
    WV: ['West Virginia', 'Eastern Time'], WI: ['Wisconsin', 'Central Time'], WY: ['Wyoming', 'Mountain Time'],
  },
  uk: {
    ENG: ['England', 'UK time (GMT/BST)'], SCT: ['Scotland', 'UK time (GMT/BST)'],
    WLS: ['Wales', 'UK time (GMT/BST)'], NIR: ['Northern Ireland', 'UK time (GMT/BST)'],
  },
  canada: {
    ON: ['Ontario', 'Eastern Time'], QC: ['Quebec', 'Eastern Time'], BC: ['British Columbia', 'Pacific Time'],
    AB: ['Alberta', 'Mountain Time'], MB: ['Manitoba', 'Central Time'], SK: ['Saskatchewan', 'Central Time (no daylight saving)'],
    NS: ['Nova Scotia', 'Atlantic Time'], NB: ['New Brunswick', 'Atlantic Time'], PE: ['Prince Edward Island', 'Atlantic Time'],
    NL: ['Newfoundland and Labrador', 'Newfoundland Time'],
    YT: ['Yukon', 'Yukon Time (no daylight saving)'], NT: ['Northwest Territories', 'Mountain Time'], NU: ['Nunavut', 'Eastern Time'],
  },
  australia: {
    NSW: ['New South Wales', 'AEST/AEDT'], VIC: ['Victoria', 'AEST/AEDT'], QLD: ['Queensland', 'AEST (no daylight saving)'],
    SA: ['South Australia', 'ACST/ACDT'], WA: ['Western Australia', 'AWST'], TAS: ['Tasmania', 'AEST/AEDT'],
    NT: ['Northern Territory', 'ACST'], ACT: ['Australian Capital Territory', 'AEST/AEDT'],
  },
  germany: {
    BW: ['Baden-Württemberg', 'MEZ/MESZ'], BY: ['Bayern', 'MEZ/MESZ'], BE: ['Berlin', 'MEZ/MESZ'], BB: ['Brandenburg', 'MEZ/MESZ'],
    HB: ['Bremen', 'MEZ/MESZ'], HH: ['Hamburg', 'MEZ/MESZ'], HE: ['Hessen', 'MEZ/MESZ'], MV: ['Mecklenburg-Vorpommern', 'MEZ/MESZ'],
    NI: ['Niedersachsen', 'MEZ/MESZ'], NW: ['Nordrhein-Westfalen', 'MEZ/MESZ'], RP: ['Rheinland-Pfalz', 'MEZ/MESZ'],
    SL: ['Saarland', 'MEZ/MESZ'], SN: ['Sachsen', 'MEZ/MESZ'], ST: ['Sachsen-Anhalt', 'MEZ/MESZ'],
    SH: ['Schleswig-Holstein', 'MEZ/MESZ'], TH: ['Thüringen', 'MEZ/MESZ'],
  },
}

// individual time-zone exceptions (slug -> label)
export const TZ_OVERRIDE = {
  'el-paso': 'Mountain Time', 'honolulu': 'Hawaii Time', 'pensacola': 'Central Time', 'evansville': 'Central Time',
  'bowling-green': 'Central Time', 'knoxville': 'Eastern Time', 'chattanooga': 'Eastern Time',
  'coeur-d-alene': 'Pacific Time', 'rapid-city': 'Mountain Time',
}

const RAW = {
  usa: `
new-york|New York|NY|fin,hlt,leg
los-angeles|Los Angeles|CA|med,hos,re
chicago|Chicago|IL|fin,log,hlt
houston|Houston|TX|ene,hlt,log
phoenix|Phoenix|AZ|re,hs,hlt
philadelphia|Philadelphia|PA|hlt,edu,leg
san-antonio|San Antonio|TX|hlt,tou,aut
san-diego|San Diego|CA|hlt,tou,tec
dallas|Dallas|TX|fin,re,log
san-jose|San Jose|CA|tec,mfg,re
austin|Austin|TX|tec,re,hos
jacksonville|Jacksonville|FL|fin,log,ins
fort-worth|Fort Worth|TX|log,aut,ene
columbus|Columbus|OH|ins,ret,edu
charlotte|Charlotte|NC|fin,ene,re
san-francisco|San Francisco|CA|tec,fin,hos
indianapolis|Indianapolis|IN|hlt,aut,log
seattle|Seattle|WA|tec,hlt,log
denver|Denver|CO|re,tec,hs
washington-dc|Washington, D.C.|DC|leg,gov,nfp
boston|Boston|MA|hlt,edu,fin
nashville|Nashville|TN|hlt,med,hos
detroit|Detroit|MI|aut,mfg,hlt
las-vegas|Las Vegas|NV|hos,tou,re
portland|Portland|OR|tec,ret,hs
`,
  uk: `
london|London|ENG|fin,leg,hlt
birmingham|Birmingham|ENG|mfg,fin,aut
manchester|Manchester|ENG|tec,med,re
leeds|Leeds|ENG|fin,leg,hlt
glasgow|Glasgow|SCT|fin,hlt,edu
liverpool|Liverpool|ENG|log,tou,hlt
newcastle|Newcastle upon Tyne|ENG|tec,hlt,edu
sheffield|Sheffield|ENG|mfg,hlt,edu
bristol|Bristol|ENG|tec,aut,re
edinburgh|Edinburgh|SCT|fin,tou,leg
leicester|Leicester|ENG|mfg,ret,hlt
nottingham|Nottingham|ENG|hlt,edu,ret
cardiff|Cardiff|WLS|gov,med,hlt
belfast|Belfast|NIR|tec,fin,hlt
southampton|Southampton|ENG|log,tou,hlt
oxford|Oxford|ENG|edu,hlt,tec
cambridge|Cambridge|ENG|tec,edu,hlt
brighton|Brighton|ENG|tec,hos,re
coventry|Coventry|ENG|aut,edu,mfg
reading|Reading|ENG|tec,fin,re
`,
  canada: `
toronto|Toronto|ON|fin,hlt,tec
montreal|Montreal|QC|tec,hlt,tou
vancouver|Vancouver|BC|tec,re,tou
calgary|Calgary|AB|ene,fin,re
edmonton|Edmonton|AB|ene,hlt,log
ottawa|Ottawa|ON|gov,tec,hlt
winnipeg|Winnipeg|MB|log,hlt,mfg
quebec-city|Quebec City|QC|gov,ins,tou
hamilton|Hamilton|ON|mfg,hlt,edu
kitchener|Kitchener|ON|tec,ins,mfg
victoria|Victoria|BC|gov,tou,hlt
halifax|Halifax|NS|log,hlt,edu
windsor|Windsor|ON|aut,mfg,log
saskatoon|Saskatoon|SK|agr,hlt,edu
regina|Regina|SK|gov,agr,ins
`,
  australia: `
sydney|Sydney|NSW|fin,tec,hlt
melbourne|Melbourne|VIC|hlt,edu,fin
brisbane|Brisbane|QLD|re,hlt,log
perth|Perth|WA|ene,hlt,re
adelaide|Adelaide|SA|hlt,edu,mfg
gold-coast|Gold Coast|QLD|tou,re,hos
canberra|Canberra|ACT|gov,edu,tec
newcastle|Newcastle|NSW|ene,log,hlt
wollongong|Wollongong|NSW|edu,mfg,hlt
sunshine-coast|Sunshine Coast|QLD|tou,re,hs
hobart|Hobart|TAS|tou,hlt,edu
geelong|Geelong|VIC|mfg,hlt,edu
darwin|Darwin|NT|ene,gov,tou
townsville|Townsville|QLD|ene,hlt,log
cairns|Cairns|QLD|tou,hos,hlt
`,
  germany: `
berlin|Berlin|BE|tec,gov,hlt
hamburg|Hamburg|HH|log,med,fin
muenchen|München|BY|tec,aut,ins
koeln|Köln|NW|med,ins,hlt
frankfurt|Frankfurt am Main|HE|fin,log,leg
stuttgart|Stuttgart|BW|aut,mfg,tec
duesseldorf|Düsseldorf|NW|fin,leg,ret
leipzig|Leipzig|SN|log,aut,tec
dortmund|Dortmund|NW|tec,log,hlt
essen|Essen|NW|ene,hlt,fin
bremen|Bremen|HB|log,mfg,tec
dresden|Dresden|SN|tec,mfg,tou
hannover|Hannover|NI|ins,mfg,fin
nuernberg|Nürnberg|BY|mfg,log,ret
duisburg|Duisburg|NW|log,mfg,ene
bochum|Bochum|NW|hlt,edu,tec
wuppertal|Wuppertal|NW|mfg,hlt,hs
bielefeld|Bielefeld|NW|mfg,ret,hlt
bonn|Bonn|NW|gov,log,edu
muenster|Münster|NW|edu,ins,hlt
karlsruhe|Karlsruhe|BW|tec,leg,edu
mannheim|Mannheim|BW|mfg,log,fin
augsburg|Augsburg|BY|mfg,aut,tec
wiesbaden|Wiesbaden|HE|gov,ins,hlt
aachen|Aachen|NW|tec,edu,hlt
`,
}

function parse(country) {
  return RAW[country].trim().split('\n').map(line => {
    const [slug, name, region, inds] = line.split('|')
    const r = REGIONS[country][region]
    if (!r) throw new Error(`[aiCities] unknown region "${region}" for ${country}/${slug}`)
    return {
      country, slug, name, region, regionName: r[0],
      tz: TZ_OVERRIDE[slug] || r[1],
      inds: inds.split(','),
    }
  })
}

export const CITIES = Object.keys(RAW).flatMap(parse)

export const citiesOf = country => CITIES.filter(c => c.country === country)
export const cityPath = (c) => c.country === 'germany' ? `/de/ki-telefonagent/${c.slug}` : `/ai-calling-agent/${c.country}/${c.slug}`
export const hubPath = country => COUNTRIES[country].hubPath
export const cityByPath = Object.fromEntries(CITIES.map(c => [cityPath(c), c]))
export const hubByPath = Object.fromEntries(Object.values(COUNTRIES).map(c => [c.hubPath, c]))
