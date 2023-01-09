const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const head = (arr) => {
  return arr[0];
};

assertEqual(head([]), 0);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
