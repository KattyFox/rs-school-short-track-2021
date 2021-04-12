/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let inspectChar = str[0] || '';
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    const current = str[i];
    if (current === inspectChar) {
      count++;
    } else {
      if (count !== 1) {
        result += String(count);
      }
      result += inspectChar;
      count = 1;
      inspectChar = current;
    }
  }

  if (count !== 1) {
    result += String(count);
  }

  result += inspectChar;

  return result;
}

module.exports = encodeLine;
