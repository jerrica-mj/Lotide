// Verify assertion whether two objects are equal

// FUNCTION INITIALIZATION
// TEST / ASSERTION / OBJECT EQUALITY FUNCTIONS
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
const eqObjects = function(obj1, obj2) {
  // Check that both objects have same number of keys
  // --Initialize variables to hold arrays of objects' keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // --Check  whether array of objects' keys are same length
  if (keys1.length !== keys2.length) {
    // console.log(false);
    return false; // Return false if objects not identical
  }

  // Check that each key in both objects have same value
  // Loop through each key of obj1
  for (const key in obj1) {

    // Check if key value is identical in both objects--primitive values only
    if (obj1[key] !== obj2[key]) {
      // If key values are arrays, use eqArrays function, since === only works for primitive data types
      if ('Arrays Match?', eqArrays(obj1[key], obj2[key])) {
        // console.log(true);
        return true;
      }

      // console.log(false);
      return false; // Return false if key values don't match and not arrays
    }
  }

  // console.log(true);
  return true; // Return true for objects with same length and key values
};


// ACTUAL FUNCTION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // Fix object output issue ([object Object])
  // console.log(`Example label: ${inspect(object1)}`);

  // Select resulting message based on whether the objects are equal, as asserted
  const result = (eqObjects(object1, object2)) ? (`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`) : (`❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);

  // Log the result
  console.log(result);
};



// // TEST CODE
// // PRIMITIVE VALUES ONLY
// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // pass

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); // pass

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc); // fail

// // ARRAY VALUES
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // pass

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // fail


module.exports = assertObjectsEqual;