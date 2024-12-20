const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	const mapping = (str) => {
		const map = {};
		for (const char of str) {
			char in map ? map[char]++ : (map[char] = 1);
		}
		return map;
	};
	const map1 = mapping(s1);
	const map2 = mapping(s2);

	let result = 0;

	for (const key in map1) {
		if (key in map2) {
			result += Math.min(map1[key], map2[key]);
		}
	}
	return result;
}

module.exports = {
	getCommonCharacterCount,
};
