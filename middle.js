let assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😲 Assertion Failed: ${actual} !== ${expected}`);
  }
}



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




console.log(assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]));