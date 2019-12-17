<template>
	<v-chart :options="tourists"></v-chart>
</template>

<script>
	
	import analyze from '@/components/analyze';
	export default{
		data(){
			return{
				tourists:{}
			}
		},
		mounted() {
			analyze.tourists().then(result=>{
				this.tourists=result
			})
		},
	}
</script>

<style>
</style>
