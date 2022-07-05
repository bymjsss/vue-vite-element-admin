import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import pinia from '@/store/index'
// 引入Elmessage和Elloading的css样式文件
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App);

// 注册element icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(pinia)

app.mount("#app")
