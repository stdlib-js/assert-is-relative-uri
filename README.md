<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# isRelativeURI

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether a value is a relative [URI][uri].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import isRelativeURI from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-relative-uri@esm/index.mjs';
```

#### isRelativeURI( value )

Tests whether a value is a relative [URI][uri].

```javascript
var bool = isRelativeURI( 'foo/bar' );
// returns true

bool = isRelativeURI( 'https://example.com/' );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For more information regarding the URI scheme, see [RFC 3986][rfc-3986] and [Wikipedia][uri].
-   On the distinction between URI, URL, and URN, see [The Difference Between URLs and URIs][difference-url-uri].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import isRelativeURI from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-relative-uri@esm/index.mjs';

var bool = isRelativeURI( './foo.js' );
// returns true

bool = isRelativeURI( '/dashboard/admin' );
// returns true

bool = isRelativeURI( 'image.png' );
// returns true

bool = isRelativeURI( 'http://www.example.com/' );
// returns false

bool = isRelativeURI( 'https://www.example.com/' );
// returns false

bool = isRelativeURI( 'ftp://ftp.is.co.za/rfc/rfc1808.txt' );
// returns false

bool = isRelativeURI( 'data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D' );
// returns false

bool = isRelativeURI( 'mailto:beep@boop.com' );
// returns false

bool = isRelativeURI( null );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->


<!-- Section for describing a command-line interface. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-relative-uri.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-relative-uri

[test-image]: https://github.com/stdlib-js/assert-is-relative-uri/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-relative-uri/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-relative-uri/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-relative-uri?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-relative-uri.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-relative-uri/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-relative-uri/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-relative-uri/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-relative-uri/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-relative-uri/main/LICENSE

[uri]: http://en.wikipedia.org/wiki/URI_scheme

[rfc-3986]: https://tools.ietf.org/html/rfc3986

[difference-url-uri]: https://danielmiessler.com/study/url-uri/

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
