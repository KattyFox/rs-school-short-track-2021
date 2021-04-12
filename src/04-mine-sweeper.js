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
function mineScan(matrix, x, y) {
  let value = 0;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (matrix[i][j]) {
        if (x === i && Math.abs(y - j) === 1) {
          value++;
        }

        if (y === j && Math.abs(x - i) === 1) {
          value++;
        }

        if (Math.abs(y - j) === 1 && Math.abs(x - i) === 1) {
          value++;
        }
      }
    }
  }
  return value;
}

function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const resultRow = [];

    for (let j = 0; j < row.length; j++) {
      resultRow.push(mineScan(matrix, i, j));
    }
    result.push(resultRow);
  }
  return result;
}
module.exports = minesweeper;
