<template>
	<div class="main">
		<div class="content">
			<div class="title">发布时间：20180615  16:30:24</div>
			<div class="container clearfix">
				<div class="container-left fl">
					<p class="address">{{ provinceName }}-{{ cityName }}-{{ districtName }}-{{ siteName }}</p>
					<p class="section-name">红包名称：{{ name }}</p>
					<p class="section-detail">
						<span>随机部分：{{ randomAmount }}个</span>
						<span class="section-span">金额：{{ randomMoney }}元</span>
					</p>
					<p class="section-detail">
						<span>运气部分：{{ probabilityAmount }}个</span>
						<span class="section-span">金额：{{ probabilityMoney }}元</span>
						<span class="section-span">概率：{{ probability }}%</span>
					</p>
					<p class="section-detail">
						<span>总金额：{{ count }}元</span>
					</p>
					
					<div class="hrs"></div>
					<p class="links">链接地址：</p>
					<p class="links links2">{{ url }}</p>
					
					<p class="p-number p-number1">{{ number }}</p>
					<p class="p-number p-number2">已领取人次</p>
				</div>
				<div class="container-right fr">
					<img class="moban" src="../../../static/img/shoujimoban.png" />
					<img class="absolute-center img" :src="img" />
				</div>
			</div>
			<div class="table">
				<div class="table-tr table-head clearfix">
					<div class="table-td table-td1 fl">用户名</div>
					<div class="table-td table-td2 fl">金额</div>
					<div class="table-td table-td3 fl">领取时间</div>
				</div>
				<div class="table-tr table-tr2 clearfix" v-for="item in list">
					<div class="table-td table-td1 fl">{{ item.userName }}</div>
					<div class="table-td table-td2 fl">{{ item.money }}</div>
					<div class="table-td table-td3 fl">{{ item.addTime }}</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import { RedPacketRecordList } from '@/api/redpacket'
	export default{
		data(){
			return {
				provinceName:"",
				cityName:"",
				districtName:"",
				siteName:"",
				name:"",
				randomAmount:"",
				randomMoney:"",
				probabilityAmount:"",
				probabilityMoney:"",
				probability:"",
				count:"",
				img:"",
				url:"",
				number:"",
				list:[]
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getDetail();
				this.getList();
			})
		},
		methods:{
			getDetail:function(){
				let detail = sessionStorage.getItem("dataArray");
				detail = JSON.parse(detail);
				this.provinceName = detail.provinceName;
				this.cityName = detail.cityName;
				this.districtName = detail.districtName;
				this.siteName = detail.siteName;
				this.name = detail.name;
				this.randomAmount = detail.randomAmount;
				this.randomMoney = detail.randomMoney;
				this.probabilityAmount = detail.probabilityAmount;
				this.probabilityMoney = detail.probabilityMoney;
				this.probability = detail.probability;
				this.count = detail.count;
				this.url = detail.url;
				this.img = detail.img;
				this.number = detail.number;
			},
			getList:function(){
				let id = window.location.href.split("?id=")[1];
				let type = 1;
				let params = {
					id:id,
					type:type
				};
				console.log(params)
				RedPacketRecordList(params).then((res)=>{
					if(res.stateCode==0){
						this.list = res.data.data.list;
					}
				})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.img{z-index: 999;width: 250px;}
.main{
	width: 1440px;margin: 0 auto;
	.content{
		width: 952px;margin: 0 auto;padding: 10px 36px;margin-top:26px;
		.title{font-family: Microsoft Yahei;background-color: #BBBBBB;font-size: 14px;color: #fff;width: 240px;height: 30px;line-height: 30px;border-radius: 5px;text-align: center;margin: 0 auto;}
		.container{
			margin-top: 30px;
			.container-left{
				width: 570px;
				.address{font-family: Roboto;font-size: 28px;color: #1E1E1E;margin-bottom: 30px;}
				.section-name{font-family: Microsoft Yahei;font-size: 18px;color: #323232;margin-bottom: 24px;}
				.section-detail{
					color: #969696;font-family: Roboto;font-size: 14px ;margin-bottom: 24px;
					.section-span{margin-left: 62px;}
				}
				.hrs{height: 3px;width: 525px;border-top: 1px dashed gainsboro;margin-top: 40px;margin-bottom: 45px;}
				.links{font-size: 14px;font-family: Roboto;color: #1E1E1E ;line-height: 20px;}
				.links2{height: 125px;}
				.p-number{color: #FF2828;width: 102px;text-align: center;}
				.p-number1{font-size: 38px;margin-top: 60px;}
				.p-number2{font-size: 20px;margin-top: 22px;}
			}
			.container-right{
				width: 375px;position: relative;
				.moban{width: 375px;}
			}
		}	
		.table{
			width: 950px;box-sizing: border-box;
			.table-head{background-color: #FFD801;}
			.table-tr{
				box-sizing: border-box;border: 1px solid gainsboro;border-top: none;
				.table-td{height: 50px;line-height: 50px;text-align: center;font-size: 18px;color: #323232;font-family: Roboto;box-sizing: border-box;}
				.table-td1{width: 270px;}
				.table-td2{width: 308px;border-left: 1px solid #fff;border-right: 1px solid #fff;}
				.table-td3{width: 370px;}
			}
			.table-tr2{
				.table-td{font-size: 14px;}
				.table-td2{border-left: 1px solid gainsboro;border-right: 1px solid gainsboro;}
			}
		}
	}
}
</style>