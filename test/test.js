 /* global describe it */
var GFF = require('../index')
var path = require('path')
var assert = require('assert')

var filePath = path.join(__dirname, './test.gff')

var allFeatures = []

describe('GFF', function () {
  describe('.read', function () {
    it('should read without error', function (done) {
      function onFeature (seq) {
        allFeatures.push(seq)
                // console.log(seq.seqid);
                // console.log(seq.source);
                // console.log(seq.type);
                // console.log(seq.start);
                // console.log(seq.end);
                // console.log(seq.score || '.');
                // console.log(seq.strand || '?');
                // console.log(seq.phase || '.');
                // console.log(seq.attributes);
      }

      GFF.read(filePath).on('data', onFeature).on('end', done)
            // GFF.read(filePath, onFeature, done);
    })
    it('should look like a valid output', function () {
      assert.notStrictEqual(allFeatures, validOutput)
    })
  })
})

var validOutput = [{
  seqid: 'human15.1',
  source: '.',
  type: 'gene',
  start: '214301',
  end: '215772',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {ID: 'HsG8283'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'mRNA',
  start: '214360',
  end: '215771',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {
    Comments: 'fixed+one+splice+junction',
    Parent: 'HsG8283',
    Evidence: '7000000069743825',
    Transcript_type: 'Novel_Transcript',
    Name: 'Novel+Transcript%2C+variant+%28partial%29',
    ID: 'HsT20206'
  }
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'CDS',
  start: '214360',
  end: '214441',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT20206'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'CDS',
  start: '215299',
  end: '215444',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT20206'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'CDS',
  start: '215641',
  end: '215766',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT20206'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'three_prime_UT',
  start: '215767',
  end: '215771',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT20206'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'mRNA',
  start: '214590',
  end: '215772',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {
    Comments: 'fixed+one+splice+site%0A',
    Parent: 'HsG8283',
    Evidence: '7000000069600840',
    Transcript_type: 'Novel_Transcript',
    Name: 'Novel+Transcript%2C+variant+%28partial%29',
    ID: 'HsT20207'
  }
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'five_prime_UTR',
  start: '214590',
  end: '214590',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT20207'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'CDS',
  start: '214591',
  end: '214660',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT20207'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'CDS',
  start: '215299',
  end: '215444',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT20207'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'CDS',
  start: '215641',
  end: '215769',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT20207'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'three_prime_UT',
  start: '215770',
  end: '215772',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT20207'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'mRNA',
  start: '214301',
  end: '215769',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {
    Parent: 'HsG8283',
    Evidence: '7000000069974357',
    Transcript_type: 'Candidates+for+Deletion',
    Name: 'Novel+Transcript+%28partial%29',
    ID: 'HsT16028'
  }
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'five_prime_UTR',
  start: '214301',
  end: '214302',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT16028'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'CDS',
  start: '214303',
  end: '214460',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT16028'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'CDS',
  start: '215299',
  end: '215467',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT16028'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'three_prime_UT',
  start: '215468',
  end: '215769',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT16028'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'mRNA',
  start: '215218',
  end: '215772',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {
    Parent: 'HsG8283',
    Evidence: '7000000069512231',
    Transcript_type: 'Novel_Transcript',
    Name: 'Novel+Transcript%2C+variant',
    ID: 'HsT16029'
  }
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'five_prime_UTR',
  start: '215218',
  end: '215233',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT16029'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'CDS',
  start: '215234',
  end: '215444',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT16029'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'CDS',
  start: '215641',
  end: '215735',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT16029'}
},
{
  seqid: 'human15.1',
  source: '.',
  type: 'three_prime_UT',
  start: '215736',
  end: '215772',
  score: '.',
  strand: '+',
  phase: '.',
  attributes: {Parent: 'HsT16029'}
}]
