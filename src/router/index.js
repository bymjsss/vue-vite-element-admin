/*
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-06-30 16:21:25
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-07 17:35:15
 * @FilePath: /vue-vite-element-admin/src/router/index.js
 * @Description: 路由
 */

import { createRouter, createWebHashHistory } from "vue-router";
import baseRoutes from './base'


const router = createRouter({
  history: createWebHashHistory(), // hash模式
  routes: baseRoutes
})

// 全局路由前置
router.beforeEach((to,from, next) => {
  next()
})

export default router