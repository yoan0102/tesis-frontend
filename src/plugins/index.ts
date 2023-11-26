import { VueQueryPlugin } from '@tanstack/vue-query'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import router from '@/router'
import pinia from '@/stores'
import VueSweetalert2 from 'vue-sweetalert2'

import FloatingVue from 'floating-vue'

// "jwt expired"

export function registerPlugins(app: any) {
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
    .use(VueSweetalert2)
    .use(Vue3Toastify, {
      autoClose: 1500,
    } as ToastContainerOptions)
    .use(pinia)
    .use(router)
}
