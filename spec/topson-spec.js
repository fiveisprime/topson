var proxyquire = require('proxyquire');
var sinon      = require('sinon');

var procStub   = {};

var topson = proxyquire('../lib/topson', { 'child_process': procStub });

describe('topson', function () {
  it('should get top data', function (done) {
    procStub.exec = sinon.stub().yields(null, '{ "data": true }');

    topson(function (err, result) {
      result.should.exist;
      done();
    });
  });

  it('should handle errors', function (done) {
    procStub.exec = sinon.stub().yields(new Error('failed'), null);

    topson(function (err) {
      err.should.exist;
      done();
    });
  });
});
