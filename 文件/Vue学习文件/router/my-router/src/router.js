import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/about' },
    {
      path: '/home', component: () => import('./components/Home.vue'),
      // redirect:'/home/tab3',
      children: [
        { path: 'tab3', component: () => import('./components/pages/Tab3.vue') },
        { path: 'tab4', component: () => import('./components/pages/Tab4.vue') },
      ]
    },
    {
      path: '/about', component: () => import('./components/About.vue'),
      // redirect: '/about/tab1',
      children: [
        { path: 'tab1', component: () => import('./components/pages/Tab1.vue') },
        { path: 'tab2', component: () => import('./components/pages/Tab2.vue') }],

    },
    {
      path: '/movie', component: () => import('./components/Movie.vue'),
      name: "MovieDetails",
      children: [
        {
          path: ':id',
          component: () => import('./components/MovieDetails.vue'),
          props: true
        }
      ]
    },
    {
      path: '/login',
      name:'Login',
      component: () => import('./components/Login.vue')
    }
  ]

})

router.beforeEach((to, from, next) => {
  let isLogin = false
  if (to.name == 'MovieDetails') {
    if (isLogin) {
      next()
    } else {
      next({ name: 'Login' ,params:{id:to.params.id}})
    }
  } else { next() }
})
// 注册全局守卫

export default router