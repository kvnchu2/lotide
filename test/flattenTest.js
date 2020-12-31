const { flatten } = require("../flatten.js");
const assert = require("chai").assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]);
  });
});

