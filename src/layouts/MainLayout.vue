<template>
  <q-layout view="lHh Lpr lFf">

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

    <!--     <q-footer>-->
    <!--       <div>-->
    <!--         <div class="footer-background">-->
    <!--           <div class="q-pa-xl">-->
    <!--             <div class="row justify-between items-center">-->

    <!--               &lt;!&ndash; Left Column (Contact) &ndash;&gt;-->
    <!--               <div class="col-12 col-md-3">-->
    <!--                 <div class="text-h6">Contact</div>-->
    <!--                 <div>Musoni Services</div>-->
    <!--                 <div>De Bouw 107</div>-->
    <!--                 <div>3991 SZ Houten</div>-->
    <!--                 <div>Netherlands</div>-->
    <!--                 <q-btn label="Contact Us" to="/contact-us" class="q-mt-md" flat />-->
    <!--               </div>-->

    <!--               &lt;!&ndash; Middle Column (Solutions) &ndash;&gt;-->
    <!--               <div class="col-12 col-md-3">-->
    <!--                 <div class="text-h6">Solutions</div>-->
    <!--                 <div>Core Banking System</div>-->
    <!--                 <div>Musoni Starter</div>-->
    <!--                 <div>Digital Field Application</div>-->
    <!--                 <div>Integrating with Musoni</div>-->
    <!--               </div>-->

    <!--               &lt;!&ndash; Middle Column (Why Musoni) &ndash;&gt;-->
    <!--               <div class="col-12 col-md-3">-->
    <!--                 <div class="text-h6">Why Musoni?</div>-->
    <!--                 <div>Our Story</div>-->
    <!--                 <div>Our Approach</div>-->
    <!--                 <div>Customer Success Stories</div>-->
    <!--                 <div>Advantages of the Cloud</div>-->
    <!--               </div>-->

    <!--               &lt;!&ndash; Right Column (Social Links) &ndash;&gt;-->
    <!--               <div class="col-12 col-md-3 text-center">-->
    <!--                 <div class="row justify-center">-->
    <!--                   <a href="https://www.linkedin.com" target="_blank" class="q-mx-xs">-->
    <!--                     <q-icon name="logo-linkedin" size="30px" />-->
    <!--                   </a>-->
    <!--                   <a href="https://www.twitter.com" target="_blank" class="q-mx-xs">-->
    <!--                     <q-icon name="logo-twitter" size="30px" />-->
    <!--                   </a>-->
    <!--                   <a href="https://www.youtube.com" target="_blank" class="q-mx-xs">-->
    <!--                     <q-icon name="logo-youtube" size="30px" />-->
    <!--                   </a>-->
    <!--                 </div>-->
    <!--               </div>-->
    <!--             </div>-->

    <!--             &lt;!&ndash; Bottom Section (Privacy & Copyright) &ndash;&gt;-->
    <!--             <div class="q-mt-md text-center text-subtitle2">-->
    <!--               <span>Privacy Policy | Responsible Disclosure</span>-->
    <!--               <div class="q-mt-xs text-h6">© 2024 Musoni Services. All rights reserved.</div>-->
    <!--             </div>-->
    <!--           </div>-->
    <!--         </div>-->
    <!--       </div>-->

    <!--     </q-footer>-->

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
  {
    title: "WORK",
    link: "/work",
  },
  {
    title: "BLOG",
    link: "/blog",
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

</style>
