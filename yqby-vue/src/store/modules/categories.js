import { getAllCategories } from '../../api/category'
import types from '../types'
const { categories } = types
let picker = {},
  mainIds = {},
  subIds = {}

export default {
  namespaced: true,
  state: {
    //原始数据
    all: []
  },
  mutations: {
    [categories.getAllCategories](state, _categories) {
      state.all = _categories
      _categories.map(item => {
        mainIds[item.name] = item.id
        picker[item.name] = [
          ...item.subcategories.map(e => {
            subIds[e.name] = e.id
            return e.name
          })
        ]
      })
    }
  },
  actions: {
    [categories.getAllCategories]({ commit }) {
      getAllCategories().then(res => {
        if (res.status) commit(categories.getAllCategories, res.data)
      })
    }
  },
  getters: {
    columns({ all }) {
      return [{ values: Object.keys(picker) }, { values: picker['书籍'] }]
    },
    sub({ all }) {
      return i => picker[i]
    },

    // 根据值求id
    getMainId() {
      return i => mainIds[i]
    },
    getSubId() {
      return i => subIds[i]
    }
  }
}
