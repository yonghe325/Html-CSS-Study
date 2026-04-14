<template>
  <input type="text" v-on:keyup.enter.exact="submit">
</template>
<script setup>
let submit = () => console.log('捕获到Enter键')
</script>