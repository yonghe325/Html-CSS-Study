<template>
  <p>初始message: {{ message }}</p>
  <p>反转之后的message: {{ reversemessage }}</p>
  <button @click="updatemessage">更改</button>
</template>
<script setup>
import { ref, computed } from 'vue';
const message = ref('hello world')
const reversemessage = computed (() =>
 message.value.split('').reverse() .join('')
)
const updatemessage = () => {
  message.value = 'hello'
}
</script>