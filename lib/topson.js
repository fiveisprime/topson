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

      //two 'top' samples have to be taken on Mac, only second one has filled CPU values
      command = 'top -l 2';

      proc.exec(command, function (err, stdout) {

        if (err) {
          return done(err);
        }

        var bothSamples = stdout.toString();
        var samplesArray = bothSamples.split(/Processes:/);
        var secondSample = "Processes:" + samplesArray[2];

        parser.parse(secondSample, 11, done);
      });
      break;

    case 'linux':
      command = 'top -bn 1';
      proc.exec(command, function (err, stdout) {

        if (err) {
          return done(err);
        }

        parser.parse(stdout.toString(), 6, done);
      });
      break;
    default:
      return done(new Error('topson does not work on Windows :('));
  }
};
