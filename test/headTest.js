const assertEqual = require('../assertEqual.js');
const head = require('../head.js');

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));