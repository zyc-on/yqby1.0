import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/reset.css'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

import http from './http'
import request from './http'
import axios from './axios'

Vue.prototype.$http = http
import Vant from 'vant'
import 'vant/lib/index.css'
import { Lazyload } from 'vant'

Vue.use(Vant)
Vue.use(Lazyload)

Vue.use(axios)
new Vue({
  router,
  render: function(h) {
    return h(App)
  }
}).$mount('#app')
