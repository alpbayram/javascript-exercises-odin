const removeFromArray = function (array, ...willDeleteArgument) {
	console.log(...willDeleteArgument)
	console.log(array)

	for (const arg of willDeleteArgument) {
		if (array.includes(arg)) {
			while (array.includes(arg)) {
				indexWilldelete = array.indexOf(arg)
				array = array.toSpliced(indexWilldelete, 1)
				console.log(array)
			}
		} else {
			continue
		}
	}
	return array
}
removeFromArray([1, 2, 3, 3, 4, 5, 6, 7], 3, 4, 5)
// Do not edit below this line
module.exports = removeFromArray
