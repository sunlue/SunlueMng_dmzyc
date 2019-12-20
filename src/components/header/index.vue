<template>
	<div class="header">
		<div class="box">
			<!-- <img src="../../assets/logo.png" /> -->
			<div class="time">
				<span>{{ year }}年{{ month }}月{{ day }}日</span>
				<span>星期{{ weekText[week] }}</span>
				<span>{{ time }}</span>
			</div>
		</div>
		<div class="box">
			<div class="title">道明·竹艺村综合管理平台</div>
		</div>
		<div class="box">
			<div class="weather">
				今日天气&nbsp;:&nbsp;{{weather.wea}} &nbsp;
				<i :class="weather.wea_img"></i>
				<span class="tem">{{weather.tem2}}&nbsp;-&nbsp;{{weather.tem1}}℃</span>
			</div>
		</div>
	</div>
</template>

<script>
	import './index.less'
	export default{
		data(){
			return{
				year: '0',
				month: '0',
				day: '0',
				week: '0',
				time: '0',
				weekText: ['天', '一', '二', '三', '四', '五', '六'],
				weather:{}
			}
		},
		mounted() {
			this.getDateTime();
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
			getDateTime() {
				let date = new Date();
				this.year = date.getFullYear();
				this.month = date.getMonth()+1;
				this.day = date.getDate();
				this.week = date.getDay();
				let h = date.getHours(),
					m = date.getMinutes(),
					s = date.getSeconds();
				this.time = (h < 10 ? 0 +''+ h : h) + ':' + (m < 10 ? 0 +''+ m : m) + ':' + (s < 10 ? 0 +''+ s : s);
				setTimeout(() => {
					this.getDateTime();
				}, 1000);
			},
			renderV6(result){
				console.log(result)
				this.weather=result
			},
			getWeatherV6(callback) {
				this.$store.dispatch('weather_v6', {
					appid: '74669544',
					appsecret: 'L4uImetj',
					cityid: '101272106',
					lng: '105.826194',
					lat: '32.432276',
					vue: 1
				}).then(result => {
					callback(result)
				});
			},
		}
	}
</script>

