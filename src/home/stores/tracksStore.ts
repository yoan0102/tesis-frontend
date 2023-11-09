import type { Track } from '@/interfaces/tracks'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTracksStore = defineStore('tracks', () => {
  const tracks = ref<Track[]>([])
  const track = ref<Track | null>(null)
  const favorites = ref<Track[]>([])

  return {
    //State
    tracks,
    track,
    favorites,
    //Getters
    //Actions
    setTracks: (values: Track[]) => {
      tracks.value = values
    },
    setTrackPlayed: (value: Track) => {
      track.value = value
    },
    setFavorites: (values: Track[]) => {
      favorites.value = values
    },
  }
})
