var tape = require("tape"),
    arrays = require("d3-arrays"),
    random = require("../"),
    skewness = require("./skewness"),
    kurtosis = require("./kurtosis");

require("seedrandom");
require("./inDelta");

var mathRandom = Math.random;

tape.test("poisson(lambda) returns random numbers with a mean of lambda", function(test) {
  Math.seedrandom("f330fbece4c1c99f");
  test.inDelta(arrays.mean(arrays.range(10000).map(random.poisson(1))), 1, .05);
  test.inDelta(arrays.mean(arrays.range(10000).map(random.poisson(10))), 10, .05);
  test.end();
});

tape.test("poisson(lambda) returns random numbers with a variance of lambda", function(test) {
  Math.seedrandom("c4af5ee918417093");
  test.inDelta(arrays.variance(arrays.range(10000).map(random.poisson(1))), 1, .05);
  test.inDelta(arrays.variance(arrays.range(10000).map(random.poisson(10))), 10, .05);
  test.end();
});

tape.test("poisson(lambda) returns random numbers with a skewness of lambda ^ -1/2", function(test) {
  Math.seedrandom("bb0bb470f346ff65");
  test.inDelta(skewness(arrays.range(10000).map(random.poisson(1))), Math.pow(1, -1 / 2), .05);
  test.inDelta(skewness(arrays.range(10000).map(random.poisson(10))), Math.pow(10, -1 / 2), .05);
  test.end();
});

tape.test("poisson(lambda) returns random numbers with a kurtosis of lambda ^ -1", function(test) {
  Math.seedrandom("3c21f0c8f5a8332c");
  test.inDelta(kurtosis(arrays.range(10000).map(random.poisson(1))), Math.pow(1, -1), .05);
  test.inDelta(kurtosis(arrays.range(10000).map(random.poisson(10))), Math.pow(10, -1), .05);
  test.end();
});

tape("poisson() [teardown]", function(test) {
  Math.random = mathRandom;
  test.end();
});
