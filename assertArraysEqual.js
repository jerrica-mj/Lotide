// Create a function to assert that two arrays are equal -- combining the efforts of the functions in eqArrays.js

// FUNCTION INITIALIZATION
// ARRAY COMPARISON FUNCTION
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


// ACTUAL FUNCTION
// Function to utilize eqArrays and assertEqual together
const assertArraysEqual = function(array1, array2) {
  // Select resulting message based on whether the arrays are actual equal, as asserted
  const result = (eqArrays(array1, array2)) ? (`✅ Assertion Passed: [${array1}] === [${array2}]`) : (`❌ Assertion Failed: [${array1}] !== [${array2}]`);

  // Log the result
  console.log(result);
};



// TEST CASES
// Sample cases
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // false

assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should fail