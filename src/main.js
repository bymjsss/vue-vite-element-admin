import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import pinia from '@/store/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
document.title = import.meta.env.VITE_APP_TITLE
console.log('%c[MESSAGE]%cline:8%cimport.meta.env', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', import.meta.env)
// 注册element icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(pinia)

app.mount("#app")
