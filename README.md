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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Lognormal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Lognormal distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-lognormal
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var lognormal = require( '@stdlib/stats-base-dists-lognormal' );
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
-   <span class="signature">[`logcdf( x, mu, sigma )`][@stdlib/stats/base/dists/lognormal/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function (CDF) for a lognormal distribution.</span>
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
var LogNormal = require( '@stdlib/stats-base-dists-lognormal' ).LogNormal;

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
var objectKeys = require( '@stdlib/utils-keys' );
var lognormal = require( '@stdlib/stats-base-dists-lognormal' );

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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-lognormal.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-lognormal

[test-image]: https://github.com/stdlib-js/stats-base-dists-lognormal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-lognormal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-lognormal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-lognormal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-lognormal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-lognormal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-lognormal/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-lognormal/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-lognormal/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-lognormal/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-lognormal/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-lognormal/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-lognormal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-lognormal/main/LICENSE

[lognormal-distribution]: https://en.wikipedia.org/wiki/Log-normal_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/lognormal/ctor]: https://github.com/stdlib-js/stats-base-dists-lognormal-ctor

[@stdlib/stats/base/dists/lognormal/entropy]: https://github.com/stdlib-js/stats-base-dists-lognormal-entropy

[@stdlib/stats/base/dists/lognormal/kurtosis]: https://github.com/stdlib-js/stats-base-dists-lognormal-kurtosis

[@stdlib/stats/base/dists/lognormal/mean]: https://github.com/stdlib-js/stats-base-dists-lognormal-mean

[@stdlib/stats/base/dists/lognormal/median]: https://github.com/stdlib-js/stats-base-dists-lognormal-median

[@stdlib/stats/base/dists/lognormal/mode]: https://github.com/stdlib-js/stats-base-dists-lognormal-mode

[@stdlib/stats/base/dists/lognormal/skewness]: https://github.com/stdlib-js/stats-base-dists-lognormal-skewness

[@stdlib/stats/base/dists/lognormal/stdev]: https://github.com/stdlib-js/stats-base-dists-lognormal-stdev

[@stdlib/stats/base/dists/lognormal/variance]: https://github.com/stdlib-js/stats-base-dists-lognormal-variance

[@stdlib/stats/base/dists/lognormal/cdf]: https://github.com/stdlib-js/stats-base-dists-lognormal-cdf

[@stdlib/stats/base/dists/lognormal/logcdf]: https://github.com/stdlib-js/stats-base-dists-lognormal-logcdf

[@stdlib/stats/base/dists/lognormal/logpdf]: https://github.com/stdlib-js/stats-base-dists-lognormal-logpdf

[@stdlib/stats/base/dists/lognormal/pdf]: https://github.com/stdlib-js/stats-base-dists-lognormal-pdf

[@stdlib/stats/base/dists/lognormal/quantile]: https://github.com/stdlib-js/stats-base-dists-lognormal-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
