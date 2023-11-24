import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'
import { useTracksAdminStore } from '@/admin/stores/useTrackAdminStore'
import {
  getTracksAll,
  publishedTrackService,
} from '../services/tracksAdmin.service'
import { toast } from 'vue3-toastify'

export const useTracksAdmin = () => {
  const queryClient = useQueryClient()
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

  const { mutate: mutatePublishedTrack } = useMutation(publishedTrackService, {
    onSuccess(data) {
      queryClient.invalidateQueries(['tracksAdmin'])
      console.log({ data })
      if (data.track.published) {
        toast.success('Se publicó correctamente la canción')
      } else {
        toast.success('Se dejo de publicar correctamente la canción')
      }
    },
    onError() {
      toast.error('Ups hubo un error la cragar las canciones')
    },
  })

  const publishedTrack = (id: string, isPublished: boolean) => {
    mutatePublishedTrack({ id, isPublished })
  }

  return {
    tracks,
    isLoading,
    publishedTrack,
  }
}
