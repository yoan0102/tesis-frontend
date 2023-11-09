import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '../interfaces/user.interface'
import { useLocalStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () => {
  const user = useLocalStorage<User>('user', null)
  const token = useLocalStorage<string>('token', null)
  const expiresIn = ref<number>()

  const setUser = (value: User) => {
    user.value = value
  }
  const setToken = (value: string) => {
    token.value = value
  }

  const setExpiresIn = (value: number) => {
    expiresIn.value = value
  }

  return {
    //StateStore
    user,
    token,
    expiresIn,
    //Getters
    //Actions`
    setUser,
    setToken,
    setExpiresIn,
  }
})
