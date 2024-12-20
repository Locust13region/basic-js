const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	const result = Array.from({ length: matrix.length }, () =>
		Array(matrix.length)
	);
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			const topLeft = matrix[i - 1]?.[j - 1] ? 1 : 0;
			const top = matrix[i - 1]?.[j] ? 1 : 0;
			const topRight = matrix[i - 1]?.[j + 1] ? 1 : 0;
			const left = matrix[i][j - 1] ? 1 : 0;
			const right = matrix[i][j + 1] ? 1 : 0;
			const bottomLeft = matrix[i + 1]?.[j - 1] ? 1 : 0;
			const bottom = matrix[i + 1]?.[j] ? 1 : 0;
			const bottomRight = matrix[i + 1]?.[j + 1] ? 1 : 0;
			result[i][j] =
				topLeft +
				top +
				topRight +
				left +
				right +
				bottomLeft +
				bottom +
				bottomRight;
		}
	}
	return result;
}

module.exports = {
	minesweeper,
};
