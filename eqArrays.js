const eqArrays = (arr1, arr2) => {
  // returns true if two arrays are equal and false otherwise
  if (arr1.length !== arr2.length || typeof arr1 !== typeof arr2) {
    return false;
  }

  for (const i in arr1) {
    if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;
