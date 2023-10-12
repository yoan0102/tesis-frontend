import type { Track } from '@/interfaces/tracks'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTracksStore = defineStore('tracks', () => {
  const tracks = ref<Track[]>([])
  const track = ref<Track | null>(null)

  return {
    //State
    tracks,
    track,
    //Getters
    //Actions
    setTracks: (values: Track[]) => {
      tracks.value = values
    },
    setTrackPlayed: (value: Track) => {
      track.value = value
    }
  }
})
