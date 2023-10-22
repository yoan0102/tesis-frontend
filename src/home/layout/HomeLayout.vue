<script lang="ts" setup>
import TheSidebar from '@/shared/components/TheSidebar.vue';
import TheMediaPLayer from '@/shared/components/TheMediaPLayer.vue'
</script>

<template>
  <div class="container columns is-clipped m-0">
    <TheSidebar />
    <!-- <TheSidebar class="column is-one-fifth" /> -->
    <main class="main">
      <RouterView />
    </main>
  </div>
  <TheMediaPLayer />
</template>

<style scoped lang="scss">
.container {
  min-width: 100vw;
  min-height: 100vh;
}

.main {
  width: 100%;
}
</style>
