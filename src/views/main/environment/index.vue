<template>
	<Row :gutter="10" class="environment">
		<Col span="8">
			<div class="left">
				<div class="aqi">
					<strong class="number">{{v6.air}}</strong>
					<span class="label">
						<i class="iconfont icon-kongqizhiliang"></i>
						AQI {{v6.air_level}}</span>
				</div>
				<ul class="">
					<li><i class="iconfont icon-fengsu"></i>{{v6.win}}{{v6.win_speed}}</li>
					<li><i class="iconfont icon-sd"></i>湿度{{v6.humidity}}</li>
					<li><i class="iconfont icon-qiya"></i>气压{{v6.pressure}}hpa</li>
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
					<div class="number">{{v6.air_pm25}}</div>
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
		data() {
			return {
				params : {
					appid: '74669544',
					appsecret: 'L4uImetj',
					cityid: '101270114',
					lng: '105.826194',
					lat: '32.432276',
					vue: 1
				},
				v6:{},
			};
		},
		mounted() {
			let v6=this.$store.getters.weather_v6;
			if (v6.city!=undefined) {
				this.renderV6(v6)
			} else{
				this.getWeatherV6((result)=>{
					this.renderV6(result)
				})
			}
		},
		methods:{
			renderV6(result){
				console.log(result)
				this.v6=result
			},
			getWeatherV6(callback) {
				this.$store.dispatch('weather_v6', this.params).then(result => {
					callback(result)
				});
			},
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
