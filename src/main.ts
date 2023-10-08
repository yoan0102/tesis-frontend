import { createApp } from 'vue'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

import App from './App.vue'
import router from './router'
import { pinia } from './stores'
import 'bulma/bulma.sass'
import './styles/app.scss'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)

app.use(Vue3Toastify, {
  autoClose: 1500
} as ToastContainerOptions)

app.use(pinia)
app.use(router)

app.mount('#app')
