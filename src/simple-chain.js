import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain : [],

  getLength() {
    return this.chain.length;
  },
  addLink( value ) {
    this.chain.push(`( ${(value)} )`);
    return this;
  },
  removeLink( position ) {
    if ((typeof position !== 'number') || (position > this.chain.length) || (position < 1)) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = this.chain.concat();
    this.chain = [];
    return finish.join('~~');
  }
};
