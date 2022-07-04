import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import pinia from '@/store/index'
const app = createApp(App);

app.use(router)
app.use(pinia)

app.mount("#app")
