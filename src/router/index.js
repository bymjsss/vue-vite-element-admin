/*
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-06-30 16:21:25
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-07 17:06:14
 * @FilePath: /vue-vite-element-admin/src/router/index.js
 * @Description: 路由
 */

import { createRouter, createWebHashHistory } from "vue-router";
import baseRoutes from './base'
console.log('%c[MESSAGE]%cline:13%croutes', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(3, 22, 52);padding:3px;border-radius:2px', baseRoutes)



const router = createRouter({
  history: createWebHashHistory(), // hash模式
  routes: baseRoutes
})

// 全局路由前置
router.beforeEach((to,from, next) => {
  next()
})

export default router