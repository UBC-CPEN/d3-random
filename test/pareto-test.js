var tape = require("tape"),
    arrays = require("d3-arrays"),
    random = require("../"),
    skewness = require("./skewness"),
    kurtosis = require("./kurtosis"),
    entropy = require("./entropy");

require("seedrandom");
require("./inDelta");

var mathRandom = Math.random;

//Testing pareto mean:
tape.test("pareto(xm, alpha) returns random numbers with a ", function(test) {
  Math.seedrandom("746122293b0a0a76");
  test.inDelta(arrays.mean(arrays.range(10000).map(random.pareto(5, 2))), 10, 1);
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
