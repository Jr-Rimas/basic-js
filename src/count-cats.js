const CustomError = require("../extensions/custom-error");

module.exports = function countCats(catsOnYard) {
  return [].concat(...catsOnYard).reduce((sum, item) => item === "^^" ? sum + 1 : sum + 0, 0);
};