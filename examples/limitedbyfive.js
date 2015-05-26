var topson = require('../lib/topson');

topson(function(err, result) {
  var topJson = JSON.parse(result);

  console.log(topJson.slice(0,5));
});
