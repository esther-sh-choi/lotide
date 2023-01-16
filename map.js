const map = (array, callback) => {
  // takes in an array and a callback function, then returns an array where each item in the original array is a returned value of the callback function
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
