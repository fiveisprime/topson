//
// Topson
// Copyright (c) 2014 Matt Hernandez
//

var exec = require('child_process').exec;
var parser = require('./parser');

module.exports = function (fn) {
  exec('top -l 1 -o cpu', function (err, stdout) {
    if (err) {
      return fn(err);
    }

    fn(null, parser.parse(stdout.toString(), 11));
  });
};
