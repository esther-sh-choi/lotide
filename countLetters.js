const countLetters = (string) => {
  // takes in a string value and counts the occurance of each character in the string and returns an object containing the count
  const newStr = string.toLowerCase();
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
