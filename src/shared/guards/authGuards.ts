import { useAuthStore } from '@/users/store/authStore'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore()
  if (to.name !== 'login' && to.name !== 'register' && !authStore.user) {
    return next({ name: 'login' })
  }
  return next()
}
