// File to enable the export/import of all Lotide functions at once
// Export an object containing all module requirements

const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const letterPositions = require("./letterPositions");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
  // object property value shorthand:
  // if key and value share same name, can simply write once
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  eqArrays,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without
}