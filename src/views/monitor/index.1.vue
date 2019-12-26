
<iframe
  src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/D75659417/1.live&autoplay=0&accessToken=at.7expi8sg65nqwt370szgzs5mcfs8h3zt-9rhghxkihd-0mx02jh-p4cylmicn"
  width="600"
  height="400"
  id="ysopen"
  allowfullscreen
>
</iframe>
/* 获取播放器元素 */
var player = document.getElementById('ysOpenDevice').contentWindow;
/* iframe 支持方法 */
player.postMessage("play", "https://open.ys7.com/ezopen/h5/iframe") /* 播放 */
player.postMessage("stop", "https://open.ys7.com/ezopen/h5/iframe") /* 结束 */
player.postMessage("capturePicture", "https://open.ys7.com/ezopen/h5/iframe") /* 截图 */
player.postMessage("openSound", "https://open.ys7.com/ezopen/h5/iframe") /* 开启声音 */
player.postMessage("closeSound", "https://open.ys7.com/ezopen/h5/iframe") /* 关闭声音 */
player.postMessage("startSave", "https://open.ys7.com/ezopen/h5/iframe") /* 开始录制 */
player.postMessage("stopSave", "https://open.ys7.com/ezopen/h5/iframe") /* 结束录制 */