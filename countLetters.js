const countLetters = (sentence) => {
  // count the number of each letter in a sentence
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

module.exports = countLetters;
