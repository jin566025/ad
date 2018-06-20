<template>
	<div class="container">
		<div class="main" @click="toSend()"></div>
	</div>
</template>

<script>
	export default{
		methods:{
			toSend:function(){
				this.$router.push({'path':'send'})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.container{
	width: 100%;height: 300px;background-color: #FFD00E;
	.main{
		width: 1440px;margin: 0 auto;height: 100%;background: url(../../static/img/index-banner.png) no-repeat center/contain;cursor: pointer;
	}
}
</style>