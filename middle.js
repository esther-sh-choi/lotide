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

const middle = (arr) => {
  if (arr.length <= 2) return [];

  const middleIndex = arr.length / 2;

  console.log(middleIndex);

  if (Number.isInteger(middleIndex)) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));