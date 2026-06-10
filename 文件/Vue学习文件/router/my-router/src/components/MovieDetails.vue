<template>
  <p>电影{{ $route.params.id }}页面</p>
</template>
<script setup>
const props = defineProps({
  id: Number
})
</script>
