const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = (arr) => {
  if (arr.length <= 1 || !arr) {
    return [];
  }
  return arr.slice(1);
};

console.log(tail([1, 2, 3, 4, 5]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
