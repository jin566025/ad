<template>
	<div class="container2">
		<div class="main clearfix">
			<img src="../../static/img/logo.png" class="logo fl" />
			<span class="fl index" @click="toIndex()">首页</span>
			<span v-show="logshow" class="fr logout" @click="logout()">退出登录</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			logshow:true
		},
		methods:{
			toIndex:function(){
				this.$router.push({'path':'/layout/index'})
			},
			logout:function(){
				localStorage.removeItem("userInfo");
				localStorage.removeItem("adtype")
				this.$router.push({'path':'/'});
				this.$store.state.loading.show=false;
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.container2{
	width: 100%;height: 60px;background-color:#FFFFFF;line-height: 60px;
	.main{
		width: 1440px;margin: 0 auto;
		.logo{width: 50px;height: 50px;margin-left: 218px;margin-top: 5px;}
		.index{width: 120px;text-align: center;margin-left: 20px;font-family: Roboto;font-size: 18px;color: #1E1E1E;cursor: pointer;}
		.logout{font-family: Roboto;font-size: 12px;color: #1E1E1E;margin-right: 226px;cursor: pointer;}
	}
}
</style>