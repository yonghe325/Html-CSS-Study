<template>
  MyRight组件
  <div>
    count值为: {{ count }}
    <button @click="count++">+1</button>
  </div>
</template>
<script setup>
import { ref, onActivated, onDeactivated, onMounted } from 'vue'
const count = ref(0)
onMounted(()=>{
  console.log('MyRight组件被被挂载了')
})
onActivated(() => {
  console.log('MyRight组件被激活了')
})
onDeactivated(() => {
  console.log('MyRight组件被缓存了')
})

</script>