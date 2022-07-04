<!--
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-04 09:49:02
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-04 16:04:26
 * @FilePath: /vue-vite-element-admin/src/layout/index.vue
 * @Description: 项目框架
-->

<script setup>
import Header from '@/layout/components/Header.vue'
import Aside from '@/layout/components/Aside.vue'
</script>

<template>
  <div class="layout-container">
    <el-container>
      <el-header class="el-header-customize-style">
        <Header />
      </el-header>
      <el-container>
        <el-aside width="300px" class="el-aside-customize-style">
          <Aside />
        </el-aside>
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
  height: 100vh;
  background-color: #fff!important;
  .el-header-customize-style {
    height: 49px;
    padding: 0;
    border-bottom: 1px solid rgb(227, 227, 227);
  }
  .el-aside-customize-style {
    height: calc(100vh - 50px);
    padding: 0;
    border-right: 1px solid rgb(227, 227, 227);
  }
  .el-main-customize-style {
    padding: 0;
  }
}
</style>