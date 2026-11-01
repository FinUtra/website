// SEO for every page: titles, descriptions, social cards and structured data.
// Used in the browser (src/composables/useSeo.js) and at build time
// (scripts/seo-prerender.mjs), so keep this file free of Vite-only imports.

import { contact, faqs, audiences } from './site.js'

export const SITE = {
  url: 'https://finultrasolution.com',
  name: 'FinUltra',
  legalName: 'FinUltra Solutions',
  locale: 'en_GB',
  image: '/images/og-finultra.jpg',
  imageWidth: 1200,
  imageHeight: 630,
  logo: '/icons/icon-512x512.png'
}

export const pages = {
  home: {
    path: '/',
    title: 'Core Banking Software for Microfinance & SACCOs | FinUltra',
    description: 'Cloud core banking software for MFIs, SACCOs and lenders in Zambia and Africa: loans, savings, mobile money, WhatsApp & USSD banking and AI credit scoring.',
    h1: 'Core banking software for microfinance, savings & credit',
    summary: 'FinUltra is cloud core banking software for microfinance institutions, SACCOs, digital lenders and community banks — with loan and savings management, integrated accounting, a Digital Field Application, mobile money, WhatsApp banking, USSD banking, AI credit scoring and IT equipment supply.',
    priority: '1.0',
    changefreq: 'weekly'
  },
  platform: {
    path: '/platform',
    title: 'Cloud Banking Platform: Loans, USSD & WhatsApp | FinUltra',
    description: 'Explore FinUltra’s cloud banking platform: loan management, savings, accounting, field app, mobile money, WhatsApp banking, USSD and AI credit scoring.',
    h1: 'Core banking software for modern lenders',
    summary: 'One cloud platform for loan management, savings and deposits, integrated accounting, the Digital Field Application, self-service portals, reporting, AI banking, WhatsApp banking and USSD banking — with per-client pricing and 99.9% uptime.',
    priority: '0.9',
    changefreq: 'monthly',
    crumb: 'Platform'
  },
  solutions: {
    path: '/solutions',
    title: 'Banking Software for MFIs, SACCOs, Lenders & Banks | FinUltra',
    description: 'Core banking solutions for microfinance institutions, SACCOs, digital lenders and community banks — plus implementation, training, support and IT equipment.',
    h1: 'Banking software and hardware, tailored to your institution',
    summary: 'Recommended FinUltra bundles for microfinance institutions, SACCOs and credit unions, digital and payroll lenders and community banks, with consultation, implementation, training, support and IT equipment supply and maintenance.',
    priority: '0.9',
    changefreq: 'monthly',
    crumb: 'Solutions'
  },
  about: {
    path: '/about-us',
    title: 'About FinUltra | Banking Technology Partner in Lusaka, Zambia',
    description: 'FinUltra Solutions bridges technology and finance — core banking software, mobile banking and IT infrastructure for financial institutions, from Lusaka.',
    h1: 'Technology that takes finance further',
    summary: 'FinUltra Solutions delivers core banking software and mobile banking solutions, plus IT infrastructure and computer hardware, to help financial institutions provide secure, seamless and innovative financial services.',
    priority: '0.7',
    changefreq: 'yearly',
    crumb: 'About us'
  },
  contact: {
    path: '/contact-us',
    title: 'Contact FinUltra | Book a Core Banking Software Demo',
    description: `Book a free 30-minute demo of FinUltra core banking software, or contact our Lusaka team on ${contact.phone} or ${contact.email}.`,
    h1: 'Let’s talk about your institution',
    summary: `Book a personalised demo of FinUltra core banking software. Email ${contact.email} or call ${contact.phone}. Office: ${contact.offices.map(o => `${o.address}, ${o.city}, ${o.country}`).join('; ')}.`,
    priority: '0.8',
    changefreq: 'yearly',
    crumb: 'Contact'
  },
  notFound: {
    path: '/404',
    title: 'Page not found | FinUltra',
    description: 'The page you are looking for could not be found.',
    noindex: true
  }
}

const abs = path => SITE.url + (path === '/' ? '/' : path)

const ORG_ID = `${SITE.url}/#organization`
const WEBSITE_ID = `${SITE.url}/#website`
const SOFTWARE_ID = `${SITE.url}/#software`

function organization () {
  const office = contact.offices[0]
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url + '/',
    logo: { '@type': 'ImageObject', url: abs(SITE.logo), width: 512, height: 512 },
    email: contact.email,
    telephone: contact.phone.replace(/\s/g, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.address,
      addressLocality: office.city,
      addressCountry: 'ZM'
    },
    areaServed: ['Zambia', 'Africa'],
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: contact.email,
      telephone: contact.phone.replace(/\s/g, ''),
      areaServed: 'ZM',
      availableLanguage: ['English']
    }],
    knowsAbout: ['Core banking software', 'Microfinance software', 'SACCO management software', 'Loan management system', 'Mobile money integration', 'WhatsApp banking', 'USSD banking', 'AI credit scoring']
  }
}

function website () {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url + '/',
    name: SITE.name,
    description: pages.home.description,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en'
  }
}

function software () {
  return {
    '@type': 'SoftwareApplication',
    '@id': SOFTWARE_ID,
    name: 'FinUltra Core Banking',
    applicationCategory: 'FinanceApplication',
    applicationSubCategory: 'Core banking software',
    operatingSystem: 'Web browser',
    url: abs('/platform'),
    description: pages.platform.summary,
    publisher: { '@id': ORG_ID },
    featureList: [
      'Loan management',
      'Savings and deposits',
      'Integrated accounting',
      'Digital Field Application (offline)',
      'Self-service client portals',
      'Mobile money integration',
      'WhatsApp banking',
      'USSD banking',
      'AI credit scoring and arrears alerts',
      'SMS notifications',
      'Reporting and dashboards',
      'Per-client pricing',
      '99.9% uptime guarantee'
    ]
  }
}

function breadcrumbs (page) {
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: abs('/') }]
  if (page.crumb) items.push({ '@type': 'ListItem', position: 2, name: page.crumb, item: abs(page.path) })
  return { '@type': 'BreadcrumbList', '@id': abs(page.path) + '#breadcrumb', itemListElement: items }
}

function webPage (key, page, type = 'WebPage') {
  return {
    '@type': type,
    '@id': abs(page.path) + '#webpage',
    url: abs(page.path),
    name: page.title,
    description: page.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': key === 'about' || key === 'contact' ? ORG_ID : SOFTWARE_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: abs(SITE.image) },
    breadcrumb: { '@id': abs(page.path) + '#breadcrumb' },
    inLanguage: 'en'
  }
}

// JSON-LD @graph for a page key
export function structuredData (key) {
  const page = pages[key]
  if (!page || page.noindex) return null
  const graph = [organization(), website()]

  if (key === 'home') {
    graph.push(webPage(key, page), software(), breadcrumbs(page))
  }
  if (key === 'platform') {
    graph.push(webPage(key, page), software(), breadcrumbs(page), {
      '@type': 'FAQPage',
      '@id': abs(page.path) + '#faq',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    })
  }
  if (key === 'solutions') {
    graph.push(webPage(key, page), breadcrumbs(page), {
      '@type': 'ItemList',
      '@id': abs(page.path) + '#solutions',
      name: 'FinUltra core banking solutions',
      itemListElement: audiences.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: `Core banking software for ${a.title.toLowerCase()}`,
          description: a.bundle.map(b => `${b.title}: ${b.text}`).join('. ') + '.',
          provider: { '@id': ORG_ID },
          serviceType: 'Core banking software',
          areaServed: 'Africa'
        }
      }))
    })
  }
  if (key === 'about') {
    graph.push(webPage(key, page, 'AboutPage'), breadcrumbs(page))
  }
  if (key === 'contact') {
    graph.push(webPage(key, page, 'ContactPage'), breadcrumbs(page))
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

// Flat list of <head> tags for a page key — shared by the browser and the build step
export function headTags (key) {
  const page = pages[key]
  const url = abs(page.path)
  const image = abs(SITE.image)
  return {
    title: page.title,
    canonical: page.noindex ? null : url,
    meta: [
      { name: 'description', content: page.description },
      { name: 'robots', content: page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE.name },
      { property: 'og:locale', content: SITE.locale },
      { property: 'og:title', content: page.title },
      { property: 'og:description', content: page.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: String(SITE.imageWidth) },
      { property: 'og:image:height', content: String(SITE.imageHeight) },
      { property: 'og:image:alt', content: 'FinUltra core banking software' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: page.title },
      { name: 'twitter:description', content: page.description },
      { name: 'twitter:image', content: image }
    ],
    jsonLd: structuredData(key)
  }
}
