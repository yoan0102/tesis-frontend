import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '../interfaces/user.interface'
import { useLocalStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(useLocalStorage('user', null))
  const token = ref(useLocalStorage('token', null))
  const expiresIn = ref<number>()

  const setUser = (value: User) => {
    useLocalStorage('user', value)
  }
  const setToken = (value: string) => {
    useLocalStorage('token', value)
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
    setExpiresIn
  }
})
