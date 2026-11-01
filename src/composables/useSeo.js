// Keeps <head> in sync with the current page during in-app navigation.
// The build step writes the same tags into each page's HTML, so tags are
// updated in place (never duplicated) when the app takes over.

import { onMounted } from 'vue'
import { headTags } from 'src/data/seo'

function upsertMeta (attrs) {
  const key = attrs.name ? 'name' : 'property'
  let el = document.head.querySelector(`meta[${key}="${attrs[key]}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(key, attrs[key])
    document.head.appendChild(el)
  }
  el.setAttribute('content', attrs.content)
}

function upsertCanonical (href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!href) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd (data) {
  let el = document.head.querySelector('script#seo-jsonld')
  if (!data) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.id = 'seo-jsonld'
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function useSeo (key) {
  onMounted(() => {
    const tags = headTags(key)
    document.title = tags.title
    tags.meta.forEach(upsertMeta)
    upsertCanonical(tags.canonical)
    upsertJsonLd(tags.jsonLd)
  })
}
