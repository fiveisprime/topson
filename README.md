topson
======

[![npm version](https://badge.fury.io/js/topson.svg)](http://badge.fury.io/js/topson) [![Test Coverage](https://codeclimate.com/github/fiveisprime/topson/badges/coverage.svg)](https://codeclimate.com/github/fiveisprime/topson) [![Build Status](https://travis-ci.org/fiveisprime/topson.svg?branch=master)](https://travis-ci.org/fiveisprime/topson)

Get `top` data in JSON format. Currently only works on OS X and Linux.

# Usage

```js
var topson = require('topson');

topson(function (err, result) {
  if (err) {
    throw err;
  }

  console.log(JSON.parse(result));
});
```

# License

The MIT License (MIT)

Copyright (c) 2015 Matt Hernandez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
