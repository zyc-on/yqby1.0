import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import AddGoods from '../views/EditGoods.vue'
import SetInfo from '../views/SetInfo.vue'
import ChangeAvatar from '../views/ChangeAvatar.vue'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Message from '../views/Message.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      // home
      { path: '/home', name: 'home', component: Home },
      // search
      { path: '/search', name: 'search', component: Search },

      // message
      { path: '/messages', name: 'message', component: Message },
      // 购物车
      { path: '/Cart', name: 'message', component: Cart },
      // 个人中心
      { path: '/user', name: 'user', component: User },
      // 登出
      {
        path: '/logout',
        name: 'logout',
        redirect: '/user'
      }
    ]
  },
  //登录
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // 设置info
  {
    path: '/setInfo',
    name: 'setInfo',
    component: SetInfo,
    props: true
  },
  //改变头像
  {
    path: '/changeAvatar',
    name: 'changeAvatar',
    component: ChangeAvatar,
    props: true
  },
  // 上架二手物品
  {
    path: '/addgoods',
    name: 'addgoods',
    component: AddGoods,
    props: true
  },

  // 关于开发者
  {
    path: '/aboutdev',
    name: 'aboutdev',
    component: User
  }
]

const router = new VueRouter({
  routes
})

export default router
