<script lang="ts" setup>
import BaseCardPlayer from './BaseCardPlayer.vue';
import { Track } from '../../interfaces/tracks';

defineProps<{
  title: string
  mode: 'small' | 'big'
  dataTracks: Track[]
}>()
</script>

<template>
  <div class="section--generic">
    <!-- <h1 class="section--generic__title">{{ title }}</h1> -->

    <div class="player-zone">
      <BaseCardPlayer v-for="track in dataTracks" :key="track._id" :track="track" :mode="mode" />
    </div>

  </div>
</template>

<style scoped lang="scss">
.player-zone {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px 25px;
  padding: 25px 5px;
  margin-top: 10%;
  width: 100%;

}

@media (min-width: 768px) {
  .player-zone {
    margin-top: 0px;
  }
}
</style>
