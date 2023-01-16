const middle = (arr) => {
  if (arr.length <= 2) return [];

  const middleIndex = arr.length / 2;

  return Number.isInteger(middleIndex)
    ? [arr[middleIndex - 1], arr[middleIndex]]
    : [arr[Math.floor(middleIndex)]];
};

module.exports = middle;
