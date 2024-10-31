const getTheTitles = function (array) {
	let bookTitles = array.reduce((acc, item, index, array) => {
		acc.push(`${item["title"]}`);
		return acc;
	}, []);
	return bookTitles;
};

const books = [
	{
		title: "Book",
		author: "Name",
	},
	{
		title: "Book2",
		author: "Name2",
	},
];
console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
