import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1,s2) {
  let s = 0;
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  for (let i = 0; i < arr1.length; i++){
    let y = 0;
    while (arr1[i] !== arr2[y] & y < arr2.length){
      y++;
    }
    if (y !== arr2.length){
        arr2.splice(y,1);
    s++;
    }
    
  }
  return s;
}
