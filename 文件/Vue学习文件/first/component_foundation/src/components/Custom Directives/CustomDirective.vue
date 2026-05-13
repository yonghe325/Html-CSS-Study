<template>
  <p v-fontSize="fontSize">DirectiveComponent组件</p>
  <button @click="fontSize = '24px'">更改字号大小</button>
</template>
<script setup>
import { ref } from 'vue'
const fontSize = ref('12px')
const vFontSize = {
  // 原有代码……
  mounted: (el, binding) => { el.style.fontSize = binding.value },
  updated: (el, binding) => {
    el.style.fontSize = binding.value
  }
}

</script>
