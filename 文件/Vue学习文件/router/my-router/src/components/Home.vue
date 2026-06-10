<!-- Home.vue文件 -->
<template>
  <div class="home-container">
    <h3>Home组件</h3>
    <!-- <router-link to="/home/tab3">Tab3</router-link> -->
    <!-- <router-link to="/home/tab4">Tab4</router-link> -->
    <!-- <router-link :to="{ name:'MovieDetails',parmas:{id:3} }" >跳转到电影页面</router-link> -->
    <a href="#" @click.prevent="gotoMovie(3)">跳转到电影页面</a>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
const gotoMovie = movieId => {
  router.push({
    name:'MovieDetails',
    parmas:{id:movieId}
  })
} 
</script>
<style scoped>
.home-container {
  min-height: 150px;
  background-color: #f2f2f2;
  padding: 15px;
}

.home-container a {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  color: #000;
  margin: 0 5px;
}

.home-container a.router-link-active {
  color: #000;
  background-color: #deebf6;
}
</style>
