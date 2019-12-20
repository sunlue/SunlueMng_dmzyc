<template>
	<div class="weathers">
		<Row :gutter="10" class="h100">
			<Col span="10" class="left h100">
				<Row :gutter="10" class="h100">
					<Col span="10" style="height: calc(100% - 463px);">
						<panel title="当前温度" title_en="Current temperature (℃)">
							<span slot="extra">更新时间:{{v6.update_time}}</span>
							<v-chart :options="weather.tem" :autoresize="true" />
						</panel>
						<panel title="当前湿度" title_en="Current humidity (%)" class="mt">
							<span slot="extra">更新时间:{{v6.update_time}}</span>
							<v-chart :options="weather.humidity" :autoresize="true" />
						</panel>
					</Col>
					<Col span="14">
						<panel title="空气质量" title_en="Air quality">
							<span slot="extra">更新时间:{{v6.update_time}}</span>
							<s-environment :data="v6"></s-environment>
							<p class="mt">{{v6.air_tips}}</p>
						</panel>
						<panel title="预警信息" title_en="The early warning information" class="alarm mt">
							<span slot="extra">更新时间:{{v6.update_time}}</span>
							<p>预警类型：<span v-if="v6.alarm_type">{{v6.alarm_type}}</span><template v-else>无</template></p>
							<p>预警级别：<span v-if="v6.alarm_level">{{v6.alarm_level}}</span><template v-else>无</template></p>
							<p>预警内容：<span v-if="v6.alarm_content">{{v6.alarm_content}}</span><template v-else>无</template></p>
						</panel>
					</Col>
					<Col span="24" class="mt">
						<panel title="24小时天气" title_en="24-hour weather">
							<span slot="extra">更新时间：{{v9.update_time}}</span>
							<Row :gutter="5" class="hour-weather-24">
								<template v-for="(h,i) in hours">
									<Col span="4" :key="i">
										<div class="box" :key="i">
											<p :class="[h.wea_img,'wea']"></p>
											<p>{{h.hours}}&nbsp;{{h.wea}}&nbsp;{{h.tem}}℃</p>
											<p>{{h.win}}&nbsp;{{h.win_speed}}</p>
										</div>
									</Col>
								</template>
							</Row>
						</panel>
					</Col>
				</Row>
			</Col>
			<Col span="14" class="right h100">
				<panel title="未来7天天气预报" title_en="Weather forecast for the next 7 days">
					<span slot="extra">更新时间：{{v9.update_time}}</span>
					<v-chart :options="weather.weather" :autoresize="true" />
				</panel>
				<panel title="当日24小时温度" title_en="24 hour temperature" class="mt">
					<span slot="extra">更新时间：{{v9.update_time}}</span>
					<v-chart :options="weather.hours" :autoresize="true" />
				</panel>
			</Col>
		</Row>
	</div>
</template>

<script>
import analyze from '@/components/analyze';
import panel from '@/components/panel';
import sEnvironment from './environment';
export default {
	components: {
		panel,
		sEnvironment
	},
	data() {
		return {
			params : {
				appid: '74669544',
				appsecret: 'L4uImetj',
				cityid: '101272106',
				lng: '105.826194',
				lat: '32.432276',
				vue: 1
			},
			weather: {
				air: {},
				tem: {},
				humidity: {},
				weather: {},
				hours: {}
			},
			v6:{},
			v9:{},
			hours:[]
		};
	},
	created() {
		// let that = this;
		// this.getWeather();
		setInterval(function() {
			// that.getWeather();
		}, 1000 * 60 * 30);
	},
	mounted() {
		let v6=this.$store.getters.weather_v6;
		let v9=this.$store.getters.weather_v9;
		if (v6.city!=undefined) {
			this.renderV6(v6)
		} else{
			this.getWeatherV6((result)=>{
				this.renderV6(result)
			})
		}
		if (v9.city!=undefined) {
			this.renderV9(v9)
			this.hours=v9.data[0].hours;
		} else{
			this.getWeatherV9((result)=>{
				this.renderV9(result)
				this.hours=result.data[0].hours;
			})
		}
	},
	methods: {
		renderV6(result){
			this.v6=result
			analyze.weather.air({
				name: result.air_level,
				value: result.air_pm25
			}).then(data => {
				this.weather.air = data;
			});
			analyze.weather.tem({
				value: result.tem
			}).then(data => {
				this.weather.tem = data;
			});
			analyze.weather.humidity({
				value: result.humidity
			}).then(data => {
				this.weather.humidity = data;
			});
		},
		renderV9(result){
			this.v9=result
			analyze.weather.weather(result.data).then(data => {
				this.weather.weather = data;
			});
			analyze.weather.hours(result.data[0]['hours']).then(data => {
				this.weather.hours = data;
			});
		},
		getWeatherV6(callback) {
			this.$store.dispatch('weather_v6', this.params).then(result => {
				callback(result)
			});
		},
		getWeatherV9(callback) {
			this.$store.dispatch('weather_v9', this.params).then(result => {
				callback(result)
			});
		}
	}
};
</script>

<style lang="less">
.weathers {
	padding: 10px;

	.h100 {
		height: 100%;
	}
	.mt {
		margin-top: 10px;
	}

	.left {
		.panel {
			height: calc(50% - 5px);
		}
	}

	.right {
		.panel {
			height: calc(50% - 5px);
		}
	}
	
	.alarm{
		p{
			span{
				color: red;
			}
		}
	}
	
	.hour-weather-24{
		.box{
			background: #172e6b;
			border: 1px solid #07dbff;
			color: #00d5ff;
			border-radius: 5px;
			text-align: center;
			padding:0px 5px 5px;
			box-sizing: border-box;
			margin-top: 5px;
			position: relative;
			p{
				&.wea{
					width: 100%;
					height: 40px;
					background-repeat: no-repeat;
					background-position: center center;
					background-size: 38px 38px;
				}
				&.bingbao{
					background-image: url('../../assets/weather/icon/bingbao.png');
				}
				&.lei{
					background-image: url('../../assets/weather/icon/lei.png');
				}
				&.qing{
					background-image: url('../../assets/weather/icon/qing.png');
				}
				&.shachen{
					background-image: url('../../assets/weather/icon/shachen.png');
				}
				&.wu{
					background-image: url('../../assets/weather/icon/wu.png');
				}
				&.xue{
					background-image: url('../../assets/weather/icon/xue.png');
				}
				&.yin{
					background-image: url('../../assets/weather/icon/yin.png');
				}
				&.yu{
					background-image: url('../../assets/weather/icon/yu.png');
				}
				&.yun{
					background-image: url('../../assets/weather/icon/yun.png');
				}
			}
			img{
				max-height: 40px;
				position: absolute;
				top: 0px;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}

	.panel-body {
		height: calc(100% - 53px);
	}
}
</style>
