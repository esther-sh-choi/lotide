const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3] without [1]", () => {
    const result = without([1, 2, 3], [1]);
    assert.deepEqual(result, [2, 3]);
  });
  it('returns ["1", "2"] for ["1", "2", "3"] without [1, 2, "3"]', () => {
    const result = without(["1", "2", "3"], [1, 2, "3"]);
    assert.deepEqual(result, ["1", "2"]);
  });
  it('returns ["hello", "world"] for ["hello", "world", "lighthouse"] without ["lighthouse"]', () => {
    const words = ["hello", "world", "lighthouse"];
    const result = without(words, ["lighthouse"]);
    assert.deepEqual(result, ["hello", "world"]);
  });
});
