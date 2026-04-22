<template>
  <div class="local-container">
    <h5 class="title">局部组件</h5>
    <!-- <span>{{ v1 }}</span> -->

  </div>
  <div>
    <span>{{ v1 }}</span>
    <span>{{ v2 }}</span>
  </div>

</template>
<script setup>
const props = defineProps({ v1: String , v2: String })

</script>
<style>
.local-container {
  border: 1px dashed black;
  height: 50px;
  flex: 1;
}
</style>