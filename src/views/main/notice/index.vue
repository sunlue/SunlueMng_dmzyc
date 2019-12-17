<template>
	<div tag="notice">
		<transition name="slide">
			<p class="item" :key="item.active">
				<a href="javascript:;">{{ item.items.text }}</a>
				<span>{{ item.items.time }}</span>
			</p>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
			notice: [
				{
					text: '绵阳2019年市级实施乡村振兴先进县（市、区）、先进乡镇、 示范村名单和市星级现代农业园区名单公示啦！',
					time: '2019-12-16'
				},
				{
					text: '市农业农村局开展“12.4国家宪法日”宣传学习活动',
					time: '2019-12-14'
				}
			]
		};
	},
	computed: {
		item() {
			return {
				active: this.active,
				items: this.notice[this.active]
			};
		}
	},
	mounted() {
		this.startMove();
	},
	methods: {
		startMove() {
			let length = this.notice.length;
			let timer = setTimeout(() => {
				if (this.active === length - 1) {
					this.active = 0;
				} else {
					this.active += 1;
				}
				this.startMove();
				clearTimeout(timer)
			}, 3000);
		}
	}
};
</script>

<style lang="less">
div[tag='notice'] {
	width: 100%;
	height: 40px;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
	.item {
		width: 100%;
		position: absolute;
		bottom: 0;
		height: 38px;
		a {
			color: white;
			width: calc(100% - 80px);
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		span {
			width: 80px;
			float: right;
			text-align: right;
		}
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.5s linear;
	}
	.slide-enter {
		transform: translateY(20px) scale(1);
		opacity: 1;
	}
	.slide-leave-to {
		transform: translateY(-20px) scale(0.8);
		opacity: 0;
	}
}
</style>
