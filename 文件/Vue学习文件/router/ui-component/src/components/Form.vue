<template>
  <el-form inline :model="form" label-width="80px" label-position="left">
    <el-form-item label="用户名：">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="密码：">
      <el-input v-model="form.pass" />
    </el-form-item>
  </el-form>
  <el-form>
    <el-button type="success">提交</el-button>
    <el-button>重置</el-button>
  </el-form>
</template>
<script setup>
import { ElButton } from 'element-plus'
import { reactive } from 'vue'
const form = reactive({ pass: '', name: '' })
</script>
