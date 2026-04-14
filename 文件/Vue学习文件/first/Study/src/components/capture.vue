<template>
  <div class="" @click.capture="show('我是父元素')">
    <button type="button" @click="show('我是子元素')">事件捕获</button>
  </div>

</template>
<script setup>
  let show = (massage)=>{
    console.log(massage)
  }
</script>