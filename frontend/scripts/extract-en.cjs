const fs = require('fs')
const map = {
  'hire-web-developer': 'HireWebDeveloper',
  'hire-mobile-app-developer': 'HireMobileAppDeveloper',
  'hire-nodejs-developer': 'HireNodeJsDeveloper',
  'hire-software-developer': 'HireSoftwareDeveloper',
  'custom-pos-software-development': 'CustomPOSSoftware',
  'custom-cms-development': 'CustomCMSDevelopment',
  'billing-software-development': 'BillingSoftwareDevelopment',
  'veterinary-clinic-app-development': 'VeterinaryClinicApp',
}
const grab = (src, name) => {
  const m = src.match(new RegExp('const ' + name + ' = (\\[[\\s\\S]*?\\n\\])\\n'))
  if (!m) return null
  const code = m[1].replace(/icon:\s*\w+,\s*/g, '')
  return eval('(' + code + ')')
}
const out = {}
for (const [slug, file] of Object.entries(map)) {
  const src = fs.readFileSync(`src/pages/${file}.jsx`, 'utf8')
  out[slug] = { included: grab(src, 'included'), process: grab(src, 'process'), faqs: grab(src, 'faqs') }
}
fs.writeFileSync('src/i18n/content/servicesEn.arrays.json', JSON.stringify(out, null, 1))
for (const [k, v] of Object.entries(out)) console.log(k, v.included?.length, v.process?.length, v.faqs?.length)
