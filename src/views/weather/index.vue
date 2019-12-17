<template>
	<div class="weather">
		<div class="box-main">
			<div class="air box"><v-chart :options="weather.air" :autoresize="true" /></div>
			<div class="box tem"><v-chart :options="weather.tem" :autoresize="true" /></div>
			<div class="box humidity"><v-chart :options="weather.humidity" :autoresize="true" /></div>
		</div>
		<div class="box-main">
			<div class="box"><v-chart :options="weather.weather" :autoresize="true" /></div>
			<div class="box"><v-chart :options="weather.hours" :autoresize="true" /></div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import analyze from '@/components/analyze';
export default {
	data() {
		return {
			year: '0',
			month: '0',
			day: '0',
			week: '0',
			time: '0',
			weekText: ['天', '一', '二', '三', '四', '五', '六'],
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
		let that=this;
		this.getDateTime();
		this.getWeather();
		setInterval(function(){
			that.getWeather();
		},1000*60*30)
	},
	methods: {
		getDateTime() {
			let date = new Date();
			this.year = date.getFullYear();
			this.month = date.getMonth() + 1;
			this.day = date.getDate();
			this.week = date.getDay();
			let h = date.getHours(),
				m = date.getMinutes(),
				s = date.getSeconds();
			this.time = (h < 10 ? '0' + h : h) + '时' + (m < 10 ? '0' + m : m) + '分' + (s < 10 ? '0' + s : s) + '秒';
			setTimeout(() => {
				this.getDateTime();
			}, 1000);
		},
		getWeather() {
			let url = 'https://www.tianqiapi.com/api/';
			let params = {
				appid: '74669544',
				appsecret: 'L4uImetj',
				cityid: '101272106',
				lng: '105.826194',
				lat: '32.432276'
			};
			axios.all([
				axios.get(url + '?version=v6', {
					params: params
				}),
				axios.get(url + '?version=v9', {
					params: params
				})
			]).then(
				axios.spread((acct, perms) => {
					analyze.weather
						.air({
							today: acct.data,
							future: perms.data
						})
						.then(data => {
							this.weather.air = data;
						});

					analyze.weather
						.tem({
							today: acct.data,
							future: perms.data
						})
						.then(data => {
							this.weather.tem = data;
						});
					analyze.weather
						.humidity({
							today: acct.data,
							future: perms.data
						})
						.then(data => {
							this.weather.humidity = data;
						});
					analyze.weather
						.weather({
							today: acct.data,
							future: perms.data
						})
						.then(data => {
							this.weather.weather = data;
						});
					analyze.weather
						.hours({
							today: acct.data,
							future: perms.data
						})
						.then(data => {
							this.weather.hours = data;
						});
				})
			);
		}
	}
};
</script>

<style lang="less">
.weather {
	width: 100%;
	height: 100%;
	padding: 10px;
	.box-main {
		float: left;
		height: 100%;
		&:first-child {
			width: 25%;
			.box {
				width: calc(100% - 10px);
				height: calc(100% / 3 - 10px);
			}
		}
		&:last-child {
			width: 75%;
			.box {
				&:first-child {
					height: calc(100% / 3 * 2 - 10px);
				}
				&:last-child {
					height: calc(100% / 3 - 10px);
				}
			}
		}
		.box {
			background-image: url('../../assets/weather/box_bg.png');
			background-size: 100% 100%;
			background-repeat: no-repeat;
			margin:10px 0px;
			&.air,
			&.tem,
			&.humidity {
				position: relative;
			}
		}
	}
	.echarts,
	.echarts > div:first-child,
	.echarts > div > canvas {
		width: 100% !important;
		height: 100% !important;
	}
}
</style>
