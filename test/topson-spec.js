var Lab = require('lab');
var Code = require('code');
var proxyquire = require('proxyquire');
var sinon      = require('sinon');

var procStub   = {};
var topson = proxyquire('../lib/topson', { 'child_process': procStub });

var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('topson', function () {
  it('should get top data', function (done) {
    procStub.exec = sinon.stub().yields(null, '{ "data": true }');

    topson(function (err, result) {
      expect(result).to.exist;
      done();
    });
  });

  it('should handle errors', function (done) {
    procStub.exec = sinon.stub().yields(new Error('failed'), null);

    topson(function (err) {
      expect(err).to.exist();
      done();
    });
  });
});
