import { createApp } from 'vue'

import App from './App.vue'
import { registerPlugins } from './plugins'

import 'bulma/bulma.sass'
import './styles/app.scss'
import 'vue3-toastify/dist/index.css'
import 'floating-vue/dist/style.css'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
