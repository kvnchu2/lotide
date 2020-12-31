const countOnly = function(allItems, itemsToCount) {
//do for in loop for itemsToCount
let count = 0;
let newObj = {};
for (let item in itemsToCount) {
  if (itemsToCount[item] === true) {
    for (let x = 0; x < allItems.length; x++) {
      if (allItems[x] === item) {
        count++
      }
    }
    newObj[item] = count;
    count = 0;
  }
}
return newObj;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const itemsToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


module.exports = { result1, countOnly, firstNames, itemsToCount };