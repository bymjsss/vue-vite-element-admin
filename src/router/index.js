/*
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-06-30 16:21:25
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-04 15:43:03
 * @FilePath: /vue-vite-element-admin/src/router/index.js
 * @Description: 路由
 */

import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '@/layout/index.vue'
import Login from '@/views/Login/Login.vue'
import NotFound from '@/views/error/NotFound.vue'
import NoPermission from '@/views/error/NoPermission.vue'
// 创建路由实例
export const routes = [
  {
    path: "/",
    name: 'Layout',
    redirect: '/home',
    meta: { title: "ui.router.pageWorkbench", icon: "icon-desktop" },
    component: Layout,
    children: [
      {
        path: "/home",
        name: 'Home',
        component: () => import('@/views/modules/Home/Home.vue')
      },
      {
        path: "/not-found",
        name: 'NotFound',
        meta: { title: "NotFound", icon: "icon-desktop" },
        component: NotFound,
      },
      {
        path: "/no-permission",
        name: 'NoPermission',
        meta: { title: "ui.router.pageWorkbench", icon: "icon-desktop" },
        component: NoPermission,
      }
    ]
  },
  {
    path: "/login",
    name: 'Login',
    meta: { title: "ui.router.pageWorkbench", icon: "icon-desktop" },
    component: Login,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router