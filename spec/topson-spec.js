var topson = require('../');
var should = require('chai').should();

describe('topson', function () {
  it('should get top data', function () {
    topson(function (err, result) {
      should.not.exist(err);
      result.should.exist;
    });
  });
});
