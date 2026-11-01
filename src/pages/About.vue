<template>
  <q-page class="about">

    <!-- Editorial hero -->
    <section class="a-hero">
      <div class="fu-wrap a-hero__inner">
        <div class="a-hero__top">
          <h1 class="a-hero__title">Technology that takes finance <span class="text-primary">further</span><span class="a-dot">.</span></h1>
          <div class="a-hero__side">
            <p>We build core banking software and supply the IT infrastructure for the institutions that serve the underserved — microfinance, savings groups and credit organisations.</p>
            <a href="#mission" class="fu-btn fu-btn--navy a-square">Read our story</a>
          </div>
        </div>
        <div class="a-hero__grid">
          <img src="/images/about-team.jpg" alt="A banking team meeting around a boardroom table" class="a-hero__main" width="1600" height="1068" fetchpriority="high">
          <div class="a-hero__stack">
            <img src="/images/about-office.jpg" alt="A financial services professional in a modern office" class="a-hero__small" width="1200" height="800" loading="lazy" decoding="async">
            <div class="a-hero__card">
              <span class="a-hero__card-eyebrow">What we do</span>
              <span class="a-hero__card-text">Core banking software, mobile banking and IT hardware — one partner from consultation to support.</span>
              <router-link to="/solutions" class="a-hero__card-link">Our solutions →</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section id="mission" class="a-statement">
      <div class="fu-wrap a-statement__inner">
        <div class="a-label">Our mission</div>
        <div>
          <p class="a-statement__big">To bridge the gap between <strong class="text-primary">technology and finance</strong>, enabling businesses and individuals to <strong class="a-orange">thrive in a digital-first world</strong>.</p>
          <p class="a-statement__body">We deliver cutting-edge core banking software and mobile banking solutions that empower financial institutions to provide secure, seamless and innovative financial services. At the same time, we provide robust IT infrastructure and high-quality computer hardware that enhance organisational efficiency, reliability and technological advancement across industries.</p>
        </div>
      </div>
    </section>

    <!-- Vision band -->
    <section class="a-vision">
      <div class="fu-wrap a-vision__inner">
        <div class="a-vision__label">Our vision</div>
        <h2>To be the preferred partner for financial institutions and organisations seeking transformative technology solutions.</h2>
        <div class="fu-cols-3 a-vision__grid">
          <div v-for="v in visionPoints" :key="v.title" class="a-vision__item">
            <q-icon :name="v.icon" size="32px" />
            <h3>{{ v.title }}</h3>
            <p>{{ v.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="fu-section a-values">
      <div class="fu-wrap">
        <div class="fu-head">
          <div class="fu-head__text">
            <div class="fu-eyebrow">Our core values</div>
            <h2 class="fu-h2">What guides every implementation</h2>
          </div>
        </div>
        <ol class="values fu-cols-3">
          <li v-for="(v, i) in values" :key="v">
            <span class="values__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="values__text">{{ v }}</span>
          </li>
        </ol>
      </div>
    </section>

    <!-- Approach timeline -->
    <section id="approach" class="fu-section a-approach">
      <div class="fu-wrap">
        <div class="fu-head">
          <div class="fu-head__text">
            <div class="fu-eyebrow">Our approach</div>
            <h2 class="fu-h2">From first conversation to long-term partner</h2>
          </div>
          <router-link to="/solutions#services" class="fu-link">All services →</router-link>
        </div>
        <ol class="timeline fu-cols-4">
          <li v-for="(s, i) in approach" :key="s.title" :class="{ 'timeline--last': i === approach.length - 1 }">
            <span class="timeline__dot" aria-hidden="true"></span>
            <div class="timeline__step">Step {{ i + 1 }}</div>
            <h3>{{ s.title }}</h3>
            <ul>
              <li v-for="p in s.points" :key="p">{{ p }}</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>

    <!-- Two businesses -->
    <section class="fu-section">
      <div class="fu-wrap fu-cols-2">
        <router-link to="/platform" class="pillar pillar--blue">
          <span class="pillar__eyebrow">Software</span>
          <h3>FinUltra core banking</h3>
          <p>Our own enterprise banking solution — loans, savings, accounting, the Digital Field Application, mobile money and SMS, delivered from the cloud.</p>
          <span class="pillar__link">Explore the platform →</span>
        </router-link>
        <router-link to="/solutions#equipment" class="pillar pillar--orange">
          <span class="pillar__eyebrow">Hardware</span>
          <h3>IT equipment &amp; maintenance</h3>
          <p>Computers, printers, scanners, photocopiers, projectors, cameras and POS machines — supplied, installed and maintained.</p>
          <span class="pillar__link">Browse equipment →</span>
        </router-link>
      </div>
    </section>

    <!-- Offices -->
    <section class="fu-section a-offices">
      <div class="fu-wrap fu-split">
        <div>
          <div class="fu-eyebrow">Where we are</div>
          <h2 class="fu-h2">A local team with regional reach</h2>
          <p class="fu-lead q-mt-md">Our Lusaka team works on-site with your staff for implementation, training and support.</p>
        </div>
        <div class="offices">
          <div v-for="o in contact.offices" :key="o.city" class="office">
            <span class="fu-icon-tile"><q-icon name="location_on" size="24px" /></span>
            <div>
              <strong>{{ o.city }}, {{ o.country }}</strong>
              <div>{{ o.address }}</div>
            </div>
          </div>
          <div class="office">
            <span class="fu-icon-tile fu-icon-tile--orange"><q-icon name="call" size="24px" /></span>
            <div>
              <strong>Talk to us</strong>
              <div><a :href="contact.phoneHref">{{ contact.phone }}</a> · <a :href="`mailto:${contact.email}`">{{ contact.email }}</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing -->
    <section class="a-close">
      <div class="fu-wrap a-close__inner">
        <h2 class="a-close__title">Let’s go further<span class="a-dot">.</span></h2>
        <router-link to="/contact-us#demo" class="fu-btn fu-btn--primary a-square a-close__btn">Start a conversation →</router-link>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { contact } from 'src/data/site'
import { useSeo } from 'src/composables/useSeo'

useSeo('about')

const visionPoints = [
  { icon: 'diversity_1', title: 'Financial inclusion', text: 'Advanced banking platforms that drive inclusion and innovation.' },
  { icon: 'speed', title: 'Performance', text: 'IT services and hardware that set the benchmark for reliability and excellence.' },
  { icon: 'hub', title: 'Connected ecosystem', text: 'Technology that empowers growth and a smarter way of working and banking.' }
]

const values = [
  'Be clear and resolute',
  'Be innovative and strive for excellence',
  'Be loyal and team oriented',
  'Be reliable and trustworthy',
  'Have strong business ethics',
  'Be customer oriented'
]

const approach = [
  { title: 'Consultation', points: ['Business process analysis', 'Requirement gathering', 'Gap analysis', 'Technology & architecture'] },
  { title: 'Implementation', points: ['Parameterisation', 'Interface development', 'System integration', 'Data migration, development & testing'] },
  { title: 'Training', points: ['Technical training', 'Functional user training', 'Field app onboarding'] },
  { title: 'Support', points: ['Maintenance and upgrades', 'Post-implementation support', 'IT equipment servicing'] }
]
</script>

<style lang="scss" scoped>
$warm: #FBFAF7;
$warm-2: #F2EFE9;
$warm-line: #E6E1D8;

.about { background: $warm; }
.a-square { border-radius: 4px; }
.a-dot { color: $fu-orange; }
.a-orange { color: $fu-orange-text; }

.a-hero__inner {
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.a-hero__top {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: flex-end;
  justify-content: space-between;
}
.a-hero__title {
  font-weight: 800;
  font-size: clamp(44px, 7vw, 92px);
  line-height: 1;
  letter-spacing: -0.04em;
  margin: 0;
  max-width: 880px;
}
.a-hero__side {
  flex: 0 1 340px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  p { margin: 0; color: $fu-muted; }
}
.a-hero__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.a-hero__main {
  flex: 2 1 520px;
  min-width: 0;
  height: 480px;
  object-fit: cover;
  border-radius: 4px;
}
.a-hero__stack {
  flex: 1 1 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.a-hero__small {
  width: 100%;
  height: 232px;
  object-fit: cover;
  border-radius: 4px;
}
.a-hero__card {
  flex: 1;
  min-height: 232px;
  background: $fu-blue;
  color: #FFFFFF;
  border-radius: 4px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  box-sizing: border-box;
}
.a-hero__card-eyebrow { font-size: 13px; letter-spacing: 1px; text-transform: uppercase; color: $fu-orange; font-weight: 600; }
.a-hero__card-text { font-family: 'Poppins', sans-serif; font-size: 21px; font-weight: 600; line-height: 1.35; }
.a-hero__card-link { color: #FFFFFF; font-weight: 600; }
.a-hero__card-link:hover { color: $fu-orange; }

.a-statement { border-top: 1px solid $warm-line; }
.a-statement__inner {
  padding-top: 112px;
  padding-bottom: 112px;
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  > div:last-child { flex: 1 1 600px; min-width: 0; }
}
.a-label {
  flex: 0 0 200px;
  color: $fu-orange-text;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}
.a-statement__big {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: clamp(26px, 3.4vw, 40px);
  line-height: 1.3;
  color: $fu-navy;
  letter-spacing: -0.01em;
  strong { font-weight: 700; }
}
.a-statement__body { margin: 32px 0 0; color: $fu-muted; font-size: 18px; max-width: 760px; }

.a-vision { background: $fu-navy; color: #FFFFFF; }
.a-vision__inner {
  padding-top: 96px;
  padding-bottom: 96px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  h2 {
    color: #FFFFFF;
    font-weight: 700;
    font-size: clamp(28px, 3.6vw, 46px);
    line-height: 1.15;
    margin: 0;
    max-width: 900px;
  }
}
.a-vision__label { color: $fu-orange; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; }
.a-vision__grid { margin-top: 32px; border-top: 1px solid #343E8A; gap: 0; }
.a-vision__item {
  padding: 32px 24px 0 0;
  .q-icon { color: $fu-orange; }
  h3 { color: #FFFFFF; font-size: 22px; margin: 12px 0 6px; }
  p { margin: 0; color: #C9CEF2; }
}

.values {
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0 !important;
  border-top: 1px solid $warm-line;
  li {
    display: flex;
    gap: 20px;
    align-items: baseline;
    padding: 28px 24px 28px 0;
    border-bottom: 1px solid $warm-line;
  }
}
.values__num { font-family: 'Poppins', sans-serif; font-weight: 700; color: $fu-orange-text; }
.values__text { font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 22px; color: $fu-navy; line-height: 1.3; }

.a-approach { background: $warm-2; }
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0 !important;
  border-top: 3px solid $fu-blue;
  > li { padding: 28px 24px 0 0; position: relative; }
  h3 { margin: 4px 0 12px; font-size: 24px; }
  ul { margin: 0; padding-left: 18px; color: $fu-muted; display: flex; flex-direction: column; gap: 4px; }
}
.timeline__dot {
  position: absolute;
  top: -10px;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: $fu-blue;
}
.timeline__step { font-weight: 700; color: $fu-blue; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
.timeline--last .timeline__dot { background: $fu-orange; }
.timeline--last .timeline__step { color: $fu-orange-text; }

.pillar {
  border-radius: 4px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 300px;
  box-sizing: border-box;
  transition: transform .15s;
  h3 { margin: 0; font-size: 30px; line-height: 1.2; }
  p { margin: 0; flex: 1; }
  &:hover { transform: translateY(-3px); }
}
.pillar--blue {
  background: $fu-blue;
  color: #D5D9F5;
  h3 { color: #FFFFFF; }
  .pillar__eyebrow, .pillar__link { color: $fu-orange; }
}
.pillar--orange {
  background: $fu-orange;
  color: #2A2205;
  h3 { color: $fu-navy; }
  .pillar__eyebrow, .pillar__link { color: $fu-navy; }
}
.pillar__eyebrow { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
.pillar__link { font-weight: 700; }

.a-offices { border-top: 1px solid $warm-line; }
.offices { display: flex; flex-direction: column; gap: 16px; }
.office {
  display: flex;
  gap: 16px;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid $warm-line;
  border-radius: 4px;
  padding: 20px;
  strong { color: $fu-navy; display: block; }
}

.a-close { border-top: 1px solid $warm-line; }
.a-close__inner {
  padding-top: 96px;
  padding-bottom: 96px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-between;
  align-items: flex-end;
}
.a-close__title {
  font-weight: 800;
  font-size: clamp(44px, 7vw, 84px);
  line-height: 1;
  letter-spacing: -0.04em;
  margin: 0;
}
.a-close__btn { min-height: 56px; font-size: 17px; padding: 0 32px; }

@media (max-width: 760px) {
  .a-hero__main { height: 300px; }
  .a-statement__inner { padding-top: 72px; padding-bottom: 72px; gap: 16px; }
}
</style>
