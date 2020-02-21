import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/reset.css'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
