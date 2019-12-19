import axios from 'axios'
let url = "https://www.tianqiapi.com/api/"

const methods = function() {}
methods.prototype.v6 = function(params) {
	return new Promise((resolve, reject) => {
		axios.get(url + '?version=v6', {
			params: params
		}).then(result => {
			resolve(result.data)
		}).catch(error => {
			reject(error)
		})
	})
}
methods.prototype.v9 = function(params) {
	return new Promise((resolve, reject) => {
		axios.get(url + '?version=v9', {
			params: params
		}).then(result => {
			resolve(result.data)
		}).catch(error => {
			reject(error)
		})
	})
}
export default new methods();
