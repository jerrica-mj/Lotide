// simple array-handling function to reterieve all but the first element of an array (the "tail")

// FUNCTION INITIALIZATION
// tail function to return all but the first item in an array, as a new array
const tail = function(array) {
  const tail = array.slice(1); // copy the array, from index 1 to the end
  return tail;
};


module.exports = tail;