export default function(xm, alpha) {
  return function() {
    return 1 / Math.pow(Math.random(), 1 / alpha);
  };
};
