import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import AddGoods from '../views/EditGoods.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/user', component: User },
      {
        path: '/logout',
        name: 'logout',
        redirect: '/user'
      },
      {
        path: '/aboutdev',
        name: 'aboutdev',
        component: User
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/addgoods',
    name: 'addgoods',
    component: AddGoods,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
