<template>
  <q-layout view="hHh lpR fff">

    <q-header class="site-header" :class="{ 'site-header--scrolled': scrolled }">
      <!-- Utility bar -->
      <div class="utility-bar gt-sm">
        <div class="fu-wrap utility-bar__inner">
          <div class="utility-bar__group">
            <a :href="contact.phoneHref">{{ contact.phone }}</a>
            <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            <span>Lusaka, Zambia</span>
          </div>
          <div class="utility-bar__group">
            <router-link to="/contact-us#support">Support</router-link>
            <router-link to="/contact-us" class="utility-bar__accent">Talk to sales →</router-link>
          </div>
        </div>
      </div>

      <!-- Main navigation -->
      <div class="fu-wrap site-nav">
        <SiteLogo />

        <nav aria-label="Primary" class="site-nav__links gt-sm">
          <router-link to="/" exact-active-class="is-active">Home</router-link>
          <router-link to="/platform" active-class="is-active">Platform</router-link>
          <button type="button" class="site-nav__menu-btn" :class="{ 'is-active': $route.path === '/solutions' }" aria-haspopup="true">
            Solutions <q-icon name="expand_more" size="18px" />
            <q-menu class="mega-menu" fit anchor="bottom middle" self="top middle" :offset="[0, 18]" transition-show="jump-down" transition-hide="jump-up">
              <div class="mega-menu__inner">
                <div class="mega-menu__grid">
                  <router-link
                    v-for="a in audiences"
                    :key="a.id"
                    v-close-popup
                    :to="`/solutions?for=${a.id}#bundle`"
                    class="mega-menu__item"
                  >
                    <span class="fu-icon-tile"><q-icon :name="a.icon" size="22px" /></span>
                    <span>
                      <strong>{{ a.title }}</strong>
                      <span class="mega-menu__desc">{{ a.short }}</span>
                    </span>
                  </router-link>
                </div>
                <div class="mega-menu__feature">
                  <span class="mega-menu__eyebrow">Hardware too</span>
                  <strong>Computers, printers, scanners, POS and maintenance for every branch.</strong>
                  <router-link v-close-popup to="/solutions#equipment">Browse IT equipment →</router-link>
                </div>
              </div>
            </q-menu>
          </button>
          <router-link to="/solutions#equipment">IT Equipment</router-link>
          <router-link to="/about-us" active-class="is-active">About</router-link>
          <router-link to="/contact-us" active-class="is-active">Contact</router-link>
        </nav>

        <div class="site-nav__actions">
          <router-link to="/contact-us#demo" class="fu-btn fu-btn--orange gt-xs">Request a demo</router-link>
          <q-btn
            class="lt-md"
            flat
            round
            icon="menu"
            aria-label="Open menu"
            color="accent"
            @click="drawerOpen = true"
          />
        </div>
      </div>
    </q-header>

    <q-drawer v-model="drawerOpen" side="right" overlay behavior="mobile" :width="300" class="site-drawer">
      <div class="site-drawer__inner">
        <div class="site-drawer__top">
          <SiteLogo />
          <q-btn flat round icon="close" aria-label="Close menu" @click="drawerOpen = false" />
        </div>
        <nav aria-label="Mobile" class="site-drawer__links">
          <router-link v-for="l in mobileLinks" :key="l.to" :to="l.to" @click="drawerOpen = false">{{ l.label }}</router-link>
        </nav>
        <router-link to="/contact-us#demo" class="fu-btn fu-btn--orange" @click="drawerOpen = false">Request a demo</router-link>
        <div class="site-drawer__contact">
          <a :href="contact.phoneHref">{{ contact.phone }}</a>
          <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
      <SiteFooter />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SiteLogo from 'components/SiteLogo.vue'
import SiteFooter from 'components/SiteFooter.vue'
import { contact, audiences } from 'src/data/site'

const drawerOpen = ref(false)
const scrolled = ref(false)

const mobileLinks = [
  { label: 'Home', to: '/' },
  { label: 'Platform', to: '/platform' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'IT Equipment', to: '/solutions#equipment' },
  { label: 'About', to: '/about-us' },
  { label: 'Contact', to: '/contact-us' }
]

function onScroll () {
  scrolled.value = window.scrollY > 8
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style lang="scss" scoped>
.site-header {
  background: #FFFFFF;
  color: $fu-ink;
  border-bottom: 1px solid $fu-line;
  transition: box-shadow .2s;
}
.site-header--scrolled { box-shadow: 0 8px 24px rgba(20, 27, 77, .08); }

.utility-bar {
  background: $fu-navy;
  color: #D5D9F5;
  font-size: 13px;
}
.utility-bar__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.utility-bar__group {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  a { color: #FFFFFF; }
}
.utility-bar__accent { color: $fu-orange !important; font-weight: 600; }

.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 76px;
}
.site-nav__links {
  display: flex;
  align-items: center;
  gap: 28px;
  font-weight: 500;
  font-size: 15px;
  a, .site-nav__menu-btn {
    color: $fu-ink;
    padding: 8px 0;
    border-bottom: 2px solid transparent;
  }
  a:hover, .site-nav__menu-btn:hover { color: $fu-blue; }
  .is-active { color: $fu-blue; border-bottom-color: $fu-orange; }
}
.site-nav__menu-btn {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 2px;
}
.site-nav__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.site-drawer__inner {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.site-drawer__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.site-drawer__links {
  display: flex;
  flex-direction: column;
  a {
    color: $fu-navy;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 18px;
    padding: 12px 0;
    border-bottom: 1px solid $fu-line;
  }
}
.site-drawer__contact {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
}
</style>

<style lang="scss">
// q-menu renders outside the component, so these styles are global
.mega-menu {
  max-width: min(960px, calc(100vw - 32px)) !important;
  border-radius: 16px;
  box-shadow: 0 24px 48px rgba(20, 27, 77, .16);
}
.mega-menu__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;
}
.mega-menu__grid {
  flex: 2 1 520px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 8px;
}
.mega-menu__item {
  display: flex;
  gap: 14px;
  padding: 14px;
  border-radius: 12px;
  color: $fu-ink;
  strong { display: block; color: $fu-navy; }
  &:hover { background: $fu-soft; color: $fu-ink; }
}
.mega-menu__desc { font-size: 14px; color: #5A5F80; }
.mega-menu__feature {
  flex: 1 1 240px;
  background: $fu-navy;
  color: #FFFFFF;
  border-radius: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  a { color: $fu-orange; font-weight: 700; }
}
.mega-menu__eyebrow {
  font-size: 13px;
  font-weight: 700;
  color: $fu-orange;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
