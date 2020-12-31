const findKeyByValue = function(obj, value) {
  for(let keys in obj) {
    if(obj[keys] === value) {
      return keys;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



module.exports = { findKeyByValue, bestTVShowsByGenre };