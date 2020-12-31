const { letterPositions } = require('../letterPositions.js');
const assert = require('chai').assert;


describe("#letterPositions", () => {
  it("returns [1] for index of e in hello", () => {
    assert.deepEqual(letterPositions('hello')['e'], [1]);
  });
});
