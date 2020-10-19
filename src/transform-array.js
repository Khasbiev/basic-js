const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   if (!Array.isArray(arr)) {
    throw new Error();
  }
  let stack = [];
    for ( let i = 0; i < arr.length; i++){
     if (arr[i] === '--discard-next'){
       if (arr[i + 2] !== '--discard-prev'){
          if(i !== arr.length - 1){
        i += 1;
          }
       }

     } else if (arr[i] === '--discard-prev'){
      stack.pop();
     } else if (arr[i] === '--double-next'){
      if(arr[i + 1] !== undefined){
      stack.push(arr[i + 1]);
      }
     } else if (arr[i] === '--double-prev'){
      if(arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next'){
      stack.push(arr[i - 1]); 
      } 
     } else {
       stack.push(arr[i]);
     }
  }
  console.log(arr);
  return stack;
};