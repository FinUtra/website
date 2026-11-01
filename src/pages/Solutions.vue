<template>
  <q-page class="solutions">

    <!-- Hero: audience selector -->
    <section class="s-hero">
      <div class="fu-wrap s-hero__inner">
        <div class="s-hero__copy">
          <div class="fu-eyebrow">Solutions</div>
          <h1 class="fu-h1">Banking software and hardware, <span class="text-primary">tailored to your institution</span>.</h1>
          <p class="fu-lead">Tell us who you serve and we’ll show you the right setup — software, field tools and IT equipment.</p>
        </div>
        <fieldset class="aud">
          <legend>I am a…</legend>
          <div class="aud__grid fu-cols-4">
            <label v-for="a in audiences" :key="a.id" class="aud__card" :class="{ 'aud__card--on': a.id === audienceId }">
              <input v-model="audienceId" type="radio" name="audience" :value="a.id">
              <span class="fu-icon-tile"><q-icon :name="a.icon" size="24px" /></span>
              <strong>{{ a.title }}</strong>
              <span class="aud__pick">{{ a.pick }}</span>
            </label>
          </div>
        </fieldset>
      </div>
    </section>

    <!-- Bundle + quote builder -->
    <section id="bundle" class="fu-section">
      <div class="fu-wrap bundle">
        <div class="bundle__copy">
          <span class="bundle__tag">Recommended · {{ audience.title }}</span>
          <h2 class="fu-h2 q-mt-none">Your FinUltra bundle</h2>
          <p class="fu-lead">Everything you need to digitise your branches and field teams.</p>
          <div class="bundle__items">
            <div v-for="b in audience.bundle" :key="b.title" class="bundle__item">
              <span class="bundle__check"><q-icon name="check" size="20px" /></span>
              <div><strong>{{ b.title }}</strong><div>{{ b.text }}</div></div>
            </div>
            <div class="bundle__item bundle__item--optional">
              <span class="bundle__check bundle__check--plus"><q-icon name="add" size="20px" /></span>
              <div><strong>Optional: branch IT kit</strong><div>Computers, printers, POS and maintenance</div></div>
            </div>
          </div>
        </div>

        <form class="builder" aria-labelledby="builder-title" @submit.prevent="requestQuote">
          <h3 id="builder-title">Build your quote</h3>
          <div class="fu-field">
            <span class="builder__label">Active clients</span>
            <q-slider v-model="clients" aria-label="Active clients" :min="500" :max="50000" :step="500" color="secondary" track-color="grey-8" thumb-color="secondary" />
            <div class="builder__scale"><span>500</span><strong>{{ clients.toLocaleString() }}{{ clients >= 50000 ? '+' : '' }}</strong><span>50,000+</span></div>
          </div>
          <div class="fu-field">
            <label for="b-branches">Branches</label>
            <input id="b-branches" v-model.number="branches" class="fu-input builder__input" type="number" min="1">
          </div>
          <fieldset class="builder__addons">
            <legend>Add-ons</legend>
            <label v-for="a in addonOptions" :key="a"><input v-model="addons" type="checkbox" :value="a"> {{ a }}</label>
          </fieldset>
          <div class="builder__foot">
            <div>
              <div class="builder__note">Per-client pricing</div>
              <div class="builder__summary">{{ clients.toLocaleString() }} clients · {{ branches }} {{ branches === 1 ? 'branch' : 'branches' }}</div>
            </div>
            <button type="submit" class="fu-btn fu-btn--orange">Get my quote</button>
          </div>
        </form>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="fu-section fu-section--soft">
      <div class="fu-wrap">
        <div class="fu-head">
          <div class="fu-head__text">
            <div class="fu-eyebrow">Our services</div>
            <h2 class="fu-h2">We implement, train and support — end to end</h2>
          </div>
        </div>
        <div class="fu-cols-4">
          <div v-for="(s, i) in services" :key="s.title" class="fu-card service">
            <span class="fu-icon-tile" :class="{ 'fu-icon-tile--orange': i % 2 }"><q-icon :name="s.icon" size="26px" /></span>
            <h3>{{ s.title }}</h3>
            <ul>
              <li v-for="p in s.points" :key="p">{{ p }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- IT equipment catalogue -->
    <section id="equipment" class="fu-section">
      <div class="fu-wrap">
        <div class="fu-head">
          <div class="fu-head__text">
            <div class="fu-eyebrow">IT equipment &amp; maintenance</div>
            <h2 class="fu-h2">Hardware for every branch</h2>
            <p class="fu-lead q-mt-sm">Supplied, installed and maintained by FinUltra. Add items to your quote and we’ll come back with pricing.</p>
          </div>
        </div>

        <div class="catalog">
          <aside class="catalog__filters" aria-label="Filter equipment">
            <strong>Category</strong>
            <label v-for="e in equipment" :key="e.id"><input v-model="filters" type="checkbox" :value="e.id"> {{ e.title }}</label>
            <strong class="q-mt-md">Service</strong>
            <label><input v-model="maintenance" type="checkbox"> Include maintenance plan</label>
            <button v-if="filters.length" type="button" class="catalog__clear" @click="filters = []">Clear filters</button>
          </aside>

          <div class="catalog__grid">
            <article v-for="e in visibleEquipment" :key="e.id" class="product">
              <div class="product__media"><q-icon :name="e.icon" size="56px" /></div>
              <h3>{{ e.title }}</h3>
              <p>{{ e.text }}</p>
              <div class="product__qty">
                <button type="button" :aria-label="`Remove one ${e.title}`" :disabled="!quote[e.id]" @click="change(e.id, -1)"><q-icon name="remove" size="18px" /></button>
                <span aria-live="polite">{{ quote[e.id] || 0 }}</span>
                <button type="button" :aria-label="`Add one ${e.title}`" @click="change(e.id, 1)"><q-icon name="add" size="18px" /></button>
              </div>
              <button type="button" class="fu-btn product__btn" :class="quote[e.id] ? 'fu-btn--primary' : 'fu-btn--outline'" @click="quote[e.id] ? null : change(e.id, 1)">
                <q-icon :name="quote[e.id] ? 'check' : 'add_shopping_cart'" size="18px" />
                {{ quote[e.id] ? `In quote (${quote[e.id]})` : 'Add to quote' }}
              </button>
            </article>
          </div>
        </div>

        <transition name="fade">
          <div v-if="quoteCount" class="quote-bar" role="status">
            <span>Quote: <strong>{{ quoteCount }} {{ quoteCount === 1 ? 'item' : 'items' }}</strong><template v-if="maintenance"> · with maintenance</template></span>
            <button type="button" class="fu-btn fu-btn--orange quote-bar__btn" @click="requestEquipmentQuote">Request quote →</button>
          </div>
        </transition>
      </div>
    </section>

    <!-- Support -->
    <section id="support" class="fu-section fu-section--soft">
      <div class="fu-wrap">
        <div class="fu-head">
          <div class="fu-head__text">
            <h2 class="fu-h2 q-mt-none">Support that’s there when your branches open</h2>
          </div>
        </div>
        <div class="fu-cols-4">
          <div v-for="s in support" :key="s.title" class="support">
            <q-icon :name="s.icon" size="28px" class="text-primary" />
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
            <router-link :to="s.to" class="fu-link">{{ s.cta }} →</router-link>
          </div>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { ref, computed, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { audiences, equipment } from 'src/data/site'
import { useSeo } from 'src/composables/useSeo'

useSeo('solutions')

const route = useRoute()
const router = useRouter()

const audienceId = ref(audiences.some(a => a.id === route.query.for) ? route.query.for : 'mfi')
const audience = computed(() => audiences.find(a => a.id === audienceId.value))
watch(() => route.query.for, v => { if (audiences.some(a => a.id === v)) audienceId.value = v })

const clients = ref(8000)
const branches = ref(4)
const addonOptions = ['Digital Field Application', 'Mobile money integration', 'WhatsApp banking', 'USSD banking', 'AI credit scoring', 'SMS module', 'Self-service client portal']
const addons = ref(['Digital Field Application', 'Mobile money integration'])

function requestQuote () {
  router.push({
    path: '/contact-us',
    hash: '#demo',
    state: {
      prefill: {
        interest: 'software',
        type: audience.value.title,
        message: `Quote request: ${clients.value.toLocaleString()} active clients, ${branches.value} branches. Add-ons: ${addons.value.join(', ') || 'none'}.`
      }
    }
  })
}

const services = [
  { icon: 'forum', title: 'Consultation', points: ['Business process analysis', 'Requirement gathering', 'Gap analysis', 'Technology & architecture'] },
  { icon: 'construction', title: 'Implementation', points: ['Parameterisation', 'Interface development', 'System integration', 'Data migration & testing'] },
  { icon: 'school', title: 'Training', points: ['Technical training', 'Functional user training', 'After-installation support'] },
  { icon: 'handshake', title: 'Support & maintenance', points: ['Maintenance and upgrades', 'Post-implementation support', 'IT services and maintenance'] }
]

const initialItem = equipment.some(e => e.id === route.query.item) ? [route.query.item] : []
const filters = ref(initialItem)
const maintenance = ref(false)
const visibleEquipment = computed(() => filters.value.length ? equipment.filter(e => filters.value.includes(e.id)) : equipment)

const quote = reactive({})
const quoteCount = computed(() => Object.values(quote).reduce((sum, n) => sum + n, 0))
function change (id, delta) {
  quote[id] = Math.max(0, (quote[id] || 0) + delta)
}

function requestEquipmentQuote () {
  const items = equipment.filter(e => quote[e.id]).map(e => `${quote[e.id]} × ${e.title}`)
  router.push({
    path: '/contact-us',
    hash: '#demo',
    state: {
      prefill: {
        interest: 'equipment',
        message: `IT equipment quote: ${items.join(', ')}${maintenance.value ? ' — with maintenance plan' : ''}.`
      }
    }
  })
}

const support = [
  { icon: 'menu_book', title: 'Training', text: 'Onboarding for new staff and refreshers for your teams.', to: '/contact-us', cta: 'Book training' },
  { icon: 'support_agent', title: 'Post-implementation support', text: 'Our Lusaka team helps you after go-live.', to: '/contact-us#support', cta: 'Get support' },
  { icon: 'system_update', title: 'Maintenance & upgrades', text: 'Your system and hardware kept current and running.', to: '/contact-us', cta: 'Ask about plans' },
  { icon: 'cloud_done', title: '99.9% uptime', text: 'Cloud hosted, so your branches stay online.', to: '/platform#security', cta: 'How we keep it up' }
]
</script>

<style lang="scss" scoped>
.s-hero { background: $fu-soft; }
.s-hero__inner {
  padding-top: 72px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.s-hero__copy {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.aud {
  border: none;
  margin: 0;
  padding: 0;
  legend { font-weight: 700; color: $fu-navy; margin-bottom: 16px; font-size: 18px; }
}
.aud__grid { gap: 16px; }
.aud__card {
  position: relative;
  background: #FFFFFF;
  border: 2px solid #D5D8EC;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  transition: border-color .15s, box-shadow .15s;
  strong { font-size: 19px; color: $fu-navy; line-height: 1.3; }
  input { position: absolute; top: 20px; right: 20px; width: 20px; height: 20px; accent-color: $fu-blue; }
  &:hover { border-color: #9AA2D6; }
  &:focus-within { box-shadow: 0 0 0 3px rgba(247, 148, 29, .5); }
}
.aud__card--on { border-color: $fu-blue; box-shadow: 0 12px 32px rgba(43, 58, 171, .12); }
.aud__pick { color: #5A5F80; font-size: 15px; }

.bundle {
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  align-items: flex-start;
}
.bundle__copy {
  flex: 1 1 440px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.bundle__tag {
  align-self: flex-start;
  background: $fu-orange-tint;
  color: #8A4A00;
  font-weight: 700;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 999px;
}
.bundle__items { display: flex; flex-direction: column; gap: 12px; }
.bundle__item {
  display: flex;
  gap: 16px;
  align-items: center;
  border: 1px solid $fu-line;
  border-radius: 12px;
  padding: 16px;
  strong { color: $fu-navy; }
  div > div { font-size: 15px; color: #5A5F80; }
}
.bundle__item--optional { border-style: dashed; border-color: $fu-orange; }
.bundle__check {
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background: $fu-blue;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bundle__check--plus { background: $fu-orange; color: $fu-navy; }

.builder {
  flex: 1 1 420px;
  min-width: 0;
  background: $fu-navy;
  color: #FFFFFF;
  border-radius: 20px;
  padding: clamp(24px, 4vw, 36px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  h3 { margin: 0; color: #FFFFFF; font-size: 24px; }
  .fu-field label, .builder__label { color: #D5D9F5; font-weight: 600; font-size: 14px; }
}
.builder__scale {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #B9BFEA;
  strong { color: #FFFFFF; font-size: 16px; }
}
.builder__input { background: #1E2766; border-color: #3A4596; color: #FFFFFF; }
.builder__addons {
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  legend { font-weight: 600; font-size: 14px; color: #D5D9F5; margin-bottom: 8px; }
  label { display: flex; gap: 10px; align-items: center; cursor: pointer; }
  input { width: 20px; height: 20px; accent-color: $fu-orange; }
}
.builder__foot {
  border-top: 1px solid #343E8A;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  flex-wrap: wrap;
}
.builder__note { font-size: 14px; color: #B9BFEA; }
.builder__summary { font-weight: 700; font-size: 18px; color: $fu-orange; }

.service {
  h3 { font-size: 20px; margin: 16px 0 8px; }
  ul { margin: 0; padding-left: 18px; color: $fu-muted; display: flex; flex-direction: column; gap: 4px; }
}

.catalog {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: flex-start;
}
.catalog__filters {
  flex: 1 1 220px;
  background: $fu-soft;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
  strong { color: $fu-navy; }
  label { display: flex; gap: 10px; align-items: center; cursor: pointer; }
  input { width: 18px; height: 18px; accent-color: $fu-blue; }
}
.catalog__clear {
  align-self: flex-start;
  background: none;
  border: none;
  padding: 8px 0;
  color: $fu-blue;
  font: 600 14px 'Inter', sans-serif;
  cursor: pointer;
}
.catalog__grid {
  flex: 999 1 560px;
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 220px), 1fr));
  gap: 20px;
}
.product {
  border: 1px solid $fu-line;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 { margin: 4px 0 0; font-size: 18px; }
  p { margin: 0; color: #5A5F80; font-size: 14px; flex: 1; }
}
.product__media {
  height: 140px;
  border-radius: 10px;
  background: $fu-blue-tint;
  color: $fu-blue;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product__qty {
  display: flex;
  align-items: center;
  gap: 12px;
  button {
    width: 36px;
    height: 36px;
    border-radius: 18px;
    border: 1px solid #C9CDE6;
    background: #FFFFFF;
    color: $fu-navy;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button:disabled { opacity: .4; cursor: default; }
  span { min-width: 20px; text-align: center; font-weight: 700; }
}
.product__btn { width: 100%; padding: 0 12px; }

.quote-bar {
  position: sticky;
  bottom: 16px;
  margin: 32px 0 0 auto;
  width: fit-content;
  max-width: 100%;
  background: $fu-navy;
  color: #FFFFFF;
  border-radius: 999px;
  padding: 8px 8px 8px 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  box-shadow: 0 16px 40px rgba(20, 27, 77, .25);
  z-index: 5;
}
.quote-bar__btn { border-radius: 999px; }
.fade-enter-active, .fade-leave-active { transition: opacity .2s, transform .2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(8px); }

.support {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  h3 { margin: 8px 0 0; font-size: 20px; }
  p { margin: 0 0 8px; color: $fu-muted; flex: 1; }
}

@media (max-width: 760px) {
  .s-hero__inner { padding-top: 48px; padding-bottom: 56px; }
}
</style>
