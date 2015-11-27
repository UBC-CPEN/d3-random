var tape = require("tape"),
    arrays = require("d3-arrays"),
    random = require("../"),
    skewness = require("./skewness"),
    kurtosis = require("./kurtosis"),
    entropy = require("./entropy");

require("seedrandom");
require("./inDelta");
require("./greaterThan");

var mathRandom = Math.random;


// Test pareto mean
tape.test("pareto(xm, alpha) returns random numbers with a ", function(test) {
  Math.seedrandom("746122293b0a0a76");
  test.inDelta(arrays.mean(arrays.range(10000).map(random.pareto(5, 2))), 10, 1);
  // Verify that the mean is Infinity - a really big number.
  // So 1e30 suffices as a lower bound.
  test.greaterThan(arrays.mean(arrays.range(10000).map(random.pareto(5, 0.1))),
                   1e30);
  test.end();
});

// Test pareto variance
tape.test("pareto(xm, alpha) returns random numbers with a ", function(test) {
  Math.seedrandom("746122293b0a0a76");
  test.inDelta(arrays.variance(arrays.range(10000).map(random.pareto(2, 5))), 5/12, .5);
  // Verify that the variance is Infinity - a really big number.
  // So 1e10 suffices as a lower bound.
  test.greaterThan(arrays.variance(arrays.range(10000).map(random.pareto(2, 0.5))), 1e10);
  test.end();
});

tape.test("pareto(xm, alpha) returns random numbers with a skewness of"
	+ "((a-2)/2)^0.5)*(2(a+1))/(a-3) ", function(test) {
  Math.seedrandom("bb0bb479g446ff65");
	
	var skew = function( a ){
		return Math.sqrt((a-2)/a)*((2*(a+1))/(a-3));
	}
	
  test.inDelta(skewness(arrays.range(10000).map(random.pareto(150,13))), skew(13), .05);
  test.inDelta(skewness(arrays.range(10000).map(random.pareto(130,15))), skew(15), .05);
  test.end();
});

tape.test("pareto(xm, alpha) returns random numbers with a Kurtosis of", function(test) {
  Math.seedrandom("bb0bb479g446ff65");
	var kurtosisExpected = function( a ){
		return 6*(Math.pow(a,3)+Math.pow(a,2)-6*a-2)/(a*(a-2)*(a-4));
	}
	
	test.inDelta(kurtosis(arrays.range(10000).map(random.pareto(135,5))), kurtosisExpected(5), .05);
  test.inDelta(kurtosis(arrays.range(10000).map(random.pareto(170,6))),kurtosisExpected(6), .05);
  test.end();
});

tape("pareto() [teardown]", function(test) {
  Math.random = mathRandom;
  test.end();
});
