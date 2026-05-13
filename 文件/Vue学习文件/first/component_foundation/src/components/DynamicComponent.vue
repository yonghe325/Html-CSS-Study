<template>
  <button @click="showComponent = MyLeft">展示MyLeft组件</button>
  <button @click="showComponent = MyRight">展示MyRight组件</button>
  <div>
    <keep-alive>
      <component :is="showComponent"></component>
    </keep-alive>
  </div>
</template>
<script setup>
import MyLeft from './MyLeft.vue'
import MyRight from './MyRight.vue'
import { shallowRef } from 'vue'
const showComponent = shallowRef(MyLeft)
</script>
