import { useAuthStore } from '@/users/store/authStore'

export default (to, from, next) => {
  const authStore = useAuthStore()
  if (to.name !== 'login' && !authStore.user) {
    return next({ name: 'login' })
  }
  return next()
}
