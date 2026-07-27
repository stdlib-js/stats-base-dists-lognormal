# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2026-07-27)

<section class="features">

### Features

-   [`48157fa`](https://github.com/stdlib-js/stdlib/commit/48157fa9f40922efe577aaa2d2a7b1eb2a28dd96) - add C implementation for `stats/base/dists/lognormal/logcdf` [(#10882)](https://github.com/stdlib-js/stdlib/pull/10882)
-   [`c2fcbc0`](https://github.com/stdlib-js/stdlib/commit/c2fcbc0e51871744c2c42464051f45c030fdc936) - add C implementation for `stats/base/dists/lognormal/cdf` [(#10809)](https://github.com/stdlib-js/stdlib/pull/10809)
-   [`151e6e9`](https://github.com/stdlib-js/stdlib/commit/151e6e94f4491c50441f8ad8399ce20bd44564d4) - add C implementation for `stats/base/dists/lognormal/logpdf` [(#10881)](https://github.com/stdlib-js/stdlib/pull/10881)
-   [`abe64bf`](https://github.com/stdlib-js/stdlib/commit/abe64bfa1e6f04fa49979532f45f38c64a2239ff) - add C implementation for `lognormal/quantile` [(#10148)](https://github.com/stdlib-js/stdlib/pull/10148)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`594bb70`](https://github.com/stdlib-js/stdlib/commit/594bb702605bb473be30d637ae25cb3d8d95c97e): rename class to use camel case

    -   To migrate, users should replace `Lognormal` with `LogNormal`.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 2 issues were closed in this release:

[#3747](https://github.com/stdlib-js/stdlib/issues/3747), [#3756](https://github.com/stdlib-js/stdlib/issues/3756)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`4a0c3be`](https://github.com/stdlib-js/stdlib/commit/4a0c3be4719f713b69a8ff6b66cc3b0573bf4444) - **docs:** update Markdown equation elements _(by stdlib-bot)_
-   [`f25221d`](https://github.com/stdlib-js/stdlib/commit/f25221d5fcb5e84cb0ad4951db6f08f254c12d15) - **docs:** update Markdown equation elements _(by stdlib-bot)_
-   [`2cee50a`](https://github.com/stdlib-js/stdlib/commit/2cee50a75da1437551b91682b8785dbae8ab897f) - **docs:** update Markdown equation elements [(#13547)](https://github.com/stdlib-js/stdlib/pull/13547) _(by stdlib-bot, Athan Reines)_
-   [`36ee366`](https://github.com/stdlib-js/stdlib/commit/36ee366130c07464017ccf0b49b9645a8f644a5f) - **chore:** clean-up [(#13539)](https://github.com/stdlib-js/stdlib/pull/13539) _(by Philipp Burckhardt)_
-   [`67f7557`](https://github.com/stdlib-js/stdlib/commit/67f7557ca13ab425513196b26601e46f8a059ac2) - **chore:** clean-up [(#13283)](https://github.com/stdlib-js/stdlib/pull/13283) _(by Philipp Burckhardt)_
-   [`1c6fea0`](https://github.com/stdlib-js/stdlib/commit/1c6fea0027204331d9152f97079bc4a0a0957a2d) - **style:** fix variable order _(by Athan Reines)_
-   [`48157fa`](https://github.com/stdlib-js/stdlib/commit/48157fa9f40922efe577aaa2d2a7b1eb2a28dd96) - **feat:** add C implementation for `stats/base/dists/lognormal/logcdf` [(#10882)](https://github.com/stdlib-js/stdlib/pull/10882) _(by Kamal Singh Rautela, Philipp Burckhardt)_
-   [`c2fcbc0`](https://github.com/stdlib-js/stdlib/commit/c2fcbc0e51871744c2c42464051f45c030fdc936) - **feat:** add C implementation for `stats/base/dists/lognormal/cdf` [(#10809)](https://github.com/stdlib-js/stdlib/pull/10809) _(by Bhargav Dabhade, Neeraj Pathak)_
-   [`151e6e9`](https://github.com/stdlib-js/stdlib/commit/151e6e94f4491c50441f8ad8399ce20bd44564d4) - **feat:** add C implementation for `stats/base/dists/lognormal/logpdf` [(#10881)](https://github.com/stdlib-js/stdlib/pull/10881) _(by Kamal Singh Rautela, Neeraj Pathak, Philipp Burckhardt)_
-   [`60a4b85`](https://github.com/stdlib-js/stdlib/commit/60a4b8520b6f93a86c9f949a93c150bcd698d62d) - **refactor:** rename internal variables [(#12925)](https://github.com/stdlib-js/stdlib/pull/12925) _(by Philipp Burckhardt)_
-   [`59ab38e`](https://github.com/stdlib-js/stdlib/commit/59ab38ed2a7a6f96f5773e0a4b7a889ddef912bf) - **docs:** update `stats/base/dists/lognormal` TypeScript declarations [(#12607)](https://github.com/stdlib-js/stdlib/pull/12607) _(by stdlib-bot)_
-   [`594bb70`](https://github.com/stdlib-js/stdlib/commit/594bb702605bb473be30d637ae25cb3d8d95c97e) - **refactor:** correct class name casing in `base/dists/lognormal/ctor` [(#12499)](https://github.com/stdlib-js/stdlib/pull/12499) _(by Philipp Burckhardt)_
-   [`f59b324`](https://github.com/stdlib-js/stdlib/commit/f59b324c3c652580e17c4c4baae8168faab8af8c) - **docs:** fix typos and copy-paste errors in `stats` TypeScript declarations [(#12482)](https://github.com/stdlib-js/stdlib/pull/12482) _(by Philipp Burckhardt, Athan Reines)_
-   [`b517ce1`](https://github.com/stdlib-js/stdlib/commit/b517ce16f647ffe2270573dff57755fe7ba69027) - **docs:** propagate description and example fixes in `stats/base/dists/*` [(#12132)](https://github.com/stdlib-js/stdlib/pull/12132) _(by Philipp Burckhardt)_
-   [`81c4786`](https://github.com/stdlib-js/stdlib/commit/81c478690aac530a21505bae986e75ba5689aaf4) - **docs:** add negative-scale `@example` to `stats/base/dists/lognormal/cdf` [(#12093)](https://github.com/stdlib-js/stdlib/pull/12093) _(by Philipp Burckhardt)_
-   [`cd99d80`](https://github.com/stdlib-js/stdlib/commit/cd99d8072389d37a05848951926c3fe51da19832) - **docs:** propagate fixes to sibling packages [(#11843)](https://github.com/stdlib-js/stdlib/pull/11843) _(by Philipp Burckhardt)_
-   [`9fedcf9`](https://github.com/stdlib-js/stdlib/commit/9fedcf9679b2d3f8a90d30d4706634adf7ddbf73) - **docs:** fix parameter descriptions in `stats/base/dists/lognormal` [(#11829)](https://github.com/stdlib-js/stdlib/pull/11829) _(by Philipp Burckhardt)_
-   [`187e141`](https://github.com/stdlib-js/stdlib/commit/187e141098635f0f2edf0f6f1289e06473ae7fcd) - **chore:** add missing `npm` engine constraint to `stats/base/dists/*/ctor` [(#11686)](https://github.com/stdlib-js/stdlib/pull/11686) _(by Philipp Burckhardt)_
-   [`9430db6`](https://github.com/stdlib-js/stdlib/commit/9430db645b6b1d36afb35e2fe3275d9ce4c384b8) - **refactor:** reuse variance implementation for stdev in `stats/base/dists` [(#11370)](https://github.com/stdlib-js/stdlib/pull/11370) _(by Om-A-osc, Athan Reines)_
-   [`bd60a20`](https://github.com/stdlib-js/stdlib/commit/bd60a209ca4b0989663edbbc591bc7da80294827) - **build:** update R version to 4.2.0 in lint workflows [(#11262)](https://github.com/stdlib-js/stdlib/pull/11262) _(by Mara Averick)_
-   [`c07de96`](https://github.com/stdlib-js/stdlib/commit/c07de963b0116d680060bb12d271fd8bf0bb26c1) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`abe64bf`](https://github.com/stdlib-js/stdlib/commit/abe64bfa1e6f04fa49979532f45f38c64a2239ff) - **feat:** add C implementation for `lognormal/quantile` [(#10148)](https://github.com/stdlib-js/stdlib/pull/10148) _(by Siddhartha Mondal, Philipp Burckhardt)_
-   [`797d3a0`](https://github.com/stdlib-js/stdlib/commit/797d3a0bbe3f062d53e7ff8b7919e54a0e6c0d00) - **bench:** refactor to use string interpolation in `stats/base/dists/lognormal` [(#10445)](https://github.com/stdlib-js/stdlib/pull/10445) _(by Vishal Gaikwad)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 9 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Bhargav Dabhade
-   Kamal Singh Rautela
-   Mara Averick
-   Neeraj Pathak
-   Om-A-osc
-   Philipp Burckhardt
-   Siddhartha Mondal
-   Vishal Gaikwad

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.1">

## 0.3.1 (2026-02-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2026-01-30)

<section class="features">

### Features

-   [`75a786a`](https://github.com/stdlib-js/stdlib/commit/75a786a2b83991e7f7bb5e26a9af1263bba83556) - add C implementation for `stats/base/dists/lognormal/pdf` [(#4529)](https://github.com/stdlib-js/stdlib/pull/4529)
-   [`47d4dfa`](https://github.com/stdlib-js/stdlib/commit/47d4dfa8f8fbbb256aaeca77dfe522cae618ea47) - add C implementation for `stats/base/dists/lognormal/entropy` [(#4178)](https://github.com/stdlib-js/stdlib/pull/4178)
-   [`736fe31`](https://github.com/stdlib-js/stdlib/commit/736fe3118504faef9a2b6ac064debe426c8f9a24) - add C implementation for `stats/base/dists/lognormal/skewness` [(#4166)](https://github.com/stdlib-js/stdlib/pull/4166)
-   [`6ee07a4`](https://github.com/stdlib-js/stdlib/commit/6ee07a45b9f2a482a005bb8f2fdb8c72c6864ea2) - add C implementation for `stats/base/dists/lognormal/median` [(#4147)](https://github.com/stdlib-js/stdlib/pull/4147)
-   [`61209d2`](https://github.com/stdlib-js/stdlib/commit/61209d2c59f42dbb393631d682442b7034f8b8af) - add C implementation for `stats/base/dists/lognormal/mode` [(#4148)](https://github.com/stdlib-js/stdlib/pull/4148)
-   [`67246dd`](https://github.com/stdlib-js/stdlib/commit/67246dde7d3974070403ce5e685143614534795a) - add C implementation for `stats/base/dists/lognormal/mean` [(#4146)](https://github.com/stdlib-js/stdlib/pull/4146)
-   [`3aca89e`](https://github.com/stdlib-js/stdlib/commit/3aca89ef723e8ee7ebf35c4fd086d2afab87f216) - add C implementation for `stats/base/dists/lognormal/stdev` [(#4175)](https://github.com/stdlib-js/stdlib/pull/4175)
-   [`1871022`](https://github.com/stdlib-js/stdlib/commit/18710227bb4adc73c7712fe97930adf933ad4d57) - add C implementation for `stats/base/dists/lognormal/kurtosis`   [(#4548)](https://github.com/stdlib-js/stdlib/pull/4548)
-   [`7be886c`](https://github.com/stdlib-js/stdlib/commit/7be886c5eb2ff9894cc8088c1defb60eebd029b6) - add C implementation for `stats/base/dists/lognormal/variance` [(#3992)](https://github.com/stdlib-js/stdlib/pull/3992)

</section>

<!-- /.features -->

<section class="issues">

### Closed Issues

A total of 13 issues were closed in this release:

[#3748](https://github.com/stdlib-js/stdlib/issues/3748), [#3749](https://github.com/stdlib-js/stdlib/issues/3749), [#3752](https://github.com/stdlib-js/stdlib/issues/3752), [#3753](https://github.com/stdlib-js/stdlib/issues/3753), [#3754](https://github.com/stdlib-js/stdlib/issues/3754), [#3755](https://github.com/stdlib-js/stdlib/issues/3755), [#3757](https://github.com/stdlib-js/stdlib/issues/3757), [#3758](https://github.com/stdlib-js/stdlib/issues/3758), [#3759](https://github.com/stdlib-js/stdlib/issues/3759), [#4979](https://github.com/stdlib-js/stdlib/issues/4979), [#6713](https://github.com/stdlib-js/stdlib/issues/6713), [#7452](https://github.com/stdlib-js/stdlib/issues/7452), [#9567](https://github.com/stdlib-js/stdlib/issues/9567)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`5ee0c78`](https://github.com/stdlib-js/stdlib/commit/5ee0c781e82099b730ddd0126f888515b817b47c) - **test:** remove duplicate test cases in `stats/base/dists/lognormal` packages _(by Philipp Burckhardt)_
-   [`2141b2f`](https://github.com/stdlib-js/stdlib/commit/2141b2f3469ee6e013716201f8e39e083d3676d3) - **bench:** update random value generation [(#9780)](https://github.com/stdlib-js/stdlib/pull/9780) _(by Harsh Yadav)_
-   [`960af8f`](https://github.com/stdlib-js/stdlib/commit/960af8f193a0e7eaa20215e8ae231f943e825366) - **bench:** update random value generation [(#9781)](https://github.com/stdlib-js/stdlib/pull/9781) _(by Harsh Yadav)_
-   [`a7a77a7`](https://github.com/stdlib-js/stdlib/commit/a7a77a7ba28bc0f55275db3a77a0117f0679b317) - **test:** remove duplicate NaN test cases in normal mean [(#9588)](https://github.com/stdlib-js/stdlib/pull/9588) _(by Suyash Pathak)_
-   [`3b39228`](https://github.com/stdlib-js/stdlib/commit/3b39228e76a9586ede35c2c128939f21c6982d09) - **docs:** replace manual `for` loop in examples [(#8263)](https://github.com/stdlib-js/stdlib/pull/8263) _(by Harsh Yadav)_
-   [`fd24b4a`](https://github.com/stdlib-js/stdlib/commit/fd24b4a9cd4322a1d32b552c92f81f506afda44e) - **chore:** address commit comments [(#8067)](https://github.com/stdlib-js/stdlib/pull/8067) _(by Vara Rahul Rajana)_
-   [`e2efe32`](https://github.com/stdlib-js/stdlib/commit/e2efe32914d0d9dae5da34e6f7e7bf7655430710) - **chore:** rename exported variable in d.ts file to match name used in example code _(by Philipp Burckhardt)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`fc438e0`](https://github.com/stdlib-js/stdlib/commit/fc438e0edbad0689d6923d6f3edb959b96597662) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`11581aa`](https://github.com/stdlib-js/stdlib/commit/11581aaca8c3cb824cbb92c0c0f80e76890bdb20) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`07f7c05`](https://github.com/stdlib-js/stdlib/commit/07f7c0522c73e6ad9505e1d45035ae439344200d) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`9c21fd2`](https://github.com/stdlib-js/stdlib/commit/9c21fd20ef8b8a6a88abb96d80ea6d8e4c5434eb) - **test:** use .strictEqual() instead of .equal() _(by Philipp Burckhardt)_
-   [`21b2d73`](https://github.com/stdlib-js/stdlib/commit/21b2d735baed33328aae9f499ab3d3733b776e54) - **chore:** address commit comments for commit `75a786a` [(#7679)](https://github.com/stdlib-js/stdlib/pull/7679) _(by Anmol Sah)_
-   [`0a23889`](https://github.com/stdlib-js/stdlib/commit/0a23889dd55afcd8f1a85cd208a2397c931637bd) - **test:** increase tolerances for passing tests _(by Philipp Burckhardt)_
-   [`75a786a`](https://github.com/stdlib-js/stdlib/commit/75a786a2b83991e7f7bb5e26a9af1263bba83556) - **feat:** add C implementation for `stats/base/dists/lognormal/pdf` [(#4529)](https://github.com/stdlib-js/stdlib/pull/4529) _(by Nishchay Rajput, Philipp Burckhardt)_
-   [`bde1562`](https://github.com/stdlib-js/stdlib/commit/bde156258f0e182fa6cf50f9bdd907ba8593dbf0) - **chore:** clean-up _(by Athan Reines)_
-   [`eb555e4`](https://github.com/stdlib-js/stdlib/commit/eb555e4097f20ab99054945e55b44a9f795f0cf7) - **chore:** clean-up _(by Athan Reines)_
-   [`47d4dfa`](https://github.com/stdlib-js/stdlib/commit/47d4dfa8f8fbbb256aaeca77dfe522cae618ea47) - **feat:** add C implementation for `stats/base/dists/lognormal/entropy` [(#4178)](https://github.com/stdlib-js/stdlib/pull/4178) _(by Manvith M, Philipp Burckhardt, stdlib-bot)_
-   [`736fe31`](https://github.com/stdlib-js/stdlib/commit/736fe3118504faef9a2b6ac064debe426c8f9a24) - **feat:** add C implementation for `stats/base/dists/lognormal/skewness` [(#4166)](https://github.com/stdlib-js/stdlib/pull/4166) _(by Manvith M, Philipp Burckhardt, stdlib-bot)_
-   [`6ee07a4`](https://github.com/stdlib-js/stdlib/commit/6ee07a45b9f2a482a005bb8f2fdb8c72c6864ea2) - **feat:** add C implementation for `stats/base/dists/lognormal/median` [(#4147)](https://github.com/stdlib-js/stdlib/pull/4147) _(by Manvith M, Philipp Burckhardt, stdlib-bot)_
-   [`61209d2`](https://github.com/stdlib-js/stdlib/commit/61209d2c59f42dbb393631d682442b7034f8b8af) - **feat:** add C implementation for `stats/base/dists/lognormal/mode` [(#4148)](https://github.com/stdlib-js/stdlib/pull/4148) _(by Manvith M, Philipp Burckhardt, stdlib-bot)_
-   [`67246dd`](https://github.com/stdlib-js/stdlib/commit/67246dde7d3974070403ce5e685143614534795a) - **feat:** add C implementation for `stats/base/dists/lognormal/mean` [(#4146)](https://github.com/stdlib-js/stdlib/pull/4146) _(by Manvith M, Philipp Burckhardt, stdlib-bot)_
-   [`3aca89e`](https://github.com/stdlib-js/stdlib/commit/3aca89ef723e8ee7ebf35c4fd086d2afab87f216) - **feat:** add C implementation for `stats/base/dists/lognormal/stdev` [(#4175)](https://github.com/stdlib-js/stdlib/pull/4175) _(by Manvith M, Philipp Burckhardt, stdlib-bot)_
-   [`3d4246c`](https://github.com/stdlib-js/stdlib/commit/3d4246c325475ea950b3ec5b91936280b8634453) - **chore:** re-enable lint rule _(by Athan Reines)_
-   [`1871022`](https://github.com/stdlib-js/stdlib/commit/18710227bb4adc73c7712fe97930adf933ad4d57) - **feat:** add C implementation for `stats/base/dists/lognormal/kurtosis`   [(#4548)](https://github.com/stdlib-js/stdlib/pull/4548) _(by Vivek Maurya, Philipp Burckhardt, stdlib-bot)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`f7988d3`](https://github.com/stdlib-js/stdlib/commit/f7988d3c02e0eff3bd9bd7523b5dc975bb98dc0e) - **bench:** fix `isnan` checks in `stats/base/dists` [(#5296)](https://github.com/stdlib-js/stdlib/pull/5296) _(by Karan Anand)_
-   [`ae08a29`](https://github.com/stdlib-js/stdlib/commit/ae08a29eb928357ae97532f0c3f398b0fef58ebd) - **bench:** refactor random number generation in `stats/base/dists/lognormal` [(#5164)](https://github.com/stdlib-js/stdlib/pull/5164) _(by Saurabh Singh)_
-   [`e61b1de`](https://github.com/stdlib-js/stdlib/commit/e61b1dee3334bacf30d213de5b5f1c7868c0753b) - **docs:** clean-up of C docstrings _(by Philipp Burckhardt)_
-   [`1d5aa47`](https://github.com/stdlib-js/stdlib/commit/1d5aa47204c258b674d3db4aec92fbd2475e5ea7) - **chore:** directly draw from the desired distribution instead of adding constants _(by Philipp Burckhardt)_
-   [`4a70790`](https://github.com/stdlib-js/stdlib/commit/4a707903dfef7c2b56216000165706497d19a251) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`7be886c`](https://github.com/stdlib-js/stdlib/commit/7be886c5eb2ff9894cc8088c1defb60eebd029b6) - **feat:** add C implementation for `stats/base/dists/lognormal/variance` [(#3992)](https://github.com/stdlib-js/stdlib/pull/3992) _(by Aayush Khanna)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 12 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Anmol Sah
-   Athan Reines
-   Harsh Yadav
-   Karan Anand
-   Manvith M
-   Nishchay Rajput
-   Philipp Burckhardt
-   Saurabh Singh
-   Suyash Pathak
-   Vara Rahul Rajana
-   Vivek Maurya

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="commits">

### Commits

<details>

-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`d5fa8e8`](https://github.com/stdlib-js/stdlib/commit/d5fa8e8a6267a837a25a7027e9fe3e847bc2d1c5) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`ce7e336`](https://github.com/stdlib-js/stdlib/commit/ce7e3367c0f9477773fe76dd0eca64dc6ad33c02) - **docs:** update equations _(by Philipp Burckhardt)_
-   [`640025b`](https://github.com/stdlib-js/stdlib/commit/640025bb14bd041fbe504ccc89becc0f647bb7cd) - **build:** use supported operators for GitHub rendering _(by Philipp Burckhardt)_
-   [`37f032d`](https://github.com/stdlib-js/stdlib/commit/37f032d4a571f667ea99f6f52f60b5d736c627f3) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

