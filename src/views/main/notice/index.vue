<template>
	<div tag="notice">
		<transition name="slide">
			<p class="item" :key="item.active">
				<a href="javascript:;" v-on:click="openNotice(item.items)">{{ item.items.title }}</a>
				<span>{{ item.items.time }}</span>
			</p>
		</transition>
		<Modal v-model="modal.show" :title="modal.title" width="1000" :footer-hide="true" 
		:scrollable="true" class-name="vertical-center-modal" :styles="{top: '20px'}">
			<div v-html="modal.content"></div>
		</Modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
			notice: [
				{
					title: '绵阳2019年市级实施乡村振兴先进县（市、区）、先进乡镇、 示范村名单和市星级现代农业园区名单公示啦！',
					time: '2019-12-16',
					content:'<p style="text-indent: 2em;">'+
											'根据《绵阳市实施乡村振兴战略考评激励办法（试行）》和《中共绵阳市委农村工作领导小组办公室开展2019年实施乡村振兴战略和市星级现代农业园区考评激励工作通知》（绵农领办【2019】29号）要求，拟评定涪城区、游仙区2个区为2019年市级实施乡村振兴先进县（市、区）；涪城区杨家镇等10个乡镇为市级实施乡村振兴先进乡镇；游仙区新桥镇同福村等50个村为市级实施乡村振兴示范村；三台县麦冬+生猪种养循环现代农业园区等8个园区为市星级现代农业园区。现将名单进行公示后，如有意见，请于12月17日前向中共绵阳市委农村工作领导小组办公室反映。联系电话：0816-2762283。'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'中共绵阳市委农村工作领导小组办公室'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'2019年12月6日'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'2019年全市实施乡村振兴战略先进县（市、区）、先进乡镇、示范村和市星级现代农业园区公示名单'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'一、实施乡村振兴战略先进名单'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'（一）先进县（市、区）'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'涪城区&nbsp;&nbsp;游仙区'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'（二）先进乡镇'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'涪城区杨家镇&nbsp;&nbsp;游仙区街子镇'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'游仙区新桥镇&nbsp;&nbsp;安州区花荄镇'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'江油市新安镇&nbsp;&nbsp;三台县花园镇'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'梓潼县许州镇&nbsp;&nbsp;盐亭县黄溪乡'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'平武县高村乡&nbsp;&nbsp;北川县擂鼓镇'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'（三）示范村：'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'涪城区：杨家团阳寺村&nbsp;&nbsp;石洞乡三清观村&nbsp;&nbsp;新皂镇刘家坪村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'玉皇镇鲜家坝村&nbsp;&nbsp;杨家镇王家桥村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'游仙区：魏城镇铁炉村&nbsp;&nbsp;新桥镇同福村&nbsp;&nbsp;柏林镇洛水村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'街子镇岳家村&nbsp;&nbsp;街子镇九洞村&nbsp;&nbsp;徐家镇白鹤村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'安州区：花荄镇联丰村&nbsp;&nbsp;塔水镇七里村&nbsp;&nbsp;花荄镇红武村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'永河镇梓潼村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'江油市：方水镇白玉村&nbsp;&nbsp;新安镇黑滩村&nbsp;&nbsp;太平镇普照村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'九岭镇中河村&nbsp;&nbsp;大康镇星火村&nbsp;&nbsp;大康镇官渡村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'二郎庙镇青林口村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'三台县：花园镇涪城村&nbsp;&nbsp;芦溪镇五柏村&nbsp;&nbsp;永明镇万家坎村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'花园镇白衣村&nbsp;&nbsp;永新镇崭山村&nbsp;&nbsp;建设镇木林村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'古井镇枣林村&nbsp;&nbsp;景福镇鲜家嘴村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'梓潼县：许州镇天宝村&nbsp;&nbsp;许州镇栏杆村&nbsp;&nbsp;石牛镇雁门村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'文昌镇东风村&nbsp;&nbsp;长卿镇中心村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'盐亭县：两河镇白虎村&nbsp;&nbsp;林山乡林园村&nbsp;&nbsp;麻秧街道天水村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'三元乡保安村&nbsp;&nbsp;黄溪乡广向村&nbsp;&nbsp;麻秧街道胜利村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'北川县：曲山镇石椅村&nbsp;&nbsp;坝底乡通坪村&nbsp;&nbsp;擂鼓镇田坝村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'通口镇井泉村&nbsp;&nbsp;桂溪镇彭家村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'平武县：高村乡民主村&nbsp;&nbsp;平通镇桅杆村&nbsp;&nbsp;虎牙藏族乡上游村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'龙安镇义佛山村'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'二、市星级现代农业园区名单'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'五星级：三台县麦冬+生猪种养循环现代农业园区'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'涪城区蚕桑现代农业园区'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'安州区秀水镇优质粮油现代农业园区'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'四星级：三台县梓州藤椒现代农业园区'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'盐亭县西部水产现代农业园区'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'梓潼县蜜柚+生猪生态循环现代农业园区'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
											'三星级：游仙区葡萄+青梅现代农业园区'+
									'</p>'+
									'<p style="text-indent: 2em;">'+
										'	北川县厚朴现代农业园区'+
									'</p>'
				},
				{
					title: '市农业农村局开展“12.4国家宪法日”宣传学习活动',
					time: '2019-12-14'
				}
			],
			modal:{
				show:false,
				title:'',
				content:''
			}
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
		openNotice(item){
			this.modal.show=true
			this.modal.title=item.title
			this.modal.content=item.content
		},
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
