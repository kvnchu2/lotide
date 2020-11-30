// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🙂 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😲 Assertion Failed: ${actual} !== ${expected}`;
  }
};


const tail = function(array) {
  let tailElements = array.slice(1,array.length - 1);
  return tailElements;
};

module.exports = tail;