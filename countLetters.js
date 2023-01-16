const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (sentence) => {
  const newStr = sentence.toLowerCase();
  let result = {};

  for (const letter of newStr) {
    if (letter === " ") {
      continue;
    }

    if (!result[letter]) {
      result[letter] = 0;
    }

    result[letter]++;
  }

  return result;
};

console.log(countLetters(""));

module.exports = countLetters;
