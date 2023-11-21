import type { RouteRecordRaw } from 'vue-router'
import authGuards from '@/shared/guards/authGuards'

export const routesUsers: RouteRecordRaw = {
  path: '/users',
  name: 'users',
  component: () => import('./layouts/UserLayout.vue'),
  children: [
    {
      path: 'login',
      name: 'login',
      beforeEnter: authGuards,
      component: () => import('@/users/views/UserLogin.vue'),
    },
    {
      path: 'register',
      name: 'register',
      beforeEnter: authGuards,
      component: () => import('@/users/views/UserRegister.vue'),
    },
  ],
}
