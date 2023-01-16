const countOnly = (allItems, itemsToCount) => {
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
