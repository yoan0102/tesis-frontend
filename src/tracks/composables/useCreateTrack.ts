import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { createTrackService } from '../services/create.service'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'

export const useCreateTrack = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { mutate } = useMutation(
    async (formData: any) => createTrackService(formData),
    {
      onSuccess(data) {
        queryClient.invalidateQueries(['tracks'])
        router.push({ name: 'home' })
        setTimeout(() => {
          toast.success('Se guardo correctamente la canción')
        }, 1000)
      },
      onError(error) {
        console.log(error)
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
