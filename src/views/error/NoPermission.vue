<!--
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-04 15:33:40
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-04 15:33:46
 * @FilePath: /vue-vite-element-admin/src/views/NotFound/NoPermission.vue
 * @Description: 无权限
-->
<script setup>
import { reactive, ref } from 'vue'
const state = reactive({})
</script>

<template>
  <div class="no-permission-container">无权限</div>
</template>

<style lang="scss" scoped>
.no-permission-container {
  width: 100%;
  height: 100%;
  background-color: rgb(99, 211, 255);
}
</style>