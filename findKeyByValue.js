const findKeyByValue = (obj, val) => {
  for (const [key, value] of Object.entries(obj)) {
    if (value === val) return key;
  }
  return undefined;
};

module.exports = findKeyByValue;
