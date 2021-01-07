// Create a function to take in a collection of items and return counts for a specific subset of those items (not everything)
// Items will be limited to Strings.

// FUNCTION INITIALIZATION
// TEST FUNCTION
const assertEqual = function(actual, expected) {
  // assign message based on truthy/falsy result
  const message = (actual === expected) ? (`✅ Assertion Passed: ${actual} === ${expected}`) : (`❌ Assertion Failed: ${actual} !== ${expected}`);
  // Log the message to the console
  console.log(message);
};


// ACTUAL FUNCTION
// Function to receive an array and object, then return an object containing counts of everything listed in the input object
// Count only keys in the object with a truthy value--also do not need to include truthy object keys which do not appear in the input array
const countOnly = function(allItems, itemsToCount) {
  // Initialize an empty object for return
  let results = {};

  //MY INITIAL SOLUTION
  // // Loop through the object keys using for..in
  // for (let item in itemsToCount) {
  //   // Initialize a counter variable
  //   let count = 0;

  //   // Only count items for which the key value is true--if key value = falsey, skip count (continue to next)
  //   if (!itemsToCount[item]) {
  //     continue;
  //   }

  //   // Loop through the array elements to look for the item(s)
  //   allItems.forEach(element => {
  //     // Increase the item count with each occurence of the item--if element matches item, count++
  //     if (element === item) {
  //       count++;
  //     }
  //   });

  //   // Only if count > 0 (item is in array), add item key id and total count from array to the itemsCount object
  //   if (count > 0) {
  //     results[item] = count;
  //   }
  // }


  // FROM COURSE CODE RUNTHROUGH
  // Loop over all items in the array
  for (const item of allItems) {
    // console.log(item);

    // Increment the counter for each item
    // Only increment the count of results object keys if item is found in itemsToCount object
    if (itemsToCount[item]) {
      // set a key (named {item}) to the results object--add 1 to it if it was already there (increase count) or set to 1 if just creating key (first count)
      if (results[item]) {
        // Add one to value/count if key exists
        results[item] += 1;
      } else {
        // Set value/count to 1 if new key (first instance)
        results[item] = 1;
      }
    }
  }


  // Return/log object of counted items
  console.log(results);
  return results;
};


// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }); // expected output: {"Jason": 1, "Fang": 2}

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);