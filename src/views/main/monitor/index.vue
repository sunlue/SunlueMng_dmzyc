<template>
	<div class="s-monitor">
		<div class="box">
			<iframe id="video0" name="video0" allowfullscreen
				src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/203751922/1.live&autoplay=1&accessToken=ra.44xft0z79yymr2km4t268ak568b8o3mo-9ke8mgjcmc-1ct46px-abl7lsw4l"
			></iframe>
		</div>
		<div class="box">
			<iframe id="video1" allowfullscreen
				src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/D75659417/1.live&autoplay=1&accessToken=at.7expi8sg65nqwt370szgzs5mcfs8h3zt-9rhghxkihd-0mx02jh-p4cylmicn"
			></iframe>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {
		/* 获取播放器元素 */
		// var player = document.getElementById('video0').contentWindow;
		/* iframe 支持方法 */
		// player.postMessage('play', 'https://open.ys7.com/ezopen/h5/iframe'); /* 播放 */
		// player.postMessage('stop', 'https://open.ys7.com/ezopen/h5/iframe'); /* 结束 */
		// player.postMessage('capturePicture', 'https://open.ys7.com/ezopen/h5/iframe'); /* 截图 */
		// player.postMessage('openSound', 'https://open.ys7.com/ezopen/h5/iframe'); /* 开启声音 */
		// player.postMessage('closeSound', 'https://open.ys7.com/ezopen/h5/iframe'); /* 关闭声音 */
		// player.postMessage('startSave', 'https://open.ys7.com/ezopen/h5/iframe'); /* 开始录制 */
		// player.postMessage('stopSave', 'https://open.ys7.com/ezopen/h5/iframe'); /* 结束录制 */
	}
};
</script>

<style lang="less">
	.s-monitor{
		.box{
			float: left;
			width: calc(50% - 5px);
			&:first-child{
				padding-right: 5px;
			}
			&:last-child{
				padding-left: 5px;
			}
			iframe{
				width: 100%;
				height:100%;
				border: none;
				svg{
					width: 16px;
					height: 16px;
				}
			}
		}
		&:after{
			content: '';
			display: block;
			clear: both;
		}
	}
</style>
