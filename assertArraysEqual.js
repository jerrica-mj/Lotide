// Create a function to assert that two arrays are equal -- combining the efforts of the functions in eqArrays.js

// FUNCTION INITIALIZATION
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


// Function to utilize eqArrays and assertEqual together
const assertArraysEqual = function(array1, array2, expected) {
  // Invoke eqArrays to determine whether the arrays are equal
  const actual = eqArrays(array1, array2);

  // Select resulting message based on whether the actual equality matched the expected assertion
  const result = (actual === expected) ? (`✅ Assertion Passed: ${actual} === ${expected}`) : (`❌ Assertion Failed: ${actual} !== ${expected}`);

  // Log the result
  console.log(result);
};



// TEST CASES
// Sample cases for eqArrays function
assertArraysEqual([1, 2, 3], [1, 2, 3], true); // should pass
assertArraysEqual([1, 2, 3], [3, 2, 1], false); // should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], false); // => should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], true); // => should fail