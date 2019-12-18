<template>
	<div class="body index">
		<div class="logo-box">
			<a href="http://fxnsjq.sunlue.com" class="logo">
				<img src="../assets/logo.png" />
			</a>
		</div>
		<div class="main-box">
			<div class="title">
				<p class="title-one">崇州道明·竹艺村旅游景区</p>
				<p class="title-one-en">Chongzhou daoming · zhuyi village scenic spot</p>
				<p class="title-two">综合管理平台</p>
				<p class="title-two-en">Integrated management platform</p>
			</div>
			<div class="content">
				<div class="box-left">
					<router-link :to="{name:'parking'}" class="box">
						<span>停车场管理系统</span>
						<img src="../assets/list1_icon.png" class="icon" />
					</router-link>
				</div>
				<div class="box-right">
					<div class="box-top">
						<router-link :to="{name:'main'}" class="box-left  box">
							<span>综合管理系统</span>
							<img src="../assets/list2_icon.png" class="icon" />
						</router-link>
						<router-link :to="{name:'monitor'}" class="box-right  box">
							<span>视频监控系统</span>
							<img src="../assets/list3_icon.png" class="icon" />
						</router-link>
					</div>
					<div class="box-bottom">
						<router-link :to="{name:'weather'}" class="box-left  box">
							<span>环境检测<br />及天气质量</span>
							<img src="../assets/list4_icon.png" class="icon" />
						</router-link>
						<router-link :to="{name:'dispatch'}" class="box-right  box">
							<span>应急指挥调度</span>
							<img src="../assets/list5_icon.png" class="icon" />
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		}
	};
</script>

<style lang="less">
.body {
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 0;
	&.index{
		background-image: url("../assets/index_bg.png");
		background-size: cover;
		overflow: hidden;
		position: relative;
		.logo-box{
			max-width: 1240px;
			margin:0 auto;
			.logo{
				width: 280px;
				padding: 15px;
				background: white;
				margin-left: 10px;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
				text-align: center;
				display: block;
				img{
					width: 100%;
				}
			}
		}
		.main-box{
			width: 100%;
			max-width: 1240px;
			margin: auto;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			.title{
				text-align: center;
				color: #fff;
				P{
					margin:0 0 18px 0;
					&:last-child{
						margin: 0;
					}
				}
				.title-one {
					font-size: 32px;
					letter-spacing: 5px;
				}
			
				.title-one-en {
					font-size: 14px;
					text-transform: uppercase;
				}
			
				.title-two {
					font-size: 44px;
					letter-spacing: 10px;
				}
			
				.title-two-en {
					font-size: 16px;
					text-transform: uppercase;
				}
			}
			.content{
				margin-top:32px;
				&>div{
					float: left;
					height: 480px;
				}
				div{
					position: relative;
				}
				.box{
					display: block;
					position: relative;
				}
				.icon{
					position: absolute;
					right: 0px;
					bottom: 0px;
				}
				span{
					font-size: 36px;
					color: white;
					letter-spacing: 2px;
					position: absolute;
					display: block;
				}
				.box-left{
					width: calc(28.57% - 16px);
					background-image: url('../assets/list1.png');
					background-size: 100% 100%;
					background-repeat: no-repeat;
					margin-right: 16px;
					.box{
						width: 100%;
						height: 100%;
					}
					span{
						width: 40px;
						left: 40px;
						top: 40px;
						text-align: center;
					}
				}
				
				.box-right{
					width: calc(100% - 28.57% - 16px);
					margin-left: 16px;
					.box{
						height: 224px;
						background-size: 100% 100%;
						background-repeat: no-repeat;
					}
					.icon{
						top: 50%;
						right: 40px;
						transform: translateY(-50%);
					}
					.box-top{
						&>.box{
							float: left;
						}
						.box-left{
							width: calc(40% - 16px);
							background-image: url('../assets/list2.png');
							margin:0px 16px 16px 0px;
							span{
								width: 80px;
								left: 40px;
								top: 40px;
								text-align: center;
							}
						}
						.box-right{
							width: calc(60% - 16px);
							background-image: url('../assets/list3.png');
							margin:0px 0px 16px 16px;
							span{
								width: 160px;
								left: 100px;
								top: 60px;
							}
						}
					}
					.box-bottom{
						&>.box{
							float: left;
						}
						.box-left{
							width: calc(60% - 16px);
							margin:16px 16px 0px 0px;
							background-image: url('../assets/list4.png');
							span{
								width: 200px;
								left: 100px;
								top: 60px;
								text-align: right;
							}
						}
						.box-right{
							width: calc(40% - 16px);
							background-image: url('../assets/list5.png');
							margin:16px 0px 0px 16px;
							span{
								width: 80px;
								left: 40px;
								top: 40px;
								text-align: center;
							}
						}
					}
				}
			}
		}
	}
}
</style>
