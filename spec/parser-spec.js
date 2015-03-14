var parser = require('../lib/parser');

describe('parser', function () {
  it('should parse the output', function (done) {
    var out = require('fs').readFileSync('./spec/fixtures/out.txt');

    parser.parse(out.toString(), 11, function (err, result) {
      result.should.equal('[{"PID":"PID","COMMAND":"COMMAND","%CPU":"%CPU","TIME":"TIME","#TH":"#TH","#WQ":"#WQ","#PORTS":"#PORTS","MEM":"MEM","PURG":"PURG","CMPRS":"CMPRS","PGRP":"PGRP"},{"PID":"7355","COMMAND":"top","%CPU":"0.0","TIME":"00:00.11","#TH":"1/1","#WQ":"0","#PORTS":"13+","MEM":"1572K+","PURG":"0B","CMPRS":"0B","PGRP":"7355"}]');
      done();
    });
  });
});
