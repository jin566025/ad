import request from '@/utils/request'

export function getMsg(data) {
	return request({
	   url: '/mall/user/getLoginSMS.json',
	   method: 'post',
	   params:data
	})
}

export function login1(data){
	return request({
	   url: '/mall/user/userLogin.json',
	   method: 'post',
	   params:data
	})
}

export function login22(data){
	return request({
	   url: '/mall/user/setterLogin.json',
	   method: 'post',
	   params:data
	})
}
