import weather from '@/api/weather'
export default {
	state: {
		v6: {},
		v9: {}
	},
	mutations: {
		SET_V6: (state, data) => {
			state.v6 = data
		},
		SET_V9: (state, data) => {
			state.v9 = data
		},
	},
	getters: {
		weather_v6: state => {
			return state.v6;
		},
		weather_v9: state => {
			return state.v9;
		}
	},
	actions: {
		weather_v6({commit}, params) {
			return new Promise((resolve, reject) => {
				console.log('v6')
				weather.v6(params).then(response => {
					commit('SET_V6', response);
					resolve(response);
				}).catch(error => {
					reject(error)
				})
			})
		},
		weather_v9({commit}, params) {
			return new Promise((resolve, reject) => {
				console.log('v9')
				weather.v9(params).then(response => {
					commit('SET_V9', response);
					resolve(response);
				}).catch(error => {
					reject(error)
				})
			})
		},
	}
}
