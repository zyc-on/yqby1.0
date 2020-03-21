import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import goods from './modules/goods'
import categories from './modules/categories'
// import { modules } from "./modules/index";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goods,
    categories
  },

  plugins: [createLogger()],
  strict: process.env.NODE_ENV !== 'production'
})
