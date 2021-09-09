import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  if (typeof n == 'number'){
    const arr = String(n).split('').map(Number);
    let a = arr[0];
    let c = 0;
    for (let i = 1; i < arr.length; i++){
      if (arr[i] < arr[i-1] & arr[i] < a){
        a = arr[i];
        c = i;
      }
    }
    arr.splice(c,1);
    return (Number(arr.join('')));
  }
  return(false);
}
