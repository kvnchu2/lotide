const without = function(sourceArray,itemsToRemove) {
  let arraysElements = [];
  for (let x = 0; x < sourceArray.length; x++) {
    if (itemsToRemove.indexOf(sourceArray[x]) === -1){
      arraysElements.push(sourceArray[x]);
    }
  }
  return arraysElements;
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


console.log(assertArraysEqual(without([1, 2, 3], [1]), [2,3]));


