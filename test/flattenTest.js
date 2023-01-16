const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });
  it("returns [1, [2, [3, 4, [5, 6], 7], 8], [9, 10]] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    const result = flatten(
      [1, [2, [3, 4, [5, 6], 7], 8], [9, 10]],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    );
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    const result = flatten([1, 2, 3]);
    assert.deepEqual(result, [1, 2, 3]);
  });
});
