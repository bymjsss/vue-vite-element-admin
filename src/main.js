import { createApp } from 'vue'
import App from './App.vue'
import pinia from '@/store/index'
const app = createApp(App);
console.log('%c[MESSAGE]%cline:3%capp', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(17, 63, 61);padding:3px;border-radius:2px', app, pinia)

app.mount("#app");
app.use(pinia)
