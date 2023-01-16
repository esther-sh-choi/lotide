const without = (sourceArr, itemsToRemove) => {
  // takes an array and removes the items in the itemsToRemove array from the sourceArray
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
