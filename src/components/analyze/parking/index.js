import option from './option.js';

const method = function() {}

method.prototype.staytime = function(params) {
	return new Promise((resolve) => {
		resolve(option.staytime(params));
	})
}
method.prototype.month = function(params) {
	return new Promise((resolve) => {
		resolve(option.month(params));
	})
}
export default new method();
