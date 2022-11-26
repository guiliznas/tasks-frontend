import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const api = axios.create({
  baseURL: 'http://localhost:5000',
  // withCredentials: true,
  crossDomain: true,
})

api.interceptors.request.use(undefined, (config) => {
  console.log('erro requisição')
  if (config.response.status === 401) {
    console.log('REDIRECIONAR PARA LOGIN')
  }
  return Promise.reject(config)
})

Vue.use(VueAxios, axios)

export default api
