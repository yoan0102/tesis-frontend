import { useQuery } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'
import { useTracksAdminStore } from '@/admin/stores/useTrackAdminStore'
import { getTracksAll } from '../services/tracksAdmin.service'
import { toast } from 'vue3-toastify'

export const useTracksAdmin = () => {
  const tracksStore = useTracksAdminStore()
  const { tracks } = storeToRefs(tracksStore)

  const { isLoading } = useQuery(['tracksAdmin'], getTracksAll, {
    onSuccess(data) {
      tracksStore.setTracks(data)
    },
    onError() {
      toast.error('Ups hubo un error la cragar las canciones')
    },
  })

  return {
    tracks,
    isLoading,
  }
}
