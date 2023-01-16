const util = require("util");

const eqArrays = require("./eqArrays");

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

module.exports = assertArraysEqual;
