<template>
  <q-page style="margin-top: -90px" class="font-family">
    <div>
      <div class="main-bg q-py-xl-xl">
        <div class="main-bg__content q-py-xl-xl q-my-xl-xl">
          <div class="q-py-xl   text-white " >
            <div class="row justify-center q-py-xl q-my-xl">
              <!--                <q-separator dark vertical />-->
              <div class="col-md-8 col-lg-6 q-py-xl q-px-xl q-mx-md q-my-xl" >
                <div class="q-px-md" style=" border-left: 5px solid #e65100 ;">
                  <div class="fw-800 lh-1" :class="$q.screen.lt.lg ? 'fs-38' : 'fs-54'">
                    Finultra core banking platform
                  </div>
                  <div :class="$q.screen.lt.lg ? 'fs-16 ls-1' : 'fs-20 ls-1'">
                    Musoni supports organisations around the world with its self-service portals core banking solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="white-div "></div>
        </div>
      </div>
    </div>

    <!--  second section 0 -->
    <div class="">
      <div class="row justify-end q-px-xl">
        <div class="col-sm-12 col-md-10 text-right ">
          <div class="q-pb-md">
            <div class="fw-800 fs-28" >Transform your business</div>
            <p class="fs-16 q-mt-md ls-1">
              improve efficiency, reduce costs and launch new products & services with our<br>
              <b>cloud banking platform</b> used by financial organisations all around the world.</p>
          </div>
        </div>
      </div>
    </div>
<!--    third section -->
    <div class=" q-py-xl q-my-lg-lg">
      <div class="row justify-center">
        <div class="col-6">
          <div class=" fs-28 fw-900 text-center">
            Musoni core banking platform
            <div class="flex flex-center">
                <div class="" style="border: 1px solid #e65100; width: 100px"></div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-center fs-16 ls-1 q-pt-md">
            Begin your digitalisation journey with our <b>award-winning</b> solution.
          </div>
        </div>
      </div>

      <div class="row q-col-gutter-lg-xl q-mx-xl-xl q-mx-sm justify-center q-py-xl">
        <div class="col-sm-10 col-md-12 col-lg-4" :class="$q.screen.lt.lg ? 'q-py-lg' : ''" v-for="i in cards" :key="i">
          <div class="row q-col-gutter-x-md" :class="$q.screen.lt.lg ? 'justify-center': ''">
            <div class="col-auto ">
              <q-img width="70px" :src="i.img" alt=""/>
            </div>
            <div class="col-md-8">
              <div class="fs-18 fw-900">
                {{i.title}}
              </div>
             <div class="fs-14 q-pt-sm ls-1">
               {{i.subtitle}}
             </div>
            </div>
          </div>
        </div>
        <div>
          <q-btn style="border: 2px solid #e65100; border-radius: 50px" class="q-py-md q-px-lg fs-16 text-weight-bold" label="LEARN MORE" />
        </div>
      </div>
    </div>
  </q-page>

</template>
<script setup>
  import {ref} from "vue";

  const cards = ref([
    {
      img:"server.png",
      title:"Cloud Based",
      subtitle:"All you need to access the Musoni System is a reliable internet connection and a modern web browser – we guarantee an up-time of over 99.97%."
    },
    {
      img:"server.png",
      title:"Per Client Pricing",
      subtitle:"Flexible and affordable pricing structure enabling MFIs to benefit regardless of their size."
    },
    {
      img:"medal.png",
      title:"Award Winning",
      subtitle:"Winner of multiple awards for technology, financial inclusion & innovation in microfinance."
    },
    {
      img:"graphic-tablet.png",
      title:"Digital Field Application",
      subtitle:"Improve loan officer efficiency, extend outreach and increase revenue with the revolutionary Musoni DFA."
    },
    {
      img:"message.png",
      title:"Mobile Money Integration",
      subtitle:"Integrated with MMT services around the world, enabling clients to repay their loans and deposit their savings over their mobile phones."
    },
    {
      img:"sms.png",
      title:"SMS Module",
      subtitle:"Stay connected with your customers with our personalised and automated SMS module."
    }
  ])
</script>

<style scoped>
.main-bg {
  position: relative;
  background: url('assets/hero.jpg') top center/cover no-repeat;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.white-div{
  background-color: white;
  position: absolute;
  bottom: -13%;
  height: 25%;
  width: 100%;
  transform: skew(0deg, -5deg);
}

/* Skew only the background image */

</style>