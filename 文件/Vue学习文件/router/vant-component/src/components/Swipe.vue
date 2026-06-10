<template>
  <van-swipe :autoplay="3000" lazy-render style="width: 300px;">
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image">
    </van-swipe-item>
  </van-swipe>
</template>
<script setup>
const images = ['.././public/images/t01.jpg','.././public/images/t02.jpg','.././public/images/t03.jpg','.././public/images/t04.jpg',]
</script>
<style scoped>
  img{
    margin: 0 auto;
    width: 500px;
    height: 500px;
  }
</style>