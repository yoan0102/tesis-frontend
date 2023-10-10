import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '../interfaces/user.interface'
import { loginService, refreshTokenService } from '../services/auth.service'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref<User>()
  const token = ref<string>()
  const expiresIn = ref<number>()

  const hasError = ref<boolean>(false)
  const error = ref()
  const isLoading = ref<boolean>(false)

  async function onLogin(email: string, password: string) {
    try {
      isLoading.value = true
      const data = await loginService(email, password)
      user.value = data.user
      token.value = data.token?.token
      expiresIn.value = data.token?.expiresIn
      router.push('/')
    } catch (err) {
      hasError.value = true
      error.value = err
      toast.error('Hubo un error intentalo de nuevo')
    } finally {
      isLoading.value = false
    }
  }

  async function refreshToken() {
    try {
      const data = await refreshTokenService()
      token.value = data.token?.token
      expiresIn.value = data.token?.expiresIn
    } catch (error) {
      console.log(error)
    }
  }

  return {
    user,
    token,
    onLogin,
    refreshToken,
    hasError,
    error,
    isLoading
  }
})
