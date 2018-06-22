// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
//import request from './utils/request'
Vue.config.productionTip = false


axios.interceptors.request.use(function (config) {  //配置发送请求的信息
store.dispatch('switch_dialog')  
return config;
}, function (error) {
return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
store.dispatch('switch_dialog')
return response;
}, function (error) {

return Promise.reject(error);
});

Vue.prototype.$ajax = axios
Vue.prototype.url_path="http://101.37.163.225:8888/JKMarket/rest"

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
