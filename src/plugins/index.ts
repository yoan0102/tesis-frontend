import { VueQueryPlugin } from '@tanstack/vue-query'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import router from '@/router'
import pinia from '@/stores'

import FloatingVue from 'floating-vue'

// "jwt expired"

export function registerPlugins(app) {
  VueQueryPlugin.install(app, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          cacheTime: 1000 * 60, //1 minute
        },
      },
    },
  })

  app
    .use(FloatingVue)
    .use(Vue3Toastify, {
      autoClose: 1500,
    } as ToastContainerOptions)
    .use(pinia)
    .use(router)
}
