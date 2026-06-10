<template>
  <div class="app-container">
    <h1>App根组件</h1>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">123</router-link>
    <router-link to="/movie">电影</router-link>
    <hr>
    <router-view></router-view>
  <a href="#" @click.prevent="goBack">后退回上一个组件</a>
  </div>

</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  router.go(-1)
}

</script>
<style scoped>
.app-container {
  text-align: center;
  font-size: 16px;
}

.app-container a { 
  padding: 10px;
  color: #000;
}

.app-container a.router-link-active {
  color: #fff;
  background-color: #000;
}
</style>
