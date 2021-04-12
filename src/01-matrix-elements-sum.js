/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (matrix.length <= 1) return 0;
  let sum = 0;

  const a = matrix[0];
  for (let x = 0; x < a.length; x++) {
    sum += a[x];
  }

  for (let x = 1; x < matrix.length; x++) {
    const row = matrix[x];

    for (let j = 0; j < row.length; j++) {
      if (matrix[x - 1][j] !== 0) sum += row[j];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
