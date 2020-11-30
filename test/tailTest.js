const assertEqual = require('../assertEqual.js')
const tail = require('../tail.js')

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));