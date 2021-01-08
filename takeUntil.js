// Implement a function to take in an array and a callback, then return a slice of the array with elements taken from the start until the callback returns a truthy value

// To keep things simple, the callback should only be provided one value: The item in the array.

// FUNCTION INITIALIZATION
// TEST / ASSERTION FUNCTIONS
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
const takeUntil = function(array, callback) {
  const result = [];

  // Use for...of loop so we can use break
  for (const element of array) {
    // Stop if callback is truthy
    if (callback(element)) {
      break;
    }
    // Add elements to result array
    result.push(element);
  }

  return result;
};


// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // expected: [ 1, 2, 5, 7, 2 ]


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // expected: [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// Test using assertions
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);