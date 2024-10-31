const people = [
	{
		name: "Carly",
		yearOfBirth: 1942,
	},
	{
		name: "Ray",
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: "Jane",
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];

const findTheOldest = function (array) {
	let reducedArray = array.reduce((acc, item, index) => {
		if (!item["yearOfDeath"]) {
			item["yearOfDeath"] = new Date().getFullYear();
			acc.push(item);
			console.log(acc);
			return acc;
		} else {
			acc.push(item);
			console.log(acc);
			return acc;
		}
	}, []);
	console.log(reducedArray);
	let listedArray = reducedArray.sort(
		(a, b) => b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth)
	);

	return listedArray[0];
};
let resultArray = findTheOldest(people);
console.log(resultArray);

// Do not edit below this line
module.exports = findTheOldest;
