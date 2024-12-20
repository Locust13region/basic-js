const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	const {
		repeatTimes = 1,
		separator = "+",
		addition = "",
		additionRepeatTimes = 1,
		additionSeparator = "|",
	} = options;

	const mapObj = {
		null: "null",
		undefined: "undefined",
	};
	const strMap = mapObj[str] || str;
	const additionMap = mapObj[addition] || addition;

	const subStr = Array.from(
		{ length: additionRepeatTimes },
		() => additionMap
	).join(additionSeparator);
	const result = Array.from(
		{ length: repeatTimes },
		() => `${strMap}${subStr}`
	).join(separator);
	return result;
}

module.exports = {
	repeater,
};
