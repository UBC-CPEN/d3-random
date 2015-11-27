# d3-random

Generate random numbers from various distributions.

## Installing

If you use NPM, `npm install d3-random`. Otherwise, download the [latest release](https://github.com/d3/d3-random/releases/latest).

## API Reference

<a name="uniform" href="#uniform">#</a> <b>uniform</b>([<i>min</i>, ][<i>max</i>])

Returns a function for generating random numbers with a [uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_\(continuous\)). The minimum allowed value of a returned number is *min*, and the maximum is *max*. If *min* is not specified, it defaults to 0; if *max* is not specified, it defaults to 1. For example:

```js
uniform(6)(); // Returns a number greater than or equal to 0 and less than 6.
uniform(1, 5)(); // Returns a number greater than or equal to 1 and less than 5.
```

Note that you can also use the built-in [Math.random](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random) to generate uniform distributions directly. For example, to generate a random integer between 0 and 99 (inclusive), you can say `Math.random() * 100 | 0`.

<a name="normal" href="#normal">#</a> <b>normal</b>([<i>mu</i>][, <i>sigma</i>])

Returns a function for generating random numbers with a [normal (Gaussian) distribution](https://en.wikipedia.org/wiki/Normal_distribution). The expected value of the generated numbers is *mu*, with the given standard deviation *sigma*. If *mu* is not specified, it defaults to 0; if *sigma* is not specified, it defaults to 1.

<a name="logNormal" href="#logNormal">#</a> <b>logNormal</b>([<i>mu</i>][, <i>sigma</i>])

Returns a function for generating random numbers with a [log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution). The expected value of the random variable’s natural logrithm is *mu*, with the given standard deviation *sigma*. If *mu* is not specified, it defaults to 0; if *sigma* is not specified, it defaults to 1.

<a name="bates" href="#bates">#</a> <b>bates</b>(<i>n</i>)

Returns a function for generating random numbers with a [Bates distribution](https://en.wikipedia.org/wiki/Bates_distribution) with *n* independent variables.

<a name="irwinHall" href="#irwinHall">#</a> <b>irwinHall</b>(<i>n</i>)

Returns a function for generating random numbers with an [Irwin–Hall distribution](https://en.wikipedia.org/wiki/Irwin–Hall_distribution) with *n* independent variables.

<a name="exponential" href="#exponential">#</a> <b>exponential</b>(<i>lambda</i>)

Returns a function for generating random numbers with an [exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution) with the rate *lambda*; equivalent to time between events in a [Poisson process](https://en.wikipedia.org/wiki/Poisson_point_process) with a mean of 1 / *lambda*. For example, exponential(1/40) generates random times between events where, on average, one event occurs every 40 units of time.

<a name="pareto" href="#pareto">#</a> <b>pareto</b>(<i>xm, alpha</i>)

Returns a function for generating random numbers with a [pareto distribution](https://en.wikipedia.org/wiki/Pareto_distribution) with a shape of *xm* and the a tail index of *alpha*.

## Changes from D3 3.x:

* Added a [uniform](#uniform) random number generator.

* Added an [exponential](#exponential) random number generator.

* Added a [pareto](#pareto) random number generator.
