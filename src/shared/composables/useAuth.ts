import { useAuthStore } from '@/users/store/authStore'
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const useHandleAuth = () => {
  const authStore = useAuthStore()
  const router = useRouter()

  watchEffect(() => {
    if (authStore.user && authStore.token) {
      router.push({ name: 'home' })
    } else {
      router.push({ name: 'login' })
    }
  })

  return {}
}

export default useHandleAuth
