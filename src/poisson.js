export default function(lambda) {
  var n = arguments.length;
  if (!n) lambda = 1;
  return function() {
    var l, k, p;
    l = Math.pow(Math.E, -lambda);
    do {
      k = k + 1;
      p = p * Math.random();
    } while (p > l);
    return k - 1;
  };
};
