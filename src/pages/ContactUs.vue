<template>
  <q-page class="contact">

    <!-- Intro -->
    <section class="c-hero">
      <div class="fu-wrap c-hero__inner">
        <div class="fu-eyebrow">Contact us</div>
        <h1 class="fu-h1">Let’s talk about your institution.</h1>
        <p class="fu-lead">For a general enquiry, email <a :href="`mailto:${contact.email}`" class="fu-link">{{ contact.email }}</a> or call <a :href="contact.phoneHref" class="fu-link">{{ contact.phone }}</a> — we’ll be in touch as quickly as possible.</p>
        <div class="c-hero__cards fu-cols-3">
          <a :href="contact.phoneHref" class="c-card">
            <span class="fu-icon-tile"><q-icon name="call" size="24px" /></span>
            <span><strong>Call us</strong><span>{{ contact.phone }}</span></span>
          </a>
          <a :href="`mailto:${contact.email}`" class="c-card">
            <span class="fu-icon-tile fu-icon-tile--orange"><q-icon name="mail" size="24px" /></span>
            <span><strong>Email us</strong><span>{{ contact.email }}</span></span>
          </a>
          <a href="#demo" class="c-card">
            <span class="fu-icon-tile"><q-icon name="event" size="24px" /></span>
            <span><strong>Book a demo</strong><span>30 minutes, no obligation</span></span>
          </a>
        </div>
      </div>
    </section>

    <!-- Demo booking -->
    <section id="demo" class="c-demo">
      <div class="fu-wrap c-demo__inner">
        <div class="c-demo__copy">
          <h2 class="fu-h2 q-mt-none">Book a personalised demo</h2>
          <p class="c-demo__lead">30 minutes with a product specialist, using your own loan and savings products.</p>
          <ul class="c-demo__list">
            <li v-for="b in demoBenefits" :key="b"><q-icon name="check_circle" size="20px" />{{ b }}</li>
          </ul>
          <div class="c-demo__offices">
            <div v-for="o in contact.offices" :key="o.city" class="c-office">
              <q-icon name="location_on" size="22px" />
              <div><strong>{{ o.city }}, {{ o.country }}</strong><div>{{ o.address }}</div></div>
            </div>
          </div>
        </div>

        <form class="c-form" @submit.prevent="submit">
          <div class="fu-field">
            <label for="c-first">First name</label>
            <input id="c-first" v-model="form.first" class="fu-input" type="text" autocomplete="given-name" required>
          </div>
          <div class="fu-field">
            <label for="c-last">Last name</label>
            <input id="c-last" v-model="form.last" class="fu-input" type="text" autocomplete="family-name" required>
          </div>
          <div class="fu-field">
            <label for="c-email">Work email</label>
            <input id="c-email" v-model="form.email" class="fu-input" type="email" autocomplete="email" required>
          </div>
          <div class="fu-field">
            <label for="c-phone">Phone</label>
            <input id="c-phone" v-model="form.phone" class="fu-input" type="tel" autocomplete="tel">
          </div>
          <div class="fu-field">
            <label for="c-org">Institution</label>
            <input id="c-org" v-model="form.org" class="fu-input" type="text" autocomplete="organization" required>
          </div>
          <div class="fu-field">
            <label for="c-type">Institution type</label>
            <select id="c-type" v-model="form.type" class="fu-input">
              <option value="">Select…</option>
              <option v-for="a in audiences" :key="a.id" :value="a.title">{{ a.title }}</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="fu-field c-form__full">
            <label for="c-interest">Interested in</label>
            <select id="c-interest" v-model="form.interest" class="fu-input">
              <option value="software">Core banking software + DFA</option>
              <option value="equipment">IT equipment &amp; maintenance</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div class="fu-field c-form__full">
            <label for="c-msg">Anything we should know?</label>
            <textarea id="c-msg" v-model="form.message" class="fu-input" rows="4"></textarea>
          </div>
          <label class="c-form__full c-form__consent">
            <input v-model="form.consent" type="checkbox" required>
            I agree to FinUltra contacting me about this request.
          </label>
          <button type="submit" class="fu-btn fu-btn--orange c-form__full c-form__submit">Request my demo</button>
          <p v-if="sent" class="c-form__full c-form__sent" role="status">Your email app should open with your request ready to send. If it doesn’t, email us at <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>.</p>
        </form>
      </div>
    </section>

    <!-- Support -->
    <section id="support" class="fu-section">
      <div class="fu-wrap fu-split">
        <div>
          <div class="fu-eyebrow">Existing clients</div>
          <h2 class="fu-h2">Need help with FinUltra?</h2>
          <p class="fu-lead q-mt-md">Our support team handles post-implementation support, maintenance and upgrades, and IT equipment servicing.</p>
        </div>
        <div class="c-support">
          <a :href="`mailto:${contact.email}?subject=${encodeURIComponent('FinUltra support request')}`" class="c-card">
            <span class="fu-icon-tile"><q-icon name="support_agent" size="24px" /></span>
            <span><strong>Email support</strong><span>Describe the issue and your branch</span></span>
          </a>
          <a :href="contact.phoneHref" class="c-card">
            <span class="fu-icon-tile fu-icon-tile--orange"><q-icon name="phone_in_talk" size="24px" /></span>
            <span><strong>Urgent? Call us</strong><span>{{ contact.phone }}</span></span>
          </a>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { contact, audiences } from 'src/data/site'
import { useSeo } from 'src/composables/useSeo'

useSeo('contact')

// Other pages hand over form values in history state (never the URL)
const prefill = (typeof window !== 'undefined' && window.history.state?.prefill) || {}
const text = v => (typeof v === 'string' ? v : '')

const demoBenefits = [
  'A walkthrough tailored to your institution type',
  'Migration plan and timeline',
  'Pricing for software and hardware',
  'No obligation to purchase — fully enabled system'
]

const form = reactive({
  first: '',
  last: '',
  email: text(prefill.email),
  phone: '',
  org: '',
  type: text(prefill.type),
  interest: ['software', 'equipment', 'both'].includes(prefill.interest) ? prefill.interest : 'software',
  message: text(prefill.message),
  consent: false
})

const sent = ref(false)

const interestLabels = {
  software: 'Core banking software + DFA',
  equipment: 'IT equipment & maintenance',
  both: 'Software and IT equipment'
}

function submit () {
  const subject = `Demo request — ${form.org}`
  const body = [
    `Name: ${form.first} ${form.last}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || '-'}`,
    `Institution: ${form.org}`,
    `Institution type: ${form.type || '-'}`,
    `Interested in: ${interestLabels[form.interest]}`,
    '',
    form.message
  ].join('\n')
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
}
</script>

<style lang="scss" scoped>
.c-hero { background: $fu-soft; }
.c-hero__inner {
  padding-top: 72px;
  padding-bottom: 72px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .fu-lead { max-width: 720px; }
}
.c-hero__cards {
  margin-top: 16px;
  gap: 16px;
}
.c-card {
  display: flex;
  gap: 16px;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid $fu-line;
  border-radius: 16px;
  padding: 20px;
  color: $fu-ink;
  transition: border-color .15s;
  strong { display: block; color: $fu-navy; }
  span span { color: #5A5F80; font-size: 15px; word-break: break-word; }
  &:hover { border-color: $fu-blue; color: $fu-ink; }
}

.c-demo { background: $fu-blue; }
.c-demo__inner {
  padding-top: 96px;
  padding-bottom: 96px;
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  align-items: flex-start;
}
.c-demo__copy {
  flex: 1 1 380px;
  min-width: 0;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .fu-h2 { color: #FFFFFF; }
}
.c-demo__lead { margin: 0; color: #D5D9F5; font-size: 18px; }
.c-demo__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  li { display: flex; gap: 12px; align-items: center; }
  .q-icon { color: $fu-orange; }
}
.c-demo__offices { display: flex; flex-direction: column; gap: 12px; margin-top: 8px; }
.c-office {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: rgba(255, 255, 255, .08);
  border-radius: 12px;
  padding: 16px;
  .q-icon { color: $fu-orange; }
  div div { color: #D5D9F5; }
}
.c-form {
  flex: 1 1 460px;
  min-width: 0;
  background: #FFFFFF;
  border-radius: 20px;
  padding: clamp(24px, 4vw, 36px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 16px;
  box-sizing: border-box;
}
.c-form__full { grid-column: 1 / -1; }
.c-form__consent {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 14px;
  color: $fu-muted;
  input { width: 18px; height: 18px; margin-top: 2px; accent-color: $fu-blue; }
}
.c-form__submit { min-height: 52px; font-size: 16px; }
.c-form__sent { margin: 0; color: $fu-muted; font-size: 14px; }

.c-support { display: flex; flex-direction: column; gap: 16px; }

@media (max-width: 760px) {
  .c-hero__inner { padding-top: 48px; padding-bottom: 48px; }
  .c-demo__inner { padding-top: 64px; padding-bottom: 64px; gap: 40px; }
}
</style>
