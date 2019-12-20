<template>
	<div class="monitor">
		<!-- <template v-for="i in 16">
			<div class="col" :key="i">
				<panel title="竹里" :key="i">
					<div class="box empty">
					</div>
				</panel>
			</div>
		</template> -->
		<Row>
			<Col span="6">
				<panel title=""></panel>
			</Col>
		</Row>
	</div>
</template>

<script>
import panel from '@/components/panel'
export default {
	components: {
		panel
	},
	data() {
		return{
			items:[{
				name:'游客中心',
				hls:'',
				rtmp:''
			}]
		}
	},
	mounted() {
		let img=document.getElementsByTagName('img');
		console.log(img)
	}
};
</script>
<style lang="less">
	.monitor{
		padding: 5px;
		.col{
			margin: 5px;
			width: calc(25% - 10px);
			height: calc(25% - 10px);
			float: left;
			.panel{
				height: 100%;
				.panel-body{
					height: calc(100% - 28px);
					overflow: hidden;
					.box{
						width: 100%;
						height: 100%;
						&.empty{
							background-image:url('../../assets/monitor/spjk.png');
							background-size: 100% 100%;
							background-position: center;
						}
					}
				}
			}
		}
	}
</style>
