// Return all the indices where each letter is found in a string

// INITIALIZE FUNCTIONS
// TEST / ASSERTION FUNCTIONS
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

const assertArraysEqual = function(array1, array2) {
  // Select resulting message based on whether the actual equality matched the expected assertion
  const result = (eqArrays(array1, array2)) ? (`✅ Assertion Passed: [${array1}] === [${array2}]`) : (`❌ Assertion Failed: [${array1}] !== [${array2}]`);

  // Log the result
  console.log(result);
};


// ACTUAL FUNCTION
// Function to return all the indices at which each letter is found in a string--return an object of arrays (of index values)
const letterPositions = function(sentence) {
  const results = {}; // Empty object for return

  // For each unique letter in the sentence, create a key--loop through the sentence
  // --use .split("") to turn the string into an array of the characters
  sentence.split("").forEach((letter, index) => {
    // Leave out spaces
    if (letter !== " ") {

      // For new letters/keys (results[letter] is falsey), set value to an array with the current index
      // For existing letters/keys (results[letter] is truthy), push the current index value onto the array at that key value
      (results[letter]) ? results[letter].push(index) : (results[letter] = [index]);
    }
  });

  // console.log(results); // Log resulting object
  return results; // Return resulting object for any use elsewhere
};


// // TEST CODE
// // Test case "lighthouse in the house"
// console.log(letterPositions("lighthouse in the house"));
// /* Expected output:
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// } */

// // Use assertArraysEqual and eqArrays to compare a string's letters and their expected positions
// // Test case using "hello"
// assertArraysEqual(letterPositions("hello").h, [0]); // pass
// assertArraysEqual(letterPositions("hello").e, [1]); // pass
// assertArraysEqual(letterPositions("hello").l, [2,3]); // pass
// assertArraysEqual(letterPositions("hello").o, [4]); // pass


module.exports = letterPositions;