<template>
  <div>
    <label for="name">登录名称</label>
    <input v-model="name" id="name" type="text">
    <label for="password">登录密码</label>
    <input v-model="password" type="password" id="password" placeholder="请输入密码">
    <button @click.prevent="check()"  type="submit">登录</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref()
const password = ref()
console.log(name);
console.log(password);
const Log =  massage => {
  console.log(massage);
}
const check = ()=>{
  if(name === "admin" && password === 123456){
    
  }
}

</script>

<style lang="scss" scoped>

</style>