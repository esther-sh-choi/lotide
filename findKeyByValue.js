const findKeyByValue = (obj, val) => {
  // find the key of the value passed in (case sensitive)
  for (const [key, value] of Object.entries(obj)) {
    if (value === val) return key;
  }
  return undefined;
};

module.exports = findKeyByValue;
