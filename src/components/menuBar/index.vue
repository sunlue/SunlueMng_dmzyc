<template>
	<div class="menu-bar">
		<div class="logo">
			<img src="../../assets/logo2.png" />
		</div>
		<ul class="nav">
			<template v-for="(item, index) in nav">
				<li :class="index == active ? 'active' : ''" :key="index" @click="click(item,index)">
					<i :class="['iconfont', item.icon]"></i>
					<span class="name">{{ item.name }}</span>
				</li>
			</template>
		</ul>
	</div>
</template>

<script>
import './index.less';
export default {
	data() {
		return {
			active: 0,
			nav: [
				{
					name: '综合展示',
					icon: 'icon-zonghezhanshi',
					href: 'main'
				},
				{
					name: '视频监控',
					icon: 'icon-jiankong',
					href: 'monitor'
				},
				{
					name: '指挥调度',
					icon: 'icon-zhihuitiaodu',
					href: 'dispatch'
				},
				{
					name: '停车管理',
					icon: 'icon-tingchechang',
					href: 'parking'
				},
				{
					name: '环境天气',
					icon: 'icon-tingchechang',
					href: 'weather'
				}
			]
		};
	},
	methods: {
		click(item,index) {
			this.active=index
			this.$router.replace({
				name: item.href
			});
		}
	}
};
</script>
