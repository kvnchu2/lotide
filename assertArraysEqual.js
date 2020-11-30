let assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😲 Assertion Failed: ${actual} !== ${expected}`);
  }

}



const eqArrays = require('./eqArrays.js')

assertArraysEqual([1, 2, 3], [1, '2', 3]);


module.exports = assertArraysEqual;

