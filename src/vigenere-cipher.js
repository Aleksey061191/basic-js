import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
    this.abcArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }
  coder(string, key, status) {
    string = string.toUpperCase();
    key = key.toUpperCase();

    let newString = '';
    let k = 0;
    let index;
    for (let i = 0; i < string.length; i++) {
      if (this.abcArray.includes(string[i])) {
        if (k >= key.length) {
          k = k % key.length;
        }
        if (status) {
          index = (this.abcArray.indexOf(string[i]) + this.abcArray.indexOf(key[k])) % 26;
          newString += this.abcArray[index];
          k++;
        } else {
          index = (26 + this.abcArray.indexOf(string[i]) - this.abcArray.indexOf(key[k])) % 26;
          newString += this.abcArray[index];
          k++;
        }
      } else {
          newString += string[i];
        }
    }
    if (this.direct == false) {newString = newString.split('').reverse().join('')}
    return newString;
  }
  encrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.coder(string, key, true);
  }
  decrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.coder(string, key, false);
  }
}
