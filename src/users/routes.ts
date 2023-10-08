import type { RouteRecordRaw } from 'vue-router'
import UserLayout from './layouts/UserLayout.vue'

export const routesUsers: RouteRecordRaw = {
  path: '/users',
  name: 'users',
  component: UserLayout,
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/users/views/UserLogin.vue')
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('@/users/views/UserRegister.vue')
    }
  ]
}
