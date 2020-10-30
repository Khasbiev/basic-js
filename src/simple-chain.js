const CustomError = require("../extensions/custom-error");

const chainMaker = {
  stack : [],

  getLength() {
    return this.stack.length;
  },

  addLink(value) {
  if (value !== undefined){
     this.stack.push(`( ${value} )`);
     return this;
  }else {
    this.stack.push('(  )');
    return this;
  }
  },

  removeLink(position) {
    if(typeof(position) === 'number' || Number.isInteger(position)){
        this.stack.splice(position - 1, 1);
        return this;
    }else {
      this.stack = [];
      throw new CustomError('Error');
    }
   },

  reverseChain() {
  this.stack.reverse();
  return this;
  },

  finishChain() { 
    let output  = this.stack.join('~~');
    this.stack = [];
    return output;
  }
};

module.exports = chainMaker;
