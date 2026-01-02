<template>
  <q-page class="mt-navbar">
    <div>
      <div class="row main-bg">
        <div class="black-overlay"></div>
        <div class="col-12 col-lg-7 text-white content-above">
          <div class="row  q-px-xl">
            <div class="q-pl-md q-pl-md-xl left-border">
              <h1 class="q-my-none font-montserrat-bold  line-height-1-2 font-28">
                Our Services
              </h1>
            </div>
          </div>
        </div>
        <div class="white-div"></div>
      </div>
    </div>

    <div class="q-mr-md-xl q-py-xl bg-white">
      <div class="row  q-mr-md-xl"
           :class="$q.screen.lt.md ? 'justify-center' : 'justify-end'"
      >
        <div class="col-12 col-md-9"
             :class="$q.screen.lt.md ? 'text-center' : 'text-right'"
        >
          <div class="row"
               :class="$q.screen.lt.md ? 'justify-center' : 'justify-end'">
            <p class="q-mb-none  font-21 font-montserrat"
               :class="$q.screen.lt.md ? 'text-center q-px-md' : 'text-right'"
            >
              If you have a general enquiry about FinUltra, please send an email to <span class="color-e65100">simba@finultrasolution.com</span> and we’ll be in touch as quickly as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--    services section  -->
    <div :class="$q.screen.lt.md ? 'q-px-md q-py-xl' : 'container q-py-xl'">
      <div class="q-py-xl">
        <div class="text-center" >
          <h2 class="q-my-none font-montserrat-bold font-28">Our Services</h2>
          <div class="flex flex-center">
            <div class="elementor-divider"></div>
          </div>
        </div>
        <div class="row justify-center q-col-gutter-y-xl q-py-xl">
          <div class="col-12 col-sm-6" v-for="i in cards" :key="i">
            <div class="row" :class="$q.screen.lt.md ? 'justify-center' : 'justify-end'">
              <div class="col-7">
                <q-icon :name="i.icon" size="30px"/>
                <div>
                  <div class="font-montserrat-bold font-16 q-py-md">{{i.title}}</div>
                  <p class="q-mb-none" v-html="i.subtitle"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ItEquipment/>

    <!--   third section  -->
    <div :class="$q.screen.lt.md ? 'q-px-md q-py-xl' : 'container q-py-xl'">
      <div class="row q-col-gutter-y-xl q-px-xl q-py-xl ">
        <div class="col-12 col-md-6">
          <div class="color-e65100 font-40 font-montserrat-semibold">
            FinUltra Core Banking <br> Software
          </div>
          <div class="font-28 font-montserrat-semibold q-py-md">
            We have our own enterprise banking solution, FinUltra core banking software
          </div>
          <div class="font-montserrat font-16">
            - Gap analysis <br>
            - Implementation <br>
            - Customization and parameterized <br>
            - User Training <br>
            - Testing and debugging
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div>
            <q-img src="/laptop.jpeg"/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import {ref} from "vue";
import ItEquipment from "components/ItEquipment.vue";

const cards = ref([
  {
    icon: "forum",
    title:"Consultation",
    subtitle:"- Business Process Analysis and Requirement Gathering <br> - Gap Analysis <br> - Technology and Architecture <br> - User Training"
  },
  {
    icon: "construction",
    title:"Implementation",
    subtitle:"- Parameterization <br> - Interface Development <br> - System Integration <br> - Data Migration <br> - Developing and Testing"
  },
  {
    icon: "handshake",
    title:"Support",
    subtitle:"- Maintenance and Upgrade <br> - Post Implementation Support"
  },
  {
    icon: "forum",
    title:" IT services and maintenance",
    subtitle:"- Technical and functional training <br> - After installation support "
  },
])
</script>
<style scoped>
.main-bg {
  position: relative;
  background: url('/contact-us.jpg') top center/cover no-repeat;
  width: 100%;
  height: 50vh;
  min-height: 50vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.white-div {
  background-color: white;
  position: absolute;
  bottom: -25%;
  height: 50%;
  width: 100%;
  transform: skew(0deg, -6deg);
  z-index: 1;
}
.left-border {
  border-left: 5px solid #e65100;
}
.elementor-divider {
  border : 2px solid #e65100;
  width: 4%;

}
.color-e65100{
  color: #e65100;
}
.black-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55); /* adjust darkness */
  z-index: 1;
}

/* Content above overlay */
.content-above {
  position: relative;
  z-index: 2;
}
</style>