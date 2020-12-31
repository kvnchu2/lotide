const { eqObjects, eqArrays, cd, dc, cd2 } = require("../eqObjects.js");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  it("returns true for a: { z: 1, t: {s: 3} }, b: 2 } and { a: { z: 1, t:{s: 3} }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { z: 1, t: {s: 3} }, b: 2 }, { a: { z: 1, t:{s: 3} }, b: 2 }), true);
  });
  it("returns true for a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("returns true for a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 ", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
  it("returns true for cd and dc", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("returns true for cd and cd2", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});