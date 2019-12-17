<template>
	<Row :gutter="10" class="environment">
		<Col span="8">
			<div class="left">
				<div class="aqi">
					<strong class="number">25</strong>
					<span class="label">
						<i class="iconfont icon-kongqizhiliang"></i>
						AQI 优</span>
				</div>
				<ul class="">
					<li><i class="iconfont icon-fengsu"></i>西南风二级</li>
					<li><i class="iconfont icon-sd"></i>湿度25%</li>
					<li><i class="iconfont icon-qiya"></i>气压1025hpa</li>
				</ul>
			</div>
		</Col>
		<Col span="16">
			<ul class="right">
				<template v-for="(item,index) in environment">
					<li :key="index" :style="'border-bottom: 3px solid '+item.color+';'">
						<div class="label">
							<p>{{item.name}}</p>
							<p>{{item.name_zh}}</p>
						</div>
						<div class="number">{{item.number}}</div>
					</li>
				</template>
			</ul>
		</Col>
	</Row>
</template>

<script>
	export default{
		data() {
			return {
				environment:[{
					name:'PM2.5',
					name_zh:'细颗粒',
					number:'10',
					color:'rgb(255,189,0)'
				},{
					name:'PM10',
					name_zh:'可吸入颗粒',
					number:'20',
					color:'rgb(255,239,47)'
				},{
					name:'NO2',
					name_zh:'二氧化氮',
					number:'14',
					color:'rgb(43,238,155)'
				},{
					name:'SO2',
					name_zh:'二氧化硫',
					number:'5',
					color:'rgb(121,1,204)'
				}],
			};
		},
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
				&:last-child{
					margin-bottom: 0px;
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
