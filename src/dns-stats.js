const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	const map = domains.map((url) => url.split(".").reverse());
	const dns = {};
	map.forEach((arr) => {
		let domain = "";
		arr.forEach((item) => {
			domain += `.${item}`;
			domain in dns ? dns[domain]++ : (dns[domain] = 1);
		});
	});
	return dns;
}

// console.log(getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]));

module.exports = {
	getDNSStats,
};
