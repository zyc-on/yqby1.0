import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
    baseURL: 'http://localhost:2999'
})

http.interceptors.request.use(config => {
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config
})

http.interceptors.response.use(res => {
    if(res.status===299){
        Vue.prototype.$notify({
            type:'success',
            message:res.data.message
        })
    }
    return res
}, err => {
    // console.log(err);

    if (err.response.data.message) {
        console.log(err.response.data.message);
        Vue.prototype.$notify({
            type: 'danger',
            message: err.response.data.message
        })
    }
    if (err.response.status === 401) {
        router.push('/login')
    }
    return Promise.reject(err)
})

export default http