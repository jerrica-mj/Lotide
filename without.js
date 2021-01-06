// Create a function to filter our data by removing unwanted items
// Return a subset of a given array, removing unwanted elements
// Function should take in a source array and an itemsToRemove array, then return a new array with only the items not present in the itemsToRemove array

// FUNCTION INITIALIZATION
// Function to compare two arrays for exact match
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


// Function to utilize eqArrays and assertEqual together to test assertion of whether arrays are equal
const assertArraysEqual = function(array1, array2) {
  // Select resulting message based on whether the arrays are equal (eqArrays)
  const result = (eqArrays(array1, array2)) ? (`✅ Assertion Passed: [${array1}] === [${array2}]`) : (`❌ Assertion Failed: [${array1}] !== [${array2}]`);

  // Log the result
  console.log(result);
};

// Function to check if element of an array matches any element in another array
const compareValueToArray = function(value, array) {
  // Initialize variable to hold comparison result boolean
  let match = false;

  // Loop through array for comparison with each element
  array.forEach(element => {
    // If value matches any element in array, return true
    if (element === value) {
      match = true;
      return; // will exit forEach function if this executes
    }
  });

  // If value does not match any element in the array, return false
  return match;
};


// Funtion to remove unwanted elements from source array, returning a new array
const without = function(source, itemsToRemove) {
  // Initialize new (empty) array (newArr) to be returned
  let newArr = [];

  // Loop through source array to examine each element
  source.forEach((element) => {
    // Compare the source array element to each element in the itemsToRemove array for a match
    // If true, do nothing and continue to next element
    // If false, add element to new array
    if (!compareValueToArray(element, itemsToRemove)) {
      newArr.push(element);
    }
  });
  
  // Log newArr with elements removed as needed
  console.log(newArr);
  // return newArr;
};



// TEST CASES
// Sample cases
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// Test case to check that source array is unchanged
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // should pass
