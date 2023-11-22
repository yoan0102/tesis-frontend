import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { createTrackService } from '../services/create.service'

export const useCreateTrack = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    async (formData: any) => createTrackService(formData),
    {
      onSuccess(data) {
        console.log(data)
        queryClient.invalidateQueries(['tracks'])
      },
      onError() {
        console.log('Ups Error')
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
