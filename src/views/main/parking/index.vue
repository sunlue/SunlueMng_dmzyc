<template>
	<Table :columns="parking.column" :border="true" :data="parking.data" size="small" class="parking-table"></Table>
</template>

<script>
	export default {
		data() {
			return {
				parking:{
					column:[{
						title: '停车场',
						key: 'name',
						align:'center'
					},{
						title: '共计',
						key: 'total',
						align:'center',
						width:62
					},{
						title: '已使用',
						key: 'use',
						align:'center',
						width:74
					},{
						title: '未使用',
						align:'center',
						width:74,
						render:(h,params)=>{
							return h('span',params.row.total-params.row.use);
						}
					},{
						title: '使用占比',
						width:90,
						align:'center',
						render:(h,params)=>{
							let result=(params.row.use/params.row.total*100).toFixed(2)
							return h('span',result+'%');
						}
					}],
					data:[{
						name:'竹艺村生态停车场',
						total:'50',
						use:'30'
					},{
						name:'竹艺村景区停车场',
						total:'120',
						use:'52'
					},{
						name:'竹艺村生态景区停车场',
						total:'158',
						use:'46'
					}]
				},
			};
		},
	};
</script>

<style lang="less">
	.parking-table{
		border-top: 1px solid rgba(255,255,255,0.2);
		border-left: 1px solid rgba(255,255,255,0.2);;
		.ivu-table{
			background: transparent;
			&:after,&:before{
				background-color:rgba(255,255,255,0.2) !important;
			}
			th,td{
				background: transparent;
				color: white;
				border-right: 1px solid rgba(255,255,255,0.2);
				border-bottom: 1px solid rgba(255,255,255,0.2);
			}
			th{
				color: white;
			}
			td{
				color:#99baf0 !important;
				
			}
		}
	}
</style>
