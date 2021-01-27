import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Home
  },
  {
    path: '/Login',
    name: 'Home',
    component: Login
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    // meta:{
    //   requiresAuth: true
    // }
  },
  {
    path: '/usuario',
    name: 'About',
    component: About,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    
  } 
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(localStorage.getItem('jwt') === null){
      next({
        path: '/'
      })
    }else{
      next();
    }
  }else{
    next();
  }
})



export default router
