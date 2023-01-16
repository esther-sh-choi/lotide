const eqArrays = (arr1, arr2) => {
  // if arrays are not the same length, they are not equal
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // if the function didn't return a false so far, it will automatically return true
  return true;
};

const without = (sourceArr, itemsToRemove) => {
  if (!itemsToRemove || !itemsToRemove.length) return sourceArr;
  if (!sourceArr || !sourceArr.length) return [];

  return sourceArr.filter((element) => !itemsToRemove.includes(element));
};

// const without2 = (sourceArr, itemsToRemove) => {
//   if (!itemsToRemove && !itemsToRemove.length) return sourceArr;
//   if (!sourceArr && !sourceArr.length) return [];

//   let newArr = [];
//   for (let element of sourceArr) {
//     let isMatch = false;
//     for (let item of itemsToRemove) {
//       isMatch = element === item;
//     }
//     if (!isMatch) {
//       newArr.push(element);
//     }
//   }

//   return newArr;
// };

module.exports = without;
