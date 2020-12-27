const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😲 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arrayOne,arrayTwo) {
  //compares the length of each array and if not equal, return false
  if(arrayOne.length !== arrayTwo.length) {
    return false;
  }
  //if the elements within the arrays do not equal, return false
  for (let element = 0; element < arrayOne.length; element++) {
    if (arrayOne[element] !== arrayTwo[element]) {
      return false;
    }
  }
  return true;
};

//compares two objects
const eqObjects = function(object1, object2) {
  let objKey1 = Object.keys(object1);
  let objKey2 = Object.keys(object2);
  //if lengths of the object keys are not equal, return false
  if (objKey1.length !== objKey2.length) {
    return false;
  } 
  //if object 2 does not contain key in objKey1 array, return false
  for (let x = 0; x < objKey1.length; x++) {
      if (objKey2.indexOf(objKey1[x]) === -1) {
        return false;
      }
  }

  for (let i = 0; i < objKey1.length; i++) {
    if (Array.isArray(object1[objKey1[i]]) && Array.isArray(object2[objKey1[i]])) {
      return eqArrays(object1[objKey1[i]], object2[objKey1[i]]);
    } else if (typeof object1[objKey1[i]] === 'object' && typeof object2[objKey1[i]] === 'object') {
      return eqObjects(object1[objKey1[i]], object2[objKey1[i]]);
    } else if (typeof object1[objKey1[i]] !== typeof object2[objKey1[i]]) {
      return false;
    }
  }
  return true;
}

console.log(assertEqual(eqObjects({ a: { z: 1, t: {s: 3} }, b: 2 }, { a: { z: 1, t:{s: 3} }, b: 2 }), true)) 
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false));
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false));

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false

