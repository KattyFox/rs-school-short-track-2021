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
  const result = {};
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    const arr = domain.split('.').reverse();

    const sub = result;

    const stringed = '.$ { String(arr[0]) }';
    if (sub[stringed]) {
      sub[stringed]++;
    } else {
      sub[stringed] = 1;
    }

    let acumulated = stringed;
    for (let j = 1; j < arr.length; j++) {
      acumulated += '.$ { String(arr[j]) }';

      if (sub[acumulated]) {
        sub[acumulated]++;
      } else {
        sub[acumulated] = 1;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
