var test = require('tape');
var repeatCallback = require(process.argv[2]);
var cbTimes = 4;
/*
This is using a method called t.plan. This is a way to check the function makes the callback
the expected number of times. The next part (repeatCallback(cbTimes, function...)) is the part
that invokes the function you are testing. The function itself (repeatCallback) has the following
signaure: repeatCallback(int, cb)
*/
test ("next tick", function(t){
	//Validate the number of times expected
	t.plan(cbTimes);
	//Invoke the function to be tested
	repeatCallback(cbTimes, function (){
		t.pass("Callback was called");
	});
});

/*
Official solution 
var test = require('tape')
var repeatCallback = require(process.argv[2])

test('repeatCallback', function (t) {
	t.plan(4)
	repeatCallback(4, function () {
		t.pass('callback called')
	})
})
*/
