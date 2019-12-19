<template>
	<div class="weather">
		<Row :gutter="10" class="h100">
			<Col span="4" class="left h100">
				<panel title="环境质量" title_en="Environmental quality (PM2.5)">
					<v-chart :options="weather.air" :autoresize="true" />
				</panel>
				<panel title="当前温度" title_en="Current temperature (℃)" class="mt">
					<v-chart :options="weather.tem" :autoresize="true" />
				</panel>
				<panel title="当前湿度" title_en="Current humidity (%)" class="mt">
					<v-chart :options="weather.humidity" :autoresize="true" />
				</panel>
			</Col>
			<Col span="16" class="right h100">
				<panel title="未来7天天气预报" title_en="Weather forecast for the next 7 days">
					<v-chart :options="weather.weather" :autoresize="true" />
				</panel>
				<panel title="当日24小时温度" title_en="24 hour temperature" class="mt">
					<v-chart :options="weather.hours" :autoresize="true" />
				</panel>
			</Col>
		</Row>
	</div>
</template>

<script>
import analyze from '@/components/analyze';
import panel from '@/components/panel';
export default {
	components: {
		panel
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
			}
		};
	},
	created() {
		let that = this;
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
		} else{
			this.getWeatherV9((result)=>{
				this.renderV9(result)
			})
		}
	},
	methods: {
		renderV6(result){
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
.weather {
	padding: 10px;

	.h100 {
		height: 100%;
	}
	.mt {
		margin-top: 10px;
	}

	.left {
		.panel {
			height: calc(33% - 10px / 3);
		}
	}

	.right {
		.panel {
			height: calc(50% - 5px);
		}
	}

	.panel-body {
		height: calc(100% - 53px);
	}
}
</style>
