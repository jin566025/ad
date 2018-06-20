<template>
	<div>
		<banner></banner>
		<div class="content">
			<div class="main">
				<div class="title">历史红包记录：</div>
				<div v-if="hasData">
					<div class="section" @click="toDetail()">
						<div class="section-title">发布时间：20180615  16:30:24</div>
						<div class="section-content">
							<p class="section-content-title">浙江省-宁波市-鄞州区-小城花园</p>
							<div class="section-main clearfix">
								<div class="section-left fl">
									<p class="section-name">红包名称：xxxxxxxx</p>
									<p class="section-detail">
										<span>随机部分：100个</span>
										<span class="section-span">金额：650元</span>
									</p>
									<p class="section-detail">
										<span>运气部分：50个</span>
										<span class="section-span">金额：200元</span>
										<span class="section-span">概率：20%</span>
									</p>
									<p class="section-detail">
										<span>总金额：1000.00元</span>
									</p>
								</div>
								<div class="section-right fr">
									<p class="p-number">120</p>
									<p class="p-number2">已领取人次</p>
								</div>
							</div>
						</div>
					</div>
					<div class="section">
						<div class="section-title">发布时间：20180615  16:30:24</div>
						<div class="section-content">
							<p class="section-content-title">浙江省-宁波市-鄞州区-小城花园</p>
							<div class="section-main clearfix">
								<div class="section-left fl">
									<p class="section-name">红包名称：xxxxxxxx</p>
									<p class="section-detail">
										<span>随机部分：100个</span>
										<span class="section-span">金额：650元</span>
									</p>
									<p class="section-detail">
										<span>运气部分：50个</span>
										<span class="section-span">金额：200元</span>
										<span class="section-span">概率：20%</span>
									</p>
									<p class="section-detail">
										<span>总金额：1000.00元</span>
									</p>
								</div>
								<div class="section-right fr">
									<p class="p-number">120</p>
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
	import Banner from '@/components/banner'
	export default{
		data(){
			return {
				hasData:true
			}
		},
		methods:{
			toDetail:function(){
				this.$router.push({'path':'detail'})
			},
			toSend:function(){
				this.$router.push({'path':'send'})
			}
		},
		components:{
			Banner
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
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