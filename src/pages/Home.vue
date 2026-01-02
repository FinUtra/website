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
                FinUltra supports organisations around the world with <br> its self-service portals core banking solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Second section 0 -->
     <div class="q-mr-md-xl q-py-xl bg-white">
       <div class="row  q-mr-md-xl"
            :class="$q.screen.lt.md ? 'justify-center' : 'justify-end'"  
       >
         <div class="col-12 col-md-5"
          :class="$q.screen.lt.md ? 'text-center' : 'text-right'"
         >
          <div class="row"
              :class="$q.screen.lt.md ? 'justify-center' : ''"
          
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

.footer-background {
  background-color: #fff; /* Same light gray background */
  color: #000;
}
.left-border {
  border-left: 5px solid #e65100;
}
/* Skew only the background image */
</style>
