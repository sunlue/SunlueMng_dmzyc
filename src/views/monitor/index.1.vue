<template>
	<video-player
		class="video-player-box"
		ref="videoPlayer"
		:options="playerOptions"
		:playsinline="true"
		customEventName="customstatechangedeventname"
		@ready="playerReadied"
	></video-player>
</template>

<script>
import 'videojs-flash';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import SWF_URL from 'videojs-swf/dist/video-js.swf';
videojs.options.flash.swf = SWF_URL;
import { videoPlayer } from 'vue-video-player';
import 'vue-video-player/src/custom-theme.css';

export default {
	components: {
		videoPlayer
	},
	data() {
		return {
			playerOptions: {
				muted: true,
				language: 'zh-CN',
				playbackRates: [0.7, 1.0, 1.5, 2.0],
				aspectRatio: '16:9',
				sources: [
					// {
					// 	type: 'application/x-mpegURL',
					// 	src: 'http://hls01open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.hd.m3u8'
					// },
					{
						type: 'rtmp/mp4',
						src: 'rtmp://rtmp01open.ys7.com/openlive/fd344835538d465b9496750b4f417d67.hd'
					}
				],
				techOrder: ['flash'],
				poster: '/static/images/author.jpg'
			}
		};
	},
	mounted() {
		console.log('this is current player instance object', this.player);
	},
	computed: {
		player() {
			return this.$refs.videoPlayer.player;
		}
	},
	methods: {
		// listen event
		onPlayerPlay(player) {
			console.log('player play!', player);
		},
		onPlayerPause(player) {
			console.log('player pause!', player);
		},
		// ...player event

		// or listen state event
		playerStateChanged(playerCurrentState) {
			console.log('player current update state', playerCurrentState);
		},

		// player is ready
		playerReadied(player) {
			console.log('the player is readied', player);
			// you can use it to do something...
			// player.[methods]
		}
	}
};
</script>
