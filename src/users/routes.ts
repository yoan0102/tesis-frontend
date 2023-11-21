import type { RouteRecordRaw } from 'vue-router'
import authGuards from '@/shared/guards/authGuards'
import UserLayout from './layouts/UserLayout.vue'

export const routesUsers: RouteRecordRaw = {
  path: '/users',
  name: 'users',
  component: UserLayout,
  children: [
    {
      path: '',
      redirect: { name: 'login' },
    },
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
