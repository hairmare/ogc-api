#!/usr/bin/env node
"use strict";

var _ = require('underscore');
var options = _.extend(require('./package.json'), require('./config.json'));

var restifyMongoose = require('restify-mongoose');

var logger = require('./app/logger')(options, require('bunyan'));
var server = require('./app/server')(options, require('restify'), logger);
var db     = require('./app/db')(options, require('mongoose'));

require('./app/images/routes.js')(
  server,
  restifyMongoose(
    require('./app/images/ImageModel')(
      db,
      require('./app/images/ImageSchema')
    )
  )
);

// these routes must be loaded last
require('./app/global/routes.js')(
  server,
  require('./app/global/main.js')(_, server.router)
);

server.listen(options.port, function () {
  logger.info('%s listening at %s', server.name, server.url);
});

