<template>
  <q-page class="mt-navbar">
    <div>
      <div class="row main-bg">
        <div class="black-overlay"></div>
        <div class="col-12 col-lg-7 text-white content-above">
          <div class="row  q-px-xl">
            <div class="q-pl-md q-pl-md-xl left-border">
              <h1 class="q-my-none font-montserrat-bold  line-height-1-2 font-28">
                About Us
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

    <div :class="$q.screen.lt.md ? 'q-px-md' : 'container'">
      <div class="text-center" >
        <h2 class="q-my-none font-montserrat-bold font-28">Our Mission</h2>
        <div class="flex flex-center">
          <div class="elementor-divider"></div>
        </div>
      </div>
      <div class="q-py-xl q-px-md">
        <div class="font-21 font-montserrat">
          To deliver cutting-edge core banking software and mobile banking solutions that empower financial institutions to provide secure, seamless, and innovative financial services. At the same time, we provide robust IT infrastructure and high-quality computer hardware solutions that enhance organizational efficiency, reliability, and technological advancement across industries. Our mission is to bridge the gap between technology and finance, enabling businesses and individuals to thrive in a digital-first world.
        </div>
      </div>
    </div>

    <div :class="$q.screen.lt.md ? 'q-px-md' : 'container'">
      <div class="text-center" >
        <h2 class="q-my-none font-montserrat-bold font-28">Our Vision</h2>
        <div class="flex flex-center">
          <div class="elementor-divider"></div>
        </div>
      </div>
      <div class="q-py-xl q-px-md">
        <div class="font-21 font-montserrat">
          To be the preferred partner for financial institutions and organizations seeking transformative technology solutions. We envision a future where our advanced banking platforms drive financial inclusion and innovation, while our IT services and computer hardware solutions set the benchmark for performance, reliability, and excellence. We strive to create an ecosystem where technology empowers growth, fosters connectivity, and enables a smarter, more efficient way of working and banking.
        </div>
      </div>
    </div>

    <div :class="$q.screen.lt.md ? 'q-px-md' : 'container'">
      <div class="text-center" >
        <h2 class="q-my-none font-montserrat-bold font-28">Our Core Values</h2>
        <div class="flex flex-center">
          <div class="elementor-divider"></div>
        </div>
      </div>
      <div class="q-py-xl q-px-md">
        <ul class="font-21 font-montserrat">
         <li>
           Be clear and resolute
         </li>
          <li>
            Be innovative and strive for excellence
          </li>
          <li>
            Be loyal and team oriented
          </li>
          <li>
            Be reliable and trustworthy
          </li>
          <li>
            Have strong business
          </li>
          <li>
            Be customer oriented
          </li>
        </ul>
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
.black-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55); /* adjust darkness */
  z-index: 1;
}
.left-border {
  border-left: 3px solid #e65100;
}
.color-e65100{
  color: #e65100;
}
/* Content above overlay */
.content-above {
  position: relative;
  z-index: 2;
}
.elementor-divider {
  border : 2px solid #e65100;
  width: 4%;

}
</style>