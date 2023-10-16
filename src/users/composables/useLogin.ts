import { toast } from 'vue3-toastify'
import { loginService, refreshTokenService } from '../services/auth.service'
import { useAuthStore } from '../store/authStore'
import { useMutation } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'

export default function useLogin() {
  const authStore = useAuthStore()
  const { user, token } = storeToRefs(authStore)

  const { isLoading, mutate: loginMutate } = useMutation(
    async (user: { email: string; password: string }) =>
      await loginService(user.email, user.password),
    {
      onSuccess(data) {
        authStore.setUser(data.user)
        authStore.setToken(data.token.token)
        authStore.setExpiresIn(data.token.expiresIn)
      },
      onError() {
        toast.error('Credentials Incorrect')
      }
    }
  )

  const { mutate: refreshTokenMutate } = useMutation(async () => await refreshTokenService(), {
    onSuccess(data) {
      authStore.setUser(data.user)
      authStore.setToken(data.token.token)
      authStore.setExpiresIn(data.token.expiresIn)
    },
    onError() {
      toast.error('Credentials Incorrect')
    }
  })

  async function onLogin(email: string, password: string) {
    loginMutate({ email, password })
  }

  async function refreshToken() {
    await refreshTokenMutate()
  }
  return {
    user,
    token,
    isLoading,
    onLogin,
    refreshToken
  }
}
