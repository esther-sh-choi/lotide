const assert = require("chai").assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const namesToCount = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
};

describe("#countOnly", () => {
  it(`returns { Jason: 1, Karima: 1, Fang: 2 } when {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  } from first names [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ]`, () => {
    const result = countOnly(firstNames, namesToCount);
    assert.deepEqual(result, { Jason: 1, Fang: 2 });
  });
  it("returns undefined when the name in countOnly object is set to true, but doesn't exist in the name list", () => {
    const result = countOnly(firstNames, namesToCount);
    assert.strictEqual(result["Karima"], undefined);
  });
  it("returns undefined when the name in countOnly object is set to false", () => {
    const result = countOnly(firstNames, namesToCount);
    assert.strictEqual(result["Agouhanna"], undefined);
  });
});
