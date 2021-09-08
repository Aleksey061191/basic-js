import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(arr) {
  let cat = 0;
    for (let i = 0; i<arr.length; i++ ){
        for (let y = 0; y<arr[i].length; y++){
            if (arr[i][y] === '^^'){
                cat = cat + 1;
            }
        }
    }
    return cat;
}
