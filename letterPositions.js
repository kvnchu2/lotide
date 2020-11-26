const letterPositions = function(sentence) {
  const results = {};
    for (let x = 0; x < sentence.length; x++) {
      if (results[sentence[x]] === undefined && sentence[x] !== ' ') {
        results[sentence[x]] = [];
        results[sentence[x]].push(x);
      } else if (sentence[x] !== ' ') {
        results[sentence[x]].push(x);
      }
    }
    return results;
  }

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


console.log(assertArraysEqual(letterPositions("hello").e, [1]));

