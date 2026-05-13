<script setup>
// 在模板中启用 v-focus
const vFocus = {
  mounted(el,binding){
    el.focus();
    console.log(binding.value);
  }
}
</script>

<template>
  <input v-focus="`Ok`" />
</template>