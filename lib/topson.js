//
//     Topson
//     Copyright(c) 2014 Matt Hernandez <matt@modulus.io>
//     MIT Licensed
//

var parser = require('./parser');
var proc   = require('child_process');

//
// Runs the `top` unix command then parses the result into a JSON string.
//
module.exports = function (done) {
  proc.exec('top -l 1', function (err, stdout) {
    if (err) {
      return done(err);
    }

    parser.parse(stdout.toString(), 11, done);
  });
};
