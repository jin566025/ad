<template>
	<div class="container">
		<loading></loading>
		<div class="main">
			<div class="content clearfix">
				<img class="banner fl"    src="../../../static/img/login-banner.png" />
				<div class="login fl" v-if="login1">
					<div class="login-content clearfix">
						<p  class="login-title fl">广告商登录</p>
						<img  @click="change()" class="login-img fr" src="../../../static/img/login1.png" />
					</div>
					<div class="group">
						<p class="group-title">
							<span>手机号</span>
							<span class="noinput" v-show="noMobile">请输入正确的手机号!</span>
						</p>
						<div class="group-input clearfix">
							<div class="group-input-left fl"></div>
							<input class="group-input-right fr" v-model="mobile" />
						</div>
					</div>
					<div class="group clearfix">
						<p class="group-title">
							<span>验证码</span>
							<span class="noinput" v-show="noMsg">请输入正确的验证码!</span>
						</p>
						<div class="group-input2 clearfix fl">
							<div class="group-input-left fl"></div>
							<input v-model="msg" class="group-input-right fr" />
						</div>
						<div class="send fr" ref="times" :class="{djs:djs}" @click="sendMsg()">点击发送验证码</div>
					</div>
					<div class="login-btn" @click="login()">登录</div>
				</div>
				<div class="login fl" v-else>
					<div class="login-content clearfix">
						<p class="login-title fl">平台登录</p>
						<img  @click="change()" class="login-img fr" src="../../../static/img/login2.png" />
					</div>
					<div class="group">
						<p class="group-title">账号</p>
						<div class="group-input clearfix">
							<div class="group-input-left group-input-left3 fl"></div>
							<input class="group-input-right fr" />
						</div>
					</div>
					<div class="group">
						<p class="group-title">密码</p>
						<div class="group-input clearfix">
							<div class="group-input-left group-input-left4 fl"></div>
							<input class="group-input-right group-input-right3 fr" />
						</div>
					</div>
					<div class="login-btn login-btn2">登录</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Loading from '@/components/loading'
	export default{
		data(){
			return {
				login1:false,
				mobile:"",
				msg:"",
				noMsg:false,
				noMobile:false,
				djs:false,//倒计时
			}
		},
		components:{
			Loading
		},
		methods:{
			change:function(){
				this.login1 = !this.login1
			},
			testMobile:function(m){
				var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				return reg.test(m)
			},
			login:function(){
				
				let mobile = this.mobile;
				let hasMobile = this.testMobile(mobile);
				if(hasMobile){
					this.noMobile = false;
				}else{
					this.noMobile = true;
					return false;
				}
				
				let msg = this.msg;
				if(msg){
					this.noMsg = false;
				}else{
					this.noMsg = true;
					return false;
				}
				
				this.$ajax({
					type:"post",
					url:"/api/mall/user/userLogin.json",
					params:{
						"phone":mobile,
						"code":msg,
						"loginType":1,
						"agentsId":0
					},
					dataType:"json"
				}).then((res)=>{
					if(res.data.stateCode===0){
						let data = res.data;
						let cityId = data.cityId;
						let cityName = data.cityName;
						let districtId = data.districtId;
						let districtName = data.districtName;
						let money = data.money;
						let provinceId = data.provinceId;
						let provinceName = data.provinceName;
						let userId = data.userId;
						let hasDoor = data.hasDoor;
						let hasLight = data.hasLight;
						let userInfo = {};
						
						userInfo.cityId = cityId;
						userInfo.cityName = cityName;
						userInfo.districtId = districtId;
						userInfo.districtName = districtName;
						userInfo.money = money;
						userInfo.provinceId = provinceId;
						userInfo.provinceName = provinceName;
						userInfo.userId = userId;
						userInfo.hasDoor = hasDoor;
						userInfo.hasLight = hasLight;
						
						userInfo = JSON.stringify(userInfo);
						sessionStorage.setItem("userInfo",userInfo);
						
						this.$router.push({'path':"/"})
					}
				})
				
			},
			
			sendMsg:function(){
				console.log("aaa")
				let mobile = this.mobile;
				if(this.testMobile(mobile)){
					this.noMobile = false;
					this.djs = true;
					let time = 60;
					let times = this.$refs.times;
					
					this.$ajax({
						type:"post",
						url:"/api/mall/user/getLoginSMS.json",
						params:{
							"phone":mobile
						},
						dataType:"json"
					}).then((res)=>{
						if(res.data.stateCode===0){
							console.log(res)
						}
					})
					
					let interval = setInterval(()=>{
						time = time-1;
						if(time>0){
							times.innerHTML = time;
						}else{
							times.innerHTML = "点击发送验证码";
							this.djs = false;
							clearInterval(interval);
						}
					},1000)
				}else{
					this.noMobile = true;
				}
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.container{
	width: 100%;height: 100vh;background-color: #ADDFEA;
	.main{
		width: 1440px;margin: 0 auto;height: 100%;
		.content{
			padding-top: 274px;height: 340px;
			.banner{width: 910px;}
			.login{
				width: 300px;height: 340px;background-color: #fff;
				.login-content{
					margin-bottom:32px;
					.login-title{font-family: Roboto;font-size: 24px;color: #1E1E1E;margin-top: 20px;margin-left: 20px;}
					.login-img{cursor: pointer;width: 40px;height: 40px;margin-top: 5px;margin-right: 5px;}
				}
				.group{
					width: 260px;margin: 0 auto;
					.group-title{
						font-family: Roboto;color: #323232;font-size: 12px;margin-bottom: 10px;
						.noinput{margin-left: 10px;color: red;}
					}
					.group-input{
						height: 40px;border-radius: 5px;width: 100%;background-color: #E6E6E6;border: 1px solid #DCDCDC ;margin-bottom: 14px;
						.group-input-left{width: 40px;height:40px;background-image: url(../../../static/img/mobile.png);background-size: 20px 20px;background-position: center;background-repeat: no-repeat;border-right: 1px solid #DCDCDC;}
						.group-input-right{width:210px;height: 40px;border: none;background-color: #E6E6E6;font-size: 16px;}
						.group-input-right3{padding-right: 40px;width: 170px;background-image: url(../../../static/img/board2.png);background-repeat: no-repeat;background-position: 170px;background-size: 30px 30px;}
						.group-input-left3{background-image: url(../../../static/img/username.png);}
						.group-input-left4{background-image: url(../../../static/img/password.png);}
					}
					.group-input2{
						.group-input;width: 150px;
						.group-input-left{background-image:url(../../../static/img/board.png)}
						.group-input-right{width: 100px;}
					}
					.send{font-size: 12px;font-family: Roboto;color: #fff;background-color: #FF2828;width: 100px;height: 40px;line-height: 40px;text-align: center;border-radius: 5px;cursor: pointer;}
					.djs{pointer-events: none;background-color: gainsboro;}
				}
				.login-btn{cursor: pointer;background-color: #FFD801;color: #1E1E1E;font-family: Roboto;font-size: 14px;width: 260px;margin: 0 auto;height: 36px;line-height: 36px;margin-top: 30px;border-radius: 5px;text-align: center;}
				.login-btn2{margin-top:44px;}
			}
		}
	}
}
</style>