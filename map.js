// Implement a function to take in 2 arguments (array to map and a callback function) and return a new array based on the result of the callback

// INITIALIZE FUNCTION
// ASSERTION FUNCTION
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // Return true only if above conditions are passed (matching length and elements)
  return true;
};
const assertArraysEqual = function(array1, array2) {
  // Select resulting message based on whether the arrays are actual equal, as asserted
  const result = (eqArrays(array1, array2)) ?
    (`✅ Assertion Passed: [${array1}] === [${array2}]`) :
    (`❌ Assertion Failed: [${array1}] !== [${array2}]`);
  console.log(result);
};


// ACTUAL FUNCTION
const map = function(array, callback) {
  const result = [];

  for (let item of array) {
    result.push(callback(item));
  }

  return result;
};


// // TEST CODE
// const words = ["ground", "control", "to", "major", "tom"];

// const mapWords1 = map(words, word => word[0]);
// // console.log(mapWords1); // Expected output: ["g", "c", "t", "m", "t"]
// assertArraysEqual(mapWords1, ["g", "c", "t", "m", "t"]); // should pass

// const mapWords2 = map(words, word => word + "s");
// // console.log(mapWords2); // Expected: ["grounds", "controls", "tos", "majors", "toms"]
// assertArraysEqual(mapWords2, ["grounds", "controls", "tos", "majors", "toms"]); // should pass

// const mapWords3 = map(words, word => word.length);
// // console.log(mapWords3); // Expected: [6, 7, 2, 5, 3]
// assertArraysEqual(mapWords3, [6, 7, 2, 5, 3]); // should pass


module.exports = map;