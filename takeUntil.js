const takeUntil = (array, callback) => {
  // return every element in the original array until the callback condition is met
  for (let item of array) {
    if (callback(item)) {
      return array.slice(0, array.indexOf(item));
    }
  }
  return array;
};

module.exports = takeUntil;
