var parser = require('../lib/parser');

describe('parser', function () {
  it('should parse mac top output with larger pid number', function (done) {
    var out = require('fs').readFileSync('./spec/fixtures/out-mac.txt', 'utf8');
    parser.parse(out.toString(), 11, function (err, result) {
      result.should.be.a.String;
      done();
    });
  });

  it('should parse debian top output', function (done) {
    var out = require('fs').readFileSync('./spec/fixtures/out-raspberrypi.txt', 'utf8');
    parser.parse(out.toString(), 6, function (err, result) {
      result.should.be.a.String;
      done();
    });
  });

  it('should parse mac output with small pid number', function (done) {
    var out = require('fs').readFileSync('./spec/fixtures/out.txt', 'utf8');
    parser.parse(out.toString(), 11, function (err, result) {
      result.should.be.a.String;
      done();
    });
  });

  it('should produce parseable json string', function (done) {
    var out = require('fs').readFileSync('./spec/fixtures/out.txt', 'utf8');
    parser.parse(out.toString(), 11, function (err, result) {
      var json = JSON.parse(result);
      json.should.be.an.Object;
      done();
    });
  });

  it('should render correct number of keys', function (done) {
    var out = require('fs').readFileSync('./spec/fixtures/out.txt', 'utf8');
    parser.parse(out.toString(), 11, function (err, result) {
      var json = JSON.parse(result);
      json.length.should.equal(1);
      done();
    });
  });

  it('should interpret command string correctly', function (done) {
    var out = require('fs').readFileSync('./spec/fixtures/out.txt', 'utf8');
    parser.parse(out.toString(), 11, function (err, result) {
      var json = JSON.parse(result);
      json[0].COMMAND.should.equal('top');
      json[0].MEM.should.equal('1572K+');
      done();
    });
  });

  it('should recognize mac command with spaces', function (done) {
    var out = require('fs').readFileSync('./spec/fixtures/out-mac.txt', 'utf8');
    parser.parse(out.toString(), 11, function (err, result) {
      var json = JSON.parse(result);
      json[1].COMMAND.should.equal('Google Chrome He');
      done();
    });
  });
});
