<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Lognormal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Lognormal distribution.



<section class="usage">

## Usage

```javascript
import lognormal from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-lognormal@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { LogNormal, cdf, entropy, kurtosis, logpdf, mean, median, mode, pdf, quantile, skewness, stdev, variance } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-lognormal@deno/mod.js';
```

#### lognormal

Lognormal distribution.

```javascript
var dist = lognormal;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, sigma )`][@stdlib/stats/base/dists/lognormal/cdf]</span><span class="delimiter">: </span><span class="description">lognormal distribution cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, mu, sigma )`][@stdlib/stats/base/dists/lognormal/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for a lognormal distribution.</span>
-   <span class="signature">[`pdf( x, mu, sigma )`][@stdlib/stats/base/dists/lognormal/pdf]</span><span class="delimiter">: </span><span class="description">lognormal distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, sigma )`][@stdlib/stats/base/dists/lognormal/quantile]</span><span class="delimiter">: </span><span class="description">lognormal distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( mu, sigma )`][@stdlib/stats/base/dists/lognormal/entropy]</span><span class="delimiter">: </span><span class="description">lognormal distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( mu, sigma )`][@stdlib/stats/base/dists/lognormal/kurtosis]</span><span class="delimiter">: </span><span class="description">lognormal distribution excess kurtosis.</span>
-   <span class="signature">[`mean( mu, sigma )`][@stdlib/stats/base/dists/lognormal/mean]</span><span class="delimiter">: </span><span class="description">lognormal distribution expected value.</span>
-   <span class="signature">[`median( mu, sigma )`][@stdlib/stats/base/dists/lognormal/median]</span><span class="delimiter">: </span><span class="description">lognormal distribution median.</span>
-   <span class="signature">[`mode( mu, sigma )`][@stdlib/stats/base/dists/lognormal/mode]</span><span class="delimiter">: </span><span class="description">lognormal distribution mode.</span>
-   <span class="signature">[`skewness( mu, sigma )`][@stdlib/stats/base/dists/lognormal/skewness]</span><span class="delimiter">: </span><span class="description">lognormal distribution skewness.</span>
-   <span class="signature">[`stdev( mu, sigma )`][@stdlib/stats/base/dists/lognormal/stdev]</span><span class="delimiter">: </span><span class="description">lognormal distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, sigma )`][@stdlib/stats/base/dists/lognormal/variance]</span><span class="delimiter">: </span><span class="description">lognormal distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [lognormal][lognormal-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`LogNormal( [mu, sigma] )`][@stdlib/stats/base/dists/lognormal/ctor]</span><span class="delimiter">: </span><span class="description">lognormal distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var LogNormal = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-lognormal' ).LogNormal;

var dist = new LogNormal( 2.0, 4.0 );

var y = dist.cdf( 0.5 );
// returns ~0.25
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import lognormal from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-lognormal@deno/mod.js';

console.log( objectKeys( lognormal ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-lognormal.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-lognormal

[test-image]: https://github.com/stdlib-js/stats-base-dists-lognormal/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-lognormal/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-lognormal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-lognormal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-lognormal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-lognormal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-lognormal/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-lognormal/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-lognormal/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-lognormal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-lognormal/main/LICENSE

[lognormal-distribution]: https://en.wikipedia.org/wiki/Log-normal_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/lognormal/ctor]: https://github.com/stdlib-js/stats-base-dists-lognormal-ctor/tree/deno

[@stdlib/stats/base/dists/lognormal/entropy]: https://github.com/stdlib-js/stats-base-dists-lognormal-entropy/tree/deno

[@stdlib/stats/base/dists/lognormal/kurtosis]: https://github.com/stdlib-js/stats-base-dists-lognormal-kurtosis/tree/deno

[@stdlib/stats/base/dists/lognormal/mean]: https://github.com/stdlib-js/stats-base-dists-lognormal-mean/tree/deno

[@stdlib/stats/base/dists/lognormal/median]: https://github.com/stdlib-js/stats-base-dists-lognormal-median/tree/deno

[@stdlib/stats/base/dists/lognormal/mode]: https://github.com/stdlib-js/stats-base-dists-lognormal-mode/tree/deno

[@stdlib/stats/base/dists/lognormal/skewness]: https://github.com/stdlib-js/stats-base-dists-lognormal-skewness/tree/deno

[@stdlib/stats/base/dists/lognormal/stdev]: https://github.com/stdlib-js/stats-base-dists-lognormal-stdev/tree/deno

[@stdlib/stats/base/dists/lognormal/variance]: https://github.com/stdlib-js/stats-base-dists-lognormal-variance/tree/deno

[@stdlib/stats/base/dists/lognormal/cdf]: https://github.com/stdlib-js/stats-base-dists-lognormal-cdf/tree/deno

[@stdlib/stats/base/dists/lognormal/logpdf]: https://github.com/stdlib-js/stats-base-dists-lognormal-logpdf/tree/deno

[@stdlib/stats/base/dists/lognormal/pdf]: https://github.com/stdlib-js/stats-base-dists-lognormal-pdf/tree/deno

[@stdlib/stats/base/dists/lognormal/quantile]: https://github.com/stdlib-js/stats-base-dists-lognormal-quantile/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->
