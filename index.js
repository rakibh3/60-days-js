// Create a function for find unique number from an array
function findUnique(arr) {
  // code goes here
  return arr.filter((item, index) => arr.indexOf(item) === index);
  // return [...new Set(arr)];
}

module.exports = findUnique;
