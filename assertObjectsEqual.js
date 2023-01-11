const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key of Object.keys(object1)) {
    if (!eqArrays(object1[key], object2[key])) return false;
  }

  return true;
};

const assertObjectsEqual = (object1, object2) => {
  const inspect = require("util").inspect;
  /* eslint-disable */
  eqObjects(object1, object2)
    ? console.log(
        `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`
      )
    : console.log(
        `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
      );
  /* eslint-enable */
};

assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" });
