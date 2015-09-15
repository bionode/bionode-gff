<p align="center">
  <a href="http://bionode.io">
    <img height="200" width="200" title="bionode" alt="bionode logo" src="https://rawgithub.com/bionode/bionode/master/docs/bionode-logo.min.svg"/>
  </a>
  <br/>
  <a href="http://bionode.io/">bionode.io</a>
</p>
#bionode-gff
> Node.js module for parsing gff files

[![NPM](https://nodei.co/npm/bionode-gff.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bionode-gff/)


[![Build Status](https://travis-ci.org/bionode/bionode-gff.svg)](https://travis-ci.org/bionode/bionode-gff)

Install
-------

Install ```bionode-gff``` with [npm](//npmjs.org):

```sh
$ npm install bionode-gff
```

Usage
-----

If you are using ```bionode-gff``` with Node.js, you can require the module:

```js
var ncbi = require('bionode-gff')
 GFF.read(filePath, onFeature, done);
 
 function onFeature(feature){
         console.log(feature.seqid);
         console.log(feature.source);
         console.log(feature.type);
         console.log(feature.start);
         console.log(feature.end);
         console.log(feature.score || '.');
         console.log(feature.strand || '?');
         console.log(feature.phase || '.');
         console.log(feature.attributes);
 }
 
 function done(){
 console.log('done');
 }
```