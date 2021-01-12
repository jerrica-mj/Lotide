const eqArrays = require("./eqArrays");

// Create a function to assert that two arrays are equal -- combining the efforts of the functions in eqArrays.js

// FUNCTION INITIALIZATION
// Function to utilize eqArrays in a modified assertEqual--calls eqArrays through require
const assertArraysEqual = function(array1, array2) {
  // Select resulting message based on whether the arrays are strictly equal, as asserted
  const result = (eqArrays(array1, array2)) ?
    (`✅ Assertion Passed: [${array1}] === [${array2}]`) :
    (`❌ Assertion Failed: [${array1}] !== [${array2}]`);

  // Log the result
  console.log(result);
};


module.exports = assertArraysEqual;