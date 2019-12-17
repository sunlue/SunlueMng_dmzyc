<template>
	<ul class="feedback">
		<li>
			<span>服务</span>
			<Rate show-text allow-half disabled :value="2" :count="10">
				<span style="color: #f5a623">2分</span>
			</Rate>
		</li>
		<li>
			<span>安全</span>
			<Rate show-text allow-half disabled :value="4" :count="10">
				<span style="color: #f5a623">4分</span>
			</Rate>
		</li>
		<li>
			<span>交通</span>
			<Rate show-text allow-half disabled :value="6" :count="10">
				<span style="color: #f5a623">6分</span>
			</Rate>
		</li>
		<li>
			<span>物价</span>
			<Rate show-text allow-half disabled :value="8" :count="10">
				<span style="color: #f5a623">8分</span>
			</Rate>
		</li>
		<li>
			<span>卫生</span>
			<Rate show-text allow-half disabled :value="10" :count="10">
				<span style="color: #f5a623">10分</span>
			</Rate>
		</li>
		<li>
			<span>美食</span>
			<Rate show-text allow-half disabled :value="6.5" :count="10">
				<span style="color: #f5a623">6.5分</span>
			</Rate>
		</li>
	</ul>
</template>

<script>
</script>

<style lang="less">
	.feedback{
		li{
			padding: 4px 0px;
			display: flex;
			justify-content: center;
			span{
				width: 48px;
				display: inline-block;
				line-height: 32px;
			}
		}
	}
</style>
