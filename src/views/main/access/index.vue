<template>
	<Row class="access">
		<template v-for="i in 4">
			<Col span="12" :key="i">
				<Card :key="i">
					<p slot="title">
						<template v-if="i==1">官网访问数</template>
						<template v-if="i==2">官网浏览量</template>
						<template v-if="i==3">微信访问数</template>
						<template v-if="i==4">微信粉丝数</template>
					</p>
					<Row>
						<Col span="12">
							<span>昨日数</span>
							<strong>{{Math.ceil(Math.random() * 1000)}}</strong>
						</Col>
						<Col span="12">
							<span>今日数</span>
							<strong>{{Math.ceil(Math.random() * 1000)}}</strong>
						</Col>
					</Row>
				</Card>
			</Col>
		</template>
	</Row>
</template>

<script>
	export default{
		data(){
			return{}
		}
	}
</script>

<style lang="less">
	.access{
		.ivu-col:nth-child(1),.ivu-col:nth-child(2){
			margin-bottom: 10px;
		}
		.ivu-col:nth-child(odd){
			padding-right: 5px;
		}
		.ivu-col:nth-child(even){
			padding-left: 5px;
		}
		.ivu-card{
			border: 2px solid rgba(145, 233, 255, 0.2);
			background: transparent;
			.ivu-card-head{
				border-bottom: 2px solid rgba(145, 233, 255, 0.2);
				padding: 10px;
				p{
					color: #07dbff;
					font-weight: bold;
					position: relative;
					&:after{
						top: 0px;
						left: 88px;
						width: 72px;
						height: 20px;
						content: '';
						display: block;
						position: absolute;
						background-image: url('../../../assets/main/access/gif.png');
						background-repeat: no-repeat;
						background-position: center center;
					}
				}
			}
			.ivu-card-body{
				text-align: center;
				color: white;
				padding: 14.5px;
				span{
					display: block;
					font-size: 16px;
				}
				strong{
					font-size: 22px;
				}
			}
		}
	}
</style>
