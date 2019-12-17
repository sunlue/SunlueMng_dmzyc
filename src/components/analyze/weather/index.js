import option from './option.js';

const method = function() {}

method.prototype.air = function(params) {
	return new Promise((resolve) => {
		resolve(option.air(params));
	})
}
method.prototype.tem = function(params) {
	return new Promise((resolve) => {
		resolve(option.tem(params));
	})
}
method.prototype.humidity = function(params) {
	return new Promise((resolve) => {
		resolve(option.humidity(params));
	})
}
method.prototype.weather = function(params) {
	return new Promise((resolve) => {
		resolve(option.weather(params));
	})
}
method.prototype.hours = function(params) {
	return new Promise((resolve) => {
		resolve(option.hours(params));
	})
}
export default new method();
