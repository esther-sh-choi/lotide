const eqArrays = require("./eqArrays");

const eqObjects = (object1, object2) => {
  // returns true if two objects are equal and false otherwise
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key in object1) {
    if (!object2[key]) return false;
    if (
      typeof object1[key] === "object" &&
      typeof object2[key] === "object" &&
      !Array.isArray(object1[key]) &&
      !Array.isArray(object2[key])
    ) {
      return eqObjects(object1[key], object2[key]);
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }

    if (object1[key] !== object2[key]) return false;
  }

  return true;
};

module.exports = eqObjects;
