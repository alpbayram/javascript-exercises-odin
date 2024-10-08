const sumAll = function (number1, number2) {
	console.log(typeof number1)
	let highNumber
	let lowNumber
	let sum = 0
	if (typeof number1 !== "number" || typeof number2 !== "number") {
		console.log("error")
		return "ERROR"
	} else if (Number.isInteger(number1)===false||Number.isInteger(number2)===false) {
        return "ERROR"

	}
	if (number1 < 0 || number2 < 0) {
		return "ERROR"
	}

	if (number1 > number2) {
		highNumber = number1
		lowNumber = number2
	} else {
		highNumber = number2
		lowNumber = number1
	}
	for (; highNumber >= lowNumber; lowNumber++) {
		sum = sum + lowNumber
		// console.log(sum)
	}
	console.log(sum)
	return sum
}
sumAll(10, 10)
// Do not edit below this line
module.exports = sumAll
