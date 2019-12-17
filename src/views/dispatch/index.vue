<template>
	<div class="dispatch">
		<Row :gutter="10">
			<Col span="12">
				<div class="map">
					<img src="../../assets/dispatch/map.png" />
				</div>
				<panel title="应急事件" title_en="Emergency rescue" class="mt">
					<s-event ref="event"></s-event>
				</panel>
			</Col>
			<Col span="12">
				<Col span="24">
					<Col span="11">
						<s-flop number="000105" title="2019年累计发生应急事件" unit="件"></s-flop>
					</Col>
					<Col span="11" offset="2">
						<s-flop number="000105" title="10月累计发生应急事件" unit="件"></s-flop>
					</Col>
				</Col>
				<Col span="12">
					占比统计
				</Col>
				<Col span="12">
					折线趋势
				</Col>
				<Col span="24">
					应急知识库
				</Col>
			</Col>
		</Row>
	</div>
</template>

<script>
	import sFlop from './flop'
	import sEvent from './event'
	
	import panel from '@/components/panel';
	export default{
		components:{
			panel,
			sFlop,
			sEvent
		},
		mounted() {
			// this.$refs.event.eventCome()
		}
	}
</script>

<style lang="less">
	.dispatch{
		padding: 20px 10px 10px 10px;
		.mt{
			margin-top: 10px;
		}
		.map{
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
