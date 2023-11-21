import { toast } from 'vue3-toastify'
import {
  loginService,
  refreshTokenService,
  logoutService,
} from '../services/auth.service'
import { useAuthStore } from '../store/authStore'
import { useMutation } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

export default function useLogin() {
  const router = useRouter()

  const authStore = useAuthStore()
  const { user, token } = storeToRefs(authStore)

  const { isLoading, mutate: loginMutate } = useMutation(
    async (user: { email: string; password: string }) =>
      await loginService(user.email, user.password),
    {
      onSuccess(data) {
        authStore.setUser(data.data.user)
        authStore.setToken(data.data.token?.token)
        authStore.setExpiresIn(data.data.token?.expiresIn)
        router.push({ name: 'home' })
      },
      onError() {
        toast.error('Credentials Incorrect')
      },
    }
  )

  const { mutate: refreshTokenMutate, isError: isRefreshError } = useMutation(
    async () => await refreshTokenService(),
    {
      onSuccess(data) {
        authStore.setToken(data.token.token)
        authStore.setExpiresIn(data.token.expiresIn)
      },
      onError() {
        toast.error('Credentials Incorrect')
      },
    }
  )

  async function onLogin(email: string, password: string) {
    loginMutate({ email, password })
  }

  async function refreshToken() {
    refreshTokenMutate()
  }

  async function logout() {
    authStore.$reset()
  }

  return {
    user,
    token,
    isLoading,
    isRefreshError,
    onLogin,
    refreshToken,
    logout,
  }
}
