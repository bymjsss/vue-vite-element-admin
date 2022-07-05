<!--
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-04 16:03:32
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-05 14:39:20
 * @FilePath: \vue-vite-element-admin\src\layout\components\Aside.vue
 * @Description: 菜单栏
-->
<script setup>
import { reactive, ref } from 'vue'
const state = reactive({})
const handleOpen = (key, keyPath) => {}
const handleClose = (key, keyPath) => {}
</script>

<template>
  <div class="aside-container">
    <div class="aside-logo">logo</div>
    <div class="aside-menu-list">
      <el-scrollbar>
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
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
  }
  .aside-menu-list {
    height: calc(100% - 51px);
  }
}
</style>