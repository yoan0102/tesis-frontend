<script lang="ts" setup>
import BaseNavbar from '../../shared/components/BaseNavbar.vue';

import TheMediaPLayer from '@/shared/components/TheMediaPLayer.vue'
</script>

<template>
  <div class="container columns is-clipped m-0">
    <BaseNavbar />
    <!-- <TheSidebar class="column is-one-fifth" /> -->
    <main class="">
      <RouterView />
    </main>
  </div>
  <!-- <TheMediaPLayer /> -->
</template>

<style scoped lang="scss">
.container {
  min-width: 100vw;
  min-height: 100vh;
}
</style>
