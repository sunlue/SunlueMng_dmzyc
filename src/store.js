import Vue from 'vue'
import Vuex from 'vuex'


import weather from '@/store/module/weather.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		weather
	},
})
