topson
======

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
