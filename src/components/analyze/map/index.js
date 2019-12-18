import option from './option.js';

const method = function() {}

method.prototype.map = function(params) {
	return new Promise((resolve) => {
		resolve(option.map(params));
	})
}
method.prototype.ship = function(params) {
	return new Promise((resolve) => {
		resolve(option.ship(params));
	})
}
export default new method();
