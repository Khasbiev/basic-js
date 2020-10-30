const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

	let season = '';

if(date === undefined){

    return 'Unable to determine the time of year!';

} else if(Object.prototype.toString.call(date) !== '[object Date]'){

    throw new Error('Error');
  
} else if(Object.prototype.toString.call(date)){

  if(date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth()=== 1  ){

  season = 'winter';

} else if(date.getMonth() > 1 && date.getMonth() < 5 ){

  season = 'spring';

} else if(date.getMonth() > 4 && date.getMonth() < 8){

  season = 'summer';

}else if(date.getMonth() > 7 && date.getMonth() < 11){

  season = 'autumn';

}
}  
return season;

};