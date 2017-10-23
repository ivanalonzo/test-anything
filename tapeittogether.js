var test = require('tape');
var fancify = require(process.argv[2]);

var input = "Ivan";
var outputCap = "IVAN";
var fan1 = "~*~";
var opFan = "~!~";

/*
The change here was in using the TAP format. It is easier to read and underderstand when you get an error
*/
test("Check fancify function returns standard output", function (t){
	t.equal(fancify(input), fan1 + input + fan1, "Make sure output includes the fancy strings");
	t.end();
});
/*
Output when wrong, or invalid
# Check fancify function returns standard output
not ok 1 Make sure output includes the fancy strings
  ---
    operator: equal
    expected: '~*~IVAN~*~'
    actual:   '~*~Ivan~*~'
    at: Test.<anonymous> (/Users/ivana/Documents/NodeWorkspace/test-anything/program.js:13:4)
    stack: |-
      Error: Make sure output includes the fancy strings
          at Test.assert [as _assert] (/Users/ivana/node_modules/tape/lib/test.js:212:54)
          at Test.bound [as _assert] (/Users/ivana/node_modules/tape/lib/test.js:64:32)
          at Test.equal.Test.equals.Test.isEqual.Test.is.Test.strictEqual.Test.strictEquals (/Users/ivana/node_modules/tape/lib/test.js:347:10)
          at Test.bound [as equal] (/Users/ivana/node_modules/tape/lib/test.js:64:32)
          at Test.<anonymous> (/Users/ivana/Documents/NodeWorkspace/test-anything/program.js:13:4)
          at Test.bound [as _cb] (/Users/ivana/node_modules/tape/lib/test.js:64:32)
          at Test.run (/Users/ivana/node_modules/tape/lib/test.js:83:10)
          at Test.bound [as run] (/Users/ivana/node_modules/tape/lib/test.js:64:32)
          at Immediate.next (/Users/ivana/node_modules/tape/lib/results.js:71:15)
          at runCallback (timers.js:781:20)
  ...
*/

test("Check all caps option works as expected", function (t){
	t.equal(fancify(input, true), fan1 + outputCap + fan1, "Make sure the output is uppercase");
	t.end();
});
/*
Output when wrong, or invalid
# Check all caps option works as expected
not ok 2 Make sure the output is uppercase
  ---
    operator: equal
    expected: '~*~Ivan~*~'
    actual:   '~*~IVAN~*~'
    at: Test.<anonymous> (/Users/ivana/Documents/NodeWorkspace/test-anything/program.js:18:4)
    stack: |-
      Error: Make sure the output is uppercase
          at Test.assert [as _assert] (/Users/ivana/node_modules/tape/lib/test.js:212:54)
          at Test.bound [as _assert] (/Users/ivana/node_modules/tape/lib/test.js:64:32)
          at Test.equal.Test.equals.Test.isEqual.Test.is.Test.strictEqual.Test.strictEquals (/Users/ivana/node_modules/tape/lib/test.js:347:10)
          at Test.bound [as equal] (/Users/ivana/node_modules/tape/lib/test.js:64:32)
          at Test.<anonymous> (/Users/ivana/Documents/NodeWorkspace/test-anything/program.js:18:4)
          at Test.bound [as _cb] (/Users/ivana/node_modules/tape/lib/test.js:64:32)
          at Test.run (/Users/ivana/node_modules/tape/lib/test.js:83:10)
          at Test.bound [as run] (/Users/ivana/node_modules/tape/lib/test.js:64:32)
          at Immediate.next (/Users/ivana/node_modules/tape/lib/results.js:71:15)
          at runCallback (timers.js:781:20)
*/

test("Check all caps option works as expected with optional fancify", function (t){
	t.equal(fancify(input, false, "!"), opFan + input + opFan, "Check fancy chars include !");
	t.end();
});
/*
Output when wrong, or invalid
# Check all caps option works as expected with optional fancify
not ok 3 Check fancy chars include !
  ---
    operator: equal
    expected: '~*~Ivan~*~'
    actual:   '~!~Ivan~!~'
    at: Test.<anonymous> (/Users/ivana/Documents/NodeWorkspace/test-anything/program.js:23:4)
    stack: |-
      Error: Check fancy chars include !
          at Test.assert [as _assert] (/Users/ivana/node_modules/tape/lib/test.js:212:54)
          at Test.bound [as _assert] (/Users/ivana/node_modules/tape/lib/test.js:64:32)
          at Test.equal.Test.equals.Test.isEqual.Test.is.Test.strictEqual.Test.strictEquals (/Users/ivana/node_modules/tape/lib/test.js:347:10)
          at Test.bound [as equal] (/Users/ivana/node_modules/tape/lib/test.js:64:32)
          at Test.<anonymous> (/Users/ivana/Documents/NodeWorkspace/test-anything/program.js:23:4)
          at Test.bound [as _cb] (/Users/ivana/node_modules/tape/lib/test.js:64:32)
          at Test.run (/Users/ivana/node_modules/tape/lib/test.js:83:10)
          at Test.bound [as run] (/Users/ivana/node_modules/tape/lib/test.js:64:32)
          at Immediate.next (/Users/ivana/node_modules/tape/lib/results.js:71:15)
          at runCallback (timers.js:781:20)
*/

/*
official solution
var test = require('tape')
var fancify = require(process.argv[2])

test('fancify', function (t) {
	t.equal(fancify('Wat'), '~*~Wat~*~', 'Wraps a string in ~*~')
	t.equal(fancify('Wat', true), '~*~WAT~*~', 'Optionally makes it allcaps')
	t.equal(fancify('Wat', false, '%'), '~%~Wat~%~', 'Optionally allows to set the character')
	t.end()
})
*/
