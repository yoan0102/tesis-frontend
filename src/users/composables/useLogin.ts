import { toast } from 'vue3-toastify'
import { loginService, refreshTokenService, logoutService } from '../services/auth.service'
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
        authStore.setUser(data.user)
        authStore.setToken(data.token.token)
        authStore.setExpiresIn(data.token.expiresIn)
      },
      onError() {
        toast.error('Credentials Incorrect')
      }
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
      }
    }
  )
  const { mutate: mutateLogout } = useMutation(async () => logoutService(), {
    onSuccess() {
      router.replace({ name: 'home' })
    },
    onError() {
      toast.error('Up algo a salido mal intente cerrar sesión nuevamente')
    }
  })

  async function onLogin(email: string, password: string) {
    loginMutate({ email, password })
  }

  async function refreshToken() {
    refreshTokenMutate()
  }

  async function logout() {
    mutateLogout()
  }

  return {
    user,
    token,
    isLoading,
    isRefreshError,
    onLogin,
    refreshToken,
    logout
  }
}
