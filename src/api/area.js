import request from '@/utils/request'

export function queryArea(data){
	return request({
		url: '/queryArea.json',
		method: 'post',
	    params:data
	})
}
export function getList(data){
	return request({
		url: '/mall/getList.json',
		method: 'post',
	    params:data,
	    async:false
	})
}
export function getSiteAmount(data){
	return request({
		url: '/mall/getSiteAmount.json',
		method: 'post',
	    params:data,
	    async:false
	})
}
