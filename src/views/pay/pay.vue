<template>
	<div class="main">
		<div class="content">
			<p class="title">请扫码二维码完成支付：</p>
			<img class="erweima" :src="img" />
		</div>
	</div>
</template>

<script>
	import { redPacketPay } from '@/api/redpacket'
	export default{
		data(){
			return {
				img:""
			}
			
		},
		mounted(){
			this.$nextTick(function(){
				this.getImg();
			})
		},
		methods:{
			getImg:function(){
				this.img = sessionStorage.getItem("img");
				let outSn = sessionStorage.getItem("outSn");
				let params = {};
				params.outSn = outSn;
				redPacketPay(params).then((res)=>{
					console.log(res);
					if(res.data.stateCode==0){
						document.getElementById("app").innerHTML = res.data.aliPayString
						document.forms[0].submit();
						
					}
				})
			}
		}
	}
</script>

<style  lang="less" rel="stylesheet/less" scoped>
.main{
	width: 1440px;margin: 0 auto;
	.content{
		width: 1024px;margin: 0 auto;text-align: center;
		.title{font-size: 24px;color: #1E1E1E ;font-family: Roboto;margin-left: 192px;margin-top: 90px;text-align: left;}
		.erweima{width: 320px;height: 320px;margin-top: 56px;}
	}
}
</style>