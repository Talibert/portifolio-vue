import './assets/styles/reset.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App)

app.use(pinia)
app.use(MotionPlugin)
app.mount('#app')
