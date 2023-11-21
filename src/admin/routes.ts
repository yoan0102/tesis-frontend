import type { RouteRecordRaw } from 'vue-router'
import authGuards from '@/shared/guards/authGuards'
import AdminLayout from './layouts/AdminLayout.vue'

export const routesAdmin: RouteRecordRaw = {
  path: '/users',
  name: 'users',
  component: AdminLayout,
  beforeEnter: authGuards,
  children: [
    {
      path: 'login',
      name: 'login',

      component: () => import('@/users/views/UserLogin.vue'),
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('@/users/views/UserRegister.vue'),
    },
  ],
}
