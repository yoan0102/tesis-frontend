<script lang="ts" setup>
import BasePlayListBody from '@/shared/components/BasePlayListBody.vue'
import BasePlayListHeader from '@/shared/components/BasePlayListHeader.vue'
import { useFavorites } from '@/shared/composables/useFavorites'

const { favorites, removeFavorites } = useFavorites()

const deleteFavorite = (id: string) => {
  removeFavorites(id)
}
</script>

<template>
  <BasePlayListHeader
    smallText="playlist"
    icon="heart-outline"
    user-name="Yoan Estrada Blanco"
    title="Canciones que te gustan"
    :trackTotal="favorites.length" />
  <h1 class="title-mobile is-size-2">Canciones que te gustan</h1>
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
  margin-top: 2rem;
}
@media (width > 1024px) {
  .title-mobile {
    display: none;
  }
}
</style>
