<template>
  <div class=" bg-grey-11 q-py-xl" >
    <div class="q-my-xl">
      <div class="text-center">
        <h2 class="q-my-none font-montserrat-bold font-28">Our clients</h2>
        <div class="flex flex-center">
          <div class="elementor-divider"></div>
        </div>
        <p class="font-montserrat font-16 q-pt-lg">Driving technology for leading financial brands.</p>
        <div :class="$q.screen.lt.md ? 'q-px-md' : 'container'">
          <div class="row q-col-gutter-lg justify-center q-py-xl items-center">
            <div class="col-md-4 col-lg-2">
              <q-img src="image.0E9II3.png" width="200px" />
            </div>
            <div class="col-md-4 col-lg-2">
              <q-img src="image.1OAEI3.png" width="200px" />
            </div>
            <div class="col-md-4 col-lg-2">
              <q-img src="image.IT8KI3.png" width="200px" />
            </div>
            <div class="col-md-4 col-lg-2">
              <q-img src="image.QK7LI3.png" width="200px" />
            </div>
            <div class="col-md-4 col-lg-2">
              <q-img src="image.UNOII3.png" width="200px" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>
.elementor-divider {
  border : 2px solid #e65100;
  width: 4%;

}
</style>
