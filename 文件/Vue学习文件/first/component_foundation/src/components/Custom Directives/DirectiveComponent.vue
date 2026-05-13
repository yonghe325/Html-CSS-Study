<template>
  <p v-fontSize>DirectiveComponent组件</p>
</template>
<script setup>
const vFontSize = {
  mounted: el => {
    el.style.fontSize = '24px'
  }
}
</script>
