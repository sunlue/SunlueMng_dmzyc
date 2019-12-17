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
			<div class="weather">今日天气：多云 7-12℃</div>
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
			}
		},
		mounted() {
			this.getDateTime();
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
			}
		}
	}
</script>

