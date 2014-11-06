"use strict";

function main(options, version, _, restify, mongoose, restifyMongoose, bunyan, zmq) {
  var logger = require('./logger')(options, bunyan);
  var server = require('./server')(options, version, restify, logger);
  var db     = require('./db')(options, mongoose);
  var sock   = require('./zmq/publisher')(options, zmq)

  require('./images/routes.js')(
    server,
    restifyMongoose(
      require('./images/ImageModel')(
        db,
        require('./images/ImageSchema')(db, sock)
      )
    )
  );

  require('./builds/routes.js')(
  server,
    restifyMongoose(
      require('./builds/BuildModel')(
        db,
        require('./builds/BuildSchema')(db, sock)
      )
    )
  );

  // these routes must be loaded last
  require('./global/routes.js')(
    server,
    require('./global/main.js')(_, server.router)
  );

  server.listen(options.listenPort, function () {
    logger.info('%s listening at %s', server.name, server.url);
  });
}

module.exports = main
