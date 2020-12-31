const assert = require('chai').assert;
const {result1, countOnly, firstNames, itemsToCount}  = require('../countOnly');

describe("#countOnly", () => {
  it("returns 1 when searching for Jason", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns undefined when searching for Karima", () => {
    assert.strictEqual(result1["Karima"], 0); 
  });

  it("returns 2 when searching for Fang", () => {
    assert.strictEqual(result1["Fang"], 2); 
  });

  it("returns undefined when searching for Agouhanna", () => {
    assert.strictEqual(result1["Agouhanna"], undefined); 
  });
});