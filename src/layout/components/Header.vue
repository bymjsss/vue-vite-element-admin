<!--
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-04 16:00:31
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-04 17:31:31
 * @FilePath: /vue-vite-element-admin/src/layout/components/header.vue
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
    <el-button type="primary"  @click="onNotice">通知</el-button>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  height: 100%;
  background-color: #ccc;
}
</style>