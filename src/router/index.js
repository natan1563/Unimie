import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DateTime from '../filters/DateTime'

Vue.use(VueRouter)

Vue.filter('DateTime', DateTime);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
