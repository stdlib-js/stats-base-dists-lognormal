/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import cdf = require( '@stdlib/stats-base-dists-lognormal-cdf' );
import LogNormal = require( '@stdlib/stats-base-dists-lognormal-ctor' );
import entropy = require( '@stdlib/stats-base-dists-lognormal-entropy' );
import kurtosis = require( '@stdlib/stats-base-dists-lognormal-kurtosis' );
import logcdf = require( '@stdlib/stats-base-dists-lognormal-logcdf' );
import logpdf = require( '@stdlib/stats-base-dists-lognormal-logpdf' );
import mean = require( '@stdlib/stats-base-dists-lognormal-mean' );
import median = require( '@stdlib/stats-base-dists-lognormal-median' );
import mode = require( '@stdlib/stats-base-dists-lognormal-mode' );
import pdf = require( '@stdlib/stats-base-dists-lognormal-pdf' );
import quantile = require( '@stdlib/stats-base-dists-lognormal-quantile' );
import skewness = require( '@stdlib/stats-base-dists-lognormal-skewness' );
import stdev = require( '@stdlib/stats-base-dists-lognormal-stdev' );
import variance = require( '@stdlib/stats-base-dists-lognormal-variance' );

/**
* Interface describing the `lognormal` namespace.
*/
interface Namespace {
	/**
	* Lognormal distribution cumulative distribution function (CDF).
	*
	* @param x - input value
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = ns.cdf( 2.0, 0.0, 1.0 );
	* // returns ~0.756
	*
	* y = ns.cdf( 5.0, 10.0, 3.0 );
	* // returns ~0.003
	*
	* var mycdf = ns.cdf.factory( 3.0, 1.5 );
	*
	* y = mycdf( 1.0 );
	* // returns ~0.023
	*
	* y = mycdf( 4.0 );
	* // returns ~0.141
	*/
	cdf: typeof cdf;

	/**
	* Lognormal distribution.
	*/
	LogNormal: typeof LogNormal;

	/**
	* Returns the differential entropy for a lognormal distribution with location `mu` and scale `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns entropy
	*
	* @example
	* var y = ns.entropy( 0.0, 1.0 );
	* // returns ~1.419
	*
	* @example
	* var y = ns.entropy( 5.0, 2.0 );
	* // returns ~7.112
	*
	* @example
	* var y = ns.entropy( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.entropy( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.entropy( 0.0, 0.0 );
	* // returns NaN
	*/
	entropy: typeof entropy;

	/**
	* Returns the excess kurtosis for a lognormal distribution with location `mu` and scale `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns excess kurtosis
	*
	* @example
	* var y = ns.kurtosis( 0.0, 1.0 );
	* // returns ~110.936
	*
	* @example
	* var y = ns.kurtosis( 5.0, 2.0 );
	* // returns ~9220556.977
	*
	* @example
	* var y = ns.kurtosis( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.kurtosis( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.kurtosis( 0.0, 0.0 );
	* // returns NaN
	*/
	kurtosis: typeof kurtosis;

	/**
	* Lognormal distribution natural logarithm of cumulative distribution function (CDF).
	*
	* @param x - input value
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns evaluated logcdf
	*
	* @example
	* var y = ns.logcdf( 2.0, 0.0, 1.0 );
	* // returns ~-0.2799
	*
	* var mylogcdf = ns.logcdf.factory( 10.0, 2.0 );
	* y = mylogcdf( 10.0 );
	* // returns ~-9.732
	*/
	logcdf: typeof logcdf;

	/**
	* Lognormal distribution natural logarithm of probability density function (logPDF).
	*
	* @param x - input value
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = ns.logpdf( 2.0, 0.0, 1.0 );
	* // returns ~-1.852
	*
	* y = ns.logpdf( 1.0, 0.0, 1.0 );
	* // returns ~-0.919
	*
	* y = ns.logpdf( 1.0, 3.0, 1.0 );
	* // returns ~-5.419
	*
	* var mylogpdf = ns.logpdf.factory( 4.0, 2.0 );
	* y = mylogpdf( 10.0 );
	* // returns ~-4.269
	*
	* y = mylogpdf( 2.0 );
	* // returns ~-3.689
	*/
	logpdf: typeof logpdf;

	/**
	* Returns the expected value for a lognormal distribution with location `mu` and scale `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns expected value
	*
	* @example
	* var y = ns.mean( 0.0, 1.0 );
	* // returns ~1.649
	*
	* @example
	* var y = ns.mean( 5.0, 2.0 );
	* // returns ~1096.633
	*
	* @example
	* var y = ns.mean( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.mean( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.mean( 0.0, 0.0 );
	* // returns NaN
	*/
	mean: typeof mean;

	/**
	* Returns the median for a lognormal distribution with location `mu` and scale `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns median
	*
	* @example
	* var y = ns.median( 0.0, 1.0 );
	* // returns 1.0
	*
	* @example
	* var y = ns.median( 5.0, 2.0 );
	* // returns ~148.413
	*
	* @example
	* var y = ns.median( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.median( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.median( 0.0, 0.0 );
	* // returns NaN
	*/
	median: typeof median;

	/**
	* Returns the mode for a lognormal distribution with location `mu` and scale `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns mode
	*
	* @example
	* var y = ns.mode( 0.0, 1.0 );
	* // returns ~0.368
	*
	* @example
	* var y = ns.mode( 5.0, 2.0 );
	* // returns ~2.718
	*
	* @example
	* var y = ns.mode( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.mode( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.mode( 0.0, 0.0 );
	* // returns NaN
	*/
	mode: typeof mode;

	/**
	* Lognormal distribution probability density function (PDF).
	*
	* @param x - input value
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = ns.pdf( 2.0, 0.0, 1.0 );
	* // returns ~0.157
	*
	* y = ns.pdf( 1.0, 0.0, 1.0 );
	* // returns ~0.399
	*
	* y = ns.pdf( 1.0, 3.0, 1.0 );
	* // returns ~0.004
	*
	* var mypdf = ns.pdf.factory( 4.0, 2.0 );
	* y = mypdf( 10.0 );
	* // returns ~0.014
	*
	* y = mypdf( 2.0 );
	* // returns ~0.025
	*/
	pdf: typeof pdf;

	/**
	* Lognormal distribution quantile function.
	*
	* @param p - input value
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns evaluated quantile function
	*
	* @example
	* var y = ns.quantile( 0.8, 0.0, 1.0 );
	* // returns ~2.32
	*
	* y = ns.quantile( 0.5, 4.0, 2.0 );
	* // returns ~54.598
	*
	* var myquantile = ns.quantile.factory( 4.0, 2.0 );
	*
	* y = myquantile( 0.2 );
	* // returns ~10.143
	*
	* y = myquantile( 0.8 );
	* // returns ~293.901
	*/
	quantile: typeof quantile;

	/**
	* Returns the skewness for a lognormal distribution with location `mu` and scale `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns skewness
	*
	* @example
	* var y = ns.skewness( 0.0, 1.0 );
	* // returns ~6.185
	*
	* @example
	* var y = ns.skewness( 5.0, 2.0 );
	* // returns ~414.359
	*
	* @example
	* var y = ns.skewness( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.skewness( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.skewness( 0.0, 0.0 );
	* // returns NaN
	*/
	skewness: typeof skewness;

	/**
	* Returns the standard deviation for a lognormal distribution with location `mu` and scale `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns standard deviation
	*
	* @example
	* var y = ns.stdev( 0.0, 1.0 );
	* // returns ~2.161
	*
	* @example
	* var y = ns.stdev( 5.0, 2.0 );
	* // returns ~8028.534
	*
	* @example
	* var y = ns.stdev( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.stdev( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.stdev( 0.0, 0.0 );
	* // returns NaN
	*/
	stdev: typeof stdev;

	/**
	* Returns the variance for a lognormal distribution with location `mu` and scale `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns variance
	*
	* @example
	* var y = ns.variance( 0.0, 1.0 );
	* // returns ~4.671
	*
	* @example
	* var y = ns.variance( 5.0, 2.0 );
	* // returns ~64457364.853
	*
	* @example
	* var y = ns.variance( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.variance( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.variance( 0.0, 0.0 );
	* // returns NaN
	*/
	variance: typeof variance;
}

/**
* Lognormal distribution.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
