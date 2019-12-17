<template>
	<Row :gutter="5">
		<template v-for="i in 2">
			<Col span="12" :key="i">
				<img :key="i" src="../../../assets/monitor/spjk.png" style="width: 100%;"/>
			</Col>
		</template>
	</Row>
</template>

<script>
</script>

<style>
</style>
