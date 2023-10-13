<script lang="ts" setup>
import SearchHeader from '@/home/components/SearchHeader.vue'
import { useGetTracks } from '../composables/useGetTracks';
import BaseSectionCards from '@/shared/components/BaseSectionCards.vue';
import BaseSpinner from '@/shared/components/BaseSpinner.vue';

const { tracks, isLoading } = useGetTracks()
</script>


<template>
    <SearchHeader />
    <div class="track-page">
        <BaseSpinner v-if="isLoading" />
        <BaseSectionCards v-else title="La Mejor música del mundo" mode="small" :data-tracks="tracks" />
    </div>
</template>



<style scoped lang="scss">
.track-page {
    padding: 3rem;
}
</style>
