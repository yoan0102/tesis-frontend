import { createRouter, createWebHistory } from 'vue-router'
import { routesUsers } from '@/users/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/home/layout/HomeLayout.vue'),
      children: [
        // {
        //   path
        // }
      ]
    },
    {
      ...routesUsers,
      path: '/users'
    }
  ]
})

export default router
