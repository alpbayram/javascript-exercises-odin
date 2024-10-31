const add = function (value1, value2) {
	let sum = 0;
	return (sum = value1 + value2);
};
add(0, 0);
console.log(add(0, 0));
const subtract = function (value1, value2) {
	let sum = 0;
	return (sum = value1 - value2);
};
console.log(subtract(5, 4));

const sum = function (array) {
	let deneme = array.reduce((acc, item) => item + acc, 0);
	return deneme;
};
console.log(sum([]));

const multiply = function (array) {
	let deneme = array.reduce((acc, item) => acc * item, 1);
	return deneme;
};
console.log(multiply([3, 5, 3, 2, 2, 1]));
const power = function (number, power) {
	let sum = 1;

	for (let i = 0; i < power; i++) {
		sum = sum * number;
	}
	return sum;
};
console.log(power(4, 3));
const factorial = function (facto) {
	let result = 1;
	for (let i = facto; i > 0; i--) {
		result = i* result;
	}

  return result
};
console.log(factorial(0))
// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
