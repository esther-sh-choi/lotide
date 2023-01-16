const middle = require("../middle");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns an empty array for an array with one element", () => {
    const result = middle([1]);
    assert.deepEqual(result, []);
  });
  it("returns an empty array for an array with two elements", () => {
    const result = middle([1, 2]);
    assert.deepEqual(result, []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    const result = middle([1, 2, 3]);
    assert.deepEqual(result, [2]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    const result = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const result = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(result, [3, 4]);
  });
});
