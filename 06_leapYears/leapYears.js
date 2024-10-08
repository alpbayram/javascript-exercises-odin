const leapYears = function (year) {
	// if (year % 4 == 0) {
	// 	if (year % 100 == 0) {
	// 		if (year % 400 == 0) {
	// 			console.log("leap year")
	// 			return true
	// 		} else {
	// 			console.log("not leap year")
	// 			return false
	// 		}
	// 	} else {
	// 		console.log("leap year")
	// 		return true
	// 	}
	// } else {
	// 	console.log("not leap year")
	// 	return false
	// }

	if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
		console.log("leap year")
		return true
	} else {
		return false
	}
}

leapYears(1800)
// Do not edit below this line
module.exports = leapYears
