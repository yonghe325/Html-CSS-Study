<template>
  <h5></h5>
  <div class="box">
    <GlobalComponent/>
    <LocalComponent/>
  </div>
</template>
<script setup>
  import GlobalComponent from "./GlobalComponent.vue";
  import  LocalComponent  from "./LocalComponent.vue";
</script>
<style>
  .box{
    display:flex;
  }
</style>