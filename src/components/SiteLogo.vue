<template>
  <router-link to="/" class="site-logo" :class="{ 'site-logo--light': light }" aria-label="FinUltra home">
    <span class="site-logo__fin">Fin</span><span class="site-logo__ultra">Ultra</span><span class="site-logo__fin">.</span>
  </router-link>
</template>

<script setup>
defineProps({
  light: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped>
.site-logo {
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 30px;
  letter-spacing: -0.5px;
  line-height: 1;
  white-space: nowrap;
}
.site-logo__fin { color: $fu-blue; }
.site-logo__ultra { color: $fu-orange; }
.site-logo--light .site-logo__fin { color: #FFFFFF; }
</style>
