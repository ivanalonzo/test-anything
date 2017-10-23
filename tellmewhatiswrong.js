/*
This is using a pretty simple way to use assert.
The isCoolNumber function will return TRUE if you pass it 42
*/
var isCoolNumber = require(process.argv[2]);
var assert = require("assert");

//This is one approach, since it will simply check if true when given number 42
assert.equal(isCoolNumber(42), true, "Confirm isCoolNumber returns true");

//These are other approaches to asserting the function
assert.deepEqual(isCoolNumber(42), true, "Confirm isCoolNumber returns true");
assert.notEqual(isCoolNumber(42), false, "Confirm isCoolNumber returns false when 42 is passed");

/*
These are other methods for asserting other types of functions.
assert.ok(value, message) // tests if value is truthy
assert.equal(actual, expected, message) // ==
assert.notEqual(actual, expected, message) // !=
assert.deepEqual(actual, expected, message) // for comparing objects
assert.notDeepEqual(actual, expected, message)
assert.strictEqual(actual, expected, message) // ===
assert.notStrictEqual(actual, expected, message) // !==

Official solution
var isCoolNumber = require(process.argv[2])
var assert = require('assert')
assert(isCoolNumber(42))
*/
