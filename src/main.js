import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { createHead } from '@vueuse/head'

import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

app.use(vuetify)
app.use(router)
app.use(pinia)
app.use(head)
app.mount('#app')
