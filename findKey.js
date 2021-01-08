// Implement a function which takes in an object and a callback.
// It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

// FUNCTION INITILIZATION
// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  // assign message based on truthy/falsy result
  const message = (actual === expected) ?
    (`✅ Assertion Passed: ${actual} === ${expected}`) :
    (`❌ Assertion Failed: ${actual} !== ${expected}`);
  console.log(message); /* log the message */
};


// ACTUAL FUNCTION
const findKey = function(object, callback) {
  // for...in loop through object keys to find a match
  for (const key in object) {
    // If callback of key value is truthy, return the key
    if (callback(object[key])) {
      return key;
    }
  }
  return;
};


// TEST CODE
const restaurants = {
  "Blue Hill": { stars: 1, grade: "D" },
  "Akaleri":   { stars: 3, grade: "B" },
  "noma":      { stars: 2, grade: "C" },
  "elBulli":   { stars: 3, grade: "B" },
  "Ora":       { stars: 2, grade: "D" },
  "Akelarre":  { stars: 3, grade: "A" }
};

const result1 = findKey(restaurants, x => x.stars === 2); // => "noma"
console.log(result1); // => "noma"
assertEqual(result1, "noma"); // => pass

const result2 = findKey(restaurants, value => value.grade === "A");
console.log(result2); // => "Akelarre"
assertEqual(result2, "Akelarre"); // => pass

const result3 = findKey(restaurants, value => value.stars === 4);
console.log(result3); // => undefined
assertEqual(result3, undefined); // => pass