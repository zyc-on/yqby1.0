// goods api 的模块划分
// 定义接口的调用规则， 比如参数定义等
// 有条件设置参数检验
import http from '../http'

// 获取推荐商品
export const getIntroGoods = () => http.get('/goods')
// 获取全部商品
export const getUserGoods = () => http.get(`/goods/`)

// 商品的增删查改
export const addGood = good => http.post('/goods/add', { ...good })
export const deleteGood = id => http.delete(`/goods/${id}`)
export const getGoodInfo = id => http.get(`/goods/${id}`)
export const updateGood = good => http.put('/goods/add', { ...good })
