<template>
  <q-page class="mt-navbar">
    <div>
      <div class="row main-bg">
        <div class="col-12 col-lg-7 text-white">
          <div class="row justify-center justify-lg-end">
            <div class="q-pl-md q-pl-md-xl left-border"
            >
              <h1 class="q-my-none font-montserrat-bold  line-height-1-2"
                  :class="$q.screen.lt.md ? 'font-36' : 'font-55' "
              >
                Finultra core banking <br> platform
              </h1>
              <div class="font-montserrat"
                   :class="$q.screen.lt.md ? 'font-16' : 'font-20' "
              >
                Musoni supports organisations around the world with <br> its self-service portals core banking solutions.
              </div>
            </div>
          </div>
        </div>
        <div class="white-div"></div>
      </div>
    </div>

    <!-- Second section 0 -->
    <div class="q-mr-md-xl q-pb-xl bg-white">
      <div class="row  q-mr-md-xl"
           :class="$q.screen.lt.md ? 'justify-center' : 'justify-end'"
      >
        <div class="col-12 col-md-5"
             :class="$q.screen.lt.md ? 'text-center' : 'text-right'"
        >
          <div class="row"
               :class="$q.screen.lt.md ? 'justify-center' : 'justify-end'"

          >
            <div class="font-montserrat-bold font-28">Transform your business</div>
            <p class="q-mb-none  font-16 font-montserrat"
               :class="$q.screen.lt.md ? 'text-center' : 'text-left'"
            >
              Improve efficiency, reduce costs and launch new products & services with our
              <span class="text-bold">cloud banking platform</span> used by financial organisations all around the world.
            </p>
          </div>
        </div>
      </div>
    </div>

    <BankPlatform/>
    <ItEquipment/>
    <OurClients/>

    <div>
      <div class="footer-background">
        <div class="q-px-xl q-pt-xl">
          <div class="row justify-between items-center">

            <!-- Left Column (Contact) -->
            <div class="col-12 col-md-6 col-lg-3 font-14">
              <div class=" font-montserrat-bold contact-border q-px-sm">Contact</div>
              <div class="q-px-sm">Musoni Services</div>
              <div class="q-px-sm">De Bouw 107</div>
              <div class="q-px-sm">3991 SZ Houten</div>
              <div class="q-px-sm"> Netherlands</div>
            </div>

            <!-- Middle Column (Solutions) -->
            <div class="col-12 col-md-6 col-lg-3 font-14">
              <div class="font-montserrat-bold contact-border q-px-sm">Solutions</div>
              <div class="q-px-sm">Core Banking System</div>
              <div class="q-px-sm">Musoni Starter</div>
              <div class="q-px-sm">Digital Field Application</div>
              <div class="q-px-sm">Integrating with Musoni</div>
            </div>

            <!-- Middle Column (Why Musoni) -->
            <div class="col-12 col-md-6 col-lg-3 font-14">
              <div class="font-montserrat-bold contact-border q-px-sm">Why Musoni?</div>
              <div class="q-px-sm">Our Story</div>
              <div class="q-px-sm">Our Approach</div>
              <div class="q-px-sm">Customer Success Stories</div>
              <div class="q-px-sm">Advantages of the Cloud</div>
            </div>

            <!-- Right Column (Social Links) -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="text-right">
                <q-img
                    width="150px"
                    height="50px"
                    src="~assets/logo.png"
                    alt="Finultra logo"
                    role="link"
                    class=""
                />

                <div class="font-14 font-montserrat q-py-sm"> <b>Finultra</b> core banking platform</div>
                <div class="row justify-end">
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
            <div class="col-md-6">
              <q-btn to="/contact-us" class="font-12 contact-btn" flat >Contact Us</q-btn>
              <q-img class="q-mx-md" src="america-flag.png" width="20px"/>
              <q-img src="france-flag.png" width="20px"/>
            </div>
            <div class="col-md-6 text-right">
              <span class="color-e65100">Privacy Policy | Responsible Disclosure </span>
              <span class=""> © 2025 FinUltra Services. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import BankPlatform from "components/BankPlatfrom.vue";
import ItEquipment from "components/ItEquipment.vue";
import OurClients from "components/OurClients.vue";

</script>

<style scoped>
.main-bg {
  position: relative;
  background: url('assets/hero.jpg') top center/cover no-repeat;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.white-div {
  background-color: white;
  position: absolute;
  bottom: -13%;
  height: 25%;
  width: 100%;
  transform: skew(0deg, -5deg);
}
.footer-background {
  background-color: #fff; /* Same light gray background */
  color: #000;
}
.left-border {
  border-left: 5px solid #e65100;
}
.color-e65100{
  color: #e65100;
}
.contact-border{
  border-left: 3px solid #e65100;
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
/* Skew only the background image */
</style>
