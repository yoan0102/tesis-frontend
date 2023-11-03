import { useTracksStore } from '@/home/stores/tracksStore'
import type { Track } from '@/interfaces/tracks'
import { useAuthStore } from '@/users/store/authStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { addFavorite } from '../services/favorites.service'
import { toast } from 'vue3-toastify'
import { useMutation } from '@tanstack/vue-query'

export const useFavoritesTracks = () => {
  const tracksStore = useTracksStore()
  const authStore = useAuthStore()
  const { user } = storeToRefs(authStore)
  const { tracks } = storeToRefs(tracksStore)

  const favoritesTracks = computed((): Track[] => {
    return tracks.value.filter((item) => {
      const userParse = user.value
      return JSON.parse(userParse).favorites.includes(item._id)
    })
  })
  const userParse = JSON.parse(user.value)
  const { isLoading, mutate } = useMutation(
    async (favorite: string) => await addFavorite(userParse._id, favorite),
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

  const addFavorites = async (favorite: string) => {
    mutate(favorite)
  }

  return {
    isLoading,
    favoritesTracks,
    addFavorites,
  }
}
