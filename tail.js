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

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));