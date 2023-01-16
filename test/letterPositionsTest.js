const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns [9, 16, 22] for letter position e in 'lighthouse in the house'", () => {
    const result = letterPositions("lighthouse in the house").e;
    assert.deepEqual(result, [9, 16, 22]);
  });
  it("returns undefined for letter position z in 'lighthouse in the house'", () => {
    const result = letterPositions("lighthouse in the house").z;
    assert.deepEqual(result, undefined);
  });
  it("returns 0 for letter position l in 'lighthouse in the house'", () => {
    const result = letterPositions("lighthouse in the house").l;
    assert.deepEqual(result, 0);
  });
  it("returns [8, 21] for letter position s in 'lighthouse in the house'", () => {
    const result = letterPositions("lighthouse in the house").s;
    assert.deepEqual(result, [8, 21]);
  });
});
