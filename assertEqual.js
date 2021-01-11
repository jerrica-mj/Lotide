// Implement a function to test assertion that expected result matches actual

// FUNCTION INITIALIZATION
const assertEqual = function(actual, expected) {
  // assign message based on strict equality
  const message = (actual === expected) ?
    (`✅ Assertion Passed: ${actual} === ${expected}`) :
    (`❌ Assertion Failed: ${actual} !== ${expected}`);
  console.log(message); // log the message
  return message; // use return for testing result
};

// EXPORT MODULE (file) for use in other files/functions
module.exports = assertEqual;