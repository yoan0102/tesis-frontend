import { useTracksStore } from '@/home/stores/tracksStore'
import { useAuthStore } from '@/users/store/authStore'
import { storeToRefs } from 'pinia'
import {
  getFavorites,
  removeFavoritesService,
} from '../services/favorites.service'
import { toast } from 'vue3-toastify'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'

export const useFavorites = () => {
  const tracksStore = useTracksStore()
  const { favorites } = storeToRefs(tracksStore)
  const authStore = useAuthStore()
  const { user } = storeToRefs(authStore)

  const router = useRouter()

  const queryClient = useQueryClient()

  const { isLoading } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const data = await getFavorites(user.value._id)
      return data
    },
    onSuccess(data) {
      tracksStore.setFavorites(data.filter((x: any) => x !== undefined))
    },
    onError(error: any) {
      tracksStore.setFavorites([])
      if (error.response && error.response.data.error === 'jwt expired') {
        authStore.setUser(null)
        router.push({ name: 'home' })
        setTimeout(() => {
          toast.error(
            'Ups Ocurrio un error y debe volver a loguearse para acceder a las canciones favoritas'
          )
        }, 500)
        return
      }
      toast.error('Ups Ocurrio un error y no se cargo las canciones favoritas')
    },
  })

  const { mutate: mutateRemoveFavorite } = useMutation(
    async (favorite: string) =>
      await removeFavoritesService(user.value._id, favorite),
    {
      onSuccess(data) {
        toast.success('Se elimino la cación de favoritas')
        queryClient.invalidateQueries(['favorites'])
        authStore.setUser(data.user)
      },
      onError() {
        toast.error(
          'Ups Ocurrio un error y no se eliminó  la canción de favoritas'
        )
      },
    }
  )

  const removeFavorites = (favorite: string) => {
    mutateRemoveFavorite(favorite)
  }

  return {
    isLoading,
    favorites,
    removeFavorites,
  }
}
