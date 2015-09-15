var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
/**
 *
 * @type {{read: Function}}
 */
var GFF3 = {
  /**
   *
   * @param path
   * @param onFeature
   * @param onEnd
   */
  read: function (path, onFeature, onEnd) {

    var instream = fs.createReadStream(path);
    var outstream = new stream();
    var rl = readline.createInterface(instream, outstream);

    rl.on('line', function (line) {
      if (line.indexOf('#') != 0) {
        //its not a comment, ill process it

        var parts = line.split('\t');

        if (parts.length !== 9) {
          //the file might use spaces instead of tabs
          //ill try to split it by spaces
          parts = line.trim().split(/\s+/);
        }

        if (parts.length == 9) {
          var attParts = parts[8].split(';');
          var arrayObject = {};
          for (var i = 0; i < attParts.length; ++i) {
            var pair = attParts[i].split("=");
            arrayObject[pair[0]] = pair[1];
          }

          var feature = {
            seqid: parts[0],
            source: parts[1],
            type: parts[2],
            start: parts[3],
            end: parts[4],
            score: parts[5],
            strand: parts[6],
            phase: parts[7],
            attributes: arrayObject
          };
          onFeature(feature);
        } else {
          console.log(parts);
          error(new Error('9 parts of feature not found'));
        }
      }
    });

    rl.on('close', function () {
      onEnd();
    });
  }
};
/**
 *
 * @param err
 */
function error(err) {
  console.error(err);
  throw err;
}

module.exports = GFF3;