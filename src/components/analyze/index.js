import '@/utils/echart'

import weather from "./weather"
import map from "./map"
import tourists from "./tourists"

const method = {
	weather: {
		air: function(params) {
			return new Promise((resolve, reject) => {
				weather.air(params).then(response => {
					resolve(response);
				}).catch(error => {
					reject(error)
				})
			})
		},
		tem: function(params) {
			return new Promise((resolve, reject) => {
				weather.tem(params).then(response => {
					resolve(response);
				}).catch(error => {
					reject(error)
				})
			})
		},
		humidity: function(params) {
			return new Promise((resolve, reject) => {
				weather.humidity(params).then(response => {
					resolve(response);
				}).catch(error => {
					reject(error)
				})
			})
		},
		weather: function(params) {
			return new Promise((resolve, reject) => {
				weather.weather(params).then(response => {
					resolve(response);
				}).catch(error => {
					reject(error)
				})
			})
		},
		hours: function(params) {
			return new Promise((resolve, reject) => {
				weather.hours(params).then(response => {
					resolve(response);
				}).catch(error => {
					reject(error)
				})
			})
		},
	},
	map:function(params){
		return new Promise((resolve, reject) => {
			map.map(params).then(response => {
				resolve(response);
			}).catch(error => {
				reject(error)
			})
		})
	},
	tourists:function(params){
		return new Promise((resolve, reject) => {
			tourists.get(params).then(response => {
				resolve(response);
			}).catch(error => {
				reject(error)
			})
		})
	}
}

export default method;
