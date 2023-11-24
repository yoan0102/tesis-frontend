import type { Track } from '@/interfaces/tracks'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTracksAdminStore = defineStore('tracksAdmin', () => {
  const tracks = ref<Track[]>([])

  return {
    //State
    tracks,

    //Getters
    //Actions
    setTracks: (values: Track[]) => {
      tracks.value = values
    },
  }
})
