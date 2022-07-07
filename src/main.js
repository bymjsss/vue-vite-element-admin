import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import pinia from '@/store/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import xgplayer from 'xgplayer'
import Music from 'xgplayer-music'
console.log('%c[MESSAGE]%cline:7%cMusic', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(248, 214, 110);padding:3px;border-radius:2px', Music, xgplayer)
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
