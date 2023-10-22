import { useTracksStore } from '@/home/stores/tracksStore'
import type { Track } from '@/interfaces/tracks'
import { useAuthStore } from '@/users/store/authStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

export const useFavoritesTracks = () => {
  const tracksStore = useTracksStore()
  const authStore = useAuthStore()
  const { user } = storeToRefs(authStore)
  const { tracks } = storeToRefs(tracksStore)

  const favoritesTracks = computed((): Track[] => {
    return tracks.value.filter((item) => item)
  })
  const favorites = computed(() => {
    if (!user.value && user.value!.favorites.length > 0) {
      return tracks.value.filter((item) => user.value?.favorites.includes(item._id))
    }
    return tracks
  })

  return {
    favoritesTracks
  }
}
