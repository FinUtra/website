<template>
  <q-page class="mt-navbar">
    <div>
      <div class="row main-bg">
        <div class="black-overlay"></div>
        <div class="col-12 col-lg-7 text-white content-above">
          <div class="row  q-px-xl">
            <div class="q-pl-md q-pl-md-xl left-border">
              <h1 class="q-my-none font-montserrat-bold  line-height-1-2 font-28">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
        <div class="white-div"></div>
      </div>
    </div>

    <!-- Second section 0 -->
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

    <!--  section 2-->
    <div class="office-bg">
      <div :class="$q.screen.lt.md ? 'q-px-md' : 'container'">

        <div class="row q-col-gutter-y-lg q-py-xl q-px-xl" :class="$q.screen.lt.md? 'text-center' : ''" >
          <div class="col-12">
            <div class="font-27 font-montserrat-bold line-height-1-2">
              Our Offices
            </div>
            <div class="font-14 font-montserrat">
              FinUltra teams are based in the Netherlands, Kenya, and Singapore.
            </div>
          </div>
          <div class="col-12 col-md-4" v-for="i in 2" :key="i">
            <div class="row" :class="$q.screen.lt.md ? 'justify-center' : ''">
              <div class="col-6 col-md-2" >
                <q-icon
                    class="icon-bg q-pa-sm"
                    name="location_on"
                    color="white"
                    size="30px"
                />
              </div>
              <div class="col-8 col-sm-7">
                <div class="font-16 font-montserrat-bold">FinUltra Solutions</div>
                <div class="font-14 font-montserrat">
                  12 Pippendale Borrowdale <br>
                  Harare Zimbabwe and <br>
                  6 Ibex Hill Lusaka Zambia<br>
                  +263771804964
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  second last section -->
    <div>
      <div class="row justify-center q-py-xl q-px-xl">
        <div class="col-12 col-sm-8">
          <div class="row justify-center q-py-lg">
            <div class="col-12 col-md-8">
              <div class="font-21 font-montserrat-bold">Book a demo with one of our team today</div>
              <div class="font-16 font-montserrat">
                <q-icon name="check_circle" size="15px"/>
                No obligation to purchase
                <q-icon name="check_circle" size="15px"/>
                Fully enabled system
                <q-icon name="check_circle" size="15px"/>
                No credit card required</div>
            </div>
            <div class="col-12 col-md-4" :class="$q.screen.gt.md ? 'text-right' : 'q-mt-md'">
              <q-btn class="font-14 font-montserrat-semibold bg-btn text-white q-py-md q-px-lg">BOOK A DEMO</q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
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
.office-bg{
  background-color: #F0F0F0;
  background-image: url("/FinUltra.jpg");
  background-position: center center;
  background-size: cover;
}
.left-border {
  border-left: 3px solid #e65100;
}
.bg-btn{
  background-color: #e65100;
  border-radius: 30px;
}
.color-e65100{
  color: #e65100;
}

.icon-bg{
  background-color: #e65100;
  border-radius: 100px;
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