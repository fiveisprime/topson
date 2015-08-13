var Lab = require('lab');
var Code = require('code');

var parser = require('../lib/parser');

var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('parser', function () {
  it('should parse mac top output with larger pid number', function (done) {
    var out = require('fs').readFileSync('./test/fixtures/out-mac.txt', 'utf8');
    parser.parse(out.toString(), 11, function (err, result) {
      expect(result).to.be.a.string();
      done();
    });
  });

  it('should parse debian top output', function (done) {
    var out = require('fs').readFileSync('./test/fixtures/out-raspberrypi.txt', 'utf8');
    parser.parse(out.toString(), 6, function (err, result) {
      expect(result).to.be.a.string();
      done();
    });
  });

  it('should parse mac output with small pid number', function (done) {
    var out = require('fs').readFileSync('./test/fixtures/out.txt', 'utf8');
    parser.parse(out.toString(), 11, function (err, result) {
      expect(result).to.be.a.string();
      done();
    });
  });

  it('should produce parseable json string', function (done) {
    var out = require('fs').readFileSync('./test/fixtures/out.txt', 'utf8');
    parser.parse(out.toString(), 11, function (err, result) {
      var json = JSON.parse(result);
      expect(json).to.be.an.array();
      done();
    });
  });

  it('should render correct number of keys', function (done) {
    var out = require('fs').readFileSync('./test/fixtures/out.txt', 'utf8');
    parser.parse(out.toString(), 11, function (err, result) {
      var json = JSON.parse(result);
      expect(json.length).to.equal(1);
      done();
    });
  });

  it('should interpret command string correctly', function (done) {
    var out = require('fs').readFileSync('./test/fixtures/out.txt', 'utf8');
    parser.parse(out.toString(), 11, function (err, result) {
      var json = JSON.parse(result);
      expect(json[0].COMMAND).to.equal('top');
      expect(json[0].MEM).to.equal('1572K+');
      done();
    });
  });

  it('should recognize mac command with spaces', function (done) {
    var out = require('fs').readFileSync('./test/fixtures/out-mac.txt', 'utf8');
    parser.parse(out.toString(), 11, function (err, result) {
      var json = JSON.parse(result);
      expect(json[1].COMMAND).to.equal('Google Chrome He');
      done();
    });
  });
});
