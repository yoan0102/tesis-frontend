<script lang="ts" setup></script>

<template>
  <div class="container has-background-black">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #23242a;
}
</style>
