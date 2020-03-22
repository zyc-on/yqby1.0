import types from '../types'
const { goods } = types
const { getIntroGoods, getUserGoods, addGood, deleteGood, updateGood } = goods
import * as goodsApi from '../../api/goods'
export default {
  namespaced: true,
  state: {
    introGoods: [], // all goods showed in the home view
    userGoods: [] // 用户的所有商品
  },
  getters: {
    left({ introGoods }) {
      return introGoods.slice(0, introGoods.length / 2)
    },
    right({ introGoods }) {
      return introGoods.slice(introGoods.length / 2)
    }
  },

  mutations: {
    [getIntroGoods](state, _introGoods) {
      state.introGoods = _introGoods
    },
    [getUserGoods](state, _userGoods) {
      state.userGoods = _userGoods
    },
    [addGood](state, _good) {
      console.log(_good)
      // state.userGoods.push(_good)
    },
    [updateGood](state, _good) {
      // 遍历影响效率， 可以使用键值对存储
      // state.userGoods.map((good , i)=>if(good.id == _good.id) good = _good
    },
    [deleteGood](state, _good) {
      // state.userGoods.map((good , i)=>if(good.id == _good.id) state.userGoods.splice(i,1)
    }
  },
  actions: {
    [addGood]({ commit }, _good) {
      goodsApi.addGood(_good).then(res => {
        if (res.status) commit(getIntroGoods, _good)
        else console.log('ops  ')
      })
    },
    [getIntroGoods]({ commit }) {
      goodsApi.getIntroGoods().then(res => {
        if (res.status) commit(getIntroGoods, res.data)
      })
    }
  }
}
