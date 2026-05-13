<template>
  MyLeft组件
  <div>
    count值为: {{ count }}
    <button @click="count++">+1</button>
  </div>
</template>
<script setup>
import { ref, onActivated, onDeactivated } from 'vue'
const count = ref(0)
onActivated(() => {
  console.log('MyLeft组件被激活了')
})
onDeactivated(() => {
  console.log('MyLeft组件被缓存了')
})

</script>
