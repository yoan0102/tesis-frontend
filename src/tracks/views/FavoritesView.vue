<script lang="ts" setup>
import BasePlayListBody from '@/shared/components/BasePlayListBody.vue'
import BasePlayListHeader from '@/shared/components/BasePlayListHeader.vue'
import { useFavorites } from '@/shared/composables/useFavorites'
import Swal from 'sweetalert2'
const { favorites, removeFavorites } = useFavorites()

const deleteFavorite = (id: string) => {
  Swal.fire({
    title: 'Seguro vas a quitar esta canción de favoritas',
    icon: 'warning',
    iconColor: '#bf3a28',
    showCancelButton: true,
    confirmButtonText: 'Si quiero quitarla ',
    confirmButtonColor: '#28a3bf',
    cancelButtonText: 'No, me equivoque',
    cancelButtonColor: '#bf3a28',
  }).then((result) => {
    if (result.isConfirmed) {
      removeFavorites(id)
    }
  })
}
</script>

<template>
  <BasePlayListHeader
    smallText="playlist"
    icon="heart-outline"
    user-name="Yoan Estrada Blanco"
    title="Canciones que te gustan"
    :trackTotal="favorites.length" />
  <h1 class="title-mobile is-size-2">
    <strong>Canciones que te gustan</strong>
  </h1>
  <template v-if="favorites.length > 0">
    <BasePlayListBody
      :tracks="favorites"
      @on-delete-favorite="deleteFavorite" />
  </template>
  <template v-else>
    <h2 class="title has-text-centered mt-3">No tienes canciones preferidas</h2>
  </template>
</template>

<style scoped lang="scss">
.title-mobile {
  text-align: center;
  margin-top: 6rem;
}

@media (width > 1024px) {
  .title-mobile {
    display: none;
  }
}
</style>
