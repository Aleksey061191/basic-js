import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  let newString = '';
  str = String(str);
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    newString = newString + str;
    for (let y = 0; y < options.additionRepeatTimes; y++) {
      newString = newString + options.addition;
      if (y < (options.additionRepeatTimes - 1)) {
        newString = newString + options.additionSeparator;
    }
    }
    if (i < (options.repeatTimes - 1)) {
      newString = newString + options.separator;
    }
  }
  return newString
}
