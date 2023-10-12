import { useTracksStore } from '@/home/stores/tracksStore'
import type { Track } from '@/interfaces/tracks'
import { storeToRefs } from 'pinia'
1
export const useTrackPlayed = () => {
  const trackStore = useTracksStore()
  const { track } = storeToRefs(trackStore)

  const trackPlay = (track: Track) => {
    trackStore.setTrackPlayed(track)
  }

  return {
    trackPlay,
    track
  }
}
