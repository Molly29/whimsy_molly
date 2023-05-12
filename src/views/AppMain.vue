<template>
  <aside class="aside-content">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <el-menu-item index="/home">
        <span>Home</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <span>Interview</span>
        </template>
        <el-menu-item-group title="Centering">
          <el-menu-item index="/gentered/gentered-column">Centered Column</el-menu-item>
          <el-menu-item index="/gentered/gentered-row">Centered Row</el-menu-item>
          <el-menu-item index="/gentered/gentered-all">Centered all</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <span>Brainstorming</span>
        </template>
        <el-menu-item index="3-1">暂不知道</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </aside>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeMenu = ref('/');
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.aside-content {
  width: 260px;
}
</style>
