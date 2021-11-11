import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats( domains ) {
  let res = {};
  let newArr = [];
  domains.forEach(e => {
    newArr.push(e.split('.').reverse());
  })
  newArr.forEach(element => {
    let keyName = '';
    element.forEach(e => {
      keyName = keyName + `.${e}`;
      if (!res[keyName]) {
        res[keyName] = 1;
      } else {
        res[keyName]++;
      }
    })
  })
  return res
}
