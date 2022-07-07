import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import {setupStore} from '@/store/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import componentsRegistrar from '@/utils/globalComponentsConfig'
const app = createApp(App);

document.title = import.meta.env.VITE_APP_TITLE
// alert(`当前运行环境：${import.meta.env.VITE_APP_MODE}`)
// 注册element icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(componentsRegistrar)
app.use(router)
app.use(setupStore)

app.mount("#app")
