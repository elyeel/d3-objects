const wrapLog = function(callback, name) {
	/* your code here */
	return function() {
		const arr = [];
		for (const key in arguments) {
			arr.push(arguments[key]);
		}

		// console.log(arr);
		return `${name}(${arr}) => ${callback.apply(this, arguments)}`;
	};
};

const area = function(x, y) {
	return x * y;
};
const logArea = wrapLog(area, 'area');

console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6

const volume = function(x, y, z) {
	return x * y * z;
};
const logVolume = wrapLog(volume, 'volume');

console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24
