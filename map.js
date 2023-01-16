const map = (array, callback) => {
  // implementing the builtin Array.map method
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
