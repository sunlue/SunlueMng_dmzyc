<template>
	<div class="container-body">
		<menu-bar></menu-bar>
		<div class="container">
			<head-bar></head-bar>
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
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		.menu-bar {
			flex: 0 0 80px;
		}
		.container {
			flex: auto;
			display: flex;
			flex-direction: column;
			& > .header {
				height: 60px;
				flex: 0 0 60px;
				line-height: 60px;
			}
			& > .body {
				flex: auto;
				background: #070a55;
			}
		}
	}
</style>
