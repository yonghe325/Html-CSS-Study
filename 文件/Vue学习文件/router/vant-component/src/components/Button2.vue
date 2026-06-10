<template>
  <van-button icon="circle" type="primary">基础图标</van-button>
  <van-button icon="like" type="primary">实底风格</van-button>
  <van-button icon="phone-o" type="primary">线框风格</van-button>
  <van-button :icon="icon">按钮</van-button>
</template>
<script setup>
import icon from '../assets/hero.png'
</script>
<style>
.van-button { margin: 5px 1px !important; }
</style>
