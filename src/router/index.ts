import { createRouter, createWebHistory } from 'vue-router'
import { routesUsers } from '@/users/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/home/layout/HomeLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/home/views/LibraryView.vue')
        },
        {
          path: '/favorites',
          name: 'favorites',
          component: () => import('@/favorites/views/FavoritesPage.vue')
        },
        {
          path: '/search',
          name: 'search',
          component: () => import('@/home/views/SearchView.vue')
        }
      ]
    },
    {
      ...routesUsers,
      path: '/users'
    }
  ]
})

export default router
