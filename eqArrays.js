// Create a function that can compare two arrays for a perfect match.

// FUNCTION INITIALIZATION
// Function to compare two arrays for strict match
const eqArrays = function(array1, array2) {
  // Compare array lengths, returning false if mismatched
  if (array1.length !== array2.length) {
    return false;
  }

  // Compare the elements of the arrays  (if lengths match per above)
  for (let i = 0; i < array1.length; i++) {
    // If any corresponding elements do not match, return false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  // Return true only if lengths and elements match
  return true;
};


module.exports = eqArrays;