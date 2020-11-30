let assertArraysEqual = require('./assertArraysEqual.js')



const eqArrays = require('./eqArrays.js')

const middle = function(array) {
  let middleNum = [];
  if (array.length % 2 === 0) {
    middleNum.push(array.length/2);
    middleNum.push(array.length/2 + 1);
  } else if (array.length % 2 !== 0) {
    middleNum.push(array[Math.floor(array.length/2)])
  }
  return middleNum;
}





module.exports = middle;