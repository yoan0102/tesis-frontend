import type { RouteRecordRaw } from 'vue-router'
import isAdminGuards from '@/shared/guards/isAdminGuards'
import AdminLayout from './layouts/AdminLayout.vue'

export const routesAdmin: RouteRecordRaw = {
  path: '/admin',
  name: 'admin',
  component: AdminLayout,
  beforeEnter: isAdminGuards,
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
