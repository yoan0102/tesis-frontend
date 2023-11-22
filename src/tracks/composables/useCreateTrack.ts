import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { createTrackService } from '../services/create.service'
import { toast } from 'vue3-toastify'

export const useCreateTrack = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    async (formData: any) => createTrackService(formData),
    {
      onSuccess(data) {
        toast.success('Se guardo correctamente la canción')
        queryClient.invalidateQueries(['tracks'])
      },
      onError() {
        toast.error('Ups hubo un error al guardar la canción')
      },
    }
  )

  const createTrack = (formData: any) => {
    mutate(formData)
  }
  return {
    createTrack,
  }
}
