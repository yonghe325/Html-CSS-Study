<template>
  <div  v-bgc="bgcolor[index]"></div>
  <button type="button" @click="index = (index+1)%bgcolor.length" >切换颜色</button>
</template>

<script setup >
  import { ref } from "vue";
  const bgcolor = ref(["red","green","blue"])
  let index = ref(0)
  const vBgc={
    created(el,binding,vnode){
      console.log("123");
      el.style.backgroundColor  = binding.value
    },
    updated(el, binding) {
    // 当 binding.value 变化时执行
    el.style.backgroundColor = binding.value;
    }
  }
</script>
<style>
  div{
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
</style>