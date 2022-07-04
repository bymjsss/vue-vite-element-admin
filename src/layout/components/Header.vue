<!--
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-04 16:00:31
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-04 17:03:05
 * @FilePath: /vue-vite-element-admin/src/layout/components/header.vue
 * @Description: top Header
-->
<script setup>
import { reactive, ref, defineComponent } from 'vue'
import { ElMessage } from 'element-plus'

const onNotice = () => {
  ElMessage('this is a message.')
  console.log('%c[MESSAGE]%cline:14%cElMessage', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(56, 13, 49);padding:3px;border-radius:2px', ElMessage)
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