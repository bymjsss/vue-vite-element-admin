<!--
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-04 16:03:32
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-05 18:11:22
 * @FilePath: \vue-vite-element-admin\src\layout\components\Aside.vue
 * @Description: 菜单栏
-->
<script setup>
import { reactive, ref } from 'vue'
const state = reactive({})
const handleOpen = (key, keyPath) => {}
const handleClose = (key, keyPath) => {}
const menuList = [
    {
      title: '首页',
      id: '1',
      children: null
    },
    {
      title: '用户管理',
      id: '2',
      children: [

      ]
    }
  ]
</script>

<template>
  <div class="aside-container">
    <div class="aside-logo">Vue Admin</div>
    <div class="aside-menu-list">
      <el-scrollbar>
        <el-menu default-active="2" :collapse="false" background-color="#304156" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose">
          <el-sub-menu index="1" >
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group>
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>

            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aside-container {
  height: 100%;
  .aside-logo {
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
    line-height: 50px;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .aside-menu-list {
    height: calc(100% - 51px);
    background-color: $menu_bg_color;
  }
}

:deep(.el-menu) {
  border-right: 0px!important;
}
:deep(.is-active) {
  background-color: #263445;
}
</style>