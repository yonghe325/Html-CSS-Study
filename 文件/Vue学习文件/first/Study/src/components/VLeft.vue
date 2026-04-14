

<template>
  <button v-on:click.left="show('捕获到鼠标左键')">按钮</button>
</template>
<script setup>
let show = message => console.log(message)
</script>
