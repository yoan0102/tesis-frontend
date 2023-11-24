<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import type { Track } from '@/interfaces/tracks'
import formatDate from '@/shared/utils/formatDate'
import { useTrackPlayed } from '@/shared/composables/useTrackPlayed'
import { useTracksAdmin } from '../composables/useTrackAdmin'

defineEmits(['on-delete-track'])
defineProps<{
  tracks: Track[]
}>()
const { trackPlay } = useTrackPlayed()
const { publishedTrack, deleteTrack } = useTracksAdmin()
</script>

<template>
  <div class="play-list-body">
    <ul class="play-list-table-header">
      <li>Nombre</li>
      <li class="md-hidden">álbum</li>
      <li class="md-hidden">fecha incorporación</li>
      <li>
        <Icon icon="file-icons:actionscript" />
        <span class="ml-2">Actions</span>
      </li>
    </ul>
    <ul class="play-list-rows" v-for="track in tracks" :key="track._id">
      <li class="track-name">
        <div class="cover-section">
          <img
            appImgBroken
            class="cover-track"
            :src="track.cover ? track.cover : '/cover-g.jpg'"
            :alt="track.name" />
          <div class="cover-info">
            <div class="name-track">{{ track.name }}</div>
            <div class="name-track-details">{{ track.artist.name }}</div>
          </div>
        </div>
      </li>
      <li class="track-name-opacity md-hidden">
        {{ track.album.name }}
      </li>
      <li class="track-name-opacity md-hidden">
        {{ formatDate(track.createdAt) }}
      </li>

      <li class="track-name-opacity">
        <button
          class="button"
          :class="track.published ? 'is-danger' : 'is-success'"
          @click="publishedTrack(track._id, !track.published)">
          <span class="icon is-small">
            <Icon
              :icon="!track.published ? 'mdi:publish' : 'mdi:publish-off'" />
          </span>
        </button>
        <button class="button is-success" @click="trackPlay(track)">
          <span class="icon is-small">
            <Icon icon="mdi:play-circle" />
          </span>
        </button>
        <button class="button is-danger" @click="deleteTrack(track._id)">
          <span class="icon is-small">
            <Icon icon="mdi:delete" />
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.play-list-body {
  padding: 1rem 2rem;
}
.play-list-table-header {
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  margin: 0;
  padding: 0 2rem 0 2rem;
  font-size: 90%;
  letter-spacing: 1px;
  border-bottom: solid 1px var(--color-2);
  padding-bottom: 0.5rem;
}
.play-list-table-header li {
  text-transform: uppercase;
  color: var(--color-4);
  opacity: 0.7;
}
.play-list-rows {
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  margin: 0;
  padding: 1rem 2rem 2rem 0;
}
.play-list-rows .track-name-opacity {
  opacity: 0.7;
  font-weight: 300;
  display: flex;
  gap: 0.5rem;
}
.cover-section {
  display: flex;
  padding: 0;
}
.cover-section .cover-track {
  width: 40px;
  height: 40px;
  object-fit: cover;
}
.cover-section .cover-info {
  padding: 0 1rem;
}
.cover-section .cover-info .name-track-details {
  font-size: 80%;
  opacity: 0.7;
}

@media (width < 768px) {
  .play-list-table-header,
  .play-list-rows {
    display: flex;
    justify-content: space-between;
  }
  .md-hidden {
    display: none !important;
  }
}
</style>
