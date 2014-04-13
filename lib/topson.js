//
//     Topson
//     Copyright(c) 2014 Matt Hernandez <matt@modulus.io>
//     MIT Licensed
//

var parser = require('./parser');
var exec   = require('child_process').exec;
var os     = require('os');

//
// Runs the `top` unix command then parses the result into a JSON string.
//
module.exports = function (fn) {
  if (os.platform() === 'darwin') {
    exec('top -l 1', function (err, stdout) {
      if (err) {
        return fn(err);
      }

      parser.parse(stdout.toString(), 11, fn);
    });
  } else if (os.platform() === 'linux') {
    exec('top -n 1', function (err, stdout) {
      if (err) {
        return fn(err);
      }

      parser.parse(stdout.toString(), 7, fn)
    });
  } else {
    fn(new Error('Your platform is not supported.'));
  }
};
