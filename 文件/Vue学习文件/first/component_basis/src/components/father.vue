<template>
  <Child :init="age" />
</template>
<script setup>
  import { ref } from "vue";
  import Child from "./child.vue";
  const age = ref("12")
</script>