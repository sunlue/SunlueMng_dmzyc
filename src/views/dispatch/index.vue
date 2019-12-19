<template>
	<div class="dispatch">
		<Row :gutter="10" class="h100">
			<Col span="6" class="h100">
				<Col span="24">
					<s-flop :number="flop.year" title="2019年累计发生应急事件" unit="件"></s-flop>
					<s-flop :number="flop.month" title="10月累计发生应急事件" unit="件" class="mt"></s-flop>
				</Col>
				<Col span="24" class="proportion mt">
					<panel title="应急事件年度统计分析" title_en="Annual statistical analysis of emergency events">
						<v-chart :options="echart.proportion"></v-chart>
					</panel>
				</Col>
				<Col span="24" class="trend mt">
					<panel title="应急事件年度趋势" title_en="Annual trends in emergencies">
						<v-chart :options="echart.trend"></v-chart>
					</panel>
				</Col>
			</Col>
			<Col span="18" class="h100">
				<Row :gutter="10" class="h100">
					<Col span="16" class="h100">
						<div class="map" ref="map">
							<img src="../../assets/dispatch/map.png" />
						</div>
						<panel title="应急事件" ref="eventbox" title_en="Emergency rescue" class="event mt">
							<s-event ref="event"></s-event>
						</panel>
					</Col>
					<Col span="8" class="h100">
						<panel title="应急知识库" title_en="Emergency knowledge base" class="knowledge list">
							<div class="scroll">
								<List item-layout="vertical">
									<ListItem v-for="i in 10" :key="i">
										<ListItemMeta >
											<template slot="title">这是列表的文本内容，这是列表的文本内容，这是列表的文本内容，这是列表的文本内容，这是列表的文本内容，这是列表的文本内容。</template>
										</ListItemMeta>
										<template slot="action">
											<li>
												<Icon type="ios-star-outline" /> 123
											</li>
											<li>
												<Icon type="ios-thumbs-up-outline" /> 234
											</li>
											<li>
												<Icon type="ios-chatbubbles-outline" /> 345
											</li>
											<li>
												<a href="">查看</a>
											</li>
											<li>
												<a href="">删除</a>
											</li>
										</template>
									</ListItem>
								</List>
							</div>
						</panel>
						<panel title="应急知识库" title_en="Emergency knowledge base" class="knowledge type mt">
							<Row :gutter="10">
								<template v-for="i in 4">
									<Col span="12" :key="i">
										<div class="box" :key="i">
											<p>火灾</p>
											<strong>40</strong>
										</div>
									</Col>
								</template>
							</Row>
						</panel>
					</Col>
				</Row>
			</Col>
		</Row>
	</div>
</template>

<script>
	import sFlop from './flop'
	import sEvent from './event'
	import panel from '@/components/panel';
	import analyze from '@/components/analyze';
	export default{
		components:{
			panel,
			sFlop,
			sEvent
		},
		data(){
			return{
				echart:{
					trend:{},
					proportion:{}
				},
				flop:{
					year:'',
					month:''
				}
			}
		},
		mounted() {
			this.receiveNumber();
			// this.$refs.event.eventCome()
			analyze.dispatch.trend([120, 132, 101, 134, 90, 230, 210, 134, 90, 230, 210, 122]).then(result=>{
				this.echart.trend=result
			})
			analyze.dispatch.proportion().then(result=>{
				this.echart.proportion=result
			})
		},
		methods:{
			receiveNumber(){
				let that=this;
				that.flop.year=Math.ceil(Math.random() * 1000000);
				that.flop.month=Math.ceil(Math.random() * 1000000);
				let timer=setTimeout(function() {
					that.receiveNumber();
					clearTimeout(timer)
				}, 3000);
			}
		}
	}
</script>

<style lang="less">
	.dispatch{
		padding: 20px 10px 10px 10px;
		.mt{
			margin-top: 10px;
		}
		.h100{
			height: 100%;
		}
		.proportion{
			height: calc(100% - 600px);
			.panel{
				height: 100%;
				.panel-body{
					height: calc(100% - 53px)
				}
			}
		}
		.trend{
			.panel-body{
				height: 260px;
			}
		}
		.map{
			height: calc(100% - 490px);
			img{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
		
		.knowledge{
			&.type{
				.ivu-col{
					margin-top: 10px;
					&:first-child,&:nth-child(2){
						margin-top: 0px;
					}
					.box{
						border-top: 2px solid rgb(2,114,252);
						border-bottom: 2px solid rgb(2,114,252);
						text-align: center;
						padding: 16px 0px;
						p{
							color: white;
							font-size: 16px;
						}
						strong{
							color: rgb(7,219,225);
							font-size: 26px;
						}
					}
				}
			}
			&.list{
				width: 100%;
				height: calc(100% - 300px);
				.panel-body{
					width: 100%;
					height: calc(100% - 53px);
					overflow: hidden;
					position: relative;
					.scroll{
						width: 100%;
						height: 100%;
						overflow-y: auto;
						position: absolute;
					}
				}
				.ivu-list-item-meta{
					.ivu-list-item-meta-title{
						color: white;
					}
				}
				.ivu-list-item-action{
					li{
						color: white;
						.ivu-icon{
							color: white;
						}
					}
				}
			}
		}
	}
</style>
