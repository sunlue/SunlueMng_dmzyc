const option = {
	trend: function(data) {
		return {
			color: ['rgb(13,230,151)'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				}
			},
			grid: {
				top:'8%',
				left: '3%',
				right: '4%',
				bottom: '0%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
				axisLine: {
					lineStyle: {
						color: 'white'
					},
				}
			}],
			yAxis: [{
				type: 'value',
				axisLine: {
					lineStyle: {
						color: 'white'
					},
				}
			}],
			series: [{
				name: '事件',
				type: 'line',
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(6,114,252,1)' // 0% 处的颜色
						}, {
							offset: 1,
							color: 'rgba(6,114,252,0)' // 100% 处的颜色
						}],
						global: false // 缺省为 false
					},
					shadowColor: 'rgba(0, 0, 0, 0.5)',
					shadowBlur: 10
				},
				data: data,
				itemStyle: {
					borderColor: 'rgb(6,111,242)'
				}
			}]
		};

	},
	proportion: function() {
		return {
			color: ['rgb(2,114,252)', 'rgb(235,97,95)', 'rgb(255,170,1)', 'rgb(7,219,225)', 'rgb(136,217,4)'],
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			grid:{
				bottom:'0%'
			},
			legend: {
				orient: 'horizontal',
				data: ['社会安全事件', '事故灾难', '公共卫生事件', '自然灾害'],
				textStyle: {
					color: 'white'
				}
			},
			series: [{
					name: '事件',
					type: 'pie',
					selectedMode: 'single',
					radius: [0, '40%'],
					center: ["50%", "60%"],
					label: {
						normal: {
							position: 'inner',
							formatter: '{b}\n{d}%  ',
						},
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [{
							value: 335,
							name: '社会安全事件'
						},
						{
							value: 679,
							name: '事故灾难'
						},
						{
							value: 578,
							name: '公共卫生事件'
						},
						{
							value: 30,
							name: '自然灾害'
						}
					]
				},
				{
					name: '事件',
					type: 'pie',
					radius: ['50%', '65%'],
					center: ["50%", "60%"],
					label: {
						normal: {
							formatter: '{b|{b}：}{c} \n {per|{d}%}',
							// backgroundColor: '#eee',
							// borderColor: '#aaa',
							// borderWidth: 1,
							// borderRadius: 4,
							// shadowBlur: 3,
							// shadowOffsetX: 2,
							// shadowOffsetY: 2,
							// shadowColor: '#999',
							padding: [0, 2, 0, 10],
							rich: {
								b: {
									fontSize: 12,
									lineHeight: 22,
									// color: 'white'
								},
								per: {
									// color: 'white',
									lineHeight: 20
								}
							}
						}
					},
					data: [{
							value: 335,
							name: '预警'
						},
						{
							value: 310,
							name: '求助'
						},
						{
							value: 234,
							name: '救援'
						},
						{
							value: 135,
							name: '建议'
						},
						{
							value: 1048,
							name: '咨询'
						},
						{
							value: 102,
							name: '其他'
						}
					]
				}
			]
		};
	}
}

export default option;
