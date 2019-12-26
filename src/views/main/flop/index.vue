<template>
	<div class="chartNum">
		<div class="title">
			<p class="zh">{{ title }}</p>
			<p class="en">{{ title_en }}</p>
		</div>
		<ul class="box-item">
			<template v-for="(item, index) in numberArray">
				<li :class="{ 'number-item': !isNaN(item), 'mark-item': isNaN(item) }" :key="index">
					<template v-if="!isNaN(item)">
						<span>{{ numbeText[index] }}</span>
					</template>
					<div v-if="!isNaN(item)">
						<i :ref="'numberItem'+index">0123456789</i>
					</div>
					<div class="comma" v-else>{{ item }}</div>
				</li>
			</template>
			<li class="unit">
				<span>{{ unit }}</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			numberArray: ['0','0','0','0','0','0'],
			numbeText: ['十万', '万', '千', '', '百', '十', '']
		};
	},
	props: {
		title: {
			type: String
		},
		title_en: {
			type: String
		},
		unit: {
			type: String
		},
		number:{
			default:'000000'
		}
	},
	watch:{
		number(value){
			this.dealWithNum(value);
		}
	},
	mounted() {
		this.dealWithNum(this.number);
	},
	methods: {
		dealWithNum(num) {
			num = num.toString();
			if (num.length < 6) {
				num = '0' + num;
				this.dealWithNum(num);
			} else if (num.length === 6) {
				num = num.slice(0, 3) + ',' + num.slice(3, 6);
				this.numberArray = num.split(''); 
			} else {
				this.$Message.warning('总量数字过大');
			}
			this.setNumberTransform();
		},
		setNumberTransform() {
			this.$nextTick(function(){
				for(let i =0;i<this.numberArray.length;i++){
					const number=this.numberArray[i];
					const elem = this.$refs['numberItem'+i];
					if(elem.length>0){
						elem[0].style.transform = `translate(-50%, -${number * 10}%)`
					}
				}
			})
		}
	}
};
</script>
<style scoped lang="less">
.chartNum {
	.title {
		color: white;
		.zh {
			font-size: 16px;
			font-weight: bold;
			letter-spacing: 1px;
		}
		.en {
			font-size: 14px;
		}
	}
	.box-item {
		display: flex;
		position: relative;
		height: 108px;
		list-style: none;
		color: #ffffff;
		justify-content: center;
		text-orientation: upright;
		-moz-user-select: none; /*火狐*/
		-webkit-user-select: none; /*webkit浏览器*/
		-ms-user-select: none; /*IE10*/
		-khtml-user-select: none; /*早期浏览器*/
		user-select: none;
		/*滚动数字设置*/
		.number-item {
			width: 66px;
			height: 100%;
			list-style: none;
			margin-right: 5px;
			&:last-child {
				margin-right: 0;
			}

			& > span {
				height: 20px;
				width: 100%;
				font-size: 14px;
				margin-bottom: 8px;
				display: block;
				text-align: right;
			}

			& > div {
				position: relative;
				width: 100%;
				left: 0px;
				bottom: 0px;
				height: calc(100% - 28px);
				font-size: 66px;
				writing-mode: vertical-rl;
				text-orientation: upright;
				overflow: hidden;
				background: rgba(250, 250, 250, 0.2);
				border-radius: 4px;
				& > i {
					font-style: normal;
					position: absolute;
					top: 4px;
					left: 50%;
					transform: translate(-50%, 0);
					transition: transform 1s ease-in-out;
					letter-spacing: 10px;
				}
			}
		}
		/* 默认逗号设置 */
		.mark-item {
			width: 10px;
			height: 100%;
			margin-right: 5px;
			line-height: 10px;
			font-size: 48px;
			position: relative;
			& > .comma {
				position: absolute;
				width: 100%;
				bottom: 0;
				writing-mode: vertical-rl;
				text-orientation: upright;
			}
		}
		.unit {
			width: 30px;
			height: 100%;
			position: relative;
			text-align: center;
			& > span {
				position: absolute;
				width: 100%;
				bottom: 0;
				left: 0;
				writing-mode: vertical-rl;
				text-orientation: upright;
				font-size: 14px;
				font-weight: bold;
			}
		}
	}
}
</style>