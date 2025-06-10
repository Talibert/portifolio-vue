import './assets/styles/reset.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { motion } from 'motion-v';
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App)

app.component('motion-div', motion.div);
app.use(pinia)
app.mount('#app')
