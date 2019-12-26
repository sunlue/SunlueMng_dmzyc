<template>
	<Row class="traffic" :gutter="20">
		<Col span="12" class="text-center">
			<img src="../../../assets/main/visit.png" v-if="screenfull" />
			<span>今日到访：</span>
			<strong>5760</strong>
		</Col>
		<Col span="12" class="text-center">
			<img src="../../../assets/main/return.png" v-if="screenfull" />
			<span>今日返程：</span>
			<strong>5760</strong>
		</Col>
	</Row>
</template>

<script>
	export default{
		data(){
			return{
				screenfull:false
			}
		},
		mounted(){
			let that=this;
			window.onresize = () => {
				return (() => {
					let screenfull=(document.body.scrollHeight == window.screen.height && document.body.scrollWidth == window.screen.width);
					that.screenfull = screenfull
				})()
			}
		}
	}
</script>

<style lang="less">
	.traffic{
		img{
			max-width: 66%;
			margin: 0 auto;
			display: block;
		}
		span{
			font-size: 14px;
		}
		strong{
			font-size: 18px;
		}
	}
</style>
