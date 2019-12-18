// import request from '@/utils/request'
import option from './option.js';

const method = function() {}
// method.prototype.get = function(params) {
// 	return new Promise((resolve, reject) => {
// 		request({
// 			url: 'analyze/order/unified',
// 			method: 'post',
// 		}).then(response => {
// 			resolve(option.line(response.data));
// 		}).catch(error => {
// 			reject(error)
// 		})
// 		resolve(option(params));
// 	})
// }

method.prototype.trend = function(params) {
	return new Promise((resolve) => {
		resolve(option.trend(params));
	})
}
method.prototype.proportion = function(params) {
	return new Promise((resolve) => {
		resolve(option.proportion(params));
	})
}
export default new method();
