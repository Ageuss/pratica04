import Vue from 'vue'
import VueRouter from 'vue-router'
import Cars from '../views/Cars.vue'



Vue.use(VueRouter)

const routes = [

  {
    path: '/cars',
    name: 'Cars',
    component: Cars,
    props: true,
    
    
  },
  {
    path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
