<template>
  <footer class="site-footer">
    <div class="fu-wrap site-footer__inner">
      <div class="site-footer__cols">
        <div class="site-footer__brand">
          <SiteLogo light />
          <p>Core banking software for microfinance institutions, savings and credit organisations — plus the IT equipment to run it.</p>
          <form class="site-footer__news" @submit.prevent="subscribe">
            <label for="footer-news">Get product updates</label>
            <div class="site-footer__news-row">
              <input id="footer-news" v-model="email" type="email" required placeholder="you@institution.com">
              <button type="submit" class="fu-btn fu-btn--orange">Subscribe</button>
            </div>
          </form>
        </div>

        <nav aria-label="Platform" class="site-footer__col">
          <strong>Platform</strong>
          <router-link to="/platform">Core banking</router-link>
          <router-link to="/platform#modules">Modules</router-link>
          <router-link to="/platform#integrations">Mobile money &amp; SMS</router-link>
          <router-link to="/platform?module=whatsapp#modules">WhatsApp banking</router-link>
          <router-link to="/platform?module=ussd#modules">USSD banking</router-link>
          <router-link to="/platform?module=ai#modules">AI banking</router-link>
          <router-link to="/platform#plans">Plans</router-link>
          <router-link to="/platform#faq">FAQ</router-link>
        </nav>

        <nav aria-label="Solutions" class="site-footer__col">
          <strong>Solutions</strong>
          <router-link v-for="a in audiences" :key="a.id" :to="`/solutions?for=${a.id}#bundle`">{{ a.title }}</router-link>
          <router-link to="/solutions#equipment">IT equipment</router-link>
        </nav>

        <nav aria-label="Company" class="site-footer__col">
          <strong>Company</strong>
          <router-link to="/about-us">About us</router-link>
          <router-link to="/about-us#approach">Our approach</router-link>
          <router-link to="/solutions#services">Services</router-link>
          <router-link to="/contact-us">Contact</router-link>
        </nav>

        <div class="site-footer__col">
          <strong>Contact</strong>
          <span v-for="o in contact.offices" :key="o.city">{{ o.address }}, {{ o.city }}, {{ o.country }}</span>
          <a :href="contact.phoneHref">{{ contact.phone }}</a>
          <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </div>
      </div>

      <div class="site-footer__bottom">
        <span>© {{ year }} FinUltra Solutions. All rights reserved.</span>
        <div class="site-footer__links">
          <a v-for="s in contact.social" :key="s.label" :href="s.href" target="_blank" rel="noopener">{{ s.label }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import SiteLogo from 'components/SiteLogo.vue'
import { contact, audiences } from 'src/data/site'

const year = new Date().getFullYear()
const email = ref('')

function subscribe () {
  const subject = encodeURIComponent('Subscribe me to FinUltra product updates')
  const body = encodeURIComponent(`Please add ${email.value} to the FinUltra product updates list.`)
  window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
}
</script>

<style lang="scss" scoped>
.site-footer {
  background: $fu-navy;
  color: #C9CEF2;
  font-size: 15px;
}
.site-footer__inner {
  padding-top: 72px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.site-footer__cols {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}
.site-footer__brand {
  flex: 2 1 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  p { margin: 0; max-width: 340px; }
}
.site-footer__col {
  flex: 1 1 160px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  strong { color: #FFFFFF; }
  a { color: #C9CEF2; }
  a:hover { color: #FFFFFF; }
}
.site-footer__news {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 380px;
  label { font-weight: 600; color: #FFFFFF; }
}
.site-footer__news-row {
  display: flex;
  gap: 8px;
  input {
    flex: 1;
    min-width: 0;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #3A4590;
    background: #1E2766;
    color: #FFFFFF;
    padding: 0 12px;
    font: inherit;
  }
  input::placeholder { color: #9EA5D8; }
}
.site-footer__bottom {
  border-top: 1px solid #2E3880;
  padding-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  font-size: 14px;
}
.site-footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  a { color: #C9CEF2; }
  a:hover { color: #FFFFFF; }
}
</style>
