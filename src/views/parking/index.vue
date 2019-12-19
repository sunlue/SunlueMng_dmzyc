<template>
	<div class="parking">
		<Row :gutter="10">
			<Col span="6">
				<panel title="累计车流量" title_en="Cumulative vehicle flow">
					<Row :gutter="10" class="cumulative">
						<Col span="8">
							<div class="box">
								<p>今日累计</p>
								<strong>42</strong>
							</div>
						</Col>
						<Col span="8">
							<div class="box">
								<p>当月累计</p>
								<strong>120</strong>
							</div>
						</Col>
						<Col span="8">
							<div class="box">
								<p>今年累计</p>
								<strong>1800</strong>
							</div>
						</Col>
					</Row>
				</panel>
				<panel class="mt" title="停车场使用情况" title_en="Car park usage">
					<s-parking class="mt"></s-parking>
				</panel>
				<panel class="district mt" title="地区实时车辆数" title_en="District real-time vehicle count">
					<div slot="extra" v-if="false">
						<select>
							<option>2019-09</option>
							<option>2019-10</option>
							<option>2019-11</option>
						</select>
					</div>
					<Row>
						<template v-for="(item,index) in province">
							<Col span="4" :key="index">
								<div class="box" :key="index">
									<p>{{item}}</p>
									<strong>{{Math.ceil(Math.random() * 100)}}辆</strong>
								</div>
							</Col>
						</template>
					</Row>
				</panel>
			</Col>
			<Col span="12">
				<s-flop :number="flop" unit="辆"></s-flop>
				<div class="map mt" ref="map">
					<img src="../../assets/dispatch/map.png" />
				</div>
				<panel class="mt month">
					<v-chart :options="echart.month"></v-chart>
				</panel>
			</Col>
			<Col span="6">
				<panel title="当日车流量" title_en="Vehicle stay time analysis">
					<s-traffic></s-traffic>
				</panel>
				<panel title="车辆停留时长分析" title_en="Vehicle stay time analysis" class="stay-time mt">
					<v-chart :options="echart.staytime"></v-chart>
				</panel>
				<panel title="停车场视频监控" title_en="Video surveillance of parking lot" class="monitor mt">
					<Row :gutter="5">
						<template v-for="i in 4">
							<Col span="12" :key="i">
								<img :key="i" src="../../assets/monitor/spjk.png" style="width: 100%;"/>
							</Col>
						</template>
					</Row>
				</panel>
			</Col>
		</Row>
	</div>
</template>

<script>
import sTraffic from './traffic'
import sParking from './parking'
import sFlop from './flop.vue'
import panel from '@/components/panel'

import analyze from '@/components/analyze';
export default {
	components:{
		panel,
		sTraffic,
		sParking,
		sFlop
	},
	data() {
		let province='北京、天津、上海、重庆、河北、山西、辽宁、吉林、黑龙江、江苏、浙江、江西、安徽、福建、山东、河南、湖北、湖南、广东、海南、四川、贵州、云南、陕西、甘肃、青海、台湾、内蒙古、广西、西藏、宁夏、新疆、香港、澳门';
		
		return {
			flop:Math.ceil(Math.random() * 1000000),
			province:province.split('、'),
			echart:{
				staytime:{},
				month:{}
			},
		};
	},
	mounted() {
		let that=this;
		setInterval(()=>{
			that.flop=Math.ceil(Math.random() * 1000000)
		},3000)
		this.staytime()
		this.month();
	},
	methods: {
		staytime(){
			analyze.parking.staytime().then(result=>{
				this.echart.staytime=result
			})
		},
		month(){
			
			let data = {
				2019: [136, 159, 905, 641, 306, 915, 177, 701, 124, 364, 183, 215],
				2018: [124, 145, 562, 554, 195, 631, 150, 302, 114, 254, 360, 129],
				2017: [118, 128, 207, 477, 929, 414, 980, 154, 113, 226, 163, 495],
				2016: [112, 122, 234, 313, 907, 302, 916, 188, 111, 210, 195, 418],
				2015: [101, 110, 804, 311, 762, 133, 783, 915, 101, 181, 186, 200],
			};
			
			analyze.parking.month(data).then(result=>{
				this.echart.month=result
			})
		}
	}
};
</script>
<style lang="less">
	.parking{
		padding:16px 10px 10px;
		color: white;
		.mt{
			margin-top: 10px;
		}
		.cumulative{
			.box{
				background: rgba(250, 250, 250, 0.2);
				border-radius: 5px;
				padding: 19.5px 0px;
				text-align: center;
				p{
					color: white;
					font-size: 14px;
				}
				strong{
					color: rgb(149, 234, 255);
					font-size: 20px;
					&:after{
						content: '辆';
						display: inline-block;
						font-size: 12px;
						color: white;
						padding-left: 6px;
					}
				}
			}
		}
		.district{
			select{
				background: rgb(23,46,107);
				color: white;
				border: 1px solid rgb(50,100,254);
				border-radius: 2px;
				padding: 2px 5px;
			}
			.ivu-row{
				margin:0px -5px;
			}
			.ivu-col{
				padding: 5px;
				.box{
					text-align: center;
					padding: 12px 0px;
					border: 1px solid rgb(50,100,254);
					border-radius: 5px;
					color: rgb(0,213,255);
					background: rgb(23,46,107);
					p{
						font-size: 14px;
					}
					strong{
						font-size: 16px;
					}
				}
			}
		}
		.map{
			img{
				width: 100%;
			}
		}
		.month{
			.panel-body{
				height: 344px;
			}
		}
		.stay-time{
			.panel-body{
				height: 304px;
			}
		}
	}
</style>