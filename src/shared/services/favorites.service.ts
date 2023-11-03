import { baseAxios } from '@/api/baseAxios'

export const addFavorite = async (id: string, favorite: string) => {
  const { data } = await baseAxios.patch(`/users/favorites/${id}`, { favorite })
  return data.data
}
