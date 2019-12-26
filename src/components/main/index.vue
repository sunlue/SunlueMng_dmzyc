<template>
	<div class="container-body">
		<head-bar></head-bar>
		<div class="container">
			<menu-bar></menu-bar>
			<router-view class="body" />
		</div>
	</div>
</template>
<script>
import '@/styles/common.less';
import menuBar from '@/components/menuBar'
import headBar from '@/components/header'
	export default{
		components:{
			menuBar,
			headBar
		}
	}
</script>


<style lang="less">
	@import url('//at.alicdn.com/t/font_1559601_d3ju138fgrl.css');
	.container-body{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		.container{
			flex: auto;
			display: flex;
			flex-direction: row;
			height: 100%;
			& > .body {
				flex: auto;
				background: #070a55;
			}
		}
	}
</style>
