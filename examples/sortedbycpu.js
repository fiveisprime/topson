var topson = require('../lib/topson');

topson(function(err, result) {
  var topJson = JSON.parse(result);

  var sorted = topJson.sort(function(a,b) {
    return parseFloat(b['%CPU']) - parseFloat(a['%CPU']);
  });

  console.log(sorted);
});
