import { useTracksStore } from '@/home/stores/tracksStore'
import type { Track } from '@/interfaces/tracks'
import { storeToRefs, type StateTree } from 'pinia'
import { ref } from 'vue'

1
export const useTrackPlayed = () => {
  const trackStore = useTracksStore()
  const { track } = storeToRefs(trackStore)

  const audio: HTMLAudioElement = new Audio()
  const timeElapsed = ref<string>('00:00')
  const timeRemaining = ref<string>('-00:00')
  const playerStatus = ref<string>('paused')
  const playerPercentage = ref<number>(0)

  const trackPlay = (track: Track) => {
    trackStore.setTrackPlayed(track)
  }

  const resetTrackPay = () => {
    track.value = null
  }

  const calculateTime = () => {
    const { duration, currentTime } = audio
    setTimeElapse(currentTime)
    setTimeremaining(currentTime, duration)
    calcPercentage(currentTime, duration)
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
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes
    const displayFormat = `-${displayMinutes}:${displaySeconds}`
    timeRemaining.value = displayFormat
  }

  const setPlayerStatus = (state: Event) => {
    switch (state.type) {
      case 'play':
        return (playerStatus.value = 'play')
      case 'playing':
        return (playerStatus.value = 'playing')
      case 'ended':
        return (playerStatus.value = 'ended')
      default:
        return (playerStatus.value = 'paused')
    }
  }

  const togglePlayer = () => {
    audio.paused ? audio.play() : audio.pause()
  }

  const calcPercentage = (currentTime: number, duration: number) => {
    const percentage = (currentTime * 100) / duration
    playerPercentage.value = percentage
  }

  return {
    track,
    audio,
    trackPlay,
    timeElapsed,
    timeRemaining,
    calculateTime,
    setPlayerStatus,
    togglePlayer,
    playerStatus,
    playerPercentage,
    resetTrackPay,
  }
}
