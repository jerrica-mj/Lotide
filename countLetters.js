// Count the number of each letter in a sentence (string)

// FUNCTION INITIALIZATION
// TEST FUNCTION
const assertEqual = function(actual, expected) {
  // assign message based on truthy/falsy result
  const message = (actual === expected) ? (`✅ Assertion Passed: ${actual} === ${expected}`) : (`❌ Assertion Failed: ${actual} !== ${expected}`);
  // Log the message to the console
  console.log(message);
};


// ACTUAL FUNCTION
// Function to receive a string and return a count of each letter in the string
const countLetters = function(string) {
  let results = {}; // Initialize an object to be returned

  // Loop through the string
  for (let letter of string) {
    // Count the unique letters--skip spaces (" ") (falsey value?)
    if (letter !== " ") {
      // Set each unique letter as an object key, initializing the value (count) to 1
      // Increment the count of existing letters by 1 for each instance -- if results[letter] exists (truthy), add 1
      (results[letter]) ? results[letter]++ : results[letter] = 1;
      // console.log(results[letter]);
    }
  }

  console.log(results); // Log the results letter count object
  return results; // Return the object of the letter counts
}

// // TEST CODE
// countLetters("lighthouse in the house");
// /* Expected output: {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// } */

module.exports = countLetters;