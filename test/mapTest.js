const assert = require("chai").assert;
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it('returns ["g", "c", "t", "m", "t"] for callback (word) => word[0]', () => {
    const callback = (word) => word[0];
    const result = map(words, callback);
    assert.deepEqual(result, ["g", "c", "t", "m", "t"]);
  });
  it('returns ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"] for callback (word) => word + word', () => {
    const callback = (word) => word + word;
    const result = map(words, callback);
    assert.deepEqual(result, [
      "groundground",
      "controlcontrol",
      "toto",
      "majormajor",
      "tomtom",
    ]);
  });
  it('returns ["gd", "cl", "to", "mr", "tm"] for callback word[0] + word[word.length - 1]', () => {
    const callback = (word) => word[0] + word[word.length - 1];
    const result = map(words, callback);
    assert.deepEqual(result, ["gd", "cl", "to", "mr", "tm"]);
  });
});
