const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const countOnly = require("./countOnly");
const countLetters = require("./countLetters");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const letterPositions = require("./letterPositions");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");

// ES6 Property Value Shorthand
module.exports = {
  eqArrays,
  eqObjects,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  head,
  tail,
  middle,
  countOnly,
  countLetters,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without,
};

// Verbose Syntax

// module.exports = {
//   eqArrays: eqArrays,
//   eqObjects: eqObjects,
//   assertEqual: assertEqual,
//   assertArraysEqual: assertArraysEqual,
//   assertObjectsEqual: assertObjectsEqual,
//   head: head,
//   tail: tail,
//   middle: middle,
//   countOnly: countOnly,
//   countLetters: countLetters,
//   findKey: findKey,
//   findKeyByValue: findKeyByValue,
//   flatten: flatten,
//   letterPositions: letterPositions,
//   map: map,
//   takeUntil: takeUntil,
//   without: without,
// };
