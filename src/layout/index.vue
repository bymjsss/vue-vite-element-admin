<!--
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-04 09:49:02
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-05 16:40:00
 * @FilePath: \vue-vite-element-admin\src\layout\index.vue
 * @Description: 项目框架
-->

<script setup>
import Header from '@/layout/components/Header.vue'
import Aside from '@/layout/components/Aside.vue'
</script>

<template>
  <div class="layout-container">
    <el-container>
      <el-aside width="300px" class="el-aside-customize-style">
        <Aside />
      </el-aside>
      <el-container>
        <el-header class="el-header-customize-style">
          <Header />
        </el-header>
        <el-main class="el-main-customize-style">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  width: 100vw;
  height: 100%;
  background-color: #fff!important;

  .el-aside-customize-style {
    border-right: 1px solid rgb(235, 235, 235);
    height: 100vh;
  }

  .el-header-customize-style {
    padding: 0;
    height: auto;
    min-width: calc($min_width - 300px); // 最小宽度
  }

  .el-main-customize-style {
    padding: 0;
    min-width: calc($min_width - 300px); // 最小宽度
    background-color: #f0f2f5;

    .task-bar {
      width: 100%;
      height: 30px;
      margin-bottom: 10px;
      background-color: #fff;
      border: 1px solid rgb(235, 235, 235);
    }

    .global-style {
      width: 100%;
      height: calc(100% - 42px);
    }
  }
}
</style>