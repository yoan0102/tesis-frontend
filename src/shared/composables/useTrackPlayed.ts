import { useTracksStore } from '@/home/stores/tracksStore'
import type { Track } from '@/interfaces/tracks'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

1
export const useTrackPlayed = () => {
  const trackStore = useTracksStore()
  const { track } = storeToRefs(trackStore)

  const audio: HTMLAudioElement = new Audio()
  const timeElapsed = ref<string>('00:00')
  const timeRemaining = ref<string>('-00:00')

  const trackPlay = (track: Track) => {
    trackStore.setTrackPlayed(track)
  }

  const calculateTime = () => {
    const { duration, currentTime } = audio
    setTimeElapse(currentTime)
    setTimeremaining(currentTime, duration)
  }
  const setTimeElapse = (currenTime: number) => {
    const seconds = Math.floor(currenTime % 60)
    const minutes = Math.floor((currenTime / 60) % 60)
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes
    const displayFormat = `${displayMinutes}:${displaySeconds}`
    timeElapsed.value = displayFormat
  }
  const setTimeremaining = (currenTime: number, duration: number) => {
    const timeLeft = duration - currenTime
    const seconds = Math.floor(timeLeft % 60)
    const minutes = Math.floor((timeLeft / 60) % 60)

    ////////////////////////////////////////
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes
    const displayFormat = `-${displayMinutes}:${displaySeconds}`
    timeRemaining.value = displayFormat
  }

  return {
    track,
    audio,
    timeElapsed,
    timeRemaining,
    calculateTime,
    trackPlay
  }
}
