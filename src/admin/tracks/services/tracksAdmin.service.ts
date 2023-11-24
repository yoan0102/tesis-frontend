import { baseAxios } from '@/api/baseAxios'

export const getTracksAll = async () => {
  const { data } = await baseAxios.get('/tracks/all')
  return data.data
}

export const publishedTrackService = async ({
  id,
  isPublished,
}: {
  id: string
  isPublished: boolean
}) => {
  const { data } = await baseAxios.patch(`/tracks/published/${id}`, {
    isPublished,
  })
  return data.data
}

export const deleteTrackService = async (id: string) => {
  const { data } = await baseAxios.delete(`/tracks/${id}`)
  return data.data
}
