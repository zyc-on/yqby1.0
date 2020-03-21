import http from '../http'

export const getAllCategories = () => http.get('/category')
