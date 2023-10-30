<script lang="ts" setup>
import BasePlayListBody from '@/shared/components/BasePlayListBody.vue'
import BasePlayListHeader from '@/shared/components/BasePlayListHeader.vue'
</script>

<template>
    <BasePlayListHeader smallText="playlist" icon="heart-outline" user-name="Yoan Estrada Blanco"
        title="Canciones que te gustan" :trackTotal="206" />
    <!-- <BasePlayListBody :tracks="data.data" /> -->
</template>

<style scoped lang="scss"></style>
