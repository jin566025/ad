<template>
	<div v-show="$store.state.loading.show">
		<div class="shadow"></div>
		<img class="loading absolute-center" src="../../static/img/loading.gif" />
	</div>
</template>

<script>
</script>

<style  lang="less" rel="stylesheet/less" scoped>

	.shadow{width: 100%;height: 100%;min-width: 1440px;background-color: rgba(0,0,0,0.3);position: fixed;z-index: 998;top: 0;left: 0;}
	.loading{width: 3rem;height: 3rem;position: fixed;z-index: 999;}

</style>