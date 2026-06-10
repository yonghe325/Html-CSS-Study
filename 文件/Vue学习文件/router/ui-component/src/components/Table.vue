<template>
  <el-table :data="tableData" stripe border style="width: 100%">
    <el-table-column prop="date" label="日期" width="180" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="address" label="住址" width="300" />
  </el-table>
</template>
<script setup>
const tableData = [
  { date: '2023-02-03', name: '张三', address: '北京市海淀区' },
  { date: '2023-02-04', name: '李四', address: '北京市朝阳区' },
  { date: '2023-02-05', name: '王五', address: '北京市海淀区' }]
</script>
