const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!Array.isArray(arr))
		throw new Error(`'arr' parameter must be an instance of the Array!`);
	// const arrClone = [...arr];
	// const withOutDouble = arrClone.map((item, index) => {
	// 	if (item === "--double-prev") return arrClone[index - 1];
	// 	if (item === "--double-next") return arrClone[index + 1];
	// 	return item;
	// });
	// const modified = withOutDouble.reduce((acc, curr, index) => {});
	// return withOutDouble;
	const result = [];
	let prev;
	let prevAction = null;
	let curr;
	let next;
	let nextAction = null;
	for (let i = 0; i < arr.length; i++) {
		curr = arr[i];
		next = arr[i + 1];
		switch (curr) {
			case "--double-next":
				prev = arr[i + 1];
				break;
			case "--double-prev":
				// prev = arr[i - 1];
				break;
			case "--discard-next":
				nextAction = "remove";
				prev = null;
				break;
			case "--discard-prev":
				prev = null;
				break;

			default:
				if (nextAction === "remove") {
					prev = null;
					prevAction = nextAction;
					nextAction = null;
				} else {
					prev = curr;
				}
		}
		if (prev && next !== "--discard-prev") result.push(prev);
	}
	return result;
}

// const transformed = transform([
// 	1,
// 	2,
// 	3,
// 	4,
// 	"--double-prev",
// 	5,
// 	6,
// 	"--double-next",
// 	7,
// 	8,
// 	"--discard-next",
// 	9,
// 	"--discard-prev",
// 	10,
// ]);
// console.log(transformed, transformed.length);
// console.log(
// 	transform(["--discard-next", 2, 3, "--double-next", 4, "--discard-prev"])
// );

module.exports = {
	transform,
};

/**Функция не должна влиять на начальный массив.
 * Управляющие последовательности применяются слева направо к начальным элементам массива.
 * Управляющие последовательности не попадают в преобразованный массив.
 * Управляющие последовательности в исходном массиве не встречаются подряд.
 * Если рядом с управляющей последовательностью, к которой ее можно применить в исходном массиве,
 * нет элемента, или этот элемент был ранее удален, то ничего не происходит.
 * Функция должна выдать ошибку с сообщением «arr»,
 * параметр должен быть экземпляром массива!, если arr не является массивом.
 * --discard-next excludes the next element of the array from the transformed array.
 * --discard-prev excludes the previous element of the array from the transformed array.
 * --double-next duplicates the next element of the array in the transformed array.
 * --double-prev duplicates the previous element of the array in the transformed array.
 */
