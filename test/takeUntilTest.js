const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

const numList = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const stringList = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] from [1, 2, 5, 7, 2, -1, 2, 4, 5] when callback x => x < 0", () => {
    const result = takeUntil(numList, (x) => x < 0);
    assert.deepEqual(result, [1, 2, 5, 7, 2]);
  });
  it(`returns ["I've", "been", "to", "Hollywood"] from ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"] when callback x => x === ','`, () => {
    const result = takeUntil(stringList, (x) => x === ",");
    assert.deepEqual(result, ["I've", "been", "to", "Hollywood"]);
  });
  it("returns [1, 2, 5, 7, 2, -1, 2, 4, 5] from [1, 2, 5, 7, 2, -1, 2, 4, 5] when callback (x) => x > 7", () => {
    const result = takeUntil(numList, (x) => x > 7);
    assert.deepEqual(result, [1, 2, 5, 7, 2, -1, 2, 4, 5]);
  });
});
