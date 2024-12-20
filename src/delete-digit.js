const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const str = n.toString();
	let index;
	for (let i = 1; i < str.length; i++) {
		if (str[i] > str[i - 1]) {
			index = i - 1;
			break;
		}
	}
	return index === undefined
		? +str.slice(0, -1)
		: +str.slice(0, index).concat(str.slice(index + 1));
}

module.exports = {
	deleteDigit,
};
