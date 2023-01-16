const middle = (arr) => {
  // return a list of middle elements given an array. If the array length is even, there will be two elements in the returned array.
  if (arr.length <= 2) return [];

  const middleIndex = arr.length / 2;

  return Number.isInteger(middleIndex)
    ? [arr[middleIndex - 1], arr[middleIndex]]
    : [arr[Math.floor(middleIndex)]];
};

module.exports = middle;
