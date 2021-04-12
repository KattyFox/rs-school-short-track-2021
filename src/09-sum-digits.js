/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function numberSum(str) {
  return str.split('').map((x) => Number(x)).reduce((acc, value) => acc + value);
}

function getSumOfDigits(number) {
  let result = number;
  while (result >= 10) {
    result = numberSum(String(result));
  }
  return result;
}

module.exports = getSumOfDigits;
