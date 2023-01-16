# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @esther_sh_choi/lotide`

**Require it:**

`const _ = require('@esther_sh_choi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `eqArrays(array1, array2)`: takes in two arrays and returns true if they are equal and returns false if they are not equal
- `eqObjects(object1, object2)`: takes in two objects and returns true if they are equal and returns false if they are not equal
- `head(array)`: takes in an array and returns the first element
- `tail(array)`: takes in an array and returns the same array without the first element
- `middle(array)`: takes in an array and returns an array of the middle element(s) of the array
- `without(sourceArray, itemsToRemoveArray)`: takes a source array and removes the items in the itemsToRemove array from the source array and returns the new array
- `flatten(array)`: accepts an array and flattens all the nested arrays into a single array and returns the resulting array
- `countOnly(allItemsArray, itemsToCountObject)`: accepts an array and counts only the items in the itemsToCount object that has the value true. It returns the count of each item in an object
- `countLetters(string)`: takes in a string value and counts the occurance of each character in the string and returns an object containing the count
- `letterPositions(string)`: accepts a string and returns an object that contains the index position or a list of index positions of the letter in the input string
- `findKeyByValue(object, value)`: accepts an object and a value and returns the key that has a value that corresponds to the given value
- `map(array, callback)`: takes in an array and a callback function, then returns an array where each item in the original array is a returned value of the callback
- `takeUntil(array, callback)`: returns every element in the input array until the input callback condition is met
- `findKey(object, callback)`: given an object and a conditional callback function, return the first key that satisfied the condition
