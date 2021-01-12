const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

// TEST CODE
// Test middle function results with assertions
assertArraysEqual(middle([1]), []); // should pass
assertArraysEqual(middle([1, 2]), []); // pass
assertArraysEqual(middle([1, 2, 3]), [2]); // should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should fail