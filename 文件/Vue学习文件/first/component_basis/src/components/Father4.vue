<template>
  <Child :init="['唱歌', '跳舞', '滑冰']" />
  <Child :init="hobby" />
</template>
<script setup>
import Child from './Child.vue'
import { ref } from 'vue'
const hobby = ref(['唱歌', '跳舞', '滑冰'])
</script>
