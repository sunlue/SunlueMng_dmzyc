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
import 'video.js/dist/video-js.css';
import 'videojs-flash'
import { videoPlayer } from 'vue-video-player';
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
				aspectRatio:'16:9',
				sources: [
					{
						type: 'rtmp/mp4',
						src: 'rtmp://rtmp01open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.hd'
					}
				],
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
			// console.log('player play!', player)
		},
		onPlayerPause(player) {
			// console.log('player pause!', player)
		},
		// ...player event

		// or listen state event
		playerStateChanged(playerCurrentState) {
			// console.log('player current update state', playerCurrentState)
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
