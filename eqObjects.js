// Compare two objects for a perfect match

// FUNCTION INITIALIZATION
// ASSERTION FUNCITON
const assertEqual = function(actual, expected) {
  // assign message based on truthy/falsy result
  const message = (actual === expected) ? (`✅ Assertion Passed: ${actual} === ${expected}`) : (`❌ Assertion Failed: ${actual} !== ${expected}`);
  console.log(message); /* log the message */
};
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
 


// ACTUAL FUNCTION
// Returns true if both objects have identical keys with identical values.
// Otherwise it returns false
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



// TEST CODE
// PRIMITIVE VALUES ONLY
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true); // pass

const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false); // pass

// ARRAY VALUES
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true); // pass

const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false); // pass
