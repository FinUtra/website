<template>
  <q-layout view="lHh Lpr l">

    <q-header  :class="{'bg-white text-black': scrollPosition > 50, 'bg-transparent': scrollPosition <= 50}" class="">
      <div class="row justify-center">
        <div class="col-12 q-px-md">
          <div class="row q-py-xl-md  q-pt-lg items-center">

            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-4 col-xs-10" :class="$q.screen.lt.md ? 'hidden' : ''">
                  <a  class="standard-logo">

                    <q-img
                        width="150px"
                        height="50px"
                        src="~assets/logo.png"
                        alt="Finultra logo"
                        role="link"
                        class=""
                    />
                  </a>
                </div>
                <div class="col-xs-12 col-sm-12" :class="$q.screen.gt.sm ? 'hidden' : ''" >
                  <a href="/" class="mobile-logo">
                    <img
                        src="~assets/logo.png"
                        alt="Finultra logo"
                        role="link"
                        style=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div
                class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 row justify-end"
                style="z-index: 1"
            >
              <div v-if="$q.screen.gt.sm">
                <q-tabs class="font-montserrat-bold font-22" v-model="tab" active-color="text-black" indicator-color="orange-10" align="right" dense>
                  <q-route-tab
                      to="/"
                      name="tab1"
                      label="Home"
                      class="label"
                      no-caps
                  />
                  <q-route-tab
                      to="/about-us"
                      name="tab2"
                      label="About Us"
                      class="label"
                      no-caps
                  />
                  <q-route-tab
                      to="/our-services"
                      name="tab3"
                      label="Our Services"
                      class="label"
                      no-caps
                  />
                  <q-route-tab
                      to="/contact-us"
                      name="tab7"
                      label="Contact Us"
                      class="label"
                      no-caps
                  />
                  <q-route-tab>
                    <q-btn
                        padding="4px 22px"
                        outline
                        rounded
                        no-caps
                        color="orange-10"
                        class="text-black bg-white font-22"
                        label="Book A Demo"
                    />
                  </q-route-tab>
                </q-tabs>
              </div>


              <div v-if="$q.screen.lt.md">
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                    size="18px"
                    class="q-mr-xs q-mt-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        :show-if-above="leftDrawerOpen"
        bordered
        side="right"
        dark
    >
      <div class="q-py-md">
        <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
            class="q-py-sm"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer >
      <div>
        <div class="footer-background">
          <div class="q-px-xl q-pt-xl">
            <div class="row justify-center items-center">

              <!-- Left Column (Contact) -->
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 font-14">
                <div class=" font-montserrat-bold contact-border q-px-sm">Contact</div>
                <div class="q-px-sm">FinUltra Services</div>
                <div class="q-px-sm">De Bouw 107</div>
                <div class="q-px-sm">3991 SZ Houten</div>
                <div class="q-px-sm"> Netherlands</div>
              </div>

              <!-- Middle Column (Solutions) -->
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 font-14">
                <div class="font-montserrat-bold contact-border q-px-sm">Solutions</div>
                <div class="q-px-sm">Core Banking System</div>
                <div class="q-px-sm">FinUltra
                  Starter</div>
                <div class="q-px-sm">Digital Field Application</div>
                <div class="q-px-sm">Integrating with FinUltra
                </div>
              </div>

              <!-- Middle Column (Why FinUltra
      ) -->
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 font-14">
                <div class="font-montserrat-bold contact-border q-px-sm">Why FinUltra
                  ?</div>
                <div class="q-px-sm">Our Story</div>
                <div class="q-px-sm">Our Approach</div>
                <div class="q-px-sm">Customer Success Stories</div>
                <div class="q-px-sm">Advantages of the Cloud</div>
              </div>

              <!-- Right Column (Social Links) -->
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div :class="$q.screen.lt.lg ? 'text-start q-py-md': 'text-right' ">
                  <q-img
                      width="150px"
                      height="50px"
                      src="~assets/logo.png"
                      alt="Finultra logo"
                      role="link"
                      class=""
                  />

                  <div class="font-14 font-montserrat q-py-sm"> <b>Finultra</b> core banking platform</div>
                  <div class="row " :class="$q.screen.lt.lg ? 'text-start': 'justify-end' ">
                    <a href="https://www.linkedin.com" target="_blank" class="q-mx-xs">
                      <q-img width="30px" src="linkedin.svg"/>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" class="q-mx-xs">
                      <q-img width="30px" src="twitter.svg" size="30px" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" class="q-mx-xs">
                      <q-img width="30px" src="youtube.svg" size="30px" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Section (Privacy & Copyright) -->
            <div class="row q-py-md">
              <div class="col-12 col-sm-6">
                <q-btn to="/contact-us" class="font-12 contact-btn" flat >Contact Us</q-btn>
                <!--                 <q-img class="q-mx-md" src="america-flag.png" width="20px"/>-->
                <!--                 <q-img src="france-flag.png" width="20px"/>-->
              </div>
              <div class="col-12 col-sm-6 " :class="$q.screen.lt.md ? 'text start' : 'text-right'">
                <span class="color-e65100">Privacy Policy | Responsible Disclosure </span>
                <span class=""> © 2025 FinUltra Services. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "HOME",
    link: "/",
  },
  {
    title: "ABOUT US",
    link: "/about-us",
  },
  {
    title: "OUR SERVICES",
    link: "/our-services",
  },
  // {
  //   title: "CAREER",
  //   link: "/career",
  // },
  {
    title: "CONTACT US",
    link: "/contact-us",
  },
];

export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
  },
  data () {
    const leftDrawerOpen = ref(false);
    return {
      // services: [
      //   'Web Development',
      //   'Mobile Apps',
      //   'Dedicated Resources',
      //   'Consulting',
      //   'SEO & Digital Marketing'
      // ],
      icon: [
        {
          name: 'call',
          label: '+1609-358-0777',
          link: 'tel:1609-358-0777'
        },
        {
          name: 'mail',
          label: 'support@nodesol.com',
          link: 'mailto:support@nodesol.com'
        },
        {
          name: 'location_on',
          label: '473 Vetterlein Ave, Hamilton, NJ 08619',
          link: 'http://maps.google.com/?q=473 Vetterlein Ave, Hamilton, NJ, 08619, NodeSol Corp'
        }
      ],
      icon_array: [
        {
          name:'img:/images/icons/facebook.svg',
          socail_link: 'https://www.facebook.com/nodesolofficial',
          link: 'https://www.facebook.com/nodesolofficial',
          arialabel:'facebook',
          link_title:'Facebook'
        },
        {
          name:'img:/images/icons/linkedin.svg',
          socail_link: 'https://www.linkedin.com/company/nodesolofficial',
          arialabel:'linkedin',
          link_title:'Linkedin'
        },
        {
          name:'img:/images/icons/twitter.svg',
          socail_link: 'https://www.twitter.com/nodesolofficial',
          arialabel:'Twitter',
          link_title:'Twitter'
        }
      ],
      buttons:[
        'Mobile',
        'Development',
        'Technology',
        'App',
        'Webapps',
        'Business',
        'Software',
        'Industry'
      ],
      currentYear: new Date().getFullYear(),
      tab: '/',
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      scrollPosition:null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
});
</script>

<style lang="scss" scoped>
.label:deep(.q-tab__label){
  font-size: 22px !important;
  font-weight: 700 !important;
}
.mobile-logo img {
  max-width: 60px;
  height: auto;
}
.standard-logo img {
  max-width: 180px;
  height: auto;
}
.footer-color {
  background-color: #191919;
}

.contact-border{
  border-left: 3px solid #e65100;
}
.color-e65100{
  color: #e65100;
}
.contact-btn{
  border: 1px solid white;
  background-color: #fff0;
  border-radius: 50px;
  color: #e65100;
}
.footer-background{
  background-image: url("footer_bg.gif");
  background-color: #D8D8D8;
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: cover;
}
:deep(.q-footer) {
  color: black;
}

</style>
