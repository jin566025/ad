import axios from 'axios'
import store from '@/store'
import router from '@/router'

const service = axios.create({
	//baseURL: process.env.BASE_API, // api的base_url
	baseURL:"http://ytg.sunruncn.com:8888/JKMarket/rest",
//	baseURL:"http://101.37.163.225:8888/JKMarket/rest",
	  timeout: 10000000 // 请求超时时间
})



service.interceptors.request.use(function (config) {  //配置发送请求的信息
	var userInfo = sessionStorage.getItem("userInfo");
	if(!userInfo){
		router.push({'path':'/'});
	}
  store.dispatch('switch_dialog');
  return config;
}, function (error) {
  return Promise.reject(error);
});

service.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('switch_dialog');
  return response;
}, function (error) {
	//router.push({'path':'/404'});
  return Promise.reject(error);
});

export default service