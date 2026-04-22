<template>
  <h5>父组件</h5>
  <div class="box">
    <GlobalComponent/>
    <LocalComponent v1="1" v2="2"/>
  </div>
</template>
<script setup>
  // import GlobalComponent from "./GlobalComponent.vue";
  import  LocalComponent  from "./LocalComponent.vue";
</script>
<style scoped>
  .box{
    display:flex;
  }
  :deep(.title){
    border: 2px solid red;
  }

</style>