<template>
	<div class="monitor">
		<template v-for="index in 16">
			<div class="col" :key="index">
				<div class="box empty" v-if="!items[index - 1]">
					<video :id="['myvideo' + (index - 1)]" style="width: 100%;height: 100%;"></video>
				</div>
				<div class="box" v-else>
					<video
						:id="['myvideo' + (index - 1)]"
						class="video-js vjs-default-skin vjs-big-play-centered"
						controls
						preload="auto"
						autoplay="autoplay"
						poster="../../assets/monitor/spjk.png"
						style="width: 100%;height: 100%;">
						<source :src="items[index - 1].hls" />
					</video>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';
import 'videojs-flash';
import SWF_URL from 'videojs-swf/dist/video-js.swf';
videojs.options.flash.swf = SWF_URL;
export default {
	data() {
		return {
			items: [
				{
					name: '游客中心',
					hls: 'http://hls01open.ys7.com/openlive/fd344835538d465b9496750b4f417d67.hd.m3u8',
					rtmp: ''
				},
				{
					name: '竹里',
					hls: 'http://hls01open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.hd.m3u8',
					rtmp: ''
				}
			],
			video:[]
		};
	},
	mounted() {
		let params = { fluid: true};

		this.$nextTick(function() {
			let video0 = videojs('myvideo0', params);
			let video1 = videojs('myvideo1', params);
			let video2 = videojs('myvideo2', params);
			let video3 = videojs('myvideo3', params);
			let video4 = videojs('myvideo4', params);
			let video5 = videojs('myvideo5', params);
			let video6 = videojs('myvideo6', params);
			let video7 = videojs('myvideo7', params);
			let video8 = videojs('myvideo8', params);
			let video9 = videojs('myvideo9', params);
			let video10 = videojs('myvideo10', params);
			let video11 = videojs('myvideo11', params);
			let video12 = videojs('myvideo12', params);
			let video13 = videojs('myvideo13', params);
			let video14 = videojs('myvideo14', params);
			let video15 = videojs('myvideo15', params);
			this.$Modal.confirm({
				title: '提示',
				content: '确认初始化监控及播放监控视频？',
				onOk: function() {
					video0.play();
					video1.play();
					video2.play();
					video3.play();
					video4.play();
					video5.play();
					video6.play();
					video7.play();
					video8.play();
					video9.play();
					video10.play();
					video11.play();
					video12.play();
					video13.play();
					video14.play();
					video15.play();
				}
			});
		});
	}
};
</script>
<style lang="less">
.monitor {
	padding: 5px;
	.col {
		width: calc(100% / 3);
		height: calc(100% / 3);
		float: left;
		.box {
			width: 100%;
			height: 100%;
			video{
				width: 100%;
				height: 100%;
			}
			&.empty {
				background-image: url('../../assets/monitor/spjk.png');
				background-size: 100% 100%;
				background-position: center;
			}
		}
	}
}
</style>
