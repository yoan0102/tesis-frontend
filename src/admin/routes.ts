import type { RouteRecordRaw } from 'vue-router'
import authGuards from '@/shared/guards/authGuards'
import AdminLayout from './layouts/AdminLayout.vue'

export const routesAdmin: RouteRecordRaw = {
  path: '/admin',
  name: 'admin',
  component: AdminLayout,
  beforeEnter: authGuards,
  children: [
    {
      path: 'users',
      name: 'admin-users',

      component: () => import('@/admin/tracks/views/AdminTracksPublish.vue'),
    },
    {
      path: 'tracks',
      name: 'admin-tracks',

      component: () => import('@/admin/tracks/views/AdminTracksPublish.vue'),
    },
  ],
}
