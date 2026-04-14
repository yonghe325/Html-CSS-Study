<template>
  <div v-bind:style="{'backgroundColor' :pink,width:width,height:height+'px'}">
    <div v-bind:style="{backgroundColor : isBule?bule:'black',width:'50px',height:'20px'}"></div>
    <div v-bind:style="myDiv"></div>
  </div>
</template>
<script setup>
import { ref,reactive } from "vue";
const isBule = ref(false) 
const bule = ref('bule')
const pink = ref('pink')
const width = ref('100%')
const height = ref('40')
const myDiv = reactive({
  backgroundColor:'red',
  width:'50px',
  height:'20px'
})
</script>