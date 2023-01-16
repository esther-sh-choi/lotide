const tail = (arr) => {
  // return the array excluding the first element
  if (arr.length <= 1 || !arr) {
    return [];
  }
  return arr.slice(1);
};

module.exports = tail;
