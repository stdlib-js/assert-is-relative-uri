/**
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

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;


// VARIABLES //

/**
* Matches parts of a URI according to RFC 3986.
*
* ```text
* <scheme name> : <hierarchical part > [ ? <query> ] [ # <fragment> ]
* ```
*
* Regular expression: `/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/`
*
* -   `(?:([^:\/?#]+):)`
*
*     -   match the scheme, including the `:`, but only capture the scheme name
*
* -   `?`
*
*     -   match the scheme zero or one times
*
* -   `(?:\/\/([^\/?#]*))`
*
*     -   match the hierarchical part which is everything which is not a `/`, `#`, or `?`, but only capture whatever comes after the `//`
*
* -   `?`
*
*     -   match the hierarchical part zero or one times
*
* -   `([^?#]*)`
*
*     -   capture everything (the path) until meeting a `?` or `#`
*
* -   `(?:\?[^#]*)`
*
*     -   match, but don't capture, a query
*
* -   `?`
*
*     -   match the query zero or one times
*
* -   `(?:#.*)`
*
*     -   match, but don't capture, a fragment
*
* -   `?`
*
*     -   match the fragment zero or one times
*
* @private
* @constant
* @type {RegExp}
* @default /(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/
*/
var RE_URI = /(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/; // eslint-disable-line no-useless-escape

// Illegal characters (anything which is not in between the square brackets):
var RE_ILLEGALS = /[^a-z0-9:\/?#\[\]@!$&'()*+,;=.\-_~%]/i; // eslint-disable-line no-useless-escape

// Incomplete HEX escapes:
var RE_HEX1 = /%[^0-9a-f]/i;
var RE_HEX2 = /%[0-9a-f](:?[^0-9a-f]|$)/i;

// If authority is not present, path must not begin with '//'
var RE_PATH = /^\/\//;

// Scheme must begin with a letter, then consist of letters, digits, '+', '.', or '-' => e.g., 'http', 'https', 'ftp'
var RE_SCHEME = /^[a-z][a-z0-9+\-.]*$/;


// MAIN //

/**
* Tests whether a value is a relative URI.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether a value is a relative URI
*
* @example
* var bool = isRelativeURI( './beep/boop' );
* // returns true
*
* @example
* var bool = isRelativeURI( '/dashboard/admin' );
* // returns true
*
* @example
* var bool = isRelativeURI( 'https://wikipedia.org' );
* // returns false
*
* @example
* var bool = isRelativeURI( null );
* // returns false
*/
function isRelativeURI( value ) {
	var authority;
	var scheme;
	var parts;
	var path;
	if ( !isString( value ) ) {
		return false;
	}
	// Check for illegal characters:
	if ( RE_ILLEGALS.test( value ) ) {
		return false;
	}
	// Check for incomplete HEX escapes:
	if (
		RE_HEX1.test( value ) ||
		RE_HEX2.test( value )
	) {
		return false;
	}
	// Split the string into various URI components:
	parts = value.match( RE_URI );
	scheme = parts[ 1 ];
	authority = parts[ 2 ];
	path = parts[ 3 ];

	if (
		!scheme ||
		!scheme.length ||
		!RE_SCHEME.test( scheme.toLowerCase() )
	) {
		return true;
	}
	if (
		!authority &&
		RE_PATH.test( path )
	) {
		return true;
	}
	return false;
}


// EXPORTS //

module.exports = isRelativeURI;
