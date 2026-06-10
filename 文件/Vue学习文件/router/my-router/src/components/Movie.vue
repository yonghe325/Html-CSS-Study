<template>
  <div class="movie-container">
    <h3>Movie组件</h3>
    <router-link to="/movie/111">电影1</router-link>
    <router-link to="/movie/222">电影2</router-link>
    <router-link to="/movie/333">电影3</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.movie-container {
  min-height: 150px;
  background-color: #f2f2f2;
  padding: 15px;
}

.movie-container a {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  color: #000;
  margin: 0 5px;
}

.movie-container a.router-link-active {
  color: #000;
  background-color: #deebf6;
}
</style>
