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
function removeCharAt(str, i) {
  const tmp = str.split('');
  tmp.splice(i - 1, 1);
  return tmp.join('');
}

function deleteDigit(n) {
  const stringed = String(n);
  let max = Number(stringed.substring(1));
  for (let i = 0; i < stringed.length; i++) {
    max = Math.max(max, removeCharAt(stringed, i));
  }
  return max;
}

module.exports = deleteDigit;
