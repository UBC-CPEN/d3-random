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

tape.test("pareto(xm, alpha) returns random numbers with a mean of infinity for alpha <= 1 and " + 
          "(alpha * xm) / (alpha-1) for alpha > 1", function(test) {
  Math.seedrandom("746122293b0a0a76");
  test.inDelta(arrays.mean(arrays.range(10000).map(random.pareto(5, 2))), 10, 1);
  // Verify that the mean is infinity, a really big number, so 1e30 suffices as a lower bound.
  test.greaterThan(arrays.mean(arrays.range(10000).map(random.pareto(5, 0.1))),
                   1e30);
  test.end();
});

tape.test("pareto(xm, alpha) returns random numbers with a variance of infinity for alpha in (0,2]" +
          " and (xm^2 * alpha) / ((alpha-1)^2 * (alpha-2)) for alpha > 2", function(test) {
  Math.seedrandom("746122293b0a0a76");
  test.inDelta(arrays.variance(arrays.range(10000).map(random.pareto(2, 5))), 5/12, .5);
  // Verify that the variance is infinity, a really big number, so 1e10 suffices as a lower bound.
  test.greaterThan(arrays.variance(arrays.range(10000).map(random.pareto(2, 0.5))), 1e10);
  test.end();
});

tape.test("pareto(xm, alpha) returns random numbers with a skewness of " +
          "((alpha-2) / 2) ^ 0.5) * (2 * (alpha+1)) / (alpha-3) ", function(test) {
  Math.seedrandom("bb0bb479g446ff65");
  var skewnessExpected = function( a ){
    return Math.sqrt((a-2)/a)*((2*(a+1))/(a-3));
  }
  test.inDelta(skewness(arrays.range(10000).map(random.pareto(150,13))), skewnessExpected(13), .05);
  test.inDelta(skewness(arrays.range(10000).map(random.pareto(130,15))), skewnessExpected(15), .05);
  test.end();
});

tape.test("pareto(xm, alpha) returns random numbers with a kurtosis of " +
          "(6 * (alpha^3+alpha^2-6*alpha-2)) / (alpha * (alpha-3) * (alpha-4))", function(test) {
  Math.seedrandom("bb0bb479g446ff65");
  var kurtosisExpected = function( a ){
    return 6*(Math.pow(a,3)+Math.pow(a,2)-6*a-2)/(a*(a-2)*(a-4));
  }
  test.inDelta(kurtosis(arrays.range(10000).map(random.pareto(10,100000))),kurtosisExpected(100000), .05);
  Math.seedrandom("bb0bb479g446ff65");
  test.inDelta(kurtosis(arrays.range(10000).map(random.pareto(1,1000000))), kurtosisExpected(100000), .05);
  test.end();
});

tape("pareto() [teardown]", function(test) {
  Math.random = mathRandom;
  test.end();
});
