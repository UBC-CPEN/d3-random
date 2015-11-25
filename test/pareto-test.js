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

// Testing pareto mean:
tape.test("pareto(xm, alpha) returns random numbers with a ", function(test) {
  Math.seedrandom("746122293b0a0a76");
  test.inDelta(arrays.mean(arrays.range(10000).map(random.pareto(5, 2))), 10, 1);
  // Verify that the mean is Infinity - a really big number.
  // So 1e30 suffices as a lower bound.
  test.greaterThan(arrays.mean(arrays.range(10000).map(random.pareto(5, 0.1))),
                   1e30);
  test.end();
});

tape.test("pareto(xm, alpha) returns random numbers with a ", function(test) {
  Math.seedrandom("");
  // TODO: Test pareto variance
  test.end();
});

tape.test("pareto(xm, alpha) returns random numbers with a ", function(test) {
  Math.seedrandom("");
  // TODO: Test pareto skewness
  test.end();
});

tape.test("pareto(xm, alpha) returns random numbers with a ", function(test) {
  Math.seedrandom("");
  // TODO: Test pareto kurtosis
  test.end();
});

tape.test("pareto(xm, alpha) returns random numbers with a ", function(test) {
  Math.seedrandom("");
  // TODO: Test pareto entropy
  test.end();
});

tape("pareto() [teardown]", function(test) {
  Math.random = mathRandom;
  test.end();
});
