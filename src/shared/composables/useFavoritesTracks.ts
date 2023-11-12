import { watch, ref } from 'vue'
import { useTracksStore } from '@/home/stores/tracksStore'
import { useAuthStore } from '@/users/store/authStore'
import { storeToRefs } from 'pinia'
import { addFavorite, getFavorites } from '../services/favorites.service'
import { toast } from 'vue3-toastify'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'

export const useFavoritesTracks = () => {
  const queryClient = useQueryClient()
  const tracksStore = useTracksStore()
  const authStore = useAuthStore()
  const { user } = storeToRefs(authStore)

  const { isLoading, data } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const data = await getFavorites(user.value._id)
      return data
    },
    onSuccess(data) {
      tracksStore.setFavorites(data)
    },
    onError() {
      toast.error('Ups Ocurrio un error y no se cargo las canciones favoritas')
    },
  })

  const { mutate } = useMutation(
    async (favorite: string) => await addFavorite(user.value._id, favorite),
    {
      onSuccess(data) {
        queryClient.invalidateQueries(['favorites'])
        authStore.setUser(data.user)
      },
      onError() {
        toast.error(
          'Ups Ocurrio un error y no se agrego a favoritas la canción'
        )
      },
    }
  )

  watch(user, (data) => {
    user.value = JSON.parse(data)
  })

  const addFavorites = async (favorite: string) => {
    mutate(favorite)
  }

  return {
    isLoading,
    favoritesTracks: tracksStore.favorites,
    addFavorites,
  }
}
