<template>
	<div class="main">
		<div class="content">
			<div class="container">
				<p class="title">填写区域：</p>
				<div class="container-top">
					<p class="top-p">
						<span class="xing">*</span>
						<span class="name">区域选择：</span>
						<select class="selects" @change="selectProvince($event)" ref="provinceval">
							<option value="" class="hide">省</option>
							<option :value="item.areaId" v-for="(item,index) in province">{{ item.areaName }}</option>
						</select>
						<select class="selects" @change="selectCity($event)" ref="cityval" >
							<option value="" class="hide">市</option>
							<option :value="item.areaId" v-for="(item,index) in city">{{ item.areaName }}</option>
						</select>
						<select class="selects" @change="selectArea($event)"  ref="areaval" >
							<option value="" class="hide">区</option>
							<option :value="item.areaId" v-for="(item,index) in area">{{ item.areaName }}</option>
						</select>
					</p>
					
					<p class="top-p" v-show="ad">
						<span class="xing">*</span>
						<span class="name">区域类型：</span>
						<select class="selects2" ref="sites" @change="selectSite($event)">
							<option value="" class="hide">请选择区域类型</option>
							<option value="1">小区</option>
							<option value="2">写字楼</option>
						</select>
					</p>
					<p class="top-p" v-show="ad">
						<span class="xing noxing">*</span>
						<span class="name noxing">占个位置：</span>
						<select class="selects2" ref="siteval" @change="selectArea($event)">
							<option :value="item.id" v-for="(item,index) in site">{{ item.areaName }}</option>
						</select>
					</p>
					<p class="top-p"  v-show="ad">
						<span class="xing noxing">*</span>
						<span class="name">小区人数：</span>
						<span class="tips"><a>{{ SiteAmount }}</a>人</span>
					</p>
					
					
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name">广告链接：</span>
						<input v-model="redpackurl" class="link-input" type="text" placeholder="请输入链接地址，必须以http://或https://开头" />
					</p>
					<p class="top-p top-p2 clearfix">
						<span class="xing xing2">*</span>
						<span class="name name2">广告图片：</span>
						<span class="moban">
							<img class="moban-img" src="../../../static/img/shoujimoban.png" />
							<img class="absolute-center moban-img2" :src="src" />
						</span>
						
					</p>
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">占个位置：</span>
						<input id="file" ref="file" @change="getFile" type="file" class="input-file" />
						<img class="upimg"  src="../../../static/img/tupianshangchuan.png" />
					</p>
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">占个位置：</span>
						<span class="tips">图片大小控制在5M以内，图片比例为手机全屏，推荐尺寸为750x1334</span>
					</p>
				</div>
				
				<div class="split"></div>
				
				<p class="title">填写红包：</p>
				<div class="container-top">
					<p class="top-p">
						<span class="xing">*</span>
						<span class="name">红包名称：</span>
						<input v-model="redpackname" class="link-input" type="text" placeholder="请输入红包名称" />
					</p>
					<p class="top-p">
						<span class="xing">*</span>
						<span class="name">随机部分：</span>
						<input v-model="redpackrandomAmount" @change="compare();"  @keyup="NumberCheck();"  class="link-input" type="number" placeholder="请输入红包数量" />
						<span class="type">个</span>
					</p>
					
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">占个位置：</span>
						<input v-model="redpackrandomMoney" @change="compare();" v-on:input="totalMoney()" class="link-input" type="number" placeholder="金额" />
						<span class="type">元</span>
					</p>
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">占个位置：</span>
						<span class="tips">红包最低单个平均金额：<a class="tips2">{{ precent }}</a>  元。</span>
					</p>
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">占个位置：</span>
						<span class="tips">每人数额随机红包，必定可以领取到，每日每人可领一次直到被领完。</span>
					</p>
					
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name">运气部分：</span>
						<input v-model="redpackprobabilityAmount" @change="compare();" @keyup="NumberCheck();" class="link-input" type="number" placeholder="请输入红包数量" />
						<span class="type">个</span>
					</p>
					
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">占个位置：</span>
						<input v-model="redpackprobabilityMoney" @change="compare();" v-on:input="totalMoney()" class="link-input" type="number" placeholder="金额" />
						<span class="type">元</span>
					</p>
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">占个位置：</span>
						<input v-model="redpackprobability" class="link-input" type="number" placeholder="概率（5~100）" />
						<span class="type">%</span>
					</p>
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">占个位置：</span>
						<span class="tips">红包最低单个平均金额：<a class="tips2">{{ precent }}</a>  元。</span>
					</p>
					<p class="top-p">
						<span class="xing noxing">*</span>
						<span class="name noxing">占个位置：</span>
						<span class="tips">每人数额随机红包，必定可以领取到，每日每人可领一次直到被领完。</span>
					</p>
				</div>
				
				<p class="amount">总金额：<span v-html="total" ></span>元</p>
				<div class="finish" @click="saveRedPacket()">确认</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { saveRedPacket,redPacketPay,verifyMoney } from '@/api/redpacket'
	import { queryArea,getList,getSiteAmount } from '@/api/area'
	import axios from 'axios'
	export default{
		data(){
			return {
				src:"",
				ad:true,
				province:[],
				city:[],
				area:[],
				site:[],
				redpackname:"",         //名称
				redpackurl:"https://",          //广告链接
				
				redpackrandomMoney:"",  //随机红包
				redpackrandomAmount:"", //随机红包数量
				redpackprobabilityMoney:"", //概率红包
				redpackprobabilityAmount:"", //概率红包数量
				redpackprobability:"",  //概率
				total:0,
				SiteAmount:0,
				precent:0.01,
				
				type:""
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.queryProvince("");
				//this.querySite(4,30,60,"小区",);
				this.getType();
			})
		},
		watch:{
			"$route": "reload",
		},
		methods:{
			reload:function(){
				location.reload();
			},
			getFile (e) {
		        let _this = this
		        let files = e.target.files[0]
		        if (!e || !window.FileReader) return 
		        let reader = new FileReader()
		        reader.readAsDataURL(files)
		        reader.onloadend = function () {
		          _this.src = this.result
		        }
		    },
		    
		    
		    
		    NumberCheck:function(){
		        var num = event.target.value;
		        var re=/^\d*$/;
		        if(!re.test(num)){
		            isNaN(parseInt(num))?event.target.value=" ":event.target.value=parseInt(num);
		        }
		    },
		    compare:function(){
		    	let val = event.target.value;
		    	if(val<=0){
		    		alert("需大于0");
		    		if(this.redpackprobabilityMoney<=0){
		    			this.redpackprobabilityMoney=""
		    		}
		    		if(this.redpackrandomMoney<=0){
		    			this.redpackrandomMoney=""
		    		}
		    		if(this.redpackrandomAmount<=1){
		    			this.redpackrandomAmount=""
		    		}
		    		if(this.redpackprobabilityAmount<=1){
		    			this.redpackprobabilityAmount=""
		    		}
		    		this.totalMoney();
		    	}
		    	if(this.precent==0){
		    		alert("请先选择省市区");
		    		this.redpackrandomMoney = "";
			    	this.redpackrandomAmount = "";
			    	this.redpackprobabilityMoney = "";
	    			this.redpackprobabilityAmount = "";
			    	this.total = 0
		    	}else{
		    		let redpackrandomMoney = this.redpackrandomMoney;
			    	let redpackrandomAmount = this.redpackrandomAmount;
			    	let redpackprobabilityMoney = this.redpackprobabilityMoney;
			    	let redpackprobabilityAmount = this.redpackprobabilityAmount;
			    	let adtype = sessionStorage.getItem("adtype");
			    	if(redpackrandomMoney && redpackrandomAmount){
		    			let avr = redpackrandomMoney/redpackrandomAmount;
		    			if(avr<this.precent){
		    				alert("红包最低单个平均金额："+this.precent+" 元。");
		    				this.redpackrandomMoney = "";
					    	this.redpackrandomAmount = "";
					    	this.total = 0
		    			}
		    			
		    		}
			    	if(redpackprobabilityMoney && redpackprobabilityAmount){
		    			let avr = redpackprobabilityMoney/redpackprobabilityAmount;
		    			if(avr<this.precent){
		    				alert("红包最低单个平均金额："+this.precent+" 元。");
		    				this.redpackprobabilityMoney = "";
					    	this.redpackprobabilityAmount = "";
					    	this.total = 0
		    			}
		    			
		    		}
		    	}
		    },
		    
		    
		    totalMoney:function(){
		    	let randomMoney = parseFloat(this.redpackrandomMoney);
		    	let probabilityMoney = parseFloat(this.redpackprobabilityMoney);
		    	let money1=0;
		    	let money2=0;
		    	if(randomMoney){
		    		money1 = randomMoney
		    	}
		    	if(probabilityMoney){
		    		money2 = probabilityMoney
		    	}
		    	this.total = (money1 +money2).toFixed(2);
		    	
		    },
		    toPay:function(){
		   	 //  this.$router.push({'path':'pay'})
		    },
		    getType:function(){
		    	let adtype = sessionStorage.getItem("adtype");
		    	this.type = adtype;
		    	adtype==0 ? this.ad=true:this.ad=false;
		    },
		    queryProvince:function(areaId){
		    	let dataArray = {};
		    	if(areaId){
		    		dataArray.areaId = areaId
		    	}
		    	queryArea(dataArray).then((res)=>{
		    		console.log(res)
		    		if(res.data.stateCode===0){
		    			
		   				let list =  res.data.areaList;
			   			this.province = list;
		   			}
		    	})
		    },
		    selectProvince:function(event){
		    	this.city = [];
		    	this.area = [];
		    	this.site = [];
		    	this.$refs.sites.value="";
		    	this.$refs.sites.text="请选择区域类型";
		    	let areaId = event.target.value;
		    	let dataArray = {};
		    	if(areaId){
		    		dataArray.areaId = areaId
		    	}
		    	
		    	queryArea(dataArray).then((res)=>{
		    		if(res.data.stateCode===0){
		   				let list =  res.data.areaList;
			   			this.city = list;
		   			}
		    	})
		    },
		    selectCity:function(event){
		    	this.area = [];
		    	this.site = [];
		    	let areaId = event.target.value;
		    	this.$refs.sites.value="";
		    	this.$refs.sites.text="请选择区域类型";
		    	let dataArray = {};
		    	if(areaId){
		    		dataArray.areaId = areaId
		    	}
		    	queryArea(dataArray).then((res)=>{
		    		if(res.data.stateCode===0){
		   				let list =  res.data.areaList;
			   			this.area = list;
		   			}
		    	})
		    },
		    selectArea:function(event){
		    	let siteId = event.target.value;
		    	this.site = [];
		    	this.$refs.sites.value="";
		    	this.$refs.sites.text="请选择区域类型";
		    	let provinceId = this.$refs.provinceval.value;
		    	let cityId = this.$refs.cityval.value;
		    	let districtId = this.$refs.areaval.value;
		    	let params = {
		    		provinceId:provinceId,
		    		cityId:cityId,
		    		districtId:districtId
		    	}
		    	if(this.type==0){
		    		verifyMoney(params).then((res)=>{
		    		
			    		if(res.data.stateCode==0){
			    			let average = parseFloat(res.data.data.average);
			    			let user =parseFloat(res.data.data.user/100);
			    			
			    			// precent = (average/user).toFixed(2);
			    			let precent = parseFloat((average/user)+0.005);
			    			//precent<0.05 ? precent=0.05:precent=precent;
			    			
			    			this.precent = precent.toFixed(2);
			    			
			    			
			    		}
			    	})
		    	}
		    	
		    },
		    selectSite:function(event){
		    	let site = event.target.value;
		    	let provinceId = this.$refs.provinceval.value;
		    	let cityId = this.$refs.cityval.value;
		    	let districtId = this.$refs.areaval.value;
		    	this.querySite(provinceId,cityId,districtId,site);
		    },
		    querySite:function(provinceId,cityId,districtId,type){
		    	let params = {}
		    	if(provinceId){
		    		params.provinceId = provinceId;
		    	}else{
		    		alert("请先选择省份");
		    		this.$refs.sites.value = "";
		    		return false;
		    	}
		    	if(cityId){
		    		params.cityId = cityId;
		    	}
		    	if(districtId){
		    		params.districtId = districtId;
		    	}
		    	params.type = type;
		    	getList(params).then((res)=>{
		    		console.log(res)
		    		if(res.data.stateCode===0){
		   				let list =  res.data.data.list;
		   				if(list.length>0){
		   					let datas = {
		   						siteId:list[0].id
		   					}
		   					
		   					getSiteAmount(datas).then((res)=>{
		   						console.log(res)
		   						if(res.data.stateCode==0){
		   							this.SiteAmount = res.data.data;
		   						}
		   					})
		   				}
			   			this.site = list;
		   			}
		    	})
		    },
		    saveRedPacket:function(){
		    	let redpackname = this.redpackname;
		    	let formData  = new FormData();
		    	if(redpackname==""){
		    		alert("请填写红包名称！");
		    		return false;
		    	}
		    	
		    	
		    	let redpackrandomMoney = this.redpackrandomMoney;
		    	if(redpackrandomMoney==""){
		    		alert("请填写随机红包金额！");
		    		return false;
		    	}
		    	let redpackrandomAmount = this.redpackrandomAmount;
		    	if(redpackrandomAmount==""){
		    		alert("请填写随机红包数量！");
		    		return false;
		    	}
		    	
		    	
		    	let redpackprobabilityMoney = this.redpackprobabilityMoney;
		    	let redpackprobabilityAmount = this.redpackprobabilityAmount;
		    	let redpackprobability = this.redpackprobability;
		    	
		    	if(redpackprobabilityMoney || redpackprobabilityAmount || redpackprobability){
		    		if(redpackprobabilityMoney==""){
			    		alert("请填写运气部分金额！");
			    		return false;
			    	}
		    		if(redpackprobabilityAmount==""){
			    		alert("请填写运气部分数量！");
			    		return false;
			    	}
		    		if(redpackprobability==""){
			    		alert("请输入运气红包概率！");
			    		return false;
			    	}else if(redpackprobability>100 || redpackprobability<5){
			    		alert("运气红包概率应大于5且小于100！");
			    		return false;
			    	}
		    	}
		    	
		    	if(redpackprobabilityMoney==""){
		    		formData.append("probabilityMoney",0);
		    	}else{
		    		formData.append("probabilityMoney",redpackprobabilityMoney);
		    	}
		    	
		    	if(redpackprobabilityAmount==""){
		    		formData.append("probabilityAmount",0);
		    	}else{
		    		formData.append("probabilityAmount",redpackprobabilityAmount);
		    	}
		    	
		    	if(redpackprobability==""){
		    		formData.append("probability",0);
		    	}else{
		    		formData.append("probability",redpackprobability);
		    	}
		    	
		    	
		    	
		    	let positivePic = this.$refs.file.files[0];
		    	if(!positivePic){
		    		alert("请上传图片！");
		    		return false;
		    	}
		    	
		    	let userInfo = sessionStorage.getItem("userInfo");
		    	userInfo = JSON.parse(userInfo);
		    	let userId = userInfo.userId;
		    	
		    	let provinceId = this.$refs.provinceval.value;
		    	if(provinceId==""){
		    		alert("请选择省！");
		    		return false;
		    	}
		    	
		    	
		    	let type = sessionStorage.getItem("adtype");
		    	
		    	
		    	formData.append("name",redpackname);
		    	
		    	formData.append("probability",redpackprobability);
		    	formData.append("randomMoney",redpackrandomMoney);
		    	formData.append("randomAmount",redpackrandomAmount);
		    	
		    	formData.append("probabilityAmount",redpackprobabilityAmount);
		    	formData.append("userId",userId);
		    	formData.append("provinceId",provinceId);
				formData.append("type",type);
				formData.append("positivePic",positivePic);
				
				let redpackurl = this.redpackurl;
		    	if(redpackurl){
		    		if(redpackurl.substr(0,7)=="http://" || redpackurl.substr(0,7)=="https://"){
		    			formData.append("url",redpackurl);
		    		}else{
		    			alert("链接地址必须以http://或https://开头");
		    			return false;
		    		}
		    		
		    	}
				
		    	let cityId = this.$refs.cityval.value;
		    	let districtId = this.$refs.areaval.value;
		    	let siteId = this.$refs.siteval.value;
		    	
		    	if(type==0){
		    		if(cityId){
			    		formData.append("cityId",cityId);
			    	}else{
		    			alert("请选择城市");
		    			return false;
		    		}
			    	
			    	if(districtId){
			    		formData.append("districtId",districtId);
			    	}else{
			    		alert("请选择区县");
		    			return false;
			    	}
			    	
		    		if(siteId){
		    			formData.append("siteId",siteId);
		    		}else{
		    			alert("请选择区域类型");
		    			return false;
		    		}
		    	}else{
		    		if(cityId){
			    		formData.append("cityId",cityId);
			    	}	
			    	if(districtId){
			    		formData.append("districtId",districtId);
			    	}
			    	if(siteId){
		    			formData.append("siteId",siteId);
		    		}
		    	}
		
				axios.post("http://ytg.sunruncn.com:8888/JKMarket/rest/mall/order/saveRedPacket.json",formData).then(res => { 
					console.log(res)
					if(res.data.stateCode==0){
						if(type==0){
							let params = {};
							params.outSn = res.data.outSn;
							redPacketPay(params).then((res)=>{
								if(res.data.stateCode==0){
									document.getElementById("app").innerHTML = res.data.aliPayString
									document.forms[0].submit();
									
								}
							})
						}else{
				    		this.$router.push({"path":"/layout/index"});
				    	}
					}else if(res.data.stateCode==105){
						console.log(type)
						alert(res.data.msg)
					}
				})
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
					.moban{
						width:375px;display: inline-block;position: relative;
						.moban-img{width: 375px;}
						.moban-img2{width:250px;}
					}
					.input-file{opacity: 0;height: 30px;width: 110px;cursor: pointer;}
					.upimg{position: absolute;bottom: 0;width: 110px;height: 30px;left:105px;z-index: -1;cursor: pointer;}
					.tips{
						font-size: 12px;font-family: Roboto;color: #323232 ;
						.tips2{color: #FF2828;}
					}
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