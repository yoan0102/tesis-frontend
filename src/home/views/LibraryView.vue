<script lang="ts" setup>

import { onMounted } from 'vue';
import BaseSectionCards from '../../shared/components/BaseSectionCards.vue';
import BaseSpinner from '../../shared/components/BaseSpinner.vue';
import { useGetTracks } from '../composables/useGetTracks';

const { tracks, isLoading } = useGetTracks()
</script>

<template>
  <div class="track-page">
    <BaseSpinner v-if="isLoading" />
    <BaseSectionCards title="La Mejor música del mundo" mode="small" :data-tracks="tracks" />
    <!-- <BaseSectionCards title="Lo mejor de Electronica" mode="big" :data-tracks="data.data" /> -->
  </div>
</template>

<style scoped lang="scss">
.track-page {
  padding: 3rem;
}
</style>
