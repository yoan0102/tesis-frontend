import { baseAxios } from '@/api/baseAxios'

export const addFavorite = async (id: string, favorite: string) => {
  const { data } = await baseAxios.patch(`/users/favorites/${id}`, { favorite })
  return data.data
}

export const getFavorites = async (id: string) => {
  const { data } = await baseAxios.get(`/users/favorites/${id}`)
  return data.data.favorites[0]
}
