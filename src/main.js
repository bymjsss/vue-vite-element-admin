import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import pinia from '@/store/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

document.title = import.meta.env.VITE_APP_TITLE
// alert(`当前运行环境：${import.meta.env.VITE_APP_MODE}`)
// 注册element icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(pinia)

app.mount("#app")
