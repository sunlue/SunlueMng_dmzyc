const option = {
	air: function(params) {
		return {
			series: [{
				name: 'PM2.5',
				type: 'gauge',
				min: 0,
				max: 400,
				splitNumber: 8,
				radius: '96%',
				center: ['50%', '58%'],
				axisLine: { // 坐标轴线
					lineStyle: { // 属性lineStyle控制线条样式
						color: [
							[0.125, 'rgb(0,228,0)'],
							[0.25, 'rgb(255,255,0)'],
							[0.375, 'rgb(255,126,0)'],
							[0.5, 'rgb(255,0,0)'],
							[0.625, 'rgb(153,0,76)'],
							[1, 'rgb(126,0,35)']
						],
						width: 5,
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				axisLabel: { // 坐标轴小标记
					textStyle: { // 属性lineStyle控制线条样式
						fontWeight: 'bolder',
						color: '#fff',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				axisTick: { // 坐标轴小标记
					length: 15, // 属性length控制线长
					lineStyle: { // 属性lineStyle控制线条样式
						color: 'auto',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				splitLine: { // 分隔线
					length: 25, // 属性length控制线长
					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
						width: 3,
						color: '#fff',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				pointer: { // 分隔线
					shadowColor: '#fff', //默认透明
					shadowBlur: 5
				},
				title: {
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						fontSize: 16,
						color: '#fff',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					},
					lineHeight: 30
				},
				detail: {
					borderColor: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 5,
					offsetCenter: [0, '70%'],
					textStyle: {
						color: '#fff',
						fontSize:16
					},
					formatter:(value)=>{
						return value+'μg/m³';
					}
				},
				data: [{
					value: params.value,
					name: params.name
				}]
			}]
		}
	},
	tem: function(params) {
		return {
			series: [{
				name: '温度',
				type: 'gauge',
				center: ['50%', '58%'],
				radius: '96%',
				min: -20,
				max: 50,
				splitNumber: 7,
				axisLine: { 
					lineStyle: {
						color: [
							[0.1428, 'rgb(153,0,76)'],
							[0.2857, 'rgb(255,0,0)'],
							[0.4285, 'rgb(255,126,0)'],
							[0.5714, 'rgb(255,255,0)'],
							[0.7143, 'rgb(0,288,0)'],
							[0.8571, 'rgb(255,0,0)'],
							[1, '153,0,76']
						],
						width: 3,
						shadowColor: '#fff', //默认透明
						shadowBlur: 6
					}
				},
				axisLabel: { // 坐标轴小标记
					textStyle: { // 属性lineStyle控制线条样式
						fontWeight: 'bolder',
						color: '#fff',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				axisTick: { // 坐标轴小标记
					length: 12, // 属性length控制线长
					lineStyle: { // 属性lineStyle控制线条样式
						color: 'auto',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				splitLine: { // 分隔线
					length: 20, // 属性length控制线长
					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
						width: 3,
						color: '#fff',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				pointer: {
					width: 5,
					shadowColor: '#fff', //默认透明
					shadowBlur: 5
				},
				title: {
					offsetCenter: [0, '-30%'], // x, y，单位px
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						color: '#fff',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				detail: {
					borderColor: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 5,
					width: 80,
					height: 30,
					offsetCenter: [0, '70%'], // x, y，单位px
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						color: '#fff',
						fontSize:26
					},
					formatter: function(value) {
						return value + '℃';
					}
				},
				data: [{
					value: params.value,
					name: '温度'
				}]
			}]
		}
	},
	humidity: function(params) {
		return {
			series: [{
				name: '湿度',
				type: 'gauge',
				center: ['50%', '58%'], // 默认全局居中
				radius: '96%',
				min: 0,
				max: 100,
				splitNumber: 10,
				axisLine: { // 坐标轴线
					lineStyle: { // 属性lineStyle控制线条样式
						color: [
							// [0.2, 'lime'],
							// [0.8, '#1e90ff'],
							// [1, '#ff4500']
							[1, '#1e90ff'],
						],
						width: 2,
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				axisTick: { // 坐标轴小标记
					length: 12, // 属性length控制线长
					lineStyle: { // 属性lineStyle控制线条样式
						color: 'auto',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				axisLabel: {
					textStyle: { // 属性lineStyle控制线条样式
						fontWeight: 'bolder',
						color: '#fff',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				splitLine: { // 分隔线
					length: 15, // 属性length控制线长
					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
						width: 3,
						color: '#fff',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				pointer: {
					width: 2,
					shadowColor: '#fff', //默认透明
					shadowBlur: 5
				},
				title: {
					offsetCenter: [0, '-30%'], // x, y，单位px
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						color: '#fff',
						shadowColor: '#fff', //默认透明
						shadowBlur: 10
					}
				},
				detail: {
					borderColor: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 5,
					width: 80,
					height: 30,
					offsetCenter: [0, '70%'], // x, y，单位px
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						color: '#fff',
						fontSize:26
					},
					formatter: function(value) {
						return value + '%';
					}
				},
				data: [{
					value: parseInt(params.value),
					name: '湿度'
				}]
			}]
		}
	},
	weather: function(future) {
		
		let futureData = new Object();

		let futureTem1 = new Array(); //高温
		let futureTem2 = new Array(); //低温
		let futureDay = new Array(); //低温

		for (let i = 0; i < future.length; i++) {
			let date=new Date(future[i]['date']);
			futureTem1.push(future[i]['tem1'])
			futureTem2.push(future[i]['tem2'])
			futureDay.push(future[i].day)
		}
		return {
			legend: {
				data: ['高温', '低温'],
				align: 'left',
				right: 30,
				top: 0,
				textStyle: {
					color: ["rgb(249,56,127)", "rgb(66,228,251)"]
				}
			},
			xAxis: {
				type: 'category',
				splitLine: {
					show: false
				},
				axisLabel: {
					color: '#ffffff'
				},
				data: futureDay
			},
			yAxis: {
				type: 'value',
				splitLine: {
					show:false
				},
				axisLabel: {
					color: '#ffffff'
				},
			},
			grid: {
				top: 60,
				left: 26,
				right: 20,
				bottom:20
			},
			series: [{
				data: futureTem1,
				type: 'line',
				name: '高温',
				label: {
					show: true,
					fontSize: 16,
					formatter: (value) => {
						return value.seriesName + '：' + value.data + '℃';
					},
				},
				lineStyle: {
					color: 'rgb(249,56,127)'
				},
				itemStyle: {
					color: 'rgb(249,56,127)',
					backgroundColor: 'rgb(249,56,127)',
					borderColor: 'rgb(249,56,127)',
					borderWidth: 6
				},
				markLine: false
			}, {
				data: futureTem2,
				type: 'line',
				name: '低温',
				label: {
					show: true,
					fontSize: 16,
					color: '#ffffff',
					formatter: (value) => {
						return value.seriesName + '：' + value.data + '℃';
					},
				},
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(66,228,251,1)' // 0% 处的颜色
						}, {
							offset: 0.5,
							color: 'rgba(66,228,251,0.5)' // 100% 处的颜色
						}, {
							offset: 1,
							color: 'rgba(66,228,251,0)' // 100% 处的颜色
						}],
						global: false // 缺省为 false
					}
				},
				lineStyle: {
					color: 'rgb(66,228,251)'
				},
				itemStyle: {
					color: 'rgb(66,228,251)',
					backgroundColor: 'rgb(66,228,251)',
					borderColor: 'rgb(66,228,251)',
					borderWidth: 6
				},
				markLine: false
			}]
		}
	},
	hours: function(future) {
		let futureData = new Object();
		let futureTime = new Array(); //时间
		let futureTem = new Array(); //温度
		for (let i = 0; i < future.length; i++) {
			futureTem.push(future[i]['tem'])
			futureTime.push(future[i]['hours'])
		}
		return {
			xAxis: {
				type: 'category',
				splitLine: {
					show: false
				},
				axisLabel: {
					color: '#ffffff'
				},
				data: futureTime
			},
			yAxis: {
				type: 'value',
				splitLine: false,
				axisLabel: {
					color: '#ffffff'
				}
			},
			grid: {
				left: 26,
				right: 20,
				bottom: 20
			},
			series: [{
				data: futureTem,
				type: 'line',
				label: {
					show: true,
					color: '#ffffff',
					formatter: (value) => {
						return value.data + '℃';
					}
				},
				lineStyle: {
					color: 'rgb(249,56,127)',
					width: 3
				},
				symbol: 'rect',
				symbolSize: 10
			}]
		}
	}
}

export default option;
