//
//     Topson
//     Copyright(c) 2014 Matt Hernandez <matt@modulus.io>
//     MIT Licensed
//

var parser = require('./parser');
var exec   = require('child_process').exec;

//
// Runs the `top` unix command then parses the result into a JSON string.
//
module.exports = function (fn) {
  exec('top -l 1', function (err, stdout) {
    if (err) {
      return fn(err);
    }

    parser.parse(stdout.toString(), 11, fn);
  });
};
