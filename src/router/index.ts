import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

import { routesUsers } from '@/users/routes'
import { routesAdmin } from '../admin/routes'
import authGuards from '@/shared/guards/authGuards'

const router = createRouter({
  //import.meta.env.BASE_URL
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
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
          path: '/tracks/create',
          name: 'tracks-create',
          beforeEnter: authGuards,
          component: () => import('@/tracks/views/TrackCreateView.vue'),
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
    // {
    //   ...routesAdmin,
    //   path: '/admin',
    // },
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
