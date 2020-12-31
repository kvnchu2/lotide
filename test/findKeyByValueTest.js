const assert = require('chai').assert;
const { findKeyByValue, bestTVShowsByGenre } = require('../findKeyByValue.js');

describe("#findKeyByValue", () => {
  it("returns drama when searching for The Wire", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});