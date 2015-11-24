export default function(xm, alpha) {
  return function() {
    return xm / Math.pow(1 - Math.random(), 1 / alpha);
  };
};
