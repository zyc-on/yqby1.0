import axios from 'axios'
import Message from 'element-ui/packages/message/src/main'
const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

instance.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
})

instance.interceptors.response.use(res => {
  if (res.data.msg && res.status >= 200 && res.status < 300) {
    Message.success(res.data.msg)
  }
  return res
}, err => {
  if (err.response.data.msg) {
    Message.error(err.response.data.msg)
  }
  return Promise.reject(err)
})

export default instance
