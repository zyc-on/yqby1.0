import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
    baseURL: 'http://localhost:3000'
})

http.interceptors.request.use(config => {
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config
})

http.interceptors.response.use(res => {
    if(res.status.toString().startsWith("2")){
        Vue.prototype.$notify({
            type:'success',
            message:res.data.msg
        })
    }
    return res
}, err => {
    // console.log(err);

    if (err.response.data.msg) {
        console.log(err.response.data.msg);
        Vue.prototype.$notify({
            type: 'danger',
            message: err.response.data.msg
        })
    }
    if (err.response.status === 401) {
        router.push('/login')
    }
    return Promise.reject(err)
})

export default http