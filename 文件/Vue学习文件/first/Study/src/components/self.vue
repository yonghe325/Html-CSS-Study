<template>
  <div @click="show('我是祖先元素的事件')">祖先元素
    <div @click.self="show('我是父元素的事件')">父元素
      <div @click="show('我是子元素的事件')">子元素
      </div>
    </div>
  </div>

</template>
<script setup>
  let show = message => console.log(message)
</script>