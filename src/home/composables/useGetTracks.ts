import { useQuery } from '@tanstack/vue-query'
import { getTracks } from '../services/tracks.service'
import { useTracksStore } from '../stores/tracksStore'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'

export const useGetTracks = () => {
  const tracksStore = useTracksStore()
  const { tracks } = storeToRefs(tracksStore)

  const { isLoading, data } = useQuery(['tracks'], getTracks, {
    onSuccess(data) {
      tracksStore.setTracks(data)
    }
  })

  watch(data, (tracks) => {
    if (tracks) tracksStore.setTracks(tracks)
  })

  return {
    isLoading,
    tracks
  }
}
