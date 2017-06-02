<p align="center">
  <a href="http://bionode.io">
    <img height="200" width="200" title="bionode" alt="bionode logo" src="https://rawgithub.com/bionode/bionode/master/docs/bionode-logo.min.svg"/>
  </a>
  <br/>
  <a href="http://bionode.io/">bionode.io</a>
</p>


#bionode-gff

> Node.js module for parsing gff files

[![npm](https://img.shields.io/npm/v/bionode-gff.svg?style=flat-square)](http://npmjs.org/package/bionode-gff)
[![Travis](https://img.shields.io/travis/bionode/bionode-gff.svg?style=flat-square)](https://travis-ci.org/bionode/bionode-gff)
[![Coveralls](https://img.shields.io/coveralls/bionode/bionode-gff.svg?style=flat-square)](http://coveralls.io/r/bionode/bionode-gff)
[![Dependencies](http://img.shields.io/david/bionode/bionode-gff.svg?style=flat-square)](http://david-dm.org/bionode/bionode-gff)
[![npm](https://img.shields.io/npm/dt/bionode-gff.svg?style=flat-square)](https://www.npmjs.com/package/bionode-gff)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)](https://gitter.im/bionode/bionode)


## Install

You need to install the latest Node.JS first, please check [nodejs.org](http://nodejs.org) or do the following:

```bash
# Ubuntu
sudo apt-get install npm
# Mac
brew install node
# Both
npm install -g n
n stable
```

To use `bionode-gff` as a command line tool, you can install it globally with `-g`.

```bash
npm install bionode-gff -g
```

Or, if you want to use it as a JavaScript library, you need to install it in your local project folder inside the `node_modules` directory by doing the same command **without** `-g`.

```bash
npm i bionode-gff # 'i' can be used as shortcut to 'install'
```


## Usage

If you are using ```bionode-gff``` with Node.js, you can require the module:

```js
var gff = require('bionode-gff')
 GFF.read(filePath).on('data',onFeatures).on('end', done);

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


## Documentation

Check our documentation at [doc.bionode.io](http://doc.bionode.io) or do:

```bash
bionode-gff --help
```


## Contributing

We welcome all kinds of contributions at all levels of experience, please read the [CONTRIBUTING.md](CONTRIBUTING.md) to get started!


## Communication channels

Don't be shy! Come talk to us :smiley:

* **Email** [mail@bionode.io](mailto:mail@bionode.io)
* **Chat room** [http://gitter.im/bionode/bionode](http://gitter.im/bionode/bionode)
* **IRC** #bionode on Freenode
* **Twitter** [@bionode](http://twitter.com/@bionode)
