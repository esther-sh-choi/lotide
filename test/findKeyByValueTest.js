const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {
  it("returns 'drama' for 'The Wire' as value", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.strictEqual(result, "drama");
  });
  it("returns undefined for value that does not exist in object", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    assert.strictEqual(result, undefined);
  });
  it("returns undefined for empty string value", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "");
    assert.strictEqual(result, undefined);
  });
  it("value is case sensitive", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "the expanse");
    assert.strictEqual(result, undefined);
  });
});
