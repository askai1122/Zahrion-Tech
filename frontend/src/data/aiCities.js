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
el-paso|El Paso|TX|log,hlt,ret
nashville|Nashville|TN|hlt,med,hos
detroit|Detroit|MI|aut,mfg,hlt
oklahoma-city|Oklahoma City|OK|ene,re,aut
portland|Portland|OR|tec,ret,hs
las-vegas|Las Vegas|NV|hos,tou,re
memphis|Memphis|TN|log,hlt,mfg
louisville|Louisville|KY|log,hlt,ins
baltimore|Baltimore|MD|hlt,log,edu
milwaukee|Milwaukee|WI|mfg,fin,hlt
albuquerque|Albuquerque|NM|hlt,tec,hs
tucson|Tucson|AZ|edu,hs,hlt
fresno|Fresno|CA|agr,hlt,re
sacramento|Sacramento|CA|gov,hlt,re
mesa|Mesa|AZ|hs,re,hlt
kansas-city|Kansas City|MO|log,hlt,fin
atlanta|Atlanta|GA|log,med,fin
omaha|Omaha|NE|ins,fin,log
colorado-springs|Colorado Springs|CO|hs,re,hlt
raleigh|Raleigh|NC|tec,hlt,edu
long-beach|Long Beach|CA|log,hlt,tou
virginia-beach|Virginia Beach|VA|tou,hs,hlt
miami|Miami|FL|re,tou,hlt
oakland|Oakland|CA|log,hlt,tec
minneapolis|Minneapolis|MN|hlt,fin,ret
tulsa|Tulsa|OK|ene,aut,hlt
bakersfield|Bakersfield|CA|ene,agr,hs
wichita|Wichita|KS|mfg,aut,hlt
arlington|Arlington|TX|hos,aut,re
aurora|Aurora|CO|hlt,hs,re
tampa|Tampa|FL|hlt,fin,re
new-orleans|New Orleans|LA|hos,tou,ene
cleveland|Cleveland|OH|hlt,mfg,leg
honolulu|Honolulu|HI|tou,hos,re
anaheim|Anaheim|CA|tou,hos,hlt
lexington|Lexington|KY|hlt,aut,edu
stockton|Stockton|CA|log,agr,hs
corpus-christi|Corpus Christi|TX|ene,hs,tou
henderson|Henderson|NV|re,hs,hlt
riverside|Riverside|CA|log,hs,re
newark|Newark|NJ|log,leg,hlt
saint-paul|Saint Paul|MN|gov,hlt,edu
santa-ana|Santa Ana|CA|leg,hlt,re
cincinnati|Cincinnati|OH|ins,hlt,ret
irvine|Irvine|CA|tec,hlt,re
orlando|Orlando|FL|tou,hos,re
pittsburgh|Pittsburgh|PA|hlt,edu,tec
st-louis|St. Louis|MO|hlt,fin,log
greensboro|Greensboro|NC|log,mfg,hlt
jersey-city|Jersey City|NJ|fin,re,log
anchorage|Anchorage|AK|ene,tou,hlt
lincoln|Lincoln|NE|edu,ins,agr
plano|Plano|TX|fin,tec,re
durham|Durham|NC|hlt,tec,edu
buffalo|Buffalo|NY|hlt,mfg,leg
chandler|Chandler|AZ|tec,re,hs
chula-vista|Chula Vista|CA|hlt,hs,ret
toledo|Toledo|OH|aut,mfg,hlt
madison|Madison|WI|edu,hlt,tec
gilbert|Gilbert|AZ|hlt,re,hs
reno|Reno|NV|log,tou,re
fort-wayne|Fort Wayne|IN|mfg,hlt,aut
st-petersburg|St. Petersburg|FL|hlt,tou,re
lubbock|Lubbock|TX|agr,edu,hlt
irving|Irving|TX|fin,log,tec
scottsdale|Scottsdale|AZ|hlt,tou,re
boise|Boise|ID|tec,re,hs
richmond|Richmond|VA|fin,leg,hlt
spokane|Spokane|WA|hlt,hs,re
salt-lake-city|Salt Lake City|UT|fin,tec,hlt
des-moines|Des Moines|IA|ins,fin,agr
birmingham|Birmingham|AL|hlt,fin,mfg
rochester|Rochester|NY|hlt,edu,mfg
little-rock|Little Rock|AR|hlt,log,gov
providence|Providence|RI|hlt,edu,leg
charleston|Charleston|SC|tou,hos,log
hartford|Hartford|CT|ins,fin,hlt
albany|Albany|NY|gov,leg,hlt
burlington|Burlington|VT|hlt,edu,tou
manchester-nh|Manchester|NH|mfg,hlt,fin
portland-me|Portland|ME|tou,hlt,hos
wilmington|Wilmington|DE|fin,leg,hlt
charleston-wv|Charleston|WV|ene,hlt,gov
jackson|Jackson|MS|hlt,gov,leg
billings|Billings|MT|ene,hlt,agr
cheyenne|Cheyenne|WY|gov,ene,hs
fargo|Fargo|ND|agr,hlt,tec
sioux-falls|Sioux Falls|SD|fin,hlt,agr
laredo|Laredo|TX|log,ret,hlt
garland|Garland|TX|mfg,ret,hs
frisco|Frisco|TX|fin,re,tec
mckinney|McKinney|TX|re,hlt,ret
amarillo|Amarillo|TX|agr,ene,hlt
grand-prairie|Grand Prairie|TX|aut,log,mfg
brownsville|Brownsville|TX|log,hlt,tou
pasadena-tx|Pasadena|TX|ene,mfg,hs
killeen|Killeen|TX|gov,hlt,ret
mesquite|Mesquite|TX|ret,log,hs
mcallen|McAllen|TX|hlt,log,ret
waco|Waco|TX|edu,tou,hlt
midland|Midland|TX|ene,fin,re
odessa|Odessa|TX|ene,hs,mfg
round-rock|Round Rock|TX|tec,hlt,re
denton|Denton|TX|edu,mfg,hlt
abilene|Abilene|TX|edu,hlt,agr
tyler|Tyler|TX|hlt,ret,agr
college-station|College Station|TX|edu,tec,hos
beaumont|Beaumont|TX|ene,mfg,hlt
sugar-land|Sugar Land|TX|ene,fin,hlt
league-city|League City|TX|hlt,ene,re
fremont|Fremont|CA|tec,mfg,aut
san-bernardino|San Bernardino|CA|log,hlt,gov
modesto|Modesto|CA|agr,log,hlt
fontana|Fontana|CA|log,mfg,aut
oxnard|Oxnard|CA|agr,hlt,mfg
moreno-valley|Moreno Valley|CA|log,hlt,ret
huntington-beach|Huntington Beach|CA|tou,re,hos
glendale-ca|Glendale|CA|med,fin,re
santa-clarita|Santa Clarita|CA|med,hlt,mfg
garden-grove|Garden Grove|CA|hlt,ret,tou
oceanside|Oceanside|CA|hlt,tou,gov
rancho-cucamonga|Rancho Cucamonga|CA|log,mfg,hlt
santa-rosa|Santa Rosa|CA|agr,hlt,tou
ontario-ca|Ontario|CA|log,aut,mfg
elk-grove|Elk Grove|CA|hlt,gov,re
corona|Corona|CA|mfg,hlt,ret
lancaster-ca|Lancaster|CA|mfg,hlt,hs
palmdale|Palmdale|CA|mfg,tec,hlt
salinas|Salinas|CA|agr,hlt,log
hayward|Hayward|CA|mfg,log,tec
pomona|Pomona|CA|edu,log,hlt
sunnyvale|Sunnyvale|CA|tec,mfg,fin
escondido|Escondido|CA|agr,hlt,tou
torrance|Torrance|CA|aut,mfg,hlt
pasadena-ca|Pasadena|CA|tec,edu,hlt
orange|Orange|CA|hlt,edu,re
fullerton|Fullerton|CA|edu,hlt,tec
thousand-oaks|Thousand Oaks|CA|tec,hlt,fin
visalia|Visalia|CA|agr,hlt,log
roseville|Roseville|CA|hlt,ret,tec
berkeley|Berkeley|CA|edu,tec,hos
santa-barbara|Santa Barbara|CA|tou,hlt,edu
vallejo|Vallejo|CA|gov,hlt,tou
concord|Concord|CA|hlt,fin,re
santa-clara|Santa Clara|CA|tec,mfg,edu
hialeah|Hialeah|FL|ret,log,hlt
fort-lauderdale|Fort Lauderdale|FL|tou,re,hos
tallahassee|Tallahassee|FL|gov,edu,hlt
cape-coral|Cape Coral|FL|re,hs,hlt
port-st-lucie|Port St. Lucie|FL|re,hlt,hs
pembroke-pines|Pembroke Pines|FL|hlt,re,ret
hollywood-fl|Hollywood|FL|tou,hlt,re
gainesville|Gainesville|FL|edu,hlt,tec
coral-springs|Coral Springs|FL|hlt,re,fin
clearwater|Clearwater|FL|tou,hlt,re
palm-bay|Palm Bay|FL|tec,hlt,re
west-palm-beach|West Palm Beach|FL|fin,re,tou
lakeland|Lakeland|FL|log,agr,hlt
boca-raton|Boca Raton|FL|fin,tec,re
sarasota|Sarasota|FL|tou,hlt,re
pensacola|Pensacola|FL|gov,tou,hlt
daytona-beach|Daytona Beach|FL|tou,aut,hos
fort-myers|Fort Myers|FL|tou,re,hlt
glendale-az|Glendale|AZ|ret,hlt,hs
tempe|Tempe|AZ|edu,tec,hos
peoria-az|Peoria|AZ|re,hlt,hs
surprise|Surprise|AZ|re,hs,ret
yuma|Yuma|AZ|agr,gov,hlt
flagstaff|Flagstaff|AZ|tou,edu,hos
yonkers|Yonkers|NY|hlt,ret,fin
syracuse|Syracuse|NY|edu,hlt,mfg
paterson|Paterson|NJ|ret,mfg,hlt
elizabeth|Elizabeth|NJ|log,ret,hs
trenton|Trenton|NJ|gov,hlt,leg
edison|Edison|NJ|tec,fin,log
allentown|Allentown|PA|log,hlt,mfg
erie|Erie|PA|mfg,hlt,tou
reading-pa|Reading|PA|mfg,ret,hlt
scranton|Scranton|PA|hlt,log,edu
lancaster-pa|Lancaster|PA|agr,tou,hlt
akron|Akron|OH|mfg,hlt,edu
dayton|Dayton|OH|tec,mfg,hlt
canton|Canton|OH|mfg,hlt,ret
grand-rapids|Grand Rapids|MI|mfg,hlt,hos
warren|Warren|MI|aut,mfg,hlt
sterling-heights|Sterling Heights|MI|aut,mfg,hs
ann-arbor|Ann Arbor|MI|edu,tec,hlt
lansing|Lansing|MI|gov,ins,edu
flint|Flint|MI|aut,hlt,hs
rockford|Rockford|IL|mfg,aut,hlt
joliet|Joliet|IL|log,mfg,hlt
naperville|Naperville|IL|fin,tec,re
springfield-il|Springfield|IL|gov,hlt,leg
peoria-il|Peoria|IL|mfg,hlt,agr
elgin|Elgin|IL|mfg,hlt,ret
evansville|Evansville|IN|mfg,hlt,log
south-bend|South Bend|IN|edu,mfg,hlt
green-bay|Green Bay|WI|log,mfg,hlt
kenosha|Kenosha|WI|mfg,log,ret
rochester-mn|Rochester|MN|hlt,tec,edu
duluth|Duluth|MN|log,tou,hlt
springfield-mo|Springfield|MO|hlt,ret,edu
columbia-mo|Columbia|MO|edu,hlt,ins
independence|Independence|MO|hlt,ret,log
cedar-rapids|Cedar Rapids|IA|mfg,fin,agr
davenport|Davenport|IA|mfg,log,hlt
overland-park|Overland Park|KS|fin,tec,hlt
kansas-city-ks|Kansas City|KS|log,mfg,hlt
topeka|Topeka|KS|gov,ins,hlt
olathe|Olathe|KS|tec,hlt,re
norman|Norman|OK|edu,hlt,tec
baton-rouge|Baton Rouge|LA|ene,gov,hlt
shreveport|Shreveport|LA|hlt,gov,ene
lafayette-la|Lafayette|LA|ene,hlt,hos
huntsville|Huntsville|AL|tec,mfg,gov
montgomery|Montgomery|AL|gov,hlt,aut
mobile|Mobile|AL|log,mfg,tou
tuscaloosa|Tuscaloosa|AL|edu,aut,hlt
fayetteville-ar|Fayetteville|AR|edu,ret,log
fort-smith|Fort Smith|AR|mfg,hlt,log
savannah|Savannah|GA|log,tou,hos
augusta|Augusta|GA|hlt,gov,edu
columbus-ga|Columbus|GA|fin,gov,hlt
macon|Macon|GA|log,hlt,edu
athens-ga|Athens|GA|edu,hlt,hos
columbia-sc|Columbia|SC|gov,edu,ins
greenville-sc|Greenville|SC|mfg,aut,hlt
mount-pleasant|Mount Pleasant|SC|tou,hlt,re
winston-salem|Winston-Salem|NC|hlt,fin,mfg
fayetteville-nc|Fayetteville|NC|gov,hlt,ret
cary|Cary|NC|tec,fin,hlt
wilmington-nc|Wilmington|NC|tou,log,hlt
high-point|High Point|NC|mfg,ret,log
asheville|Asheville|NC|tou,hos,hlt
norfolk|Norfolk|VA|gov,log,hlt
chesapeake|Chesapeake|VA|log,hlt,ret
newport-news|Newport News|VA|mfg,gov,log
alexandria|Alexandria|VA|gov,tec,leg
hampton|Hampton|VA|gov,hlt,tec
roanoke|Roanoke|VA|hlt,mfg,log
frederick|Frederick|MD|tec,hlt,edu
rockville|Rockville|MD|hlt,tec,gov
annapolis|Annapolis|MD|gov,tou,leg
bowling-green|Bowling Green|KY|mfg,aut,edu
knoxville|Knoxville|TN|edu,hlt,tec
chattanooga|Chattanooga|TN|aut,log,tou
clarksville|Clarksville|TN|gov,hlt,ret
murfreesboro|Murfreesboro|TN|edu,hlt,log
morgantown|Morgantown|WV|edu,hlt,tec
huntington|Huntington|WV|hlt,edu,log
fort-collins|Fort Collins|CO|edu,tec,hos
lakewood|Lakewood|CO|gov,hlt,re
thornton|Thornton|CO|hlt,re,hs
arvada|Arvada|CO|hlt,re,ret
pueblo|Pueblo|CO|mfg,hlt,gov
boulder|Boulder|CO|tec,edu,tou
provo|Provo|UT|tec,edu,hlt
west-valley-city|West Valley City|UT|log,mfg,hs
orem|Orem|UT|tec,edu,hlt
ogden|Ogden|UT|mfg,gov,tou
st-george|St. George|UT|tou,hlt,re
north-las-vegas|North Las Vegas|NV|hos,log,hs
sparks|Sparks|NV|log,mfg,hos
santa-fe|Santa Fe|NM|tou,gov,hos
las-cruces|Las Cruces|NM|agr,edu,hlt
rio-rancho|Rio Rancho|NM|tec,hlt,re
tacoma|Tacoma|WA|log,hlt,gov
vancouver-wa|Vancouver|WA|tec,hlt,re
bellevue|Bellevue|WA|tec,fin,re
kent|Kent|WA|log,mfg,aut
everett|Everett|WA|mfg,hlt,gov
eugene|Eugene|OR|edu,hlt,tec
salem|Salem|OR|gov,agr,hlt
gresham|Gresham|OR|hs,ret,hlt
bend|Bend|OR|tou,re,hos
hillsboro|Hillsboro|OR|tec,mfg,hlt
meridian|Meridian|ID|re,hlt,tec
nampa|Nampa|ID|agr,mfg,hs
idaho-falls|Idaho Falls|ID|ene,hlt,tec
coeur-d-alene|Coeur d'Alene|ID|tou,hlt,re
missoula|Missoula|MT|edu,hlt,tou
bozeman|Bozeman|MT|tec,edu,tou
great-falls|Great Falls|MT|gov,hlt,agr
casper|Casper|WY|ene,hlt,hs
bismarck|Bismarck|ND|gov,ene,hlt
rapid-city|Rapid City|SD|tou,hlt,gov
fairbanks|Fairbanks|AK|ene,gov,edu
juneau|Juneau|AK|gov,tou,log
dover|Dover|DE|gov,aut,hlt
new-haven|New Haven|CT|edu,hlt,leg
bridgeport|Bridgeport|CT|mfg,hlt,fin
stamford|Stamford|CT|fin,leg,re
waterbury|Waterbury|CT|mfg,hlt,ret
worcester|Worcester|MA|hlt,edu,mfg
springfield-ma|Springfield|MA|ins,hlt,mfg
cambridge-ma|Cambridge|MA|tec,edu,hlt
lowell|Lowell|MA|tec,edu,mfg
nashua|Nashua|NH|tec,mfg,hlt
cranston|Cranston|RI|hlt,ret,mfg
bangor|Bangor|ME|hlt,ret,edu
lewiston|Lewiston|ME|mfg,hlt,ret
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
portsmouth|Portsmouth|ENG|log,tou,hs
brighton|Brighton|ENG|tec,hos,re
oxford|Oxford|ENG|edu,hlt,tec
cambridge|Cambridge|ENG|tec,edu,hlt
reading|Reading|ENG|tec,fin,re
milton-keynes|Milton Keynes|ENG|log,tec,re
coventry|Coventry|ENG|aut,edu,mfg
bradford|Bradford|ENG|ret,hlt,mfg
hull|Hull|ENG|log,ene,hlt
stoke-on-trent|Stoke-on-Trent|ENG|mfg,ret,hs
wolverhampton|Wolverhampton|ENG|mfg,aut,hs
derby|Derby|ENG|mfg,aut,hlt
plymouth|Plymouth|ENG|log,hlt,tou
exeter|Exeter|ENG|ins,edu,hlt
norwich|Norwich|ENG|ins,hlt,re
aberdeen|Aberdeen|SCT|ene,hlt,leg
dundee|Dundee|SCT|tec,hlt,edu
swansea|Swansea|WLS|hlt,edu,hs
bath|Bath|ENG|tou,hos,re
york|York|ENG|tou,ins,hos
sunderland|Sunderland|ENG|aut,mfg,hlt
middlesbrough|Middlesbrough|ENG|mfg,hs,hlt
peterborough|Peterborough|ENG|log,hs,re
ipswich|Ipswich|ENG|log,ins,hs
luton|Luton|ENG|log,aut,tou
swindon|Swindon|ENG|aut,log,tec
bournemouth|Bournemouth|ENG|tou,hos,fin
northampton|Northampton|ENG|log,aut,ret
inverness|Inverness|SCT|tou,hlt,hs
newport|Newport|WLS|tec,gov,log
canterbury|Canterbury|ENG|edu,tou,hlt
carlisle|Carlisle|ENG|log,hlt,gov
chelmsford|Chelmsford|ENG|tec,fin,hlt
chester|Chester|ENG|tou,leg,ret
chichester|Chichester|ENG|tou,edu,hlt
colchester|Colchester|ENG|edu,gov,hlt
doncaster|Doncaster|ENG|log,mfg,hlt
durham|Durham|ENG|edu,hlt,tou
ely|Ely|ENG|tou,agr,hlt
gloucester|Gloucester|ENG|tec,leg,log
hereford|Hereford|ENG|agr,hlt,mfg
lancaster|Lancaster|ENG|edu,hlt,tou
lichfield|Lichfield|ENG|tou,hs,hlt
lincoln|Lincoln|ENG|edu,mfg,tou
preston|Preston|ENG|edu,mfg,hlt
ripon|Ripon|ENG|tou,agr,hs
salford|Salford|ENG|med,tec,log
salisbury|Salisbury|ENG|tou,gov,hlt
southend-on-sea|Southend-on-Sea|ENG|tou,hos,ret
st-albans|St Albans|ENG|re,tec,ret
truro|Truro|ENG|tou,hlt,hos
wakefield|Wakefield|ENG|gov,log,ret
wells|Wells|ENG|tou,agr,hs
winchester|Winchester|ENG|edu,leg,gov
worcester|Worcester|ENG|mfg,hlt,tou
bolton|Bolton|ENG|ret,hlt,mfg
blackpool|Blackpool|ENG|tou,hos,ret
huddersfield|Huddersfield|ENG|edu,mfg,ret
oldham|Oldham|ENG|mfg,ret,hlt
slough|Slough|ENG|tec,log,fin
watford|Watford|ENG|med,ret,tec
crawley|Crawley|ENG|log,tou,tec
maidstone|Maidstone|ENG|gov,ret,hlt
basingstoke|Basingstoke|ENG|fin,tec,ins
guildford|Guildford|ENG|tec,edu,med
cheltenham|Cheltenham|ENG|gov,tec,tou
telford|Telford|ENG|mfg,log,tec
warrington|Warrington|ENG|log,tec,ret
stockport|Stockport|ENG|ret,hs,hlt
gateshead|Gateshead|ENG|ret,mfg,gov
harrogate|Harrogate|ENG|tou,hos,fin
bedford|Bedford|ENG|edu,log,hlt
perth|Perth|SCT|ins,tou,agr
stirling|Stirling|SCT|edu,tou,gov
dunfermline|Dunfermline|SCT|fin,tec,gov
paisley|Paisley|SCT|mfg,ret,hlt
livingston|Livingston|SCT|tec,mfg,log
east-kilbride|East Kilbride|SCT|tec,gov,mfg
wrexham|Wrexham|WLS|mfg,log,ret
bangor-wales|Bangor (Wales)|WLS|edu,tou,hlt
derry|Derry-Londonderry|NIR|tec,log,edu
lisburn|Lisburn|NIR|ret,hlt,tec
newry|Newry|NIR|log,ret,hlt
armagh|Armagh|NIR|tou,hlt,edu
bangor-ni|Bangor (Northern Ireland)|NIR|tou,ret,hlt
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
london-on|London|ON|hlt,edu,ins
victoria|Victoria|BC|gov,tou,hlt
halifax|Halifax|NS|log,hlt,edu
oshawa|Oshawa|ON|aut,hs,hlt
windsor|Windsor|ON|aut,mfg,log
saskatoon|Saskatoon|SK|agr,hlt,edu
regina|Regina|SK|gov,agr,ins
st-johns|St. John's|NL|ene,hlt,tou
barrie|Barrie|ON|hs,re,hlt
kelowna|Kelowna|BC|tou,re,hs
abbotsford|Abbotsford|BC|agr,hs,hlt
sherbrooke|Sherbrooke|QC|edu,hlt,mfg
guelph|Guelph|ON|agr,edu,mfg
kingston|Kingston|ON|edu,hlt,gov
moncton|Moncton|NB|log,ins,hlt
fredericton|Fredericton|NB|gov,edu,tec
charlottetown|Charlottetown|PE|tou,gov,hlt
mississauga|Mississauga|ON|log,fin,tec
brampton|Brampton|ON|log,hs,re
surrey|Surrey|BC|hs,re,hlt
markham|Markham|ON|tec,fin,re
laval|Laval|QC|hlt,ret,re
gatineau|Gatineau|QC|gov,hlt,tec
burnaby|Burnaby|BC|tec,re,hlt
lethbridge|Lethbridge|AB|agr,hlt,edu
red-deer|Red Deer|AB|ene,hs,ret
thunder-bay|Thunder Bay|ON|hlt,log,edu
saint-john|Saint John|NB|ene,log,hlt
cambridge-on|Cambridge|ON|mfg,tec,aut
waterloo|Waterloo|ON|tec,edu,ins
greater-sudbury|Greater Sudbury|ON|ene,hlt,edu
peterborough-on|Peterborough|ON|edu,mfg,hlt
niagara-falls|Niagara Falls|ON|tou,hos,hlt
st-catharines|St. Catharines|ON|agr,mfg,hlt
brantford|Brantford|ON|mfg,edu,hlt
whitby|Whitby|ON|ene,hlt,ret
ajax|Ajax|ON|hlt,mfg,ret
pickering|Pickering|ON|ene,hlt,ret
oakville|Oakville|ON|aut,fin,hlt
burlington-on|Burlington|ON|log,hlt,re
vaughan|Vaughan|ON|log,mfg,re
richmond-hill|Richmond Hill|ON|tec,fin,hlt
milton|Milton|ON|log,mfg,re
newmarket|Newmarket|ON|hlt,ret,re
sarnia|Sarnia|ON|ene,mfg,hlt
belleville|Belleville|ON|gov,hlt,agr
north-bay|North Bay|ON|gov,hlt,edu
sault-ste-marie|Sault Ste. Marie|ON|mfg,tou,hlt
cornwall|Cornwall|ON|mfg,hlt,log
welland|Welland|ON|mfg,hlt,log
orillia|Orillia|ON|tou,hlt,ret
nanaimo|Nanaimo|BC|tou,hlt,log
kamloops|Kamloops|BC|edu,hlt,log
chilliwack|Chilliwack|BC|agr,hlt,ret
prince-george|Prince George|BC|log,ene,hlt
langley|Langley|BC|agr,hlt,ret
richmond-bc|Richmond|BC|log,tou,ret
coquitlam|Coquitlam|BC|hlt,tec,ret
maple-ridge|Maple Ridge|BC|hlt,hs,ret
vernon|Vernon|BC|agr,tou,hlt
penticton|Penticton|BC|tou,agr,hos
delta|Delta|BC|log,agr,hlt
new-westminster|New Westminster|BC|hlt,gov,ret
north-vancouver|North Vancouver|BC|log,tou,hlt
saanich|Saanich|BC|gov,tou,hlt
medicine-hat|Medicine Hat|AB|ene,agr,hlt
grande-prairie|Grande Prairie|AB|ene,agr,hs
airdrie|Airdrie|AB|re,hs,ret
st-albert|St. Albert|AB|hlt,ret,re
fort-mcmurray|Fort McMurray|AB|ene,hs,log
prince-albert|Prince Albert|SK|agr,hlt,gov
moose-jaw|Moose Jaw|SK|agr,tou,hlt
brandon|Brandon|MB|agr,hlt,edu
trois-rivieres|Trois-Rivières|QC|mfg,edu,hlt
saguenay|Saguenay|QC|mfg,ene,tou
longueuil|Longueuil|QC|hlt,ret,mfg
levis|Lévis|QC|fin,ins,hlt
terrebonne|Terrebonne|QC|hlt,ret,re
drummondville|Drummondville|QC|mfg,log,ret
granby|Granby|QC|mfg,tou,agr
saint-jerome|Saint-Jérôme|QC|hlt,ret,hs
repentigny|Repentigny|QC|hlt,ret,hs
brossard|Brossard|QC|hlt,ret,tec
sydney-ns|Sydney|NS|tou,hlt,log
miramichi|Miramichi|NB|agr,hlt,gov
corner-brook|Corner Brook|NL|ene,hlt,tou
mount-pearl|Mount Pearl|NL|ene,ret,hlt
summerside|Summerside|PE|agr,tou,gov
whitehorse|Whitehorse|YT|gov,tou,hlt
yellowknife|Yellowknife|NT|gov,ene,tou
iqaluit|Iqaluit|NU|gov,tou,hlt
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
townsville|Townsville|QLD|ene,hlt,log
cairns|Cairns|QLD|tou,hos,hlt
darwin|Darwin|NT|ene,gov,tou
toowoomba|Toowoomba|QLD|agr,hlt,edu
ballarat|Ballarat|VIC|hlt,edu,hs
bendigo|Bendigo|VIC|hlt,agr,hs
launceston|Launceston|TAS|hlt,agr,tou
mackay|Mackay|QLD|ene,agr,hs
rockhampton|Rockhampton|QLD|agr,ene,hlt
bunbury|Bunbury|WA|log,ene,hs
albury|Albury|NSW|log,hlt,agr
wagga-wagga|Wagga Wagga|NSW|agr,edu,hlt
parramatta|Parramatta|NSW|gov,leg,hlt
fremantle|Fremantle|WA|log,tou,hos
central-coast|Central Coast|NSW|hs,re,hlt
mandurah|Mandurah|WA|re,tou,hs
ipswich|Ipswich|QLD|re,hs,log
dubbo|Dubbo|NSW|agr,hlt,tou
penrith|Penrith|NSW|ret,hlt,log
liverpool-nsw|Liverpool|NSW|log,hlt,ret
campbelltown|Campbelltown|NSW|hlt,ret,edu
blacktown|Blacktown|NSW|ret,hlt,hs
maitland|Maitland|NSW|agr,hlt,hs
tamworth|Tamworth|NSW|agr,hlt,ret
orange-nsw|Orange|NSW|agr,hlt,tou
bathurst|Bathurst|NSW|edu,aut,tou
lismore|Lismore|NSW|agr,hlt,edu
coffs-harbour|Coffs Harbour|NSW|tou,agr,hlt
port-macquarie|Port Macquarie|NSW|tou,hlt,re
nowra|Nowra|NSW|gov,tou,hlt
queanbeyan|Queanbeyan|NSW|gov,ret,re
shepparton|Shepparton|VIC|agr,mfg,hlt
mildura|Mildura|VIC|agr,tou,hlt
warrnambool|Warrnambool|VIC|agr,tou,hlt
frankston|Frankston|VIC|hlt,ret,hs
dandenong|Dandenong|VIC|mfg,log,ret
wodonga|Wodonga|VIC|log,gov,hlt
traralgon|Traralgon|VIC|ene,hlt,ret
logan|Logan|QLD|hs,ret,hlt
bundaberg|Bundaberg|QLD|agr,tou,hlt
hervey-bay|Hervey Bay|QLD|tou,hlt,hos
gladstone|Gladstone|QLD|ene,log,mfg
mount-isa|Mount Isa|QLD|ene,hs,hlt
rockingham|Rockingham|WA|gov,tou,hlt
geraldton|Geraldton|WA|agr,ene,log
kalgoorlie|Kalgoorlie|WA|ene,hs,log
albany-wa|Albany|WA|agr,tou,hlt
busselton|Busselton|WA|tou,agr,hos
joondalup|Joondalup|WA|edu,hlt,ret
broome|Broome|WA|tou,hos,log
mount-gambier|Mount Gambier|SA|agr,log,hlt
whyalla|Whyalla|SA|mfg,ene,hlt
port-augusta|Port Augusta|SA|ene,log,hs
murray-bridge|Murray Bridge|SA|agr,mfg,log
devonport|Devonport|TAS|tou,agr,log
burnie|Burnie|TAS|mfg,log,hlt
alice-springs|Alice Springs|NT|tou,gov,hlt
palmerston|Palmerston|NT|gov,hlt,ret
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
moenchengladbach|Mönchengladbach|NW|mfg,ret,hs
gelsenkirchen|Gelsenkirchen|NW|ene,hlt,hs
aachen|Aachen|NW|tec,edu,hlt
braunschweig|Braunschweig|NI|aut,tec,edu
kiel|Kiel|SH|log,tec,hlt
chemnitz|Chemnitz|SN|mfg,tec,aut
halle|Halle (Saale)|ST|edu,hlt,log
magdeburg|Magdeburg|ST|log,mfg,gov
freiburg|Freiburg im Breisgau|BW|edu,hlt,tou
krefeld|Krefeld|NW|mfg,log,hs
mainz|Mainz|RP|med,hlt,edu
luebeck|Lübeck|SH|log,hlt,tou
erfurt|Erfurt|TH|log,gov,edu
oberhausen|Oberhausen|NW|ret,log,hlt
rostock|Rostock|MV|log,tou,edu
kassel|Kassel|HE|mfg,log,hlt
hagen|Hagen|NW|mfg,hs,hlt
saarbruecken|Saarbrücken|SL|aut,tec,gov
potsdam|Potsdam|BB|med,tec,gov
ludwigshafen|Ludwigshafen|RP|mfg,log,hlt
oldenburg|Oldenburg|NI|ene,hlt,edu
leverkusen|Leverkusen|NW|mfg,hlt,ret
osnabrueck|Osnabrück|NI|aut,log,hlt
solingen|Solingen|NW|mfg,hs,ret
heidelberg|Heidelberg|BW|hlt,edu,tou
herne|Herne|NW|hlt,hs,log
darmstadt|Darmstadt|HE|tec,edu,mfg
regensburg|Regensburg|BY|aut,tec,tou
ingolstadt|Ingolstadt|BY|aut,mfg,log
wuerzburg|Würzburg|BY|hlt,edu,tou
wolfsburg|Wolfsburg|NI|aut,mfg,log
ulm|Ulm|BW|tec,mfg,hlt
heilbronn|Heilbronn|BW|fin,mfg,tec
pforzheim|Pforzheim|BW|mfg,ret,hs
goettingen|Göttingen|NI|edu,hlt,tec
bremerhaven|Bremerhaven|HB|log,ene,tou
trier|Trier|RP|tou,edu,hlt
jena|Jena|TH|tec,edu,hlt
koblenz|Koblenz|RP|gov,tou,hlt
cottbus|Cottbus|BB|ene,edu,hlt
bergisch-gladbach|Bergisch Gladbach|NW|mfg,ret,hlt
bottrop|Bottrop|NW|ene,hs,ret
erlangen|Erlangen|BY|med,tec,edu
fuerth|Fürth|BY|ret,tec,mfg
guetersloh|Gütersloh|NW|mfg,log,ret
hamm|Hamm|NW|log,ene,hlt
hildesheim|Hildesheim|NI|aut,edu,mfg
moers|Moers|NW|log,hs,ret
muelheim-an-der-ruhr|Mülheim an der Ruhr|NW|ene,ret,hlt
neuss|Neuss|NW|log,ret,mfg
offenbach|Offenbach am Main|HE|log,fin,tec
paderborn|Paderborn|NW|tec,edu,mfg
recklinghausen|Recklinghausen|NW|ene,hlt,ret
remscheid|Remscheid|NW|mfg,hs,aut
reutlingen|Reutlingen|BW|mfg,aut,ret
salzgitter|Salzgitter|NI|mfg,aut,log
siegen|Siegen|NW|mfg,edu,log
hanau|Hanau|HE|mfg,log,ret
ludwigsburg|Ludwigsburg|BW|aut,tec,fin
kaiserslautern|Kaiserslautern|RP|tec,edu,gov
worms|Worms|RP|mfg,tou,hlt
speyer|Speyer|RP|tou,tec,hlt
giessen|Gießen|HE|edu,hlt,tec
marburg|Marburg|HE|edu,hlt,med
fulda|Fulda|HE|ret,hlt,log
bamberg|Bamberg|BY|tou,edu,hlt
bayreuth|Bayreuth|BY|tou,edu,hlt
passau|Passau|BY|tou,edu,hlt
konstanz|Konstanz|BW|tou,edu,tec
flensburg|Flensburg|SH|log,edu,tou
schwerin|Schwerin|MV|gov,tou,hlt
greifswald|Greifswald|MV|edu,hlt,tec
stralsund|Stralsund|MV|tou,log,hlt
neubrandenburg|Neubrandenburg|MV|agr,hlt,gov
weimar|Weimar|TH|tou,edu,hos
gera|Gera|TH|mfg,ret,hlt
zwickau|Zwickau|SN|aut,mfg,edu
dessau-rosslau|Dessau-Roßlau|ST|tec,edu,gov
celle|Celle|NI|ene,tou,hlt
lueneburg|Lüneburg|NI|edu,tou,hlt
ratingen|Ratingen|NW|fin,log,ret
dueren|Düren|NW|mfg,ret,hlt
bocholt|Bocholt|NW|mfg,ret,hs
minden|Minden|NW|log,mfg,hlt
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
