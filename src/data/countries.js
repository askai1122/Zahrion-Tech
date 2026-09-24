// Country-level context: currency, tax terminology, compliance notes, hreflang.
// Every US location already omits `country`, so it defaults to 'US' wherever
// this is consulted — no need to touch the 50 existing US entries.

export const COUNTRY_INFO = {
  US: {
    code: 'US',
    name: 'United States',
    demonym: 'US',
    currency: 'USD',
    symbol: '$',
    taxNote: 'US sales tax, which varies by state',
    complianceNote: 'HIPAA, PCI-DSS, and state-level privacy laws such as the CCPA where relevant',
    hreflang: 'en-US',
    flag: '🇺🇸',
  },
  UAE: {
    code: 'AE',
    name: 'United Arab Emirates',
    demonym: 'UAE',
    currency: 'AED',
    symbol: 'AED ',
    taxNote: '5% UAE VAT',
    complianceNote: 'UAE data protection law (Federal Decree-Law No. 45 of 2021) and free zone rules such as DIFC or ADGM where relevant',
    hreflang: 'en-AE',
    flag: '🇦🇪',
  },
  CA: {
    code: 'CA',
    name: 'Canada',
    demonym: 'Canadian',
    currency: 'CAD',
    symbol: 'CAD $',
    taxNote: 'GST/HST',
    complianceNote: 'PIPEDA and provincial privacy law such as Quebec\u2019s Law 25 where relevant',
    hreflang: 'en-CA',
    flag: '🇨🇦',
  },
}

export const countryInfo = loc => COUNTRY_INFO[loc.country || 'US']
