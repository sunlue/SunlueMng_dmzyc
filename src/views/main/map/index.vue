<template>
	<div class="bmap">
		<div ref="map" class="map-box"></div>
		<div class="notice">
			<slot name="message"></slot>
		</div>
	</div>
</template>

<script>
import echarts from 'echarts';
import 'echarts/extension/bmap/bmap';
import data from './data.js';
import analyze from '@/components/analyze';
export default {
	name: 'Map',
	data() {
		return {
			chart: echarts.ECharts,
			bmap: {},
			mapZoom: 6,
		};
	},
	mounted() {
		analyze.map(data).then(result => {
			this.initMap(result);
		});
	},
	methods: {
		initMap(option) {
			// echarts配置
			this.chart = echarts.init(this.$refs.map);
			this.chart.setOption(option);
			this.bmap = this.chart
				.getModel()
				.getComponent('bmap')
				.getBMap();
			this.bmap.setMinZoom(5); // 设置地图最小缩放比例
			this.bmap.setMaxZoom(5); // 设置地图最大缩放比例
			const _this = this;
			// 监听地图比例缩放， 可以根据缩放等级控制某些图标的显示
			this.bmap.addEventListener('zoomend', function() {
				_this.mapZoom = _this.bmap.getZoom();
			});
		}
	}
};
</script>
<style lang="less">
	.bmap{
		width: 100%;
		height: 100%;
		position: relative;
		.map-box{
			width: 100%;
			height: 100%;
		}
		.notice{
			position: absolute;
			background: rgba(0,0,0,.5);
			z-index: 99;
			width: 100%;
			height: 38px;
			color: white;
			bottom: 0px;
			line-height: 38px;
			padding-left: 42px;
			padding-right: 10px;
			&:before{
				top: 5px;
				left: 5px;
				content: '';
				width: 28px;
				height: 28px;
				display: block;
				position: absolute;
				background-position: center;
				background-repeat: no-repeat;
				background-image: url('../../../assets/main/notice.png');
			}
		}
	}
</style>