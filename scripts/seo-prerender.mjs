// Post-build SEO step (runs automatically after `npm run build`, see quasar.config.js).
//
// For every page it writes an HTML file whose <head> already holds the page's
// title, description, canonical URL, Open Graph / Twitter tags and JSON-LD, plus a
// <noscript> text version of the page. Crawlers and link previews (WhatsApp,
// LinkedIn, Facebook) read these without running JavaScript; visitors still get
// the full app. It also writes sitemap.xml and robots.txt.
//
// Run by hand against an existing build:  node scripts/seo-prerender.mjs dist/spa

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { SITE, pages, headTags } from '../src/data/seo.js'
import { contact, faqs, audiences, equipment } from '../src/data/site.js'

const esc = s => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

// URL path -> file the server returns for it (see public/.htaccess)
const fileFor = key => {
  const p = pages[key].path
  if (p === '/') return 'index.html'
  if (key === 'notFound') return '404.html'
  return p.slice(1) + '.html'
}

function headBlock (key) {
  const t = headTags(key)
  const lines = [`<title>${esc(t.title)}</title>`]
  for (const m of t.meta) {
    const attr = m.name ? `name="${esc(m.name)}"` : `property="${esc(m.property)}"`
    lines.push(`<meta ${attr} content="${esc(m.content)}">`)
  }
  if (t.canonical) lines.push(`<link rel="canonical" href="${esc(t.canonical)}">`)
  if (t.jsonLd) {
    // Escape "<" so the JSON can never close the script tag early
    const json = JSON.stringify(t.jsonLd).replace(/</g, '\\u003c')
    lines.push(`<script type="application/ld+json" id="seo-jsonld">${json}</script>`)
  }
  return lines.join('')
}

const nav = () => `<nav><a href="/">Home</a> · <a href="/platform">Platform</a> · <a href="/solutions">Solutions</a> · <a href="/about-us">About us</a> · <a href="/contact-us">Contact</a></nav>`

function noscriptBody (key) {
  const page = pages[key]
  const parts = [nav(), `<h1>${esc(page.h1 || page.title)}</h1>`, `<p>${esc(page.summary || page.description)}</p>`]

  if (key === 'home' || key === 'platform') {
    parts.push('<h2>Core banking modules</h2><ul>' + [
      'Loan management', 'Savings and deposits', 'Integrated accounting', 'Digital Field Application',
      'Self-service portals', 'Reporting', 'AI banking and credit scoring', 'WhatsApp banking', 'USSD banking',
      'Mobile money integration', 'SMS module'
    ].map(m => `<li>${esc(m)}</li>`).join('') + '</ul>')
  }
  if (key === 'platform') {
    parts.push('<h2>Frequently asked questions</h2>' + faqs.map(f => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join(''))
  }
  if (key === 'home' || key === 'solutions') {
    parts.push('<h2>Solutions</h2><ul>' + audiences.map(a => `<li><a href="/solutions?for=${a.id}">${esc(a.title)}</a> — ${esc(a.short)}</li>`).join('') + '</ul>')
    parts.push('<h2>IT equipment and maintenance</h2><ul>' + equipment.map(e => `<li>${esc(e.title)}: ${esc(e.text)}</li>`).join('') + '</ul>')
  }
  parts.push(`<p>Contact: <a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a> · ${esc(contact.phone)} · ${contact.offices.map(o => esc(`${o.address}, ${o.city}, ${o.country}`)).join('; ')}</p>`)
  return `<noscript>${parts.join('')}</noscript>`
}

function renderPage (template, key) {
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name=["']?description["']?[^>]*>/i, '')
  html = html.replace(/(<meta\s+charset=[^>]*>)/i, `$1${headBlock(key)}`)
  html = html.replace(/<div id=["']?q-app["']?>/i, m => `${noscriptBody(key)}${m}`)
  return html
}

function sitemap (today) {
  const urls = Object.values(pages)
    .filter(p => !p.noindex)
    .map(p => `  <url>\n    <loc>${SITE.url}${p.path === '/' ? '/' : p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

const robots = () => `User-agent: *\nAllow: /\nDisallow: /404\n\nSitemap: ${SITE.url}/sitemap.xml\n`

export function prerenderSeo (distDir) {
  const indexPath = path.join(distDir, 'index.html')
  const template = fs.readFileSync(indexPath, 'utf8')
  const written = []

  for (const key of Object.keys(pages)) {
    const file = fileFor(key)
    fs.writeFileSync(path.join(distDir, file), renderPage(template, key))
    written.push(file)
  }

  const today = new Date().toISOString().slice(0, 10)
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap(today))
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robots())
  written.push('sitemap.xml', 'robots.txt')

  console.log(` SEO • wrote ${written.join(', ')}`)
}

// Allow running directly: node scripts/seo-prerender.mjs [distDir]
if (import.meta.url === pathToFileURL(process.argv[1] || '').href) {
  const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
  prerenderSeo(path.resolve(root, process.argv[2] || 'dist/spa'))
}
