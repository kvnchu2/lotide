const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const { flatten } = require('./flatten');
const { result1, countOnly, firstNames, itemsToCount } = require('./countOnly');
const { letterPositions } = require('./letterPositions');
const { findKeyByValue, bestTVShowsByGenre } = require('./findKeyByValue');
const { eqObjects, eqArrays, cd, dc, cd2 } = require('./eqObjects');
const eqArrays = require('./eqArrays');

module.exports = {
  head,
  tail,
  middle,
  flatten,
  result1, 
  countOnly, 
  firstNames, 
  itemsToCount,
  letterPositions,
  findKeyByValue,
  bestTVShowsByGenre,
  eqObjects, 
  eqArrays, 
  cd, 
  dc, 
  cd2
};