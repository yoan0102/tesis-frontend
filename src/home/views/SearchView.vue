<script lang="ts" setup>
import SearchHeader from '@/home/components/SearchHeader.vue'
import { useGetTracks } from '../composables/useGetTracks'
import BaseSectionCards from '@/shared/components/BaseSectionCards.vue'
import BaseSpinner from '@/shared/components/BaseSpinner.vue'
import { ref, watch, onMounted } from 'vue';
import { Track } from '../../interfaces/tracks'

const { tracks, isLoading } = useGetTracks()

const searchedTrack = ref<Track[]>([])
const term = ref<string>()

watch(tracks, (newValue) => {
    searchedTrack.value = newValue
})

onMounted(() => {
    searchedTrack.value = tracks.value
})

const searchTrack = (e: string) => {
    const a = tracks.value.filter(item => item.name.toLowerCase().includes(e.toLowerCase()))
    searchedTrack.value = a
}

const handleTerm = () => {
    const a = tracks.value.filter(item => item.name.toLowerCase().includes(term.value.toLowerCase()))
    searchedTrack.value = a
}
</script>

<template>
    <div class="search-container">
        <SearchHeader @change-term="searchTrack" />
        <div class="mx-5 search-input">
            <input type="search" placeholder="Búsqueda" class="input" v-model="term" @input="handleTerm">
        </div>

        <div class="track-page">
            <BaseSpinner v-if="isLoading" />
            <h2 class="title has-text-centered" v-else-if="searchedTrack.length < 1">No se encontraron Canciones</h2>
            <BaseSectionCards v-else title="La Mejor música del mundo" mode="small" :data-tracks="searchedTrack" />
        </div>
    </div>
</template>

<style scoped lang="scss">
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
