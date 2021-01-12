// Implement middle() which will take in an array and return the middle-most element(s) of the given array

// FUNCTION INITIALIZATION
// Function to return an array of the middle element(s) of a given array
const middle = function(array) {
  // Initialize an empty array to hold the middle element(s)
  let middleArr = [];

  // For arrays of 1-2 elements, return an empty array (no middle)
  if (array.length <= 2) {
    // nothing happens, but keeps following code from running
  } else if (array.length % 2 !== 0) {
    // For arrays with odd # of elements, return an array of the 1 middle element
    // round half the array length down to get the middle element index (since arrays are zero-indexed)
    middleArr.push(array[Math.floor(array.length / 2)]);
  } else {
    // For arrays of even length, return an array of the 2 middle elements
    // middle elements: [(length/2)-1] (first) and [length/2] (second)
    middleArr.push(array[(array.length / 2) - 1], array[array.length / 2]);
  }
  // Log and/or return the array of the middle element(s)
  // console.log(middleArr);
  return middleArr;
};


module.exports = middle;