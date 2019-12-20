const option = {
	staytime: function() {
		return {
			color: ['rgb(2,114,252)', 'rgb(235,97,95)', 'rgb(255,170,1)', 'rgb(7,219,225)', 'rgb(136,217,4)', 'rgb(255,102,0)',
				'rgb(255,51,153)'
			],
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				show: false,
				orient: 'horizontal',
				data: ['1天', '2-3天', '4-7天', '7天以上'],
				textStyle: {
					color: 'white'
				}
			},
			series: [{
					name: '车辆停留',
					type: 'pie',
					radius: [0, '40%'],
					center: ["50%", "50%"],
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
							value: 20,
							name: '1天'
						},
						{
							value: 21,
							name: '2-3天'
						},
						{
							value: 18,
							name: '4-7天'
						},
						{
							value: 14,
							name: '7天以上'
						}
					]
				},
				{
					name: '车辆停留',
					type: 'pie',
					radius: ['50%', '92%'],
					center: ["50%", "50%"],
					label: {
						normal: {
							position: 'inner',
							formatter: '{c|{c}}辆({d|{d}%)}\n停留{b|{b}}',
							padding: [0, 2, 0, 10],
							rich: {
								b: {
									lineHeight: 22,
									color: 'white'
								},
								c: {
									color: 'white'
								},
								d: {
									color: 'white',
								}
							}
						}
					},
					data: [{
							value: 12,
							name: '1-2小时'
						},
						{
							value: 20,
							name: '2-4小时'
						},
						{
							value: 26,
							name: '4-6小时'
						},
						{
							value: 10,
							name: '6-8小时'
						},
						{
							value: 8,
							name: '8-10小时'
						},
						{
							value: 6,
							name: '10-12小时'
						},
						{
							value: 7,
							name: '12-24小时'
						}
					]
				}
			]
		};
	},
	month: function(data) {
		if (data == undefined) return {}
		var color = ['rgb(2,114,252)', 'rgb(235,97,95)', 'rgb(255,170,1)', 'rgb(7,219,225)', 'rgb(136,217,4)','rgb(255,102,0)','rgb(255,51,153)'];
		var monthList = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
		let startYear = new Date().getFullYear() - 4;
		let endYear = new Date().getFullYear();
		var options = [];
		let timeline = [];
		for (var year = startYear; year <= endYear; year++) {
			if (data[year] == undefined) {
				continue;
			}
			var temp = data[year];
			for (var i = 0, l = temp.length; i < l; i++) {
				data[year][i] = {
					name: monthList[i],
					value: temp[i]
				}
			}
			options.push({
				title: {
					text: year + '各月车流量',
					subtext: 'Monthly traffic in '+year,
					textStyle: {
						color: '#ffffff',
						fontSize:16,
						fontWeight:'bold',
						height:28
					},
					subtextStyle:{
						fontSize:14,
						color:'white',
						height:20,
					}
				},
				color: color,
				tooltip:{
					trigger: 'item',
				},
				series: [{
					data: data[year],
					barWidth:'80%',
					barMaxWidth:60,
					barMinWidth:40,
					label: {
						normal: {
							show: true,
							position: 'insideBottom',
							distance: 15,
							align: 'left',
							verticalAlign: 'middle',
							rotate: 90,
							formatter: '{c}',
							fontSize: 16,
							rich: {
								name: {
									color: '#fff'
								}
							}
						}
					},
				}, {
					data: data[year],
					lable:false,
					tooltip : {
						formatter: "{b}: {c}辆  <br/> 占比:{d}%"
					},
				}]
			})
			timeline.push(year);
		}
		timeline.map((year, index) => {
			if (index == 0 || index == timeline.length - 1) {
				timeline[index] = {
					value: year + '-01-01',
					symbol: 'diamond',
					symbolSize: 16
				}
			} else {
				timeline[index] = year + '-01-01';
			}
		})
		return {
			baseOption: {
				timeline: {
					axisType: 'category',
					autoPlay: true,
					playInterval: 3000,
					lineStyle: {
						color: 'white'
					},
					itemStyle: {
						color: 'white'
					},
					controlStyle: {
						color: 'white',
						borderColor: 'white'
					},
					checkpointStyle: {
						color: 'rgb(131,191,246)',
						borderColor: 'rgba(255,255,255,.5)'
					},
					data: timeline,
					label: {
						color: 'white',
						formatter: function(s) {
							return (new Date(s)).getFullYear();
						}
					}
				},
				color: ['rgb(49,104,187)', 'rgb(38,201,251)', 'rgb(131,191,246)', 'rgb(13,45,172)'],
				calculable: true,
				grid: {
					top: 120,
					left: 40,
					right: 20,
					bottom: 80,
					// tooltip: {
					// 	trigger: 'axis',
					// 	axisPointer: {
					// 		type: 'shadow',
					// 		label: {
					// 			show: true,
					// 			formatter: function(params) {
					// 				return params.value.replace('\n', '');
					// 			}
					// 		}
					// 	}
					// }
				},
				xAxis: [{
					'type': 'category',
					'axisLabel': {
						'interval': 0
					},
					'data': monthList,
					splitLine: false,
					axisLine: {
						lineStyle: {
							color: '#ffffff',
						}
					},
				}],
				yAxis: [{
					type: 'value',
					name: '车流（辆）',
					nameTextStyle: {
						color: '#ffffff'
					},
					axisLine: {
						lineStyle: {
							color: '#ffffff',
						}
					},
					splitLine: false
				}],
				series: [{
						type: 'bar'
					},
					{
						type: 'pie',
						center: ['85%', '26%'],
						radius: ['20%','38%'],
						label: {
							normal: {
								position: 'inner',
								formatter: "{b}"
							}
						}
					}
				]
			},
			options: options
		};
	}
}

export default option;
