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

const without = (sourceArr, itemsToRemove) => {
  if (!itemsToRemove || !itemsToRemove.length) return sourceArr;
  if (!sourceArr || !sourceArr.length) return [];

  return sourceArr.filter((element) => !itemsToRemove.includes(element));
};

const without2 = (sourceArr, itemsToRemove) => {
  if (!itemsToRemove && !itemsToRemove.length) return sourceArr;
  if (!sourceArr && !sourceArr.length) return [];

  let newArr = [];
  for (let element of sourceArr) {
    let isMatch = false;
    for (let item of itemsToRemove) {
      isMatch = element === item;
    }
    if (!isMatch) {
      newArr.push(element);
    }
  }

  return newArr;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
