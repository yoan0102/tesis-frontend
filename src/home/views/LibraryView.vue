<script lang="ts" setup>
import data from '../../../data/tracks.json'
import BaseSectionCards from '../../shared/components/BaseSectionCards.vue';
</script>

<template>
  <div class="track-page">
    <BaseSectionCards title="La Mejor música del mundo" mode="small" :data-tracks="data.data" />
    <!-- <BaseSectionCards title="Lo mejor de Electronica" mode="big" :data-tracks="data.data" /> -->

  </div>
</template>

<style scoped lang="scss">
.track-page {
  padding: 3rem;
}
</style>
