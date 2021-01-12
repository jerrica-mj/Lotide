const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

// TEST CASES
// Sample cases for eqArrays function
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays(["a", "b", "c"], ["a", "b", "c"])); // => true


console.log(eqArrays([], [])); // => true
console.log(eqArrays([], [ ])); // => true

// Sample case using eqArrays and assertEqual - test that array equality is true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);