<script lang="ts" setup>
import data from '../../../data/tracks.json'
import BasePlayListBody from '@/shared/components/BasePlayListBody.vue';
import BasePlayListHeader from '@/shared/components/BasePlayListHeader.vue';
</script>


<template>
    <BasePlayListHeader />
    <BasePlayListBody :tracks="data.data" />
</template>



<style scoped lang="scss"></style>
