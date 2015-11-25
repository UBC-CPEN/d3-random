var tape = require("tape");

tape.Test.prototype.greaterThan = function(actual, expected) {
  this._assert(actual >= expected, {
    message: "should be greater than or equal to",
    operator: "greaterThan",
    actual: actual,
    expected: [expected, Infinity]
  });
};
