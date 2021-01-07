// Implement a function to help us search for a key on an object where its value matches a given value

// FUNCTION INITIALIZATION
// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  // assign message based on truthy/falsy result
  const message = (actual === expected) ? (`✅ Assertion Passed: ${actual} === ${expected}`) : (`❌ Assertion Failed: ${actual} !== ${expected}`);
  console.log(message); /* log the message */
};


// ACTUAL FUNCTION
// Function to receive an object and a value, then return the first object key containing the given value
// --if no key with that value, return undefined
const findKeyByValue = function(object, value) {
  // Use for...in loop to iterate over object keys
  for (let key in object) {
    // If key contains the given value (.includes(value)===true), return the key (exits program)
    if (object[key].includes(value)) {
      return key;
    }
  }
  return undefined; // Return undefined if value not found in any object keys
};



// TEST CODE
// Sample case 1
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// Sample case 2
const numbers = {
  first: [9, 7, 6],
  second: [2, 4, 3 ,7],
  third: [3, 1, 8],
  fourth: [4]
};

assertEqual(findKeyByValue(numbers, 1), "third");
assertEqual(findKeyByValue(numbers, 5), undefined);
assertEqual(findKeyByValue(numbers, 4), "second");