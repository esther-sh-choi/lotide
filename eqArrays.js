const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length || typeof arr1 !== typeof arr2) {
    return false;
  }

  const sortedArr1 = [...arr1].sort();
  const sortedArr2 = [...arr2].sort();

  for (const i in sortedArr1) {
    if (Array.isArray(sortedArr1[i]) || Array.isArray(sortedArr2[i])) {
      if (!eqArrays(sortedArr1[i], sortedArr2[i])) {
        return false;
      }
    } else if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
};

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  )
); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
