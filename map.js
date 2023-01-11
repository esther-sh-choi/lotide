const util = require("util");

const eqArrays = (arr1, arr2) => {
  // if arrays are not the same length, they are not equal
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // if the function didn't return a false so far, it will automatically return true
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  // add util.inspect so that the arrays will be convered to string type before being printed to the console
  // this is crucial to keeps the quotes on the string elements in the console
  /* eslint-disable */
  eqArrays(arr1, arr2)
    ? console.log(
        `✅✅✅ Assertion Passed: ${util.inspect(arr1)} === ${util.inspect(
          arr2
        )}`
      )
    : console.log(
        `🛑🛑🛑 Assertion Failed: ${util.inspect(arr1)} !== ${util.inspect(
          arr2
        )}`
      );
  /* eslint-enable */
};

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word + word);
const results3 = map(words, (word) => word[0] + word[word.length - 1]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [
  "groundground",
  "controlcontrol",
  "toto",
  "majormajor",
  "tomtom",
]);
assertArraysEqual(results3, ["gd", "cl", "to", "mr", "tm"]);
