topson
======

Get `top` data in JSON format. Currently only works on OSX.

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
