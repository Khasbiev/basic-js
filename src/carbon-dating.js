const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (typeof(sampleActivity) === 'String')   {
		return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD));
	}
	return false;

  // remove line with error and write your code here
};
