const tail = require("../tail");
const assertEqual = require("../assertEqual")

// TEST CODE WITH SAMPLE/TEST ASSERTIONS
// test case: arrays can't be compared in assertEqual, because JS doesn't allow === or == to compare arrays
const failure = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(failure, ["Lighthouse", "Labs"]); // will always FAIL

// test case 1: check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // pass
assertEqual(result[0], "Lighthouse"); // pass
assertEqual(result[1], "Labs"); // pass


// test case 2: check the original array is unmodified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // pass

// test case 3: check array of 1 element returns empty tail array
const lonely = ['solo'];
const lonelyTail = tail(lonely);
assertEqual(lonelyTail.length, 0); // pass

// text case 4: check empty array returns empty tail array
const empty = [];
assertEqual(tail(empty).length, 0); // pass

// test case 5: check result is a new array, different use of assertEqual to get closer to comparing the arrays
const lastOne = [1,4,5,8];
const lastOneTail = tail(lastOne);
// tail should have 1 less element than original array--empty in this case
assertEqual(lastOneTail.length, lastOne.length - 1); // pass
// first element of tail should be second of original array
assertEqual(lastOneTail[0], lastOne[1]); // pass