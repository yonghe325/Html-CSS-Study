<template>
  父组件-----{{ message }}
  <hr>
  <SlotSubComponent>
    <p>{{ message }}</p>
  </SlotSubComponent>
</template>
<script setup>
import SlotSubComponent from './SlotSubComponent.vue'
const message = '这是组件的使用者自定义的内容'
</script>
