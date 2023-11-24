<script lang="ts" setup>
import { useTracksAdmin } from '../composables/useTrackAdmin'
import BaseSpinner from '@/shared/components/BaseSpinner.vue'
import AdminTrackPlayListBody from '../components/AdminTrackPlayListBody.vue'

const { tracks, isLoading } = useTracksAdmin()

const deleteTrack = (id: string) => {
  console.log(id)
  // removeFavorites(id)
}
</script>

<template>
  <BaseSpinner v-if="isLoading" />
  <div v-else class="container-tracks">
    <h1 class="is-capitalized is-size-1 mb-6 mr-3">Gestión de las canciones</h1>
    <template v-if="tracks.length > 0">
      <AdminTrackPlayListBody :tracks="tracks" @on-delete-track="deleteTrack" />
    </template>
    <template v-else>
      <h2 class="title has-text-centered mt-3">No tienes canciones</h2>
    </template>
  </div>
</template>

<style scoped lang="scss">
.container-tracks {
  width: 90vw;
  margin-top: 8rem;
  padding: 0 3rem 0 3rem;
}
</style>
