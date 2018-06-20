<template>
	<div class="main">
		<div class="content">
			<div class="container">
				<p class="title">填写区域：</p>
				<div class="container-top">
					<p class="top-p">
						<span class="xing">*</span>
						<span class="name">区域选择：</span>
						<select class="selects">
							<option class="hide">省</option>
							<option>浙江省</option>
						</select>
						<select class="selects">
							<option class="hide">市</option>
							<option>宁波市</option>
						</select>
						<select class="selects">
							<option class="hide">区</option>
							<option>海曙区</option>
						</select>
					</p>
					
					<p class="top-p" v-show="ad">
						<span class="xing">*</span>
						<span class="name">区域类型：</span>
						<select class="selects2">
							<option>小区</option>
						</select>
					</p>
					<p class="top-p" v-show="ad">
						<span class="xing noxing">*</span>
						<span class="name noxing">区域类型：</span>
						<select class="selects2">
							<option>小城花园</option>
							<option>大城花园</option>
						</select>
					</p>
					<p class="top-p"  v-show="ad">
						<span class="xing noxing">*</span>
						<span class="name">小区人数：</span>
						<span class="tips">3684人</span>
					</p>
					
					
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name">广告链接：</span>
						<input class="link-input" type="text" placeholder="请输入链接地址" />
					</p>
					<p class="top-p top-p2">
						<span class="xing xing2">*</span>
						<span class="name name2">广告图片：</span>
						<img class="moban" :src="src" />
					</p>
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">广告链接：</span>
						<input @change="getFile" type="file" class="input-file" />
						<img class="upimg"  src="../../../static/img/tupianshangchuan.png" />
					</p>
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">广告链接：</span>
						<span class="tips">图片大小控制在5M以内，图片比例为手机全屏，推荐尺寸为750x1334</span>
					</p>
				</div>
				
				<div class="split"></div>
				
				<p class="title">填写红包：</p>
				<div class="container-top">
					<p class="top-p">
						<span class="xing">*</span>
						<span class="name">红包名称：</span>
						<input class="link-input" type="text" placeholder="请输入红包名称" />
					</p>
					<p class="top-p">
						<span class="xing">*</span>
						<span class="name">随机部分：</span>
						<input class="link-input" type="text" placeholder="请输入红包数量" />
						<span class="type">个</span>
					</p>
					
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">随机部分：</span>
						<input class="link-input" type="text" placeholder="金额" />
						<span class="type">元</span>
					</p>
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">广告链接：</span>
						<span class="tips">每人数额随机红包，必定可以领取到，每日每人可领一次直到被领完。</span>
					</p>
					
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name">运气部分：</span>
						<input class="link-input" type="text" placeholder="请输入红包数量" />
						<span class="type">个</span>
					</p>
					
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">随机部分：</span>
						<input class="link-input" type="text" placeholder="金额" />
						<span class="type">元</span>
					</p>
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">随机部分：</span>
						<input class="link-input" type="text" placeholder="概率（5~100）" />
						<span class="type">%</span>
					</p>
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">广告链接：</span>
						<span class="tips">每人数额随机红包，必定可以领取到，每日每人可领一次直到被领完。</span>
					</p>
				</div>
				
				<p class="amount">总金额：500.00元</p>
				<div class="finish" @click="toPay()">确认</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				src:"../../../static/img/shoujimoban.png",
				ad:true
			}
		},
		methods:{
			getFile (e) {
		        let _this = this
		        var files = e.target.files[0]
		        if (!e || !window.FileReader) return 
		        let reader = new FileReader()
		        reader.readAsDataURL(files)
		        reader.onloadend = function () {
		          _this.src = this.result
		        }
		   },
		   toPay:function(){
		   	  this.$router.push({'path':'pay'})
		   }

		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.main{
	width: 1440px;margin: 0 auto;
	.content{
		width: 1024px;margin: 0 auto;
		.container{
			width: 950px;margin: 0 auto;padding: 60px 0;
			.title{font-size: 24px;color: #1E1E1E;font-family: #1E1E1E;margin-left: 212px;margin-bottom: 46px;}
			.container-top{
				margin-left: 300px;
				.top-p{
					margin-bottom:20px;position:relative;
					.xing{color: #FF2828;font-size: 16px;}
					.noxing{visibility: hidden;}
					.name{font-size: 14px;font-family: Roboto;color: #323232 ;margin-right: 20px;}
					.selects{
						width: 80px;height: 30px;line-height: 30px;border: 1px solid  #969696;border-radius: 5px;color: #969696;margin-right: 20px;outline: none;
						.hide{display: none;}
					}
					.selects2{width: 144px;height: 30px;border: 1px solid #969696;border-radius: 5px;color: #969696;outline: none;}
					.link-input{width: 200px;height: 30px;font-family: Microsoft Yahei;font-size: 12px;color: #969696 ;border: 1px solid #DCDCDC;padding-left: 5px;border-radius: 5px;}
					.moban{width: 200px;}
					.input-file{opacity: 0;height: 30px;width: 110px;cursor: pointer;}
					.upimg{position: absolute;bottom: 0;width: 110px;height: 30px;left:100px;z-index: -1;cursor: pointer;}
					.tips{font-size: 12px;font-family: Roboto;color: #323232 ;}
					.type{font-family: Roboto;font-size: 12px;margin-left: 10px;}
				}
				.top-p2{
					margin-top: 30px;
					.xing2{vertical-align: top;}
					.name2{vertical-align: top;}
				}
				
			}
			.split{height: 3px;width: 100%;border-top: 1px dashed #DCDCDC;margin-top: 30px;margin-bottom: 50px;}
			.amount{font-family: Roboto;font-size:24px;color: #323232;text-align: center;margin-top:40px;}
			.finish{width: 336px;height: 46px;line-height: 46px;text-align: center;margin: 0 auto;background-color: #FFD801;color: #1E1E1E ;font-size: 18px;font-family: Microsoft Yahei;margin-top: 20px;cursor: pointer;border-radius: 5px;}
		}
	}
}
</style>