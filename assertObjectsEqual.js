
const eqObjects = function(object1, object2) {
  let objKey1 = Object.keys(object1);
  let objKey2 = Object.keys(object2);
  if (objKey1.length !== objKey2.length) {
    return false;
  } 

  for (let x = 0; x < objKey1.length; x++) {
      if (objKey2.indexOf(objKey1[x]) === -1) {
        return false;
      }
  }

  for (let i = 0; i < objKey1.length; i++) {
    if (eqArrays(object1[objKey1[i]], object2[objKey1[i]]) === false) {
      return false;
    }
  }
return true;
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  
  if (eqObjects(actual, expected)) {
    console.log(`🙂 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😲 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd,dc)); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false