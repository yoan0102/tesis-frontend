import { watch } from 'vue'
import { useTracksStore } from '@/home/stores/tracksStore'
import { useAuthStore } from '@/users/store/authStore'
import { storeToRefs } from 'pinia'
import { getFavorites } from '../services/favorites.service'
import { toast } from 'vue3-toastify'
import { useQuery } from '@tanstack/vue-query'

export const useFavorites = () => {
  const tracksStore = useTracksStore()
  const { favorites } = storeToRefs(tracksStore)
  const authStore = useAuthStore()
  const { user } = storeToRefs(authStore)

  const { isLoading } = useQuery({
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

  return {
    isLoading,
    favorites,
  }
}
