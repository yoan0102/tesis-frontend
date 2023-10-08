<script lang="ts" setup>
defineProps<{
  title: string
  mode: 'small' | 'big'
  dataTracks: any
}>()
</script>

<template>
  <div class="section--generic">
    <h1 class="section--generic__title">{{ title }}</h1>

    <div class="section--generic__player--zone">
      <ul
        class="player--list"
        :class="{ 'card-small': mode === 'small', 'card-big': mode === 'big' }"
      >
        <li v-for="track in dataTracks" :key="track.id">
          <app-card-player [track]="track" [mode]="mode"></app-card-player>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section--generic {
  margin-bottom: 2rem;
}

.section--generic__player--zone .player--list {
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.15rem;
}

.section--generic__player--zone .player--list.card-small {
  grid-template-columns: repeat(5, 1fr);
}

.section--generic__player--zone .player--list.card-big {
  grid-template-columns: repeat(6, minmax(100px, 1fr));
}
</style>
