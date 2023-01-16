const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it('returns ["Hello", "Lighthouse", "Labs"] for ["Lighthouse", "Labs"]', () => {
    const result = tail(
      ["Hello", "Lighthouse", "Labs"],
      ["Lighthouse", "Labs"]
    );
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});
