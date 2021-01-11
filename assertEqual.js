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

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp"); // fail
// assertEqual(1, 1); // pass
// assertEqual("hello", "hello"); // pass
// assertEqual(3, 6); // fail

// EXPORT MODULE (file) for use in other files/functions
module.exports = assertEqual;