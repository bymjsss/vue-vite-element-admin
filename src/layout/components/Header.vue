<!--
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-04 16:00:31
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-05 15:07:41
 * @FilePath: \vue-vite-element-admin\src\layout\components\Header.vue
 * @Description: top Header
-->
<script setup>
import { reactive, ref } from 'vue'

const onNotice = () => {
  ElMessage.success('this is a message.')
}
</script>

<template>
  <div class="header-container">
    <div class="header-top-function-bar">123</div>
    <div class="header-bottom-menu-bar">456</div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  height: 100%;
  .header-top-function-bar {
    height: 50px;
    box-shadow: 0 5px 5px 0px rgb(231, 231, 231);
  }
  .header-bottom-menu-bar {
    height: 30px;
    border-bottom: 1px solid #d8dce5;
  }
}
</style>