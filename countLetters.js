const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (sentence) => {
  const newStr = sentence.split(" ").join("").toLowerCase();
  let result = {};

  for (const letter of newStr) {
    result[letter] = result[letter] ? result[letter] + 1 : 1;
  }

  return result;
};

console.log(countLetters(""));
