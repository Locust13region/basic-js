const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	const result = [];
	const filtered = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === -1) {
			result[i] = arr[i];
		} else {
			result[i] = "empty";
			filtered.push(arr[i]);
		}
	}
	filtered.sort((a, b) => a - b);
	for (let i = 0; i < result.length; i++) {
		if (result[i] === "empty") {
			result[i] = filtered.shift();
		}
	}
	return result;
}

module.exports = {
	sortByHeight,
};
