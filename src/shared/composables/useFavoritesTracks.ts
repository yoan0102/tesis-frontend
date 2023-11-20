import { watch } from 'vue'
import { useTracksStore } from '@/home/stores/tracksStore'
import { useAuthStore } from '@/users/store/authStore'
import { storeToRefs } from 'pinia'
import { addFavorite } from '../services/favorites.service'
import { toast } from 'vue3-toastify'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

export const useFavoritesTracks = () => {
  const queryClient = useQueryClient()
  const tracksStore = useTracksStore()
  const { favorites } = storeToRefs(tracksStore)
  const authStore = useAuthStore()
  const { user } = storeToRefs(authStore)

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

  const addFavorites = async (favorite: string) => {
    mutate(favorite)
  }

  return {
    favorites,
    addFavorites,
  }
}
