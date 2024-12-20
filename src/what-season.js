const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	if (!date) return "Unable to determine the time of year!";
	try {
		date.getUTCDay();
	} catch (e) {
		throw new Error("Invalid date!");
	}
	console.log(date);
	const inComeDate = date;
	const month = inComeDate.getMonth();
	const monthMap = [
		"winter",
		"winter",
		"spring",
		"spring",
		"spring",
		"summer",
		"summer",
		"summer",
		"autumn",
		"autumn",
		"autumn",
		"winter",
	];

	return monthMap[month];
}

console.log(getSeason(new Date()));
// console.log(getSeason(new Date(2019, 2, 7)));
// console.log(getSeason("foo"));
// console.log(getSeason({ John: "Smith" }));
// console.log(getSeason(20192701));
// console.log(getSeason([2019, "27", 0 + "1"]));
// console.log(getSeason(() => new Date()));

module.exports = {
	getSeason,
};
