<template>
	<div class="main">
		<Row :gutter="5" style="margin-left: 0px;margin-right: 0px;">
			<Col span="6" style="height: 100%;padding-left: 0px;">
				<panel title="实时环境监测" title_en="environmental monitoring">
					<s-environment></s-environment>
				</panel>
				<panel title="景区意见反馈" title_en="Customer feedback" class="mt">
					<s-feedback></s-feedback>
				</panel>
				<s-access class="mt"></s-access>
			</Col>
			<Col span="18" style="height: 100%;padding-right: 0px;">
				<Row :gutter="10" style="margin-right: 0px;margin-left: 0px;">
					<Col span="16" style="height: 100%;">
						<!-- <flop title="实时游客量" title_en="Real-time Visitor Numbers" unit="人"></flop> -->
						<s-flop class="flop" :number="number" unit="人"></s-flop>
						<s-map class="s-map">
							<s-notice slot="message"></s-notice>
						</s-map>
						<panel class="mt">
							<s-tourists></s-tourists>
						</panel>
					</Col>
					<Col span="8" style="padding-right: 0px;">
						<panel title="实时车流量" title_en="Real-time traffic">
							<s-traffic></s-traffic>
						</panel>
						<panel title="停车场数据情况" title_en="Parking lot data" class="mt">
							<s-parking></s-parking>
						</panel>
						<panel title="事件处理" title_en="The event processing" class="mt">
							<s-event ref="event"></s-event>
						</panel>
						<panel title="视频监控" title_en="Video monitoring" class="mt">
							<s-monitor></s-monitor>
						</panel>
					</Col>
				</Row>
			</Col>
		</Row>
	</div>
</template>
<script>
import sFlop from './flop.vue';
import sMap from './map';
import sNotice from './notice';
import sEvent from './event';
import sMonitor from './monitor';
import sFeedback from './feedback';
import sAccess from './access';
import sEnvironment from './environment';
import sTraffic from './traffic';
import sParking from './parking';
import sTourists from './tourists';
import panel from '@/components/panel';
export default {
	components: {
		sFlop,
		panel,
		sMap,
		sNotice,
		sEvent,
		sMonitor,
		sFeedback,
		sAccess,
		sEnvironment,
		sTraffic,
		sParking,
		sTourists
	},
	data() {
		return {
			number:Math.ceil(Math.random() * 1000000)
		};
	},
	mounted() {
		let that=this;
		that.receiveNumber()
		setTimeout(function() {
			// that.$refs.event.eventCome()
		}, 30000);
	},
	methods:{
		receiveNumber(){
			let that=this;
			let number=Math.ceil(Math.random() * 1000000);
			let timer=setTimeout(function() {
				that.number=number;
				that.receiveNumber();
				clearTimeout(timer)
			}, 3000);
		}
	}
};
</script>
<style lang="less">
	.main{
		padding: 16px 10px 10px;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		.ivu-row{
			width: 100%;
			height: 100%;
		}
		
		.mt{
			margin-top: 10px;
		}
		
		.flop{
			height: 108px;
			&+.s-map{
				height: calc(100% - 436px);
				margin-top: 18px;
				border:4px solid rgb(35, 36, 109);
				position: relative;
				.BMap_cpyCtrl,.anchorBL{
					display: none;
				}
				&+div{
					height: 300px;
					.panel-body{
						height: 100%;
					}
				}
			}
		}
	}
	.echarts,
	.echarts > div:first-child,
	.echarts > div > canvas {
		width: 100% !important;
		height: 100% !important;
	}
	
</style>
