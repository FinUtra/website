<template>
  <q-page class="platform">

    <!-- Dark hero with product dashboard -->
    <section class="p-hero">
      <div class="fu-wrap p-hero__inner">
        <span class="p-hero__pill"><span class="p-hero__dot"></span> Cloud-native core banking · 99.9% uptime</span>
        <h1 class="p-hero__title">Core banking software for <span>modern lenders</span></h1>
        <p class="p-hero__lead">Loans, savings, accounting, field operations, mobile money, WhatsApp, USSD and AI — one cloud platform, priced per client so it grows with you.</p>
        <div class="p-hero__ctas">
          <router-link to="/contact-us#demo" class="fu-btn fu-btn--orange p-pill">Start with a demo</router-link>
          <a href="#modules" class="fu-btn fu-btn--ghost-light p-pill">Explore modules</a>
        </div>

        <div class="dash" role="img" aria-label="Illustration of the FinUltra dashboard with portfolio figures, a disbursements chart and live activity">
          <div class="dash__chrome"><span></span><span></span><span></span></div>
          <div class="dash__body">
            <div class="dash__side gt-sm">
              <div class="dash__brand">Fin<span>Ultra</span>.</div>
              <div v-for="(item, i) in dashNav" :key="item" class="dash__nav" :class="{ 'dash__nav--on': i === 0 }">{{ item }}</div>
            </div>
            <div class="dash__main">
              <div class="dash__kpis">
                <div v-for="k in kpis" :key="k.label" class="dash__kpi">
                  <div class="dash__kpi-label">{{ k.label }}</div>
                  <div class="dash__kpi-value" :class="{ 'dash__kpi-value--warn': k.warn }">{{ k.value }}</div>
                </div>
              </div>
              <div class="dash__row">
                <div class="dash__panel dash__panel--chart">
                  <div class="dash__panel-title">Disbursements vs repayments</div>
                  <div class="dash__bars">
                    <template v-for="(h, i) in bars" :key="i">
                      <span class="dash__bar" :style="{ height: h[0] + '%' }"></span>
                      <span class="dash__bar dash__bar--alt" :style="{ height: h[1] + '%' }"></span>
                    </template>
                  </div>
                </div>
                <div class="dash__panel">
                  <div class="dash__panel-title">Live activity</div>
                  <div v-for="a in activity" :key="a" class="dash__activity"><q-icon name="fiber_manual_record" size="10px" />{{ a }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Module explorer -->
    <section id="modules" class="fu-section">
      <div class="fu-wrap">
        <div class="fu-head fu-head--center">
          <div class="fu-head__text">
            <h2 class="fu-h2">One platform. Every module you need.</h2>
            <p class="fu-lead q-mt-sm">Switch on what you need today, add more as you grow.</p>
          </div>
        </div>

        <div role="tablist" aria-label="Platform modules" class="tabs">
          <button
            v-for="m in modules"
            :id="`tab-${m.id}`"
            :key="m.id"
            type="button"
            role="tab"
            class="tabs__btn"
            :class="{ 'tabs__btn--on': m.id === activeId }"
            :aria-selected="m.id === activeId"
            :aria-controls="`panel-${m.id}`"
            @click="activeId = m.id"
          >{{ m.label }}</button>
        </div>

        <div :id="`panel-${active.id}`" role="tabpanel" :aria-labelledby="`tab-${active.id}`" class="module">
          <div class="module__copy">
            <span class="fu-icon-tile"><q-icon :name="active.icon" size="26px" /></span>
            <h3>{{ active.title }}</h3>
            <p>{{ active.text }}</p>
            <ul class="module__list">
              <li v-for="p in active.points" :key="p"><q-icon name="check" size="18px" />{{ p }}</li>
            </ul>
            <router-link to="/contact-us#demo" class="fu-link">See {{ active.label.toLowerCase() }} in a demo →</router-link>
          </div>
          <div class="module__visual" aria-hidden="true">
            <div class="module__visual-head">
              <q-icon :name="active.icon" size="20px" /> {{ active.label }}
            </div>
            <div v-for="(row, i) in active.rows" :key="row" class="module__visual-row">
              <span>{{ row }}</span>
              <span class="module__chip" :class="{ 'module__chip--alt': i % 2 }">{{ i % 2 ? 'Pending' : 'Active' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integrations -->
    <section id="integrations" class="fu-section fu-section--navy">
      <div class="fu-wrap fu-split">
        <div class="integ__copy">
          <div class="fu-eyebrow">Integrations</div>
          <h2 class="fu-h2">Connected to the money your clients already use</h2>
          <p class="fu-lead">Integrated with mobile money services around the world, so clients repay loans and deposit savings over their phones — plus WhatsApp banking, USSD short codes and a personalised, automated SMS module.</p>
          <router-link to="/contact-us" class="fu-link integ__link">Ask about your integration →</router-link>
        </div>
        <div class="integ__grid">
          <div v-for="(n, i) in integrations" :key="n.label" class="integ__node" :class="{ 'integ__node--core': i === 4 }">
            <template v-if="i === 4">Fin<span>Ultra</span>.</template>
            <template v-else>
              <q-icon :name="n.icon" size="26px" />
              <span>{{ n.label }}</span>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- Security -->
    <section id="security" class="fu-section">
      <div class="fu-wrap">
        <div class="fu-head">
          <div class="fu-head__text">
            <div class="fu-eyebrow">Reliability &amp; security</div>
            <h2 class="fu-h2">Bank-grade reliability, without a bank-sized IT team</h2>
          </div>
        </div>
        <div class="fu-cols-4">
          <div v-for="s in security" :key="s.title" class="fu-card sec">
            <q-icon :name="s.icon" size="32px" class="text-primary" />
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Plans -->
    <section id="plans" class="fu-section fu-section--soft">
      <div class="fu-wrap">
        <div class="fu-head fu-head--center">
          <div class="fu-head__text">
            <h2 class="fu-h2">Simple per-client pricing</h2>
            <p class="fu-lead q-mt-sm">Pay for the clients you serve — a flexible structure that lets MFIs benefit regardless of their size.</p>
          </div>
        </div>
        <div class="fu-cols-3 plans">
          <div v-for="p in plans" :key="p.name" class="plan" :class="{ 'plan--featured': p.featured }">
            <span v-if="p.featured" class="plan__tag">Most popular</span>
            <div class="plan__name">{{ p.name }}</div>
            <div class="plan__price">{{ p.price }}<span class="plan__unit">{{ p.price === 'Custom' ? 'tailored to your group' : 'based on your active clients' }}</span></div>
            <p class="plan__for">{{ p.for }}</p>
            <ul>
              <li v-for="f in p.features" :key="f"><q-icon name="check" size="18px" />{{ f }}</li>
            </ul>
            <router-link to="/contact-us#demo" class="fu-btn p-pill" :class="p.featured ? 'fu-btn--orange' : 'fu-btn--outline'">{{ p.cta }}</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Keyword-focused overview: what kind of banking software FinUltra is -->
    <section id="overview" class="fu-section fu-section--soft">
      <div class="fu-wrap">
        <div class="fu-head">
          <div class="fu-head__text">
            <div class="fu-eyebrow">Why FinUltra</div>
            <h2 class="fu-h2">Core banking software built for African financial institutions</h2>
            <p class="fu-lead q-mt-sm">Whether you run a microfinance institution, a SACCO, a digital lending business or a community bank, FinUltra gives you one cloud system for every client, loan, deposit and transaction — with local implementation and support from Lusaka, Zambia.</p>
          </div>
        </div>
        <div class="fu-cols-3">
          <article v-for="o in overview" :key="o.title" class="fu-card overview">
            <span class="fu-icon-tile"><q-icon :name="o.icon" size="26px" /></span>
            <h3>{{ o.title }}</h3>
            <p>{{ o.text }}</p>
            <router-link :to="o.to" class="fu-link">{{ o.cta }} →</router-link>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="fu-section">
      <div class="fu-wrap faq">
        <div class="faq__intro">
          <h2 class="fu-h2 q-mt-none">Questions, answered</h2>
          <p class="fu-lead q-mt-sm">Can’t find what you need? <router-link to="/contact-us" class="fu-link">Contact our team</router-link>.</p>
        </div>
        <q-list class="faq__list">
          <q-expansion-item
            v-for="(f, i) in faqs"
            :key="f.q"
            :label="f.q"
            :default-opened="i === 0"
            header-class="faq__q"
            expand-icon-class="text-primary"
            group="faq"
          >
            <p class="faq__a">{{ f.a }}</p>
          </q-expansion-item>
        </q-list>
      </div>
    </section>

    <!-- CTA -->
    <section class="p-cta">
      <div class="fu-wrap p-cta__inner">
        <h2>Launch your next product in weeks, not years.</h2>
        <form class="p-cta__form" @submit.prevent="goDemo">
          <label for="p-cta-email" class="fu-sr-only">Work email</label>
          <input id="p-cta-email" v-model="email" type="email" required placeholder="Work email">
          <button type="submit" class="fu-btn fu-btn--orange p-pill">Book a demo</button>
        </form>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { faqs } from 'src/data/site'
import { useSeo } from 'src/composables/useSeo'

useSeo('platform')

const route = useRoute()
const router = useRouter()

const dashNav = ['Dashboard', 'Clients', 'Loans', 'Savings', 'Accounting', 'Reports', 'Field app']
const kpis = [
  { label: 'Gross portfolio', value: '$2.4M' },
  { label: 'Active clients', value: '18,240' },
  { label: 'PAR 30', value: '3.1%', warn: true },
  { label: 'Savings balance', value: '$1.1M' }
]
const bars = [[40, 55], [52, 62], [60, 70], [74, 80], [82, 92]]
const activity = ['Mobile money repayment', 'Loan approved · DFA', 'Savings deposit', 'SMS reminders sent']

const modules = [
  {
    id: 'loans', label: 'Loans', icon: 'request_quote',
    title: 'Loan management, end to end',
    text: 'Configure products, automate approvals and track every repayment from origination to closure.',
    points: ['Flexible product builder', 'Group & individual lending', 'Multi-level approvals', 'Penalties & rescheduling', 'Collateral & guarantors', 'Arrears tracking'],
    rows: ['Group loan · Market traders', 'Salary advance', 'SME working capital', 'Agriculture input loan']
  },
  {
    id: 'savings', label: 'Savings', icon: 'savings',
    title: 'Savings and deposits',
    text: 'Voluntary, compulsory and fixed-term savings with automated interest posting.',
    points: ['Voluntary & compulsory savings', 'Fixed deposits', 'Automatic interest posting', 'Standing instructions', 'Mobile money deposits', 'Client statements'],
    rows: ['Voluntary savings', 'Group compulsory savings', '12-month fixed deposit', 'Youth savings']
  },
  {
    id: 'accounting', label: 'Accounting', icon: 'account_balance',
    title: 'Integrated accounting',
    text: 'Every transaction posts to the general ledger automatically — no double entry.',
    points: ['Chart of accounts', 'Automatic GL posting', 'Branch accounting', 'Accruals', 'Period closures', 'Financial statements'],
    rows: ['Trial balance', 'Income statement', 'Balance sheet', 'Cash flow']
  },
  {
    id: 'dfa', label: 'Field app (DFA)', icon: 'phone_iphone',
    title: 'Digital Field Application',
    text: 'Improve loan officer efficiency, extend outreach and increase revenue in the field.',
    points: ['Client onboarding & KYC', 'Loan applications', 'Field collections', 'Offline mode', 'Visit reports', 'Automatic sync'],
    rows: ['New client · pending sync', 'Group meeting collections', 'Loan application', 'Visit report']
  },
  {
    id: 'portals', label: 'Self-service portals', icon: 'devices',
    title: 'Self-service portals',
    text: 'Begin your digitalisation journey — clients and members serve themselves online.',
    points: ['Balance & statements', 'Online loan applications', 'Repayment schedules', 'Profile updates', 'Notifications', 'Branded for your institution'],
    rows: ['Statement request', 'Loan application', 'Profile update', 'Repayment schedule']
  },
  {
    id: 'reports', label: 'Reporting', icon: 'insights',
    title: 'Reports and dashboards',
    text: 'Portfolio quality, operations and regulatory reports in a few clicks.',
    points: ['Portfolio at risk', 'Disbursement reports', 'Loan officer performance', 'Regulatory returns', 'Scheduled reports', 'Export to Excel / PDF'],
    rows: ['PAR by branch', 'Officer performance', 'Disbursements this month', 'Regulatory return']
  },
  {
    id: 'ai', label: 'AI banking', icon: 'psychology',
    title: 'AI banking',
    text: 'Put artificial intelligence to work on your portfolio — faster credit decisions and earlier warnings.',
    points: ['AI-assisted credit scoring', 'Arrears risk prediction', 'Early-warning alerts', 'Portfolio assistant', 'Fraud pattern detection', 'Smart collection lists'],
    rows: ['Credit score · new applicant', 'Arrears risk · group loans', 'Follow-up list for officers', 'Unusual transaction flagged']
  },
  {
    id: 'whatsapp', label: 'WhatsApp banking', icon: 'chat',
    title: 'WhatsApp banking',
    text: 'Serve clients in the chat app they already use every day — no app download needed.',
    points: ['Balance & mini-statement', 'Loan applications', 'Repayment reminders', 'Repay via mobile money', 'PIN-secured requests', 'Branded for your institution'],
    rows: ['Balance enquiry', 'Loan application started', 'Repayment reminder sent', 'Statement request']
  },
  {
    id: 'ussd', label: 'USSD banking', icon: 'dialpad',
    title: 'USSD banking',
    text: 'Reach every client on any phone, with no internet or smartphone required.',
    points: ['Works on feature phones', 'No data bundle needed', 'Your own short code', 'Repayments & deposits', 'Loan applications', 'PIN management'],
    rows: ['*123# · Check balance', '*123# · Repay loan', '*123# · Apply for loan', '*123# · Change PIN']
  }
]
// ?module=whatsapp (etc.) opens that tab, so other pages can link straight to it
const moduleFromRoute = () => (modules.some(m => m.id === route.query.module) ? route.query.module : 'loans')
const activeId = ref(moduleFromRoute())
watch(() => route.query.module, () => { activeId.value = moduleFromRoute() })
const active = computed(() => modules.find(m => m.id === activeId.value))

const integrations = [
  { icon: 'smartphone', label: 'Mobile money' },
  { icon: 'sms', label: 'SMS gateway' },
  { icon: 'credit_score', label: 'Credit bureau' },
  { icon: 'swap_horiz', label: 'Payment switch' },
  { icon: '', label: 'FinUltra' },
  { icon: 'account_balance', label: 'Bank accounts' },
  { icon: 'chat', label: 'WhatsApp Business' },
  { icon: 'dialpad', label: 'USSD gateway' },
  { icon: 'hub', label: 'Your systems' }
]

const security = [
  { icon: 'cloud_done', title: '99.9% uptime', text: 'Cloud hosted and monitored — access FinUltra from any modern browser.' },
  { icon: 'backup', title: 'Automatic backups', text: 'Your data is backed up so your institution never stops.' },
  { icon: 'admin_panel_settings', title: 'Roles & maker-checker', text: 'Granular permissions, approvals and a full audit trail.' },
  { icon: 'support_agent', title: 'Local support', text: 'A Lusaka-based team for training and post-implementation support.' }
]

const plans = [
  {
    name: 'Starter', price: 'Per client', for: 'For new and growing MFIs digitising for the first time.',
    features: ['Loans & savings', 'Integrated accounting', 'Standard reports', 'Email support'], cta: 'Get a quote'
  },
  {
    name: 'Growth', price: 'Per client', for: 'For established institutions scaling their outreach.', featured: true,
    features: ['Everything in Starter', 'Digital Field Application', 'Mobile money & SMS', 'Priority support'], cta: 'Get a quote'
  },
  {
    name: 'Enterprise', price: 'Custom', for: 'For banks, large SACCOs and multi-branch groups.',
    features: ['Everything in Growth', 'Self-service portals', 'Custom integrations', 'Dedicated account manager'], cta: 'Talk to sales'
  }
]

const overview = [
  {
    icon: 'groups',
    title: 'Microfinance software',
    text: 'Group and individual lending, compulsory savings, loan officer portfolios and portfolio-at-risk tracking — microfinance software that works in the field with the Digital Field Application.',
    to: '/solutions?for=mfi#bundle',
    cta: 'Microfinance solution'
  },
  {
    icon: 'diversity_3',
    title: 'SACCO management system',
    text: 'Member savings, shares, dividends and loans, with WhatsApp and USSD banking so members can check balances and contribute from any phone.',
    to: '/solutions?for=sacco#bundle',
    cta: 'SACCO solution'
  },
  {
    icon: 'bolt',
    title: 'Loan management & digital lending',
    text: 'A loan management system with configurable products, automated approvals, AI credit scoring and mobile money disbursement and repayment.',
    to: '/solutions?for=lender#bundle',
    cta: 'Digital lending solution'
  }
]

const email = ref('')
function goDemo () {
  // Prefill travels in history state, not the URL, so the email never appears in links or logs
  router.push({ path: '/contact-us', hash: '#demo', state: { prefill: { email: email.value } } })
}
</script>

<style lang="scss" scoped>
.p-pill { border-radius: 999px; }

.p-hero { background: $fu-navy-deep; color: #FFFFFF; overflow: hidden; }
.p-hero__inner {
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
}
.p-hero__pill {
  border: 1px solid #3A4596;
  color: #C9CEF2;
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.p-hero__dot { width: 8px; height: 8px; border-radius: 4px; background: $fu-orange; }
.p-hero__title {
  font-weight: 800;
  font-size: clamp(40px, 6vw, 68px);
  line-height: 1.05;
  margin: 0;
  max-width: 960px;
  color: #FFFFFF;
  span { color: $fu-orange; }
}
.p-hero__lead { margin: 0; font-size: 20px; color: #C9CEF2; max-width: 680px; }
.p-hero__ctas { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; }

.dash {
  width: 100%;
  margin-top: 40px;
  background: #FFFFFF;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -12px 60px rgba(247, 148, 29, .18);
  padding: 12px 12px 0;
  box-sizing: border-box;
  text-align: left;
  color: $fu-ink;
}
.dash__chrome {
  display: flex;
  gap: 6px;
  padding: 4px 8px 12px;
  span { width: 10px; height: 10px; border-radius: 5px; background: $fu-line; }
}
.dash__body { display: flex; gap: 12px; min-height: 400px; }
.dash__side {
  flex: 0 0 190px;
  background: $fu-blue;
  border-radius: 10px 10px 0 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #DADDF7;
  font-size: 14px;
}
.dash__brand {
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  color: #FFFFFF;
  font-size: 20px;
  margin-bottom: 8px;
  span { color: $fu-orange; }
}
.dash__nav { padding: 8px 10px; border-radius: 6px; }
.dash__nav--on { background: rgba(255, 255, 255, .14); color: #FFFFFF; }
.dash__main {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 12px;
}
.dash__kpis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}
.dash__kpi { border: 1px solid $fu-line; border-radius: 10px; padding: 14px; }
.dash__kpi-label { font-size: 12px; color: #5A5F80; }
.dash__kpi-value { font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 22px; color: $fu-navy; }
.dash__kpi-value--warn { color: $fu-orange-text; }
.dash__row { display: flex; flex-wrap: wrap; gap: 12px; flex: 1; }
.dash__panel {
  flex: 1 1 220px;
  border: 1px solid $fu-line;
  border-radius: 10px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13px;
}
.dash__panel--chart { flex: 2 1 320px; }
.dash__panel-title { font-weight: 600; font-size: 13px; }
.dash__bars { flex: 1; display: flex; align-items: flex-end; gap: 8px; min-height: 180px; }
.dash__bar { flex: 1; background: $fu-blue; border-radius: 4px 4px 0 0; }
.dash__bar--alt { background: $fu-orange; }
.dash__activity {
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #F0F1F8;
  padding-bottom: 8px;
  .q-icon { color: $fu-orange; }
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 32px;
}
.tabs__btn {
  min-height: 44px;
  padding: 0 20px;
  border-radius: 999px;
  border: 1px solid #D5D8EC;
  background: #FFFFFF;
  color: $fu-ink;
  font: 500 15px 'Inter', sans-serif;
  cursor: pointer;
  &:hover { border-color: $fu-blue; }
}
.tabs__btn--on { background: $fu-blue; border-color: $fu-blue; color: #FFFFFF; font-weight: 600; }

.module {
  background: $fu-soft;
  border-radius: 24px;
  padding: clamp(24px, 4vw, 48px);
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  align-items: center;
}
.module__copy {
  flex: 1 1 380px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  h3 { font-weight: 700; font-size: 28px; margin: 0; }
  p { margin: 0; color: $fu-muted; }
}
.module__list {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  li {
    background: #FFFFFF;
    border-radius: 10px;
    padding: 12px 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .q-icon { color: $fu-blue; }
}
.module__visual {
  flex: 1 1 400px;
  min-width: 0;
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(20, 27, 77, .08);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.module__visual-head {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: $fu-navy;
  padding-bottom: 8px;
  border-bottom: 1px solid $fu-line;
}
.module__visual-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid $fu-line;
  border-radius: 10px;
  font-size: 14px;
}
.module__chip {
  font-size: 12px;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 999px;
  background: $fu-blue-tint;
  color: $fu-blue;
}
.module__chip--alt { background: $fu-orange-tint; color: #8A4A00; }

.integ__copy {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .fu-h2 { margin: 0; }
}
.integ__link { color: $fu-orange; }
.integ__link:hover { color: #FFB25C; }
.integ__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
.integ__node {
  min-height: 104px;
  border-radius: 14px;
  border: 1px solid #343E8A;
  background: #172064;
  color: #DADDF7;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  padding: 8px;
}
.integ__node--core {
  background: $fu-orange;
  border-color: $fu-orange;
  color: $fu-navy;
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 22px;
  flex-direction: row;
  gap: 0;
  span { color: #FFFFFF; }
}

.sec {
  h3 { font-size: 20px; margin: 12px 0 6px; }
  p { margin: 0; color: $fu-muted; font-size: 15px; }
}

.plans { align-items: stretch; }
.plan {
  background: #FFFFFF;
  border: 1px solid $fu-line;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }
  li { display: flex; align-items: center; gap: 8px; }
  .q-icon { color: $fu-blue; }
}
.plan--featured {
  background: $fu-blue;
  border-color: $fu-blue;
  color: #FFFFFF;
  .plan__name, .plan__price { color: #FFFFFF; }
  .plan__for { color: #D5D9F5; }
  .q-icon { color: $fu-orange; }
}
.plan__tag {
  position: absolute;
  top: -14px;
  right: 24px;
  background: $fu-orange;
  color: $fu-navy;
  font-size: 13px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 999px;
}
.plan__name { font-weight: 700; font-size: 20px; color: $fu-navy; }
.plan__price { font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 30px; color: $fu-navy; line-height: 1.2; }
.plan__unit { display: block; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 500; color: $fu-muted; }
.plan--featured .plan__unit { color: #D5D9F5; }
.plan__for { margin: 0; color: $fu-muted; }

.overview {
  display: flex;
  flex-direction: column;
  gap: 12px;
  h3 { font-size: 20px; margin: 4px 0 0; }
  p { margin: 0; color: $fu-muted; flex: 1; }
}

.faq { display: flex; flex-wrap: wrap; gap: 48px; }
.faq__intro { flex: 1 1 300px; }
.faq__list { flex: 2 1 520px; min-width: 0; }
.faq__list :deep(.q-expansion-item) { border-bottom: 1px solid $fu-line; }
.faq__list :deep(.faq__q) {
  font-weight: 600;
  font-size: 18px;
  color: $fu-navy;
  padding: 20px 0;
  min-height: 64px;
}
.faq__a { margin: 0; padding: 0 0 20px; color: $fu-muted; }

.p-cta { background: $fu-navy-deep; }
.p-cta__inner {
  padding-top: 96px;
  padding-bottom: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  text-align: center;
  h2 {
    color: #FFFFFF;
    font-weight: 800;
    font-size: clamp(32px, 4.5vw, 52px);
    line-height: 1.1;
    margin: 0;
    max-width: 760px;
  }
}
.p-cta__form {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  width: 100%;
  max-width: 520px;
  input {
    flex: 1 1 260px;
    height: 52px;
    border-radius: 999px;
    border: 1px solid #3A4596;
    background: #1A2160;
    color: #FFFFFF;
    padding: 0 20px;
    font: inherit;
  }
  input::placeholder { color: #9EA5D8; }
}

@media (max-width: 600px) {
  .integ__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .integ__node--core { grid-column: 1 / -1; }
}
</style>
