//
//     Topson
//     Copyright(c) 2015 Matt Hernandez <matt@modulus.io>
//     MIT Licensed
//

function parseDarwin(current, keys, startCommandColumn) {
    var endCommandColumn = startCommandColumn + 15;
    current = current.substring(0,startCommandColumn) + 
        current.substring(startCommandColumn,endCommandColumn).replace(/ /g,'#') + 
        current.substring(endCommandColumn,current.length);
    var vals = current.trim().split(/\s+/);
    var inner = {};

    for (var ii = 0; ii < vals.length; ii++) {
        if (vals[ii].length === 0) {
            continue;
        }
        
        inner[keys[ii]] = vals[ii].replace(/#/g, ' ').trim();
    }
    return inner; 
}

function parseUnix(current, keys) {
    var vals = current.trim().split(/\s+/);
    var inner = {};

    for (var ii = 0; ii < vals.length; ii++) {
        if (vals[ii].length === 0) {
            continue;
        }
        
        if(ii === 11) { 
            inner[keys[ii]] = vals.slice(11,vals.length).join(' ');
            ii = vals.length;
        } else {
            inner[keys[ii]] = vals[ii];
        }
    }
    return inner;
}

//
// Parses the result of the top command removing the specified offset.
//
exports.parse = function (input, offset, fn) {
  var result = [];
  var keys = [];

  //
  // Remove the offset.
  //
  var parts = input.split('\n').slice(offset);

  for (var i = 0; i < parts.length - 1; i++) {
    var current = parts[i];
    var isDarwin;
    var startCommandColumn;

    if (i === 0) {
        // Header row.
        keys = current.trim().split(/\s+/);

        if(keys[1] === 'COMMAND') {
            isDarwin = true;

            // find offset of COMMAND keyword
            startCommandColumn = current.indexOf('COMMAND');
        }
    } else {
        if (isDarwin) {
            result.push(parseDarwin(current, keys, startCommandColumn));
        } else {
            result.push(parseUnix(current, keys));
        }
    }
  }

  fn(null, JSON.stringify(result));
};

