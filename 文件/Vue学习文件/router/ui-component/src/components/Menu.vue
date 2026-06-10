<template>
  <el-menu class="el-menu-vertical-demo" mode="horizontal">
    <el-menu-item index="1" @click="activeIndex = 1">首页</el-menu-item>
    <el-sub-menu index ="2">
      <template #title>计划</template>
      <el-menu-item index="2-1">411</el-menu-item>
      <el-menu-item index="2-2">411</el-menu-item>
      <el-menu-item index="2-3">411</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>任务</template>
        <el-menu-item index = "2-4-1">411</el-menu-item>
        <el-menu-item index = "2-4-2">411</el-menu-item>
        <el-menu-item index = "2-4-3">411</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" @click="activeIndex = 3" disabled>信息</el-menu-item>
    <el-menu-item index="4" @click="activeIndex = 4">联系</el-menu-item>
  </el-menu>
</template>
<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
</script>
