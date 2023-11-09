import { watch, ref } from 'vue'
import { useTracksStore } from '@/home/stores/tracksStore'
import { useAuthStore } from '@/users/store/authStore'
import { storeToRefs } from 'pinia'
import { addFavorite, getFavorites } from '../services/favorites.service'
import { toast } from 'vue3-toastify'
import { useMutation, useQuery } from '@tanstack/vue-query'

export const useFavoritesTracks = () => {
  const tracksStore = useTracksStore()
  const authStore = useAuthStore()
  const { user } = storeToRefs(authStore)

  const userParse = ref(JSON.parse(user.value))

  const { isLoading, data } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const data = await getFavorites(userParse.value._id)
      return data
    },
    onSuccess(data) {
      tracksStore.setFavorites(data[0])
    },
    onError() {
      toast.error('Ups Ocurrio un error y no se cargo las canciones favoritas')
    },
  })

  // watch(data, (tracks) => {
  //   if (tracks) tracksStore.setFavorites(tracks)
  // })

  const { mutate } = useMutation(
    async (favorite: string) =>
      await addFavorite(userParse.value._id, favorite),
    {
      onSuccess(data) {
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
    userParse.value = JSON.parse(data)
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
