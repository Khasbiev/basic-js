const CustomError = require("../extensions/custom-error");

module.exports =   function repeater(str, {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|'
  }){
let output = str;

function repeat(str1, number, str2) {
let arr = new Array(number);
for (let i = 0; i < arr.length; i++){
  arr[i] = str1;
}
return arr.join(str2);
}

  if (addition || addition !== undefined ){
   output += repeat(String(addition), additionRepeatTimes, additionSeparator)
  }

  if (repeatTimes && typeof(repeatTimes) === 'number') {
      output = repeat(String(output), repeatTimes, separator);
  }

  return output;
};