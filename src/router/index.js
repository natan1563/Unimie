import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DateTime from '../filters/DateTime'
import Toasted from 'vue-toasted';
import Clipboard from 'v-clipboard'
import Redirect from '@/views/Redirect'

Vue.use(VueRouter)
Vue.use(Toasted, {
  duration: 5000
})
Vue.use(Clipboard)

Vue.filter('DateTime', DateTime);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:token',
    name: 'Redirect',
    component: Redirect
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
