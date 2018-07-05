<template>
	<div>
		<m-header :logshow="logshow"></m-header>
	
		
		  <router-view></router-view>
	    
	</div>
</template>

<script>
	import MHeader from '@/components/m-header'
	export default{
		data(){
			return {
				logshow:true
			}
		},
		components:{
			MHeader
		}
	}
</script>

<style>
</style>