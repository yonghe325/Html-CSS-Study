<template>
  <input type="text" v-model="cityName">
</template>
<script setup>  
import { watch,ref } from "vue";
const cityName = ref('beijing')
watch(cityName,(newVal,oldVal)=>{
   console.log(newVal,oldVal)
})
</script>