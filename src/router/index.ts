import { createRouter, createWebHistory } from 'vue-router'
import { routesUsers } from '@/users/routes'
import authGuards from '@/shared/guards/authGuards'

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
          component: () => import('@/home/views/LibraryView.vue'),
        },
        {
          path: '/favoritas',
          name: 'favorites',
          beforeEnter: authGuards,
          component: () => import('@/tracks/views/FavoritesView.vue'),
        },
        {
          path: '/search',
          name: 'search',
          component: () => import('@/home/views/SearchView.vue'),
        },
        {
          path: '/orietaciones-tecnicas',
          name: 'Guidelines',
          component: () => import('@/home/views/OrientacionesView.vue'),
        },
      ],
    },
    {
      ...routesUsers,

      path: '/users',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: { name: 'home' },
    },
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   console.log(to)
  //   return {
  //     el: to.hash,
  //     behavior: 'smooth'
  //   }
  // }
})

export default router
