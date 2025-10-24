import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { persistencePlugin } from './utils/persistence' // ← Verifica esta ruta

import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
const pinia = createPinia()

// Agregar el plugin de persistencia manual
pinia.use(persistencePlugin)

app.use(pinia)
app.use(router)
app.mount('#app')