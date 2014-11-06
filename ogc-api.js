#!/usr/bin/env node
"use strict";

var program         = require('commander');
var _               = require('underscore');
var restify         = require('restify');
var mongoose        = require('mongoose');
var restifyMongoose = require('restify-mongoose');
var bunyan          = require('bunyan')
var zmq             = require('zmq');

var version = require('./package.json').version;
var running = false;

program.version(version)
       .usage("<Command> - run the ogc api\n\n    Please refer to each commands --help for details now how to run each service.");

program.command('serve')
       .description('host the ogc api')
       .option('--name          <API_NAME>',          "server name, default: ogc-api\n", process.env.API_NAME || 'ogc-api')

       .option('--listen-port   <API_PORT>',          "port to listen on, default: 80", process.env.API_PORT || 80)
       .option('--zmq-publisher <API_ZMQ_PUBLISHER>', "zmq endpoint to publish events to, default: tcp://127.0.0.1:3000\n", process.env.API_ZMQ_PUBLISHER || 'tcp://127.0.0.1:3000')

       .option('--allow-cors    <API_ALLOW_CORS>',    "send CORS headers, default: false\n", process.env.API_ALLOW_CORS || false)

       .option('--mongodb-db     <MONGODB_DB>',                  "MongoDB db name, default: ogc-api", process.env.MONGODB_DB || 'ogc-api')
       .option('--mongodb-port   <MONGODB_PORT_27017_TCP_PORT>', "MongoDB port, default: 27017", process.env.MONGODB_PORT_27017_TCP_PORT || 27017)
       .option('--mongodb-host   <MONGODB_PORT_27017_TCP_ADDR>', "MongoDB host, default: localhost", process.env.MONGODB_PORT_27017_TCP_ADDR || 'localhost')
       .action(function (options) {
         require('./app/main')(options, version, _, restify, mongoose, restifyMongoose, bunyan, zmq);
         running = true;
       });

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
if (!running) {
  program.help();
}
