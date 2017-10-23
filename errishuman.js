var test = require('tape');
var feedCat = require(process.argv[2]);

/*
In my solution I'm splitting the tests into multiple calls to the function (feedCat). In the official
solution they use the t.plan function which allows you to validate the function is called N number of times
and you don't need to call t.end.

The rest is the same as expected.  
*/
test ("check error is thrown for chocolate", function (t){
	t.throws(function(){
		feedCat("chocolate");
	});
	t.end();
});

test ("Check no error when given normal food", function(t){
	t.equal(feedCat("food"), "yum", "make sure the cat returns yum when given food");
	t.end();
});


/*
Official Solution
var test = require('tape')
var feedCat = require(process.argv[2])

test('cat feeding', function (t) {
	t.plan(2)
	t.equal(feedCat('food'), 'yum')
	t.throws(feedCat.bind(null, 'chocolate'))
})
*/
