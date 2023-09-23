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

var tape = require( 'tape' );
var isSlice = require( '@stdlib/assert-is-slice' );
var Slice = require( '@stdlib/slice-ctor' );
var str2slice = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof str2slice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `null` if provided a first argument which is not a valid subsequence string', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'bar',
		'Slice',
		'Slice()',
		'Slice(null)',
		'Slice(2,10)',
		'Slice(10)',
		'Slice(1,2,3,4)',
		'S(2,3,4)',
		'Slice(2,10,2',
		'Slice(',
		'Slice(2,10,1.5)',
		'Slice(foo,bar,beep)'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( str2slice( values[ i ] ), null, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function parses a string-serialized Slice object', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		new Slice( null, null, null ),
		new Slice( 2, 10, 2 ),
		new Slice( -2, -10, -2 ),
		new Slice( null, 10, 2 ),
		new Slice( 2, null, 2 ),
		new Slice( 2, 10, null ),
		new Slice( null, null, 2 ),
		new Slice( 2, null, null ),
		new Slice( null, 10, null ),
		new Slice( -1, null, -2 )
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = str2slice( values[ i ].toString() );
		expected = values[ i ];
		t.strictEqual( isSlice( actual ), true, 'returns expected value. i: ' + i + '.' );
		t.strictEqual( actual.start, expected.start, 'returns expected value. i: ' + i + '.' );
		t.strictEqual( actual.stop, expected.stop, 'returns expected value. i: ' + i + '.' );
		t.strictEqual( actual.step, expected.step, 'returns expected value. i: ' + i + '.' );
	}
	t.end();
});
