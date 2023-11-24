<script lang="ts" setup>
import BaseSectionCards from '../../shared/components/BaseSectionCards.vue'
import BaseSpinner from '../../shared/components/BaseSpinner.vue'
import { useGetTracks } from '../composables/useGetTracks'

const { tracks, isLoading } = useGetTracks()
</script>

<template>
  <div class="track-page">
    <template v-if="tracks.length < 1">
      <h2 class="mt-6 mb-0 is-size-4-mobile is-size-3-tablet is-size-2-desktop">
        No se encontraron Canciones pudes registrarte y subir una canción
      </h2>
      <img src="@/assets/cover-g.jpg" alt="cover" />
    </template>
    <BaseSpinner v-if="isLoading" />
    <BaseSectionCards
      v-else
      title="La Mejor música del mundo"
      mode="small"
      :data-tracks="tracks" />
    <!-- <BaseSectionCards title="Lo mejor de Electronica" mode="big" :data-tracks="data.data" /> -->
  </div>
</template>

<style scoped lang="scss">
img {
  width: 100%;
  height: max-content;
  object-fit: cover;
}
.track-page {
  padding: 3rem;
}
</style>
