const flatten = (arr) => {
  let newArr = [];

  const flattenArray = (array) => {
    for (let element of array) {
      if (Array.isArray(element)) {
        if (flattenArray(element)) {
          newArr.push(flattenArray(element));
        }
      } else {
        newArr.push(element);
      }
    }
  };

  flattenArray(arr);

  return newArr;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
module.exports = flatten;
