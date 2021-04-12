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
  const uniqueItems = [...new Set(s1.split(''))];

  let sum = 0;
  const splitS1 = s1.split('');
  const splitS2 = s2.split('');
  for (let i = 0; i < uniqueItems.length; i++) {
    const character = uniqueItems[i];

    sum += Math.min(splitS1.filter((x) => x === character).length,
      splitS2.filter((x) => x === character).length);
  }

  return sum;
}

module.exports = getCommonCharacterCount;
