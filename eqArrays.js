// Create a function that can compare two arrays for a perfect match.

// FUNCTION INITIALIZATION
// Function to verify if result matches expected
const assertEqual = function(actual, expected) {
  // assign message based on truthy/falsy result
  const message = (actual === expected) ? (`✅ Assertion Passed: ${actual} === ${expected}`) : (`❌ Assertion Failed: ${actual} !== ${expected}`);

  console.log(message); /* log the message */
};

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


// TEST CASES
// Sample cases for eqArrays function
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays(["a", "b", "c"], ["a", "b", "c"])); // => true


console.log(eqArrays([], [])); // => true
console.log(eqArrays([], [ ])); // => true

// Sample case using eqArrays and assertEqual - test that array equality is true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // => should fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should fail
