const letterPositions = (sentence) => {
  const results = {};
  for (const [index, letter] of Object.entries(sentence)) {
    if (letter !== " ") {
      if (results[letter]) {
        if (!Array.isArray(results[letter])) {
          results[letter] = [results[letter]];
        }
        results[letter].push(+index);
      } else {
        results[letter] = Number(index);
      }
    }
  }

  return results;
};

module.exports = letterPositions;
