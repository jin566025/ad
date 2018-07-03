<template>
	<div>
		<banner></banner>
		<div class="content">
			<div class="main">
				<div class="title">历史红包记录：</div>
				<div v-if="hasData">
					<div class="section" @click="toDetail(item.id,$event)" v-for="item in adList">
						<div class="section-title">发布时间：<span class="time">{{ formatDate(item.addTime) }}</span></div>
						<div class="section-content">
							<p class="section-content-title">
								<span class="provinceName">{{ item.provinceName }}</span>
								<span :class="item.cityName ? '':'hide' ">-</span>
								<span class="cityName" >{{ item.cityName }}</span>
								<span :class="item.districtName ? '':'hide' ">-</span>
								<span class="districtName" >{{ item.districtName }}</span>
								<span :class="item.siteName ? '':'hide' ">-</span>
								<span class="siteName"  >{{ item.siteName }}</span>
							</p>
							<div class="section-main clearfix">
								<div class="section-left fl">
									<p class="section-name">红包名称：<span class="name">{{ item.name }}</span></p>
									<p class="section-detail">
										<span>随机部分：<a class="randomAmount">{{ item.randomAmount }}</a>个</span>
										<span class="section-span">金额：<a class="randomMoney">{{ item.randomMoney }}</a>元</span>
									</p>
									<p class="section-detail">
										<span>运气部分：<a class="probabilityAmount">{{ item.probabilityAmount }}</a>个</span>
										<span class="section-span">金额：<a class="probabilityMoney">{{ item.probabilityMoney }}</a>元</span>
										<span class="section-span">概率：<a class="probability">{{ item.probability }}</a>%</span>
									</p>
									<p class="section-detail">
										<span>总金额：<a class="count">{{ item.randomMoney+item.probabilityMoney }}</a>元</span>
										<span class="img">{{ item.img }}</span>
										<span class="url">{{ item.url }}</span>
									</p>
								</div>
								<div class="section-right fr">
									<p class="p-number number">{{ item.count? item.count:0 }}</p>
									<p class="p-number2">已领取人次</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-else>
					<div class="section">
						<div class="nodata">
							<img class="nodata-img" src="../../../static/img/kongkongruye.png" />
							<p class="toSend">
								<span class="toSend-text1">快点去，</span>
								<span class="toSend-text2" @click="toSend()">发红包</span>
							</p>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { advertiserRedPacket } from '@/api/redpacket'
	import Banner from '@/components/banner'
	export default{
		data(){
			return {
				hasData:true,
				adList:[]
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getList();
			})
		},
		methods:{
			formatDate:function(now) { 
				let data = new Date(now);
				let year=data.getFullYear(); 
				let month=data.getMonth()+1; 
				let date=data.getDate(); 
				let hour=data.getHours(); 
				let minute=data.getMinutes(); 
				let second=data.getSeconds(); 
				return ""+year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
			},
			toDetail:function(id,event){
				let target = event.currentTarget;
				let provinceName = target.getElementsByClassName("provinceName")[0].innerText;
				let cityName = target.getElementsByClassName("cityName")[0].innerText;
				let districtName = target.getElementsByClassName("districtName")[0].innerText;
				let siteName = target.getElementsByClassName("siteName")[0].innerText;
				let name = target.getElementsByClassName("name")[0].innerText;
				let randomAmount = target.getElementsByClassName("randomAmount")[0].innerText;
				let randomMoney = target.getElementsByClassName("randomMoney")[0].innerText;
				let probabilityAmount = target.getElementsByClassName("probabilityAmount")[0].innerText;
				let probabilityMoney = target.getElementsByClassName("probabilityMoney")[0].innerText;
				let probability = target.getElementsByClassName("probability")[0].innerText;
				let count = target.getElementsByClassName("count")[0].innerText;
				let img = target.getElementsByClassName("img")[0].innerText;
				let url = target.getElementsByClassName("url")[0].innerText;
				let number = target.getElementsByClassName("number")[0].innerText;
				let time = target.getElementsByClassName("time")[0].innerText;
				let dataArray = {
					provinceName:provinceName,
					cityName:cityName,
					districtName:districtName,
					siteName:siteName,
					name:name,
					randomAmount:randomAmount,
					randomMoney:randomMoney,
					probabilityAmount:probabilityAmount,
					probabilityMoney:probabilityMoney,
					probability:probability,
					count:count,
					img:img,
					url:url,
					number:number,
					time:time
				}
				dataArray = JSON.stringify(dataArray);
				sessionStorage.setItem("dataArray",dataArray);
				this.$router.push({'path':'detail?id='+id})
			},
			toSend:function(){
				this.$router.push({'path':'send'})
			},
			getList:function(){
				let userInfo = sessionStorage.getItem("userInfo");
				userInfo = JSON.parse(userInfo);
				let userId = userInfo.userId;
				let params = {};
				params.userId = userId;
				advertiserRedPacket(params).then((res)=>{
					console.log(res)
					if(res.data.data.list.length==0){
						this.hasData=false
					}
					if(res.data.stateCode==0){
						this.adList = res.data.data.list;
					}
				})

			},
			reload:function(){
				location.reload();
			}
		},
		components:{
			Banner
		},
		watch:{
			 "$route": "reload"
		},
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.img,.url{display: none;}
.content{
	width: 1440px;margin: 0 auto;
	.main{
		width: 1024px;margin: 0 auto;padding: 28px 0;
		.title{height: 36px;padding-left: 8px;border-left: 7px solid #FF2828;line-height: 36px;font-size: 24px;font-family: Roboto;color: #1E1E1E;}
		.section{
			cursor: pointer;
			.section-title{width: 240px;height: 30px;line-height: 30px;border-radius: 5px;background-color: #BBBBBB;color: #FFFFFF;font-size: 14px;text-align: center;margin: 0 auto;font-family: Microsoft Yahei;margin-top: 20px;}
			.section-content{
				width: 864px;height: 244px;margin: 0 auto;padding: 28px 40px;border: 1px solid #DCDCDC;margin-top: 10px;
				.section-content-title{font-family: Roboto;font-size: 28px;color: #1E1E1E;}
				.section-main{
					width: 100%;margin-top: 30px;
					.section-left{
						width: 764px;
						.section-name{font-family: Microsoft Yahei;font-size: 18px;color: #323232;margin-bottom: 24px;}
						.section-detail{
							color: #969696;font-family: Roboto;font-size: 14px ;margin-bottom: 24px;
							.section-span{margin-left: 62px;}
						}
					}
					.section-right{
						width: 100px;text-align: center;color: #FF2828 ;font-family: Roboto;
						.p-number{font-size: 38px;}
						.p-number2{font-size: 20px;margin-top: 22px;}
					}
				}
			}
			.nodata{
				text-align: center;margin-top: 100px;
				.nodata-img{width: 220px;height: 220px;}
				.toSend{
					font-family: Roboto;font-size: 24px;color: #1E1E1E;
					.toSend-text2{color: #FF2828 ;cursor: pointer;}
				}
			}
			
		}
	}
}
</style>