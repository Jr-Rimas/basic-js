const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let dreamTeam = [];
    members.map(function (item) {
      if (typeof (item) === "string" && item.length > 1 && members !== null) {
        dreamTeam.push(item.trim()[0].toUpperCase())
      }
    })
    return dreamTeam.sort().join('');
  } else {
    return false;
  }
};