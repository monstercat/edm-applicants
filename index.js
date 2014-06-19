#!/usr/bin/env node

var fs      = require('fs');
var through = require('through');
var parser  = require('mbox-stream');

process.stdin
.pipe(parser())
.pipe(through(function(email, enc, done){
  var obj = {
  }
});

module.exports = function(body){
}
