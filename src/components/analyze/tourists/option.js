const option = {
	dataFormatter: function(obj) {
		var pList = ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北',
			'湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'
		];
		var temp;
		for (var year = 2002; year <= 2011; year++) {
			var max = 0;
			var sum = 0;
			temp = obj[year];
			for (var i = 0, l = temp.length; i < l; i++) {
				max = Math.max(max, temp[i]);
				sum += temp[i];
				obj[year][i] = {
					name: pList[i],
					value: temp[i]
				}
			}
			obj[year + 'max'] = Math.floor(max / 100) * 100;
			obj[year + 'sum'] = sum;
		}
		return obj;
	},
	get: function() {
		var dataMap = {};
		dataMap.dataPI = this.dataFormatter({
			2011: [136.27, 159.72, 2905.73, 641.42, 1306.3, 1915.57, 1277.44, 1701.5, 124.94, 3064.78, 1583.04, 2015.31,
				1612.24, 1391.07, 3973.85, 3512.24, 2569.3, 2768.03, 2665.2, 2047.23, 659.23, 844.52, 2983.51, 726.22, 1411.01,
				74.47, 1220.9, 678.75, 155.08, 184.14, 1139.03
			],
			2010: [124.36, 145.58, 2562.81, 554.48, 1095.28, 1631.08, 1050.15, 1302.9, 114.15, 2540.1, 1360.56, 1729.02,
				1363.67, 1206.98, 3588.28, 3258.09, 2147, 2325.5, 2286.98, 1675.06, 539.83, 685.38, 2482.89, 625.03, 1108.38,
				68.72, 988.45, 599.28, 134.92, 159.29, 1078.63
			],
			2009: [118.29, 128.85, 2207.34, 477.59, 929.6, 1414.9, 980.57, 1154.33, 113.82, 2261.86, 1163.08, 1495.45,
				1182.74, 1098.66, 3226.64, 2769.05, 1795.9, 1969.69, 2010.27, 1458.49, 462.19, 606.8, 2240.61, 550.27, 1067.6,
				63.88, 789.64, 497.05, 107.4, 127.25, 759.74
			],
			2008: [112.83, 122.58, 2034.59, 313.58, 907.95, 1302.02, 916.72, 1088.94, 111.8, 2100.11, 1095.96, 1418.09,
				1158.17, 1060.38, 3002.65, 2658.78, 1780, 1892.4, 1973.05, 1453.75, 436.04, 575.4, 2216.15, 539.19, 1020.56,
				60.62, 753.72, 462.27, 105.57, 118.94, 691.07
			],
			2007: [101.26, 110.19, 1804.72, 311.97, 762.1, 1133.42, 783.8, 915.38, 101.84, 1816.31, 986.02, 1200.18, 1002.11,
				905.77, 2509.14, 2217.66, 1378, 1626.48, 1695.57, 1241.35, 361.07, 482.39, 2032, 446.38, 837.35, 54.89, 592.63,
				387.55, 83.41, 97.89, 628.72
			],
			2006: [88.8, 103.35, 1461.81, 276.77, 634.94, 939.43, 672.76, 750.14, 93.81, 1545.05, 925.1, 1011.03, 865.98,
				786.14, 2138.9, 1916.74, 1140.41, 1272.2, 1532.17, 1032.47, 323.48, 386.38, 1595.48, 382.06, 724.4, 50.9,
				484.81, 334, 67.55, 79.54, 527.8
			],
			2005: [88.68, 112.38, 1400, 262.42, 589.56, 882.41, 625.61, 684.6, 90.26, 1461.51, 892.83, 966.5, 827.36, 727.37,
				1963.51, 1892.01, 1082.13, 1100.65, 1428.27, 912.5, 300.75, 463.4, 1481.14, 368.94, 661.69, 48.04, 435.77,
				308.06, 65.34, 72.07, 509.99
			],
			2004: [87.36, 105.28, 1370.43, 276.3, 522.8, 798.43, 568.69, 605.79, 83.45, 1367.58, 814.1, 950.5, 786.84, 664.5,
				1778.45, 1649.29, 1020.09, 1022.45, 1248.59, 817.88, 278.76, 428.05, 1379.93, 334.5, 607.75, 44.3, 387.88,
				286.78, 60.7, 65.33, 461.26
			],
			2003: [84.11, 89.91, 1064.05, 215.19, 420.1, 615.8, 488.23, 504.8, 81.02, 1162.45, 717.85, 749.4, 692.94, 560,
				1480.67, 1198.7, 798.35, 886.47, 1072.91, 658.78, 244.29, 339.06, 1128.61, 298.69, 494.6, 40.7, 302.66, 237.91,
				48.47, 55.63, 412.9
			],
			2002: [82.44, 84.21, 956.84, 197.8, 374.69, 590.2, 446.17, 474.2, 79.68, 1110.44, 685.2, 783.66, 664.78, 535.98,
				1390, 1288.36, 707, 847.25, 1015.08, 601.99, 222.89, 317.87, 1047.95, 281.1, 463.44, 39.75, 282.21, 215.51,
				47.31, 52.95, 305
			]
		});



		return {
			baseOption: {
				timeline: {
					axisType: 'category',
					autoPlay: true,
					playInterval: 3000,
					lineStyle:{
							color:'white'
					},
					itemStyle:{
						color:'white'
					},
					controlStyle:{
						color:'white',
						borderColor:'white'
					},
					checkpointStyle:{
						color:'rgb(131,191,246)',
						borderColor:'rgba(255,255,255,.5)'
					},
					data: [{
							value: '2005-01-01',
							symbol: 'diamond',
							symbolSize: 16
						},
						'2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01','2010-01-01',
						{
							value: '2011-01-01',
							symbol: 'diamond',
							symbolSize: 18,
						}
					],
					label: {
						color:'white',
						formatter: function(s) {
							return (new Date(s)).getFullYear();
						}
					}
				},
				color:['rgb(49,104,187)','rgb(38,201,251)','rgb(131,191,246)','rgb(13,45,172)'],
				calculable: true,
				grid: {
					top: 60,
					left: 40,
					right: 20,
					bottom: 100,
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow',
							label: {
								show: true,
								formatter: function(params) {
									return params.value.replace('\n', '');
								}
							}
						}
					}
				},
				xAxis: [{
					'type': 'category',
					'axisLabel': {
						'interval': 0
					},
					'data': [
						'北京', '\n天津', '河北', '\n山西', '内蒙古', '\n辽宁', '吉林', '\n黑龙江',
						'上海', '\n江苏', '浙江', '\n安徽', '福建', '\n江西', '山东', '\n河南',
						'湖北', '\n湖南', '广东', '\n广西', '海南', '\n重庆', '四川', '\n贵州',
						'云南', '\n西藏', '陕西', '\n甘肃', '青海', '\n宁夏', '新疆'
					],
					splitLine: false,
					axisLine: {
						lineStyle: {
							color: '#ffffff',
						}
					},
				}],
				yAxis: [{
					type: 'value',
					name: '游客（人）',
					nameTextStyle:{
						color:'#ffffff'
					},
					axisLine: {
						lineStyle: {
							color: '#ffffff',
						}
					},
					splitLine:false
				}],
				series: [{
						name: '四川',
						type: 'bar'
					},
					{
						name: '来源占比',
						type: 'pie',
						center: ['85%', '20%'],
						radius: '32%',
						z: 100
					}
				]
			},
			options: [{
					title: {
						text: '2005游客来源',
						textStyle:{
							color:'#ffffff'
						}
					},
					series: [
						{
							data: dataMap.dataPI['2005']
						},
						{
							data: [{
									name: '四川',
									value: dataMap.dataPI['2005sum']
								},
								{
									name: '天津',
									value: dataMap.dataPI['2005sum']
								},
								{
									name: '河北',
									value: dataMap.dataPI['2005sum']
								}
							]
						}
					]
				},
				{
					title: {
						text: '2006游客来源'
					},
					series: [
						{
							data: dataMap.dataPI['2006']
						},
						{
							data: [{
									name: '四川',
									value: dataMap.dataPI['2006sum']
								},
								{
									name: '内蒙古',
									value: dataMap.dataPI['2006sum']
								},
								{
									name: '新疆',
									value: dataMap.dataPI['2006sum']
								}
							]
						}
					]
				},
				{
					title: {
						text: '2007游客来源'
					},
					series: [
						{
							data: dataMap.dataPI['2007']
						},
						{
							data: [{
									name: '重庆',
									value: dataMap.dataPI['2007sum']
								},
								{
									name: '成都',
									value: dataMap.dataPI['2007sum']
								},
								{
									name: '广元',
									value: dataMap.dataPI['2007sum']
								}
							]
						}
					]
				},
				{
					title: {
						text: '2008游客来源'
					},
					series: [
						{
							data: dataMap.dataPI['2008']
						},
						{
							data: [{
									name: '四川',
									value: dataMap.dataPI['2008sum']
								},
								{
									name: '浙江',
									value: dataMap.dataPI['2008sum']
								},
								{
									name: '山东',
									value: dataMap.dataPI['2008sum']
								}
							]
						}
					]
				},
				{
					title: {
						text: '2009游客来源'
					},
					series: [
						{
							data: dataMap.dataPI['2009']
						},
						{
							data: [{
									name: '四川',
									value: dataMap.dataPI['2009sum']
								},
								{
									name: '上号',
									value: dataMap.dataPI['2009sum']
								},
								{
									name: '重庆',
									value: dataMap.dataPI['2009sum']
								}
							]
						}
					]
				},
				{
					title: {
						text: '2010游客来源'
					},
					series: [
						{
							data: dataMap.dataPI['2010']
						},
						{
							data: [{
									name: '四川',
									value: dataMap.dataPI['2010sum']
								},
								{
									name: '湖北',
									value: dataMap.dataPI['2010sum']
								},
								{
									name: '北京',
									value: dataMap.dataPI['2010sum']
								}
							]
						}
					]
				},
				{
					title: {
						text: '2011游客来源'
					},
					series: [
						{
							data: dataMap.dataPI['2011']
						},
						{
							data: [{
									name: '四川',
									value: dataMap.dataPI['2011sum']
								},
								{
									name: '重庆',
									value: dataMap.dataPI['2011sum']
								},
								{
									name: '陕西',
									value: dataMap.dataPI['2011sum']
								}
							]
						}
					]
				}

			]
		};
	},
}

export default option;
