# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @jerrica-mj/lotide`

**Require it:**

`const _ = require('@jerrica-mj/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: tests assertion that two arrays are exactly equal, and logs a pass or fail message to the console
* `assertEqual(...)`: tests assertion that two values are equal, and logs a pass or fail message to the console
* `assertObjectsEqual(...)`: tests assertion that two objects are equal, and logs a pass or fail message to the console
* `countLetters(...)`: receives a string and returns a count the number of letters in that string
* `countOnly(...)`: receives an array and object, then returns an object containing counts of everything listed in the argument object
* `eqArrays(...)`: compares two arrays for strict equality, returning a boolean result
* `eqObjects(...)`: compares two objects for strict equality, returning a boolean result
* `findKey(...)`: takes in an object and a callback, scans the object, then returns the first key for which the callback returns a truthy value
* `findKeyByValue(...)`: receives an object and a value, then returns the first object key whose value contains the given value
* `head(...)`: returns the first item in an array
* `letterPositions(...)`: receives a string, then returns an object of arrays of each unique letter and all the indeces at which they are located in the string
* `map(...)`: receives an array and a callback function, then returns a new array based on the result of the callback on the input array's elements
* `middle(...)`: returns the middle-most element(s) of the given array
* `tail(...)`: returns an array of all but the first item in a given array
* `takeUntil(...)`: receives an array and a callback, then returns a slice of the array with elements taken from the start until the index where the callback returns a truthy value
* `without(...)`: receives a source array and an itemsToRemove array, then returns a new array with only the items from the source array that are not present in the itemsToRemove array

