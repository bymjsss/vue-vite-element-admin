<!--
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-04 15:03:37
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-07 17:34:36
 * @FilePath: /vue-vite-element-admin/src/views/home/Home.vue
 * @Description: 首页
-->
<script setup>
import { reactive, ref } from 'vue'
import { uaerAppStroe } from '@/store/modules/user.js'
const user = uaerAppStroe()
const state = reactive({})
</script>

<template>
  <div class="global-style home-container">首页{{user.userName}}</div>
</template>

<style lang="" scoped>
</style>