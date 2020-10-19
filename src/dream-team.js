const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (typeof(members) === 'object' && (members !== null)) {
	let nameArray = [];
  for (let i = 0; i < members.length; i++){
if (typeof(members[i]) === 'string') {
  members[i] = members[i].trim();
	nameArray.push(members[i][0].toUpperCase());
}
  }
  return nameArray.sort().join('');
}
return false;
  // remove line with error and write your code here
};
