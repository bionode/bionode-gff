#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var minimist = require('minimist')
var pumpify = require('pumpify')
var split = require('split2')
var JSONStream = require('JSONStream')
var gff = require('./')
const through2 = require('through2')

var argv = minimist(process.argv.slice(2), {
  boolean: ['stdin', 'write'],
  alias: {
    stdin: 's'
  , write: 'w'
  }
})

if (argv.help) {
  console.log(
    'Usage: bionode-gff <options> <gff file [required]> <output file>\n\n' +
    'If no output is provided, the result will be printed to stdout\n\n'
  )
}

var output = argv._[1] ? fs.createWriteStream(argv._[1]) : process.stdout

var parser = argv.write ? gff.writer() : gff.parser()

var jsonIN = argv.write ? JSONStream.parse() : through2.obj()

var jsonOUT = argv.write ? through2() : JSONStream.stringify(false)

if (argv.stdin) {
  process.stdin.setEncoding('utf8')

  process.stdin
  .pipe(split())
  .pipe(jsonIN)
  .pipe(parser)
  .pipe(jsonOUT)
  .pipe(output)

  process.stdin.on('end', function () {
    parser.end()
  })
} else {
  gff.read(argv._[0]).pipe(JSONStream.stringify(false)).pipe(output)
}

process.stdout.on('error', function (err) {
  if (err.code === 'EPIPE') { process.exit(0) }
})
