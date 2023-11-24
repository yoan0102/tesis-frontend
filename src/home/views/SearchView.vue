<script lang="ts" setup>
import SearchHeader from '@/home/components/SearchHeader.vue'
import { useGetTracks } from '../composables/useGetTracks'
import BaseSectionCards from '@/shared/components/BaseSectionCards.vue'
import BaseSpinner from '@/shared/components/BaseSpinner.vue'
import { ref, watch, onMounted } from 'vue'
import type { Track } from '../../interfaces/tracks'

const { tracks, isLoading } = useGetTracks()

const searchedTrack = ref<Track[]>([])

const term = ref<string>('')

watch(tracks, (newValue) => {
  searchedTrack.value = newValue
})

onMounted(() => {
  searchedTrack.value = tracks.value
})

const searchTrack = (e: string) => {
  const a = tracks.value.filter((item) =>
    item.name.toLowerCase().includes(e.toLowerCase())
  )
  searchedTrack.value = a
}

const handleTerm = () => {
  const a = tracks.value.filter((item) =>
    item.name.toLowerCase().includes(term.value.toLowerCase())
  )
  searchedTrack.value = a
}
</script>

<template>
  <div class="search-container">
    <SearchHeader @change-term="searchTrack" />
    <div class="mx-5 search-input">
      <input
        type="search"
        placeholder="Búsqueda"
        class="input"
        v-model="term"
        @input="handleTerm" />
    </div>

    <div class="track-page">
      <BaseSpinner v-if="isLoading" />
      <template v-else-if="searchedTrack.length < 1">
        <h2 class="title has-text-centered mb-0">
          No se encontraron Canciones
        </h2>
        <img src="@/assets/cover-g.jpg" alt="cover" />
      </template>
      <BaseSectionCards
        v-else
        title="La Mejor música del mundo"
        mode="small"
        :data-tracks="searchedTrack" />
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  min-width: 100%;
  object-fit: cover;
}
.search-container {
  min-width: 80vw;
  margin-top: 8rem;
}

.track-page {
  padding: 3rem;
}

@media (min-width: 768px) {
  .search-container {
    min-width: 100vw;
    margin-top: 0%;

    .search-input {
      display: none;
    }
  }
}

@media (min-width: 768px) {
  .search-container {
    min-width: 90vw;
  }
}
</style>
