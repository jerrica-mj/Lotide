// Implement middle() which will take in an array and return the middle-most element(s) of the given array

// FUNCTION INITIALIZATION
// TEST / ASSERTION FUNCTIONS
// eqArrays() and assertArraysEqual() from assertArraysEqual.js
// Function to compare two arrays for exact match
const eqArrays = function(array1, array2) {
  // Compare array lengths, returning false (exiting function) if mismatched
  if (array1.length !== array2.length) {
    return false;
  }

  // Compare the elements of the arrays  (if lengths match per above)
  for (let i = 0; i < array1.length; i++) {
    // If any corresponding elements do not match, return false (exiting function)
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  // Return true only if above conditions are passed (matching length and elements)
  return true;
};


// Function to utilize eqArrays and assertEqual together to test assertion of whether arrays are equal
const assertArraysEqual = function(array1, array2) {
  // Select resulting message based on whether the arrays are equal (eqArrays)
  const result = (eqArrays(array1, array2)) ? (`✅ Assertion Passed: [${array1}] === [${array2}]`) : (`❌ Assertion Failed: [${array1}] !== [${array2}]`);

  // Log the result
  console.log(result);
};

// ACTUAL FUNCTION
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
    // For arrays with even # of elements, return an array of the 2 middle elements
    // get both middle elements with [(length/2)-1] (first middle element) and [length/2] (second middle element)
    middleArr.push(array[(array.length / 2) - 1], array[array.length / 2]);
  }
  // Log and/or return the array of the middle element(s)
  console.log(middleArr);
  return middleArr;
};



// TEST CODE
// Test middle function
middle([1]); // []
middle([1, 2]); // []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]


// Test middle function results with assertions
assertArraysEqual(middle([1]), []); // should pass
assertArraysEqual(middle([1, 2, 3]), [2]); // should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [2, 3]); // should fail

