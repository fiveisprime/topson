//
//     Topson
//     Copyright(c) 2015 Matt Hernandez <matt@modulus.io>
//     MIT Licensed
//

var parser = require('./parser');
var proc   = require('child_process');

//
// Runs the `top` command then parses the result into a JSON string.
//
module.exports = function (done) {
  var command = '';

  switch (require('os').platform()) {
    case 'darwin':
      command = 'top -l 1';
      break;
    case 'linux':
      command = 'top -bn 1';
      break;
    default:
      return done(new Error('topson does not work on Windows :('));
  }

  proc.exec(command, function (err, stdout) {
    if (err) {
      return done(err);
    }

    parser.parse(stdout.toString(), 11, done);
  });
};
