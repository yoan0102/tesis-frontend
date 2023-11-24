import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'
import { useTracksAdminStore } from '@/admin/stores/useTrackAdminStore'
import {
  getTracksAll,
  publishedTrackService,
  deleteTrackService,
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

  const { mutate: mutateDeleteTrack } = useMutation(deleteTrackService, {
    onSuccess() {
      queryClient.invalidateQueries(['tracksAdmin'])
      toast.success('Se eliminó correctamente la canción')
    },
    onError() {
      toast.error('Ups hubo un error al eliminar las canciones')
    },
  })

  const publishedTrack = (id: string, isPublished: boolean) => {
    mutatePublishedTrack({ id, isPublished })
  }

  const deleteTrack = (id: string) => {
    mutateDeleteTrack(id)
  }

  return {
    tracks,
    isLoading,
    publishedTrack,
    deleteTrack,
  }
}
