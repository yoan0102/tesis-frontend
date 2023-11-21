import { toast } from 'vue3-toastify'
import { registerService } from '../services/auth.service'
import { useAuthStore } from '../store/authStore'
import { useMutation } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

export default function useRegister() {
  const router = useRouter()

  const authStore = useAuthStore()
  const { user, token } = storeToRefs(authStore)

  const { isLoading, mutate: rgisterMutate } = useMutation(
    async (user: { name: string; email: string; password: string }) =>
      await registerService(user.name, user.email, user.password),
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

  async function onRegister(name: string, email: string, password: string) {
    rgisterMutate({ name, email, password })
  }

  return {
    user,
    token,
    isLoading,
    onRegister,
  }
}
