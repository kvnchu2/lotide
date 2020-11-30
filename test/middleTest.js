const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');
const assert = require('chai').assert;



describe("#middle", () => {
  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });
});




