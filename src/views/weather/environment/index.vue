<template>
	<Row :gutter="10" class="environment">
		<Col span="8">
			<div class="left">
				<div class="aqi">
					<strong class="number">{{data.air}}</strong>
					<span class="label">
						<i class="iconfont icon-kongqizhiliang"></i>
						AQI {{data.air_level}}
					</span>
				</div>
				<ul class="">
					<li><i class="iconfont icon-fengsu"></i>{{data.win}}{{data.win_speed}}</li>
					<li><i class="iconfont icon-sd"></i>湿度{{data.humidity}}</li>
					<li><i class="iconfont icon-qiya"></i>气压{{data.pressure}}hpa</li>
				</ul>
			</div>
		</Col>
		<Col span="16">
			<ul class="right">
				<li>
					<div class="label">
						<p>PM2.5</p>
						<p>细颗粒</p>
					</div>
					<div class="number">{{data.air_pm25}}</div>
				</li>
				<li>
					<div class="label">
						<p>PM10</p>
						<p>可吸入颗粒</p>
					</div>
					<div class="number">0</div>
				</li>
				<li>
					<div class="label">
						<p>NO2</p>
						<p>二氧化氮</p>
					</div>
					<div class="number">0</div>
				</li>
				<li>
					<div class="label">
						<p>SO2</p>
						<p>二氧化硫</p>
					</div>
					<div class="number">0</div>
				</li>
			</ul>
		</Col>
	</Row>
</template>

<script>
	export default{
		props:{
			data:{}
		}
	}
</script>

<style lang="less">
	.environment{
		.left{
			.aqi{
				.number{
					color: rgb(7,219,255);
					display: block;
					text-align: center;
					font-size: 60px;
				}
				.label{
					text-align: center;
					display: block;
				}
			}
			ul{
				margin-top: 60px;
				li{
					height: 26px;
					line-height: 26px;
					margin: 4px 0px;
					i.iconfont{
						margin-right: 4px;
					}
				}
			}
		}
		.right{
			li{
				display: flex;
				justify-content: space-between;
				margin-bottom: 12px;
				&:first-child{
					border-bottom: 3px solid rgb(255,189,0);
				}
				&:nth-child(2){
					border-bottom: 3px solid rgb(255,239,47);
				}
				&:nth-child(3){
					border-bottom: 3px solid rgb(43,238,155);
				}
				&:last-child{
					margin-bottom: 0px;
					border-bottom: 3px solid rgb(121,1,204);
				}
				.label{
					font-size: 14px;
					font-weight: bold;
					letter-spacing: 1px;
				}
				.number{
					color: rgb(7,219,255);
					font-size: 36px;
					font-weight: bold;
				}
			}
		}
	}
</style>
