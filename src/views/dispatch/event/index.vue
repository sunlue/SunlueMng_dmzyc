<template>
	<div class="event">
		<Table :columns="table.column" :data="table.data" size="small" class="table"></Table>
		<Modal v-model="result.show" :title="result.title">
			<Timeline>
				<template v-for="(item, index) in result.step">
					<TimelineItem :key="index" :color="item.color">
						<p class="time">{{ item.time }}</p>
						<p class="content">{{ item.content }}</p>
					</TimelineItem>
				</template>
			</Timeline>
		</Modal>
		<Modal v-model="dealwith.show" :title="dealwith.title" :footer-hide="true" :width="1000" :draggable="true">
			<Steps :current="dealwith.step">
				<template v-for="(item, index) in dealwith.steps">
					<Step :key="index" :title="item.title" :content="item.content"></Step>
				</template>
			</Steps>
			<template v-if="dealwith.step == 1">
				<Button long type="info" style="margin-top: 10px;" @click="eventDealwith(2)">派发</Button>
				<Button long type="success" style="margin-top: 10px;" @click="eventDealwith(3)">处理完毕</Button>
			</template>
			<template v-if="dealwith.step == 2">
				<Button long type="warning" style="margin-top: 10px;" @click="eventDealwith(1)">重新派发</Button>
				<Button long type="success" style="margin-top: 10px;" @click="eventDealwith(3)">处理完毕</Button>
			</template>
			<template v-if="dealwith.step == 3">
				<Button long type="dashed" readonly style="margin-top: 10px;">处理完毕</Button>
			</template>
		</Modal>

		<Modal v-model="alarm" :closable="false" :footer-hide="true" class-name="alarm-modal">
			<div class="alarm">
				<audio src="../../../assets/main/event/alarm.mp3" id="audio" controls="controls"></audio>
			</div>
		</Modal>
	</div>
</template>

<script>
export default {
	data() {
		let that = this;
		return {
			table: {
				column: [
					{
						title: '事件名称',
						key: 'name',
						align: 'center'
					},
					{
						title: '事件类型',
						key: 'type',
						align: 'center',
						width: 100
					},
					{
						title: '事件等级',
						key: 'level',
						align: 'center',
						width: 100
					},
					{
						title: '事件地点',
						key: 'address',
						align: 'center',
						maxWidth: 120
					},
					{
						title: '操作',
						key: 'action',
						width: 100,
						align: 'center',
						render: (h, params) => {
							let level = ['warning', 'info'];
							let state = ['处理', '处理中', '处理完成'];
							if (params.row.status == 2) {
								return h(
									'Button',
									{
										props: {
											size: 'small',
											type: 'success'
										},
										on: {
											click() {
												that.result.show = true;
												that.result.title = params.row.name;
											}
										}
									},
									state[params.row.status]
								);
							} else {
								return h(
									'Button',
									{
										props: {
											size: 'small',
											type: level[params.row.status]
										},
										on: {
											click() {
												that.dealwith.show = true;
												that.dealwith.title = params.row.name;
												that.dealwith.step = params.row.status < 1 ? 1 : 2;
												that.activeDealwith = params.row;
											}
										}
									},
									state[params.row.status]
								);
							}
						}
					}
				],
				data: [
					{
						name: '重污染天气预警',
						type: '预警',
						level: '黄色',
						address: '崇州',
						status: 0
					},
					{
						name: '竹里求助点求助',
						type: '求助',
						level: 'Ⅰ级',
						address: '竹里',
						status: 2
					},
					{
						name: '游客中心触摸屏故障',
						type: '设备损坏',
						level: 'Ⅱ级',
						address: '游客中心',
						status: 1
					},
					{
						name: '气象台黄色暴雨预警',
						type: '预警',
						level: '黄色',
						address: '崇州',
						status: 1
					},
					{
						name: '气象台黄色暴雨预警',
						type: '预警',
						level: '黄色',
						address: '崇州',
						status: 1
					},
					{
						name: '气象台黄色暴雨预警',
						type: '预警',
						level: '黄色',
						address: '崇州',
						status: 1
					},
					{
						name: '气象台黄色暴雨预警',
						type: '预警',
						level: '黄色',
						address: '崇州',
						status: 1
					},
					{
						name: '气象台黄色暴雨预警',
						type: '预警',
						level: '黄色',
						address: '崇州',
						status: 1
					},
					{
						name: '气象台黄色暴雨预警',
						type: '预警',
						level: '黄色',
						address: '崇州',
						status: 1
					}
				]
			},
			activeDealwith: {},
			dealwith: {
				show: false,
				title: '',
				step: 1,
				steps: [
					{
						content: '2019/12/17 09:00:23',
						title: '事件上报'
					},
					{
						content: '',
						title: '事件派发'
					},
					{
						content: '',
						title: '事件处理'
					},
					{
						content: '',
						title: '处理结果'
					}
				]
			},
			result: {
				show: false,
				title: '',
				step: [
					{
						time: '2019/12/17 09:00:23',
						content: '事件上报',
						color: 'red'
					},
					{
						time: '2019/12/17 09:00:23',
						content: '事件处理',
						color: 'green'
					},
					{
						time: '2019/12/17 09:00:23',
						content: '处理异常',
						color: 'green'
					},
					{
						time: '2019/12/17 09:00:23',
						content: '处理完成',
						color: 'red'
					}
				]
			},
			alarm:false
		};
	},
	mounted() {
		let alarmElem=document.getElementsByClassName('alarm');
		alarmElem[0].onclick=function(){
			console.log('开始播放')
			document.getElementById('audio').play()
		}
	},
	methods: {
		eventCome(){
			this.$Notice.info({
				title: '竹里求助点求助',
				duration: 15,
				render: h => {
					return h('Button',{
						props: {
							type: 'warning',
							long: true
						}
					},'处理');
				},
				onClose:()=>{
					document.getElementById('audio').pause();
				}
			});
			this.$nextTick(function(){
				this.alarm=true
				document.getElementsByClassName('alarm')[0].dispatchEvent(new Event('click'));
			})
		},
		eventDealwith(step) {
			let date = new Date();
			let y = date.getFullYear();
			let m = date.getMonth() + 1;
			let d = date.getDate();
			let h = date.getHours();
			let i = date.getMinutes();
			let s = date.getSeconds();
			this.dealwith.step = step;
			this.dealwith.steps[step - 1]['content'] = y + '/' + m + '/' + d + ' ' + h + ':' + i + ':' + s;
			switch (step) {
				case 1:
				case 2:
					this.activeDealwith.status = 1;
					break;
				default:
					break;
			}
		}
	}
};
</script>

<style lang="less">
.event {
	.table {
		border-top: 1px solid rgba(255,255,255,0.2);
		border-left: 1px solid rgba(255,255,255,0.2);;
		.ivu-table {
			background: transparent;
			&:after,
			&:before {
				background-color: rgba(255, 255, 255, 0.2) !important;
			}
			.ivu-table-cell {
				padding-left: 6px;
				padding-right: 6px;
			}
			th,
			td {
				background: transparent;
				color: white;
				border-right: 1px solid rgba(255,255,255,0.2);
				border-bottom: 1px solid rgba(255, 255, 255, 0.2);
			}
			th {
				color: white;
			}
			td {
				color: #99baf0 !important;
			}
		}
	}
}
.alarm {
	width: 500px;
	height: 500px;
	background-image: url('../../../assets/main/event/alarm3.png');
	-webkit-animation: alarmFlash 2s infinite linear;
	animation: alarmFlash 1000ms infinite linear;
	audio{
		display: none;
	}
}
.alarm-modal{
	display: flex;
	align-items: center;
	justify-content: center;

	.ivu-modal{
			top: 0;
	}
	.ivu-modal-content{
		background: transparent;
		box-shadow: none;
	}
}
@-webkit-keyframes alarmFlash {
	0% {
		background-image: url('../../../assets/main/event/alarm.png');
	}
	25% {
		background-image: url('../../../assets/main/event/alarm2.png');
	}
	50% {
		-webkit-transform: scale(1.1);
		background-image: url('../../../assets/main/event/alarm3.png');
	}
	75% {
		background-image: url('../../../assets/main/event/alarm2.png');
	}
	100% {
		background-image: url('../../../assets/main/event/alarm.png');
	}
}
@keyframes alarmFlash {
	0% {
		background-image: url('../../../assets/main/event/alarm.png');
	}
	25% {
		background-image: url('../../../assets/main/event/alarm2.png');
	}
	50% {
		-webkit-transform: scale(1.1);
		background-image: url('../../../assets/main/event/alarm3.png');
	}
	75% {
		background-image: url('../../../assets/main/event/alarm2.png');
	}
	100% {
		background-image: url('../../../assets/main/event/alarm.png');
	}
}
</style>
