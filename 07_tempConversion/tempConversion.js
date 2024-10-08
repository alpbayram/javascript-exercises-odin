const convertToCelsius = function (degree) {
	let convertedDegree
	convertedDegree = (degree - 32) / (9 / 5)
	let roundedDegree = Math.round(convertedDegree * 10)
	roundedDegree = roundedDegree / 10
	console.log(roundedDegree)
	return roundedDegree
}

const convertToFahrenheit = function (degree) {
	let convertedDegree
	convertedDegree = degree * (9 / 5) + 32
	let roundedDegree = Math.round(convertedDegree * 10)
	roundedDegree = roundedDegree / 10
	console.log(roundedDegree)
	return roundedDegree
}
convertToCelsius(100)
convertToFahrenheit(100)
// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
}
