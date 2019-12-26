<template>
	<div class="panel">
		<div class="panel-header">
			<div class="title" v-if="title || title_en">
				<span class="zh" v-if="title">{{ title }}</span>
				<span class="en" v-if="title_en">{{ title_en }}</span>
			</div>
			<slot name="extra" class="extra"></slot>
		</div>
		<div class="panel-body"><slot></slot></div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			require: true
		},
		title_en: {
			type: String
		}
	}
};
</script>

<style lang="less">
.panel {
	color: white;
	border: 2px solid rgba(145, 233, 255, 0.2);
	border-radius: 5px;
	padding: 10px;
	box-sizing: border-box;
	position: relative;
	// background: rgba(255,255,255,0.1);
	&:after,
	&:before {
		display: block;
		content: '';
		position: absolute;
	}
	&:before {
		width: 40%;
		height: 2px;
		right: 5px;
		top: 7px;
		background: rgba(255, 255, 255, 0.2);
		border-top-right-radius: 5px;
	}
	&:after {
		height: 60%;
		width: 2px;
		right: 5px;
		top: 9px;
		background: rgba(255, 255, 255, 0.2);
	}
	.panel-header {
		display: flex;
		justify-content: space-between;
		position: relative;
		&:before{
			display: block;
			content: '';
			position: absolute;
			width: 40%;
			height: 2px;
			top: -13px;
			background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
		}
		.title {
			overflow: hidden;
			& > span {
				display: block;
			}
			.zh {
				font-size: 16px;
				font-weight: bold;
			}
			.en {
				font-size: 14px;
				color: rgba(255,255,255,.5);
				height: 20px;
				line-height: 20px;
			}
		}
		.extra {
			flex: auto;
			text-align: right;
		}
	}
	.panel-body {
		padding-top: 10px;
		box-sizing: border-box;
		position: relative;
	}
}
</style>
