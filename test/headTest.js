const head = require("../head");
const assertEqual = require("../assertEqual");

// TEST CODE WITH SAMPLE/TEST ASSERTIONS
// console.log(head([5,6,7])) // 5;
assertEqual(head([5,6,7]), 5); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //pass
assertEqual(head(['alone']), 'alone'); // pass
assertEqual(head([]), undefined); // pass