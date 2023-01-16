const countOnly = (allItems, itemsToCount) => {
  // from the allItems array, count only the items in the itemsToCount object that states true
  let newObj = {};
  for (let item of allItems) {
    if (!itemsToCount[item]) {
      continue;
    }

    if (!newObj[item]) {
      newObj[item] = 0;
    }
    newObj[item]++;
  }
  return newObj;
};

module.exports = countOnly;
