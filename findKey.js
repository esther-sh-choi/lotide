const findKey = (object, callback) => {
  // given a conditional callback function, return the first key that satisfied the condition in the object
  for (const [key, value] of Object.entries(object)) {
    if (callback(value)) {
      return key;
    }
  }
};

module.exports = findKey;
