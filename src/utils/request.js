import axios from 'axios'
import store from '../store'

const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000 // 请求超时时间
})



axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  stores.dispatch('switch_dialog')  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  stores.dispatch('switch_dialog')
  return response;
}, function (error) {

  return Promise.reject(error);
});

