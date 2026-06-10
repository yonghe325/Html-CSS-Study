<template>
  <div class="about-container">
    <h3>About组件</h3>
    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
const route = useRoute()
watch(() => route.path, path => {
  console.log('路由路径', path)
})

</script>

<style scoped>
.about-container {
  min-height: 150px;
  background-color: #f2f2f2;
  padding: 15px;
}

.about-container a {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  color: #000;
  margin: 0 5px;
}

.about-container a.router-link-active {
  color: #000;
  background-color: #deebf6;
}
</style>
