import request from '@/utils/request'

export function saveRedPacket(data){
	return request({
		url:"/mall/order/saveRedPacket.json",
		method: 'post',
	    params:data,
	})
}

export function advertiserRedPacket(data){
	return request({
		url:"/mall/advertiserRedPacket.json",
		method: 'post',
	    params:data,

	})
}

export function redPacketPay(data){
	return request({
		url:"/mall/redPacketOrderPay.json",
		method: 'post',
	    params:data,
		async:false
	})
}
export function RedPacketRecordList(data){
	return request({
		url:"/mall/user/RedPacketRecordList.json",
		method: 'post',
	    params:data,
	})
}
