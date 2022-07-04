

<template>
  <div id="app">
  <!-- <el-config-provider :locale="currentLocale"> -->
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
  <!-- </el-config-provider> -->
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
  width: 100vw;
  min-width: 1200px; // 最小宽度
}
</style>