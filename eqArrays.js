// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual.js')

const eqArrays = function(arrayOne,arrayTwo) {
    if(arrayOne.length !== arrayTwo.length) {
      return false;
    }
    for (let element = 0; element < arrayOne.length; element++) {
      if (arrayOne[element] !== arrayTwo[element]) {
        return false;
      }
    }
    return true;
};


module.exports = eqArrays;