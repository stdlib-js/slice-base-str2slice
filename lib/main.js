/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var trim = require( '@stdlib/string-base-trim' );
var Slice = require( '@stdlib/slice-ctor' );


// VARIABLES //

var PREFIX = 'Slice(';
var NARGS = 3;

/**
* Regular expression matching the slice argument separator.
*
* @private
* @name RE_SEP
* @type {RegExp}
*/
var RE_SEP = /\s*,\s*/;

/**
* Regular expression matching an integer value.
*
* @private
* @name RE_INTEGER
* @type {RegExp}
*/
var RE_INTEGER = /^-?[0-9]+$/;


// MAIN //

/**
* Parses a string-serialized Slice object.
*
* ## Notes
*
* -   The function returns `null` if provided an invalid string.
*
* @param {string} str - input string
* @returns {(Slice|null)} Slice object (or null)
*
* @example
* var s = str2slice( 'Slice(null,null,null)' );
* // returns <Slice>
*
* var v = s.start;
* // returns null
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns null
*
* @example
* var s = str2slice( 'Slice(0,10,1)' );
* // returns <Slice>
*
* var v = s.start;
* // returns 0
*
* v = s.stop;
* // returns 10
*
* v = s.step;
* // returns 1
*
* @example
* var s = str2slice( 'Slice(foo,bar)' );
* // returns null
*/
function str2slice( str ) {
	var args;
	var arg;
	var n;
	var v;
	var i;
	if ( str.substring( 0, PREFIX.length ) !== PREFIX ) {
		return null;
	}
	n = str.length - 1;
	if ( str[ n ] !== ')' ) {
		return null;
	}
	str = trim( str.substring( PREFIX.length, n ) );
	str = str.split( RE_SEP );
	if ( str.length !== NARGS ) {
		return null;
	}
	args = [];
	for ( i = 0; i < NARGS; i++ ) {
		v = str[ i ];
		if ( v === 'null' ) {
			arg = null;
		} else if ( RE_INTEGER.test( v ) ) {
			arg = parseInt( v, 10 );
		} else {
			return null;
		}
		args.push( arg );
	}
	return new Slice( args[ 0 ], args[ 1 ], args[ 2 ] );
}


// EXPORTS //

module.exports = str2slice;
