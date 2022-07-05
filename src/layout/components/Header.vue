<!--
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-04 16:00:31
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-05 18:06:02
 * @FilePath: \vue-vite-element-admin\src\layout\components\Header.vue
 * @Description: top Header
-->
<script setup>
import { reactive, ref } from 'vue'
</script>

<template>
  <div class="header-container">
    <div class="header-top-function-bar">123</div>
    <div class="header-bottom-menu-bar">
      <el-scrollbar>
        <div class="current-menus-contaienr">
          <div class="menu-item" v-for="item in 100" :key="item" :class="[item == 3 ? 'router-link-exact-active router-link-active active' : '']">
            <span>当前：{{item}}</span>
            <el-icon><Close /></el-icon>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  height: 100%;
  .header-top-function-bar {
    height: 50px;
    box-shadow: 0 3px 5px 0px #f3f4f5;
  }

  .header-bottom-menu-bar {
    height: 37px;
    line-height: 37px;
    font-size: 14px;
    padding-right: 5px;
    border-bottom: 1px solid #d8dce5;

    .current-menus-contaienr {
      padding: 5px 0;
      display: flex;

      .menu-item {
        height: 24px;
        line-height: 24px;
        min-width: 60rpx;
        align-self: baseline;
        flex-shrink: 0;
        margin: 0 3px;
        padding: 0 5px;
        padding-right: 20px;
        border: 1px solid #d8dce5;
        position: relative;
        cursor: pointer;
        user-select: none;

        :deep(.el-icon) {
          color: #495060;
          border-radius: 50%;
          position: absolute;
          z-index: auto;
          top: 50%;
          transform: translateY(-50%);
          font-size: 12px;
          right: 2px;
          padding: 2px;
          &:hover {
            background-color: #b4bccc;
            color: #fff;
          }
        }
      }

      .active {
        border-color: #42b983;
        background-color: #42b983;
        color: #fff;
        padding-left: 18px;
        &::after {
          content: '';
          display: block;
          position: absolute;
          height: 8px;
          width: 8px;
          border-radius: 50%;
          background-color: #fff;
          top: 50%;
          left: 5px;
          transform: translateY(-50%);
        }
        :deep(.el-icon) {
          color: #ffffff;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>