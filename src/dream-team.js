import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
  if (Array.isArray(arr)){
    const arrayword = []; 
    const array =[];
    
    arr.forEach(item => {
        if (typeof item === 'string' && item !== '' && item !== ' '){
            arrayword.push(item);
        }
    });
    if (arrayword.length > 0){
        arrayword.forEach(item => {
            let i = 0;
            while (item.substr(i,1) == ' '){
                i++;
            }
            array.push(item.substr(i,1));    
        })
        return (array.sort().join('').toUpperCase().split('').sort().join(''));
    }
    else return('false');
}
else return(Array.isArray(arr));
}
