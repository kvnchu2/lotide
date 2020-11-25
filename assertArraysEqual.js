let assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
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


console.log(assertArraysEqual([1, 2, 3], [1, '2', 3]));


