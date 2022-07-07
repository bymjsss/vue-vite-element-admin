/*
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-04 11:18:07
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-07 17:05:06
 * @FilePath: /vue-vite-element-admin/src/router/base.js
 * @Description: 框架基础路由
 */
import Layout from '@/layout/index.vue'
import Login from '@/views/login/Login.vue'
import NotFound from '@/views/error/NotFound.vue'
import NoPermission from '@/views/error/NoPermission.vue'
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
        component: () => import("@/views/home/Home.vue"),
        meta: { title: "ui.router.pageHome", icon: "icon-home" }
      }
    ]
  }
]

export const errorRoute = [
  {
    path: "/:path(.*)*",
    redirect: { path: "/error", query: { to: 404 }, replace: true },
    meta: { isNavigationMenu: false }
  }
]

export default routes

