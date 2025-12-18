<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class=" bg-transparent">
      <div class="row justify-center">
        <div class="col-11">
          <div class="row q-py-xl-md  q-pt-lg items-center">

            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-4 col-xs-10" :class="$q.screen.lt.md ? 'hidden' : ''">
                  <a  class="standard-logo">

                    <q-img
                      width="150px"
                      height="50px"
                      src="~assets/logo.png"
                      alt="Nodesol logo"
                      role="link"
                    />
                  </a>
                </div>
                <div class="col-xs-12 col-sm-12" :class="$q.screen.gt.sm ? 'hidden' : ''" >
                  <a href="/" class="mobile-logo">
                    <img
                      src="~assets/logo.png"
                      alt="Nodesol logo"
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
                <q-tabs class="font-weight-700 nod" v-model="tab" active-color="text-black" indicator-color="orange-10" align="right" dense>
                  <q-route-tab
                    to="/"
                    name="tab1"
                    label="Home"
                    class="label"
                  />
                  <q-route-tab
                    to="/about-us"
                    name="tab2"
                    label="About Us"
                    class="label"
                  />
                  <q-route-tab
                    to="/our-services"
                    name="tab3"
                    label="Our Services"
                    class="label"
                  />
                  <q-route-tab
                    to="/contact-us"
                    name="tab7"
                    label="Contact Us"
                    class="label"
                  />
                  <q-route-tab>
                    <q-btn
                      outline
                      rounded
                      color="orange-10"
                      class="text-black"
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

    <!-- <q-footer> -->
<!--    <div class="q-py-xl footer-color row justify-center" :class="$q.screen.lt.lg ? 'q-pa-xl' : ''">-->
<!--      <div :class="$q.screen.gt.md ? 'q-px-lg container' : '' ">-->
<!--        <div class="row q-col-gutter-md" :class="$q.screen.lt.sm ? 'text-center' : '' ">-->
<!--          <div class="col-xs-12 col-sm-6 col-md-4 q-my-md" :class="$q.screen.lt.sm ? 'q-pt-lg' : ''">-->
<!--            <div>-->
<!--              <a href="/">-->
<!--                <img src="/images/logo.svg" width="162px" alt="nodesol-footer-logo" />-->
<!--              </a>-->
<!--            </div>-->
<!--            <h4 class="q-my-none q-py-md text-white text-weight-regular text-h6 q-mt-md">-->
<!--              Innovative Quality Solutions-->
<!--            </h4>-->
<!--            <div class="" :class="$q.screen.gt.md ? 'q-pr-xl' : '' ">-->
<!--              <p class="q-mb-none text-subtitle1 text-white" :class="$q.screen.gt.md ? 'q-pr-xl' : '' ">-->
<!--                We are a values driven  organization. Our values reflect the thinking of our founder.-->
<!--              </p>-->
<!--            </div>-->

<!--            <div class="row q-mt-md "  :class="$q.screen.lt.sm ? 'justify-center' : ''">-->
<!--              <a :href="item.socail_link" class="" v-for="item in icon_array" :key="item" rel="noopener" :aria-label="item.arialabel" :title="item.link_title" target="_blank">-->
<!--                <q-icon size="28px" :name="item.name" class="q-ma-md" style="width:auto" />-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div-->
<!--            class="col-xs-12 col-sm-6 col-md-4 q-my-md"-->
<!--            :class="$q.screen.lt.sm ? 'q-pt-lg' : ''"-->
<!--          >-->
<!--            <h4 class="q-my-none text-white text-h5 font-weight-500 q-mb-md">Get in Touch</h4>-->
<!--            <div v-for="item in icon" :key="item" class="q-pt-md text-subtitle1 text-white blue-hover">-->
<!--              <a class="router-link-css blue-hover text-white" :href="item.link">-->
<!--                <q-icon size="20px" :name="item.name" />-->
<!--                {{ item.label }}-->
<!--              </a>-->
<!--            </div>-->
<!--            <q-btn-->
<!--              label="send a message"-->
<!--              class="q-mt-lg q-mb-md q-pl-md q-pr-md q-pt-sm q-pb-sm text-white send-button text-subtitle1"-->
<!--              icon="message"-->
<!--              to="/contact-us"-->
<!--            />-->
<!--          </div>-->
<!--          <div-->
<!--            class="col-xs-12 col-sm-12 col-md-4 q-my-md"-->
<!--            :class="$q.screen.lt.sm ? 'q-pt-lg' : ''"-->
<!--          >-->
<!--            <h4 class="q-my-none text-white text-h5 font-weight-500">Popular Tags</h4>-->
<!--            <div class="q-pt-lg q-gutter-md">-->
<!--              <q-btn-->
<!--                v-for="item in buttons"-->
<!--                :key="item"-->
<!--                :label="item"-->
<!--                outline-->
<!--                color=""-->
<!--                class="text-subtitle1 text-white blue-hover"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
<!--    </div>-->


    <!-- </q-footer> -->

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
  font-size: 15px !important;
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
