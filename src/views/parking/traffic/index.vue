<template>
	<Row class="traffic box" :gutter="20">
		<Col span="12" class="text-center">
			<img src="../../../assets/main/visit.png" />
			<span>今日到访：</span>
			<strong>5760</strong>
		</Col>
		<Col span="12" class="text-center">
			<img src="../../../assets/main/return.png" />
			<span>今日返程：</span>
			<strong>5760</strong>
		</Col>
	</Row>
</template>

<script>
</script>

<style lang="less">
	.traffic.box{
		padding-top: 10px;
		img{
			max-width: 89%;
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
