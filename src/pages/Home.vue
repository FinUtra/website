<template>
  <q-page class="home">

    <!-- Hero -->
    <section class="hero">
      <div class="fu-wrap hero__inner">
        <div class="hero__copy">
          <span class="hero__pill">Cloud core banking platform</span>
          <h1 class="fu-h1">Core banking software for <span class="text-primary">microfinance</span>, savings &amp; credit.</h1>
          <p class="hero__lead">FinUltra is cloud core banking software for microfinance institutions, SACCOs and lenders in Zambia and across Africa — improve efficiency, reduce costs and launch new products faster.</p>
          <div class="hero__ctas">
            <router-link to="/contact-us#demo" class="fu-btn fu-btn--primary">Book a live demo</router-link>
            <router-link to="/platform" class="fu-btn fu-btn--outline">Explore the platform</router-link>
          </div>
          <ul class="hero__checks">
            <li v-for="c in heroChecks" :key="c"><q-icon name="check" size="18px" class="hero__check-icon" />{{ c }}</li>
          </ul>
        </div>
        <div class="hero__media">
          <span class="hero__frame" aria-hidden="true"></span>
          <img src="/images/hero-banker.jpg" alt="A banking professional using FinUltra core banking software at her desk" class="hero__img" width="1600" height="1068" fetchpriority="high">
          <img src="/images/hero-mobile.jpg" alt="A client using WhatsApp and mobile banking on his phone" class="hero__img2" width="1200" height="675">
          <div class="hero__float gt-xs">
            <span class="hero__float-icon"><q-icon name="verified" size="22px" /></span>
            <div>
              <div class="hero__float-label">Mobile money repayment</div>
              <div class="hero__float-title">Received &amp; posted</div>
            </div>
          </div>
          <div class="hero__chip gt-xs">
            <q-icon name="cloud_done" size="18px" /> 99.9% uptime
          </div>
        </div>
      </div>
    </section>

    <!-- Clients -->
    <section aria-label="Our clients" class="clients">
      <div class="fu-wrap clients__inner">
        <p class="clients__label">Driving technology for leading financial brands</p>
        <div class="clients__logos">
          <img v-for="(logo, i) in clientLogos" :key="logo" :src="logo" :alt="`Logo of a financial institution using FinUltra (${i + 1})`" loading="lazy" decoding="async">
        </div>
      </div>
    </section>

    <!-- Platform features -->
    <section class="fu-section">
      <div class="fu-wrap">
        <div class="fu-head">
          <div class="fu-head__text">
            <div class="fu-eyebrow">The FinUltra platform</div>
            <h2 class="fu-h2">Everything your institution needs, in one cloud system</h2>
          </div>
          <router-link to="/platform#modules" class="fu-link">View all modules →</router-link>
        </div>
        <div class="fu-cols-3">
          <article v-for="(f, i) in features" :key="f.title" class="fu-card feature">
            <span class="fu-icon-tile" :class="{ 'fu-icon-tile--orange': i % 2 }"><q-icon :name="f.icon" size="26px" /></span>
            <h3>{{ f.title }}</h3>
            <p>{{ f.text }}</p>
            <router-link :to="f.to" class="fu-link">{{ f.cta }} →</router-link>
          </article>
        </div>
      </div>
    </section>

    <!-- Digital channels: WhatsApp, USSD, AI -->
    <section class="fu-section fu-section--navy channels">
      <div class="fu-wrap">
        <div class="fu-head">
          <div class="fu-head__text">
            <div class="fu-eyebrow">Digital channels</div>
            <h2 class="fu-h2">Bank your clients wherever they are</h2>
            <p class="fu-lead q-mt-sm">On a smartphone or a feature phone, WhatsApp banking, USSD and AI-powered insights connect every client to your institution, with no app download and no branch visit.</p>
          </div>
          <router-link to="/platform?module=whatsapp#modules" class="fu-btn fu-btn--orange">Explore digital channels</router-link>
        </div>

        <div class="fu-cols-3">
          <article class="channel">
            <div class="channel__mock wa" role="img" aria-label="Example WhatsApp banking conversation showing a menu and a balance reply">
              <div class="wa__bar"><span class="wa__avatar">F</span>Your MFI · WhatsApp</div>
              <div class="wa__body">
                <div class="wa__msg wa__msg--in">Welcome back! Reply with a number:<br>1 Balance · 2 Repay loan<br>3 Apply for a loan · 4 Statement</div>
                <div class="wa__msg wa__msg--out">1</div>
                <div class="wa__msg wa__msg--in">Savings balance: <strong>K 2,450.00</strong><br>Next repayment due 15 Nov.</div>
              </div>
            </div>
            <span class="channel__tag"><q-icon name="chat" size="16px" /> WhatsApp banking</span>
            <h3>Banking in the chat app clients already use</h3>
            <ul>
              <li>Balances, mini-statements and repayment schedules</li>
              <li>Loan applications and repayment reminders</li>
              <li>Secure PIN verification on every request</li>
            </ul>
          </article>

          <article class="channel">
            <div class="channel__mock ussd" role="img" aria-label="Example USSD banking menu on a feature phone">
              <div class="ussd__phone">
                <div class="ussd__screen">
                  <div class="ussd__code">*123#</div>
                  <div>1. Check balance</div>
                  <div>2. Repay loan</div>
                  <div>3. Apply for loan</div>
                  <div>4. Mini statement</div>
                  <div>5. Change PIN</div>
                  <div class="ussd__reply">Reply: <span>2</span></div>
                </div>
                <div class="ussd__keys" aria-hidden="true">
                  <span v-for="k in 9" :key="k">{{ k }}</span>
                </div>
              </div>
            </div>
            <span class="channel__tag"><q-icon name="dialpad" size="16px" /> USSD banking</span>
            <h3>Reach every client, even without internet</h3>
            <ul>
              <li>Works on any phone, with no data bundle needed</li>
              <li>Repay loans and deposit savings in seconds</li>
              <li>Your own short code and branded menus</li>
            </ul>
          </article>

          <article class="channel">
            <div class="channel__mock ai" role="img" aria-label="Example AI banking insights: a credit score and an arrears alert">
              <div class="ai__card">
                <div class="ai__label"><q-icon name="auto_awesome" size="16px" /> AI credit score</div>
                <div class="ai__score">742 <span>Low risk</span></div>
                <div class="ai__meter"><span></span></div>
              </div>
              <div class="ai__card ai__card--alert">
                <q-icon name="notifications_active" size="18px" />
                <span>3 clients likely to miss this week’s repayment — schedule follow-ups?</span>
              </div>
              <div class="ai__prompt"><q-icon name="smart_toy" size="16px" /> “Summarise portfolio at risk by branch”</div>
            </div>
            <span class="channel__tag"><q-icon name="psychology" size="16px" /> AI banking</span>
            <h3>Smarter lending decisions, earlier warnings</h3>
            <ul>
              <li>AI-assisted credit scoring for faster approvals</li>
              <li>Early alerts on clients at risk of arrears</li>
              <li>An assistant that answers portfolio questions</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Digital Field Application -->
    <section class="fu-section fu-section--soft">
      <div class="fu-wrap fu-split">
        <div class="dfa__phones">
          <div class="phone">
            <div class="phone__bar"></div>
            <div class="phone__title">New client</div>
            <div class="phone__avatar"><q-icon name="photo_camera" size="28px" /></div>
            <div class="phone__line"></div><div class="phone__line phone__line--short"></div>
            <div class="phone__field">National ID</div>
            <div class="phone__field">Mobile number</div>
            <div class="phone__btn">Save &amp; sync</div>
          </div>
          <div class="phone phone--offset gt-xs">
            <div class="phone__bar"></div>
            <div class="phone__title">Loan application</div>
            <div class="phone__field">Product · Group loan</div>
            <div class="phone__field">Amount</div>
            <div class="phone__field">Term</div>
            <div class="phone__badge"><q-icon name="cloud_off" size="16px" /> Works offline</div>
            <div class="phone__btn">Submit</div>
          </div>
        </div>
        <div class="dfa__copy">
          <div class="fu-eyebrow">Digital Field Application</div>
          <h2 class="fu-h2">Take the branch to your clients</h2>
          <p class="fu-lead">Improve loan officer efficiency, extend outreach and increase revenue with the FinUltra DFA.</p>
          <ol class="steps">
            <li v-for="(s, i) in dfaSteps" :key="s"><span>{{ i + 1 }}</span>{{ s }}</li>
          </ol>
          <router-link to="/contact-us#demo" class="fu-btn fu-btn--primary">See the DFA in action</router-link>
        </div>
      </div>
    </section>

    <!-- Highlights band -->
    <section aria-label="Why FinUltra" class="band">
      <div class="fu-wrap fu-cols-4 band__grid">
        <div v-for="b in band" :key="b.label">
          <div class="band__value">{{ b.value }}</div>
          <div class="band__label">{{ b.label }}</div>
        </div>
      </div>
    </section>

    <!-- Journey -->
    <section class="fu-section">
      <div class="fu-wrap">
        <div class="fu-head fu-head--center">
          <div class="fu-head__text">
            <div class="fu-eyebrow">Your digitalisation journey</div>
            <h2 class="fu-h2">From paper ledgers to go-live in four steps</h2>
          </div>
        </div>
        <ol class="journey fu-cols-4">
          <li v-for="(j, i) in journey" :key="j.title" :class="{ 'journey--last': i === journey.length - 1 }">
            <div class="journey__num">0{{ i + 1 }}</div>
            <h3>{{ j.title }}</h3>
            <p>{{ j.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- IT equipment -->
    <section class="fu-section fu-section--soft">
      <div class="fu-wrap">
        <div class="fu-head">
          <div class="fu-head__text">
            <div class="fu-eyebrow">IT equipment &amp; maintenance</div>
            <h2 class="fu-h2">Hardware to power every branch</h2>
            <p class="fu-lead q-mt-sm">Supply, installation and maintenance — one partner for software and hardware.</p>
          </div>
          <router-link to="/solutions#equipment" class="fu-btn fu-btn--outline">Request a quote</router-link>
        </div>
        <div class="fu-cols-6">
          <router-link v-for="e in equipment" :key="e.id" :to="`/solutions?item=${e.id}#equipment`" class="equip">
            <span class="equip__icon"><q-icon :name="e.icon" size="40px" /></span>
            <span class="equip__title">{{ e.title }}</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Awards / trust -->
    <section class="fu-section">
      <div class="fu-wrap fu-split trust">
        <div class="trust__badge">
          <img src="/medal.png" alt="" aria-hidden="true" width="512" height="512" loading="lazy" decoding="async">
        </div>
        <div>
          <div class="fu-eyebrow">Award winning</div>
          <h2 class="fu-h2">Recognised for technology, financial inclusion &amp; innovation in microfinance</h2>
          <p class="fu-lead q-mt-md">Our mission is to bridge the gap between technology and finance, enabling businesses and individuals to thrive in a digital-first world.</p>
          <router-link to="/about-us" class="fu-link q-mt-md inline-block">Read our story →</router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-wrap">
      <div class="fu-wrap">
        <div class="cta">
          <div>
            <h2 class="fu-h2 q-mt-none">Ready to transform your institution?</h2>
            <p>See FinUltra running on your own products in a 30-minute demo — no obligation, fully enabled system.</p>
          </div>
          <div class="cta__btns">
            <router-link to="/contact-us#demo" class="fu-btn fu-btn--navy">Book a demo</router-link>
            <router-link to="/contact-us" class="fu-btn cta__white">Talk to sales</router-link>
          </div>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { equipment } from 'src/data/site'
import { useSeo } from 'src/composables/useSeo'

useSeo('home')

const heroChecks = ['99.9% uptime guarantee', 'Per-client pricing', 'Mobile money ready', 'WhatsApp & USSD banking']

const clientLogos = ['/image.0E9II3.png', '/image.1OAEI3.png', '/image.IT8KI3.png', '/image.QK7LI3.png', '/image.UNOII3.png']

const features = [
  { icon: 'cloud', title: 'Cloud based', text: 'All you need is a reliable internet connection and a modern web browser. We guarantee an uptime of over 99.9%.', to: '/platform', cta: 'Learn more' },
  { icon: 'payments', title: 'Per-client pricing', text: 'A flexible and affordable pricing structure enabling MFIs to benefit regardless of their size.', to: '/platform#plans', cta: 'See plans' },
  { icon: 'phone_iphone', title: 'Digital Field Application', text: 'Improve loan officer efficiency, extend outreach and increase revenue with the FinUltra DFA.', to: '/platform#modules', cta: 'Learn more' },
  { icon: 'account_balance_wallet', title: 'Mobile money integration', text: 'Clients repay loans and deposit savings over their mobile phones, through integrated MMT services.', to: '/platform#integrations', cta: 'Learn more' },
  { icon: 'sms', title: 'SMS module', text: 'Stay connected with your customers through personalised and automated SMS.', to: '/platform#integrations', cta: 'Learn more' },
  { icon: 'workspace_premium', title: 'Award winning', text: 'Winner of multiple awards for technology, financial inclusion and innovation in microfinance.', to: '/about-us', cta: 'About us' }
]

const dfaSteps = [
  'Digital KYC with photo and ID capture',
  'Loan applications submitted from the field',
  'Collections and visit reports on the go',
  'Syncs to the core when back online'
]

const band = [
  { value: '99.9%', label: 'Guaranteed uptime' },
  { value: 'Per client', label: 'Pricing that scales with you' },
  { value: 'Local', label: 'Support team based in Lusaka' },
  { value: '1 partner', label: 'For software and hardware' }
]

const journey = [
  { title: 'Consultation', text: 'Business process analysis, requirement gathering and gap analysis.' },
  { title: 'Implementation', text: 'Parameterisation, system integration and data migration.' },
  { title: 'Training', text: 'Technical and functional training for head office and field staff.' },
  { title: 'Go-live & support', text: 'Post-implementation support, maintenance and upgrades.' }
]
</script>

<style lang="scss" scoped>
.hero {
  background-color: $fu-soft;
  // Fine dot grid on the image side for a quiet, technical texture
  background-image:
    linear-gradient(90deg, $fu-soft 40%, rgba(245, 246, 252, 0) 75%),
    radial-gradient(rgba(43, 58, 171, .16) 1px, transparent 1px);
  background-size: 100% 100%, 22px 22px;
  border-bottom: 1px solid $fu-line;
}
.hero__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  align-items: center;
  padding-top: 72px;
  padding-bottom: 88px;
}
.hero__copy {
  flex: 1 1 480px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.hero__pill {
  align-self: flex-start;
  background: $fu-blue-tint;
  color: $fu-blue;
  font-weight: 600;
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 99px;
  letter-spacing: .4px;
  text-transform: uppercase;
}
.hero__lead { margin: 0; font-size: 19px; color: $fu-muted; max-width: 560px; }
.hero__ctas { display: flex; flex-wrap: wrap; gap: 16px; }
.hero__checks {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  font-size: 14px;
  color: $fu-muted;
  li { display: flex; align-items: center; gap: 8px; }
}
.hero__check-icon { color: $fu-orange-text; }
.hero__media {
  flex: 1 1 440px;
  min-width: 0;
  position: relative;
  padding: 0 0 56px 56px;
  box-sizing: border-box;
}
// Orange offset frame behind the main photo
.hero__frame {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 60%;
  height: 60%;
  border: 2px solid $fu-orange;
  border-radius: 20px;
}
.hero__img {
  position: relative;
  width: 100%;
  height: 440px;
  object-fit: cover;
  object-position: 22% 30%;
  border-radius: 20px;
  display: block;
  background: #FFFFFF;
  box-shadow: 0 24px 60px rgba(20, 27, 77, .14);
}
.hero__img2 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 46%;
  height: 210px;
  object-fit: cover;
  object-position: 40% 35%;
  border-radius: 16px;
  border: 6px solid #FFFFFF;
  box-shadow: 0 20px 48px rgba(20, 27, 77, .2);
}
.hero__float {
  position: absolute;
  top: 40px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #FFFFFF;
  border-radius: 14px;
  padding: 14px 18px;
  box-shadow: 0 16px 40px rgba(20, 27, 77, .16);
}
.hero__float-icon {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: $fu-blue;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero__float-label { font-size: 12px; color: #5A5F80; }
.hero__float-title { font-weight: 600; color: $fu-navy; }
.hero__chip {
  position: absolute;
  right: 24px;
  bottom: 80px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: $fu-navy;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 16px;
  border-radius: 999px;
  box-shadow: 0 12px 32px rgba(20, 27, 77, .24);
  .q-icon { color: $fu-orange; }
}

.clients { border-bottom: 1px solid $fu-line; }
.clients__inner {
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}
.clients__label {
  margin: 0;
  font-size: 14px;
  color: #5A5F80;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: center;
}
.clients__logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px 64px;
  img {
    height: 52px;
    width: auto;
    max-width: 150px;
    object-fit: contain;
    filter: grayscale(1);
    opacity: .7;
    mix-blend-mode: multiply;
    transition: filter .2s, opacity .2s;
  }
  img:hover { filter: none; opacity: 1; }
}

.feature {
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color .15s, box-shadow .15s;
  h3 { font-size: 20px; margin: 4px 0 0; }
  p { margin: 0; color: $fu-muted; flex: 1; }
  &:hover { border-color: #C9CDE6; box-shadow: 0 12px 32px rgba(20, 27, 77, .06); }
}

.channels .fu-head__text { max-width: 720px; }
.channel {
  background: #172064;
  border: 1px solid #2A3488;
  border-radius: 20px;
  padding: 20px 20px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  color: #C9CEF2;
  h3 { color: #FFFFFF; font-size: 21px; margin: 0; font-weight: 600; }
  ul { margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; font-size: 15px; }
  li::marker { color: $fu-orange; }
}
.channel__tag {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(247, 148, 29, .14);
  color: $fu-orange;
  font-size: 13px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 999px;
}
.channel__mock {
  min-height: 250px;
  border-radius: 14px;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 13px;
  line-height: 1.45;
}

// WhatsApp chat mock-up (WhatsApp's own colours, to be recognisable)
.wa { background: #EFE7DD; display: flex; flex-direction: column; }
.wa__bar {
  background: #075E54;
  color: #FFFFFF;
  font-weight: 600;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.wa__avatar {
  width: 28px; height: 28px; border-radius: 14px;
  background: $fu-orange; color: $fu-navy;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Nunito', sans-serif; font-weight: 900;
}
.wa__body { padding: 12px; display: flex; flex-direction: column; gap: 8px; }
.wa__msg {
  max-width: 85%;
  padding: 8px 10px;
  border-radius: 10px;
  color: #1B1F3B;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .08);
}
.wa__msg--in { background: #FFFFFF; align-self: flex-start; border-top-left-radius: 2px; }
.wa__msg--out { background: #D9FDD3; align-self: flex-end; border-top-right-radius: 2px; min-width: 32px; text-align: center; }

// USSD feature-phone mock-up
.ussd {
  background: linear-gradient(180deg, #1E2878, #141B4D);
  display: flex;
  justify-content: center;
  padding-top: 18px;
}
.ussd__phone {
  width: 170px;
  background: #2B2F45;
  border-radius: 22px 22px 0 0;
  padding: 14px 12px 0;
  box-shadow: 0 -8px 30px rgba(0, 0, 0, .3);
}
.ussd__screen {
  background: #CFE3C2;
  color: #1E2A12;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 6px;
  padding: 8px 10px;
}
.ussd__code { font-weight: 700; border-bottom: 1px dashed #7C9468; margin-bottom: 4px; }
.ussd__reply { margin-top: 4px; span { background: #1E2A12; color: #CFE3C2; padding: 0 4px; } }
.ussd__keys {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  padding: 10px 6px;
  span {
    background: #3C4160;
    color: #DADDF7;
    border-radius: 6px;
    text-align: center;
    font-size: 11px;
    padding: 2px 0;
  }
}

// AI insights mock-up
.ai {
  background: linear-gradient(160deg, #F5F6FC, #E3E6FA);
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: $fu-ink;
}
.ai__card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 10px 12px;
  box-shadow: 0 6px 16px rgba(20, 27, 77, .08);
}
.ai__label { display: flex; align-items: center; gap: 6px; font-size: 12px; color: $fu-blue; font-weight: 600; }
.ai__score {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: $fu-navy;
  line-height: 1.2;
  span { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: #1F7A3D; background: #E3F5E8; padding: 2px 8px; border-radius: 999px; vertical-align: middle; }
}
.ai__meter {
  height: 6px;
  border-radius: 3px;
  background: $fu-line;
  margin-top: 6px;
  span { display: block; width: 78%; height: 6px; border-radius: 3px; background: linear-gradient(90deg, $fu-blue, $fu-orange); }
}
.ai__card--alert {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  border-left: 3px solid $fu-orange;
  .q-icon { color: $fu-orange-text; flex: none; }
}
.ai__prompt {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  background: $fu-navy;
  color: #FFFFFF;
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 12px;
  .q-icon { color: $fu-orange; }
}

.dfa__phones { display: flex; gap: 20px; justify-content: center; }
.phone {
  width: 230px;
  height: 460px;
  border-radius: 32px;
  border: 8px solid $fu-navy;
  background: #FFFFFF;
  padding: 20px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 20px 40px rgba(20, 27, 77, .12);
}
.phone--offset { margin-top: 48px; }
.phone__bar { width: 64px; height: 6px; border-radius: 3px; background: $fu-line; align-self: center; }
.phone__title { font-family: 'Poppins', sans-serif; font-weight: 600; color: $fu-navy; }
.phone__avatar {
  width: 72px; height: 72px; border-radius: 36px;
  background: $fu-blue-tint; color: $fu-blue;
  display: flex; align-items: center; justify-content: center;
}
.phone__line { height: 8px; border-radius: 4px; background: $fu-line; }
.phone__line--short { width: 60%; }
.phone__field {
  border: 1px solid $fu-line;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 13px;
  color: #5A5F80;
}
.phone__badge {
  font-size: 12px;
  color: $fu-orange-text;
  display: flex;
  align-items: center;
  gap: 6px;
}
.phone__btn {
  margin-top: auto;
  background: $fu-blue;
  color: #FFFFFF;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
}
.dfa__copy {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  .fu-h2 { margin: 0; }
}
.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  li { display: flex; gap: 12px; align-items: center; }
  span {
    flex: none;
    width: 28px; height: 28px; border-radius: 14px;
    background: $fu-blue; color: #FFFFFF;
    font-size: 13px; font-weight: 600;
    display: flex; align-items: center; justify-content: center;
  }
}

.band { background: $fu-blue; color: #FFFFFF; }
.band__grid { padding-top: 64px; padding-bottom: 64px; gap: 32px; }
.band__value {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(34px, 4vw, 46px);
  font-weight: 700;
  color: $fu-orange;
  line-height: 1.2;
}
.band__label { color: #D5D9F5; }

.journey {
  list-style: none;
  margin: 0;
  padding: 0;
  li { border-top: 4px solid $fu-blue; padding-top: 20px; }
  h3 { margin: 4px 0 8px; font-size: 20px; }
  p { margin: 0; color: $fu-muted; }
}
.journey__num { font-family: 'Poppins', sans-serif; font-weight: 700; color: $fu-blue; }
.journey--last { border-top-color: $fu-orange !important; }
.journey--last .journey__num { color: $fu-orange-text; }

.equip {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: $fu-navy;
  text-align: center;
  border: 1px solid transparent;
  transition: border-color .15s, transform .15s;
  &:hover { border-color: $fu-blue; transform: translateY(-2px); color: $fu-navy; }
}
.equip__icon {
  width: 88px; height: 88px; border-radius: 44px;
  background: $fu-blue-tint; color: $fu-blue;
  display: flex; align-items: center; justify-content: center;
}
.equip__title { font-weight: 600; }

.trust { gap: 48px; }
.trust__badge {
  flex: 0 1 280px !important;
  display: flex;
  justify-content: center;
  img { width: 100%; max-width: 240px; height: auto; }
}

.cta-wrap { padding-bottom: 96px; }
.cta {
  background: $fu-orange;
  border-radius: 24px;
  padding: clamp(32px, 5vw, 56px);
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: space-between;
  > div:first-child { max-width: 640px; }
  p { margin: 8px 0 0; color: #2A2205; font-size: 18px; }
}
.cta__btns { display: flex; flex-wrap: wrap; gap: 12px; }
.cta__white { background: #FFFFFF; color: $fu-navy; }
.cta__white:hover { background: #FFF6EB; color: $fu-navy; }

@media (max-width: 760px) {
  .hero__inner { padding-top: 48px; padding-bottom: 56px; gap: 40px; }
  .hero__media { padding: 0 0 40px 24px; }
  .hero__img { height: 320px; }
  .hero__img2 { width: 52%; height: 140px; border-width: 4px; }
  .hero__frame { top: -12px; right: -8px; }
  .phone { width: 220px; height: 440px; }
}
</style>
