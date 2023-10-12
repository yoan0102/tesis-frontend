import type { ResponseTrack, Track } from '@/interfaces/tracks'
import { baseAxios } from '@/services/baseAxios'
export const getTracks = async (): Promise<Track[]> => {
  const { data } = await baseAxios.get<ResponseTrack>('/tracks')
  return data.data
}
