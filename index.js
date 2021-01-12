// File to enable the export/import of all Lotide functions at once
// Export an object containing all module requirements

const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const head = require("./head");
const letterPositions = require("./letterPositions");
const map = require("./map");
const middle = require("./middle");
const tail = require("./tail");
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
  // object property value shorthand:
  // if key and value share same name, can simply write once
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without
}