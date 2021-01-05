// simple array-handling function to reterieve the first element ("head") of an array

// FUNCTION INITIALIZATION
// assertEqual function from previous exercise--to be used to test sample scenarios
const assertEqual = function(actual, expected) {
  // assign message based on truthy/falsy result
  const message = (actual === expected) ? (`✅ Assertion Passed: ${actual} === ${expected}`) : (`❌ Assertion Failed: ${actual} !== ${expected}`);
  console.log(message); /* log the message */
};
// head function to return first item in an array
const head = function (array) {
  return array[0];
};

// TEST CODE WITH SAMPLE/TEST ASSERTIONS
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['alone']), 'alone');
assertEqual(head([]), undefined);