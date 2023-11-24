import { baseAxios } from '@/api/baseAxios'

export const getTracksAll = async () => {
  const { data } = await baseAxios.get('/tracks/all')
  return data.data
}
