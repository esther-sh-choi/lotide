const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };

describe("#eqObjects", () => {
  it(`returns true when comparing { colors: ["red", "blue"], size: "medium" } and { size: "medium", colors: ["red", "blue"] }`, () => {
    const anotherMultiColorShirtObject = {
      size: "medium",
      colors: ["red", "blue"],
    };
    assert.isTrue(
      eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)
    );
  });
  it(`returns false when comparing { colors: ["red", "blue"], size: "medium" } and { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }`, () => {
    const longSleeveMultiColorShirtObject = {
      size: "medium",
      colors: ["red", "blue"],
      sleeveLength: "long",
    };
    assert.isFalse(
      eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)
    );
  });
  it("returns true when comparing { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it("returns false when comparing { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.isFalse(
      eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })
    );
  });
  it("returns false when comparing { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
});
