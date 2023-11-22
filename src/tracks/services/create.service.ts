import { baseAxios } from '@/api/baseAxios'

export const createTrackService = async (formData: any) => {
  const { data } = await baseAxios.post('/tracks', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  console.log(data)
  return data
}
