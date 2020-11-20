import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from './auth-guard';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Artists from '../views/Artists.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: AuthGuard
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists,
    beforeEnter: AuthGuard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
