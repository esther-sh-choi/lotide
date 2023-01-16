const assert = require("chai").assert;
const findKey = require("../findKey");

const object = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

describe("#findKey", () => {
  it("returns 'noma' when callback (x) => x === 2 is passed", () => {
    const result = findKey(object, (x) => x.stars === 2);
    assert.deepEqual(result, "noma");
  });
  it("returns 'Blue Hill' when callback (x) => x === 1 is passed", () => {
    const result = findKey(object, (x) => x.stars === 1);
    assert.deepEqual(result, "Blue Hill");
  });
  it("returns undefined when callback conditional does not satisfy any keys", () => {
    const result = findKey(object, (x) => x.stars === 5);
    assert.deepEqual(result, undefined);
  });
});
