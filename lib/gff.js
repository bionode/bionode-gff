var fs = require('fs')
var readline = require('readline')
var Stream = require('stream')
var through = require('through2')
var pumpify = require('pumpify')
var split = require('split2')

var parser = () => {
  return through.obj(function (line, enc, next) {
    if (line.indexOf('#') !== 0) {
      // its not a comment, ill process it

      var parts = line.split('\t')

      if (parts.length !== 9) {
        // the file might use spaces instead of tabs
        // ill try to split it by spaces
        parts = line.trim().split(/\s+/)
      }

      if (parts.length === 9) {
        var attParts = parts[8].split(';')
        var arrayObject = {}
        for (var i = 0; i < attParts.length; ++i) {
          var pair = attParts[i].split('=')
          arrayObject[pair[0]] = pair[1]
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
        }
        this.push(feature)
      } else {
        var err = new Error('9 parts of feature not found')
        throw('error', err)
      }
    }
    next()
  })
}

var writer = () => {
  return through.obj(function (obj, enc, next) {
    var attributes = []
    for (const [key, value] of Object.entries(obj.attributes)) {
      attributes.push(`${key}=${value}`)
    }
    this.push([
      obj.seqid.trim()
    , obj.source.trim()
    , obj.type.trim()
    , obj.start.trim()
    , obj.end.trim()
    , obj.score.trim()
    , obj.strand.trim()
    , obj.phase.trim()
    , attributes.join(';')
    ].join('\t') + '\n')
    next()
  })
}

var read = function(file) {
  return pumpify.obj(fs.createReadStream(file), split(), parser())
}

var gff = {
  read: read
, parser: parser
, writer: writer
}

module.exports = gff
