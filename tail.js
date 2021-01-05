// simple array-handling function to reterieve all but the first element of an array (the "tail")

// FUNCTION INITIALIZATION
// assertEqual function from earlier exercise--to test sample scenarios
const assertEqual = function(actual, expected) {
  // assign message based on truthy/falsy result
  const message = (actual === expected) ? (`✅ Assertion Passed: ${actual} === ${expected}`) : (`❌ Assertion Failed: ${actual} !== ${expected}`);
  console.log(message); /* log the message */
};
// tail function to return all but the first item in an array, as a new array
const tail = function(array) {
  let tail = [...array]; /* clone the array */
  tail.shift(); /* remove the first element of the new array--initial array unaffected */
  return tail;
};


// TEST CODE WITH SAMPLE/TEST ASSERTIONS
// test case: arrays can't be compared in assertEqual, because JS doesn't allow === or == to compare arrays
const failure = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(failure, ["Lighthouse", "Labs"]); // will always fail

// test case 1: check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure two elements returned
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// test case 2: check the original array is unmodified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should maintain 3 elements

// test case 3: check array of 1 element returns empty tail array
const lonely = ['solo'];
const lonelyTail = tail(lonely);
assertEqual(lonelyTail.length, 0); // should be an empty array

// text case 4: check empty array returns empty tail array
const empty = [];
assertEqual(tail(empty).length, 0); // should be an empty array

// test case 5: check another array, different use of assertEqual to get closer to comparing the arrays
const lastOne = [1,4,5,8];
const lastOneTail = tail(lastOne);
assertEqual(lastOneTail.length, lastOne.length - 1); // tail should have 1 less element than original array--empty in this case
assertEqual(lastOneTail[0], lastOne[1]); // first element of tail should be second of original array