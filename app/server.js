"use strict";

function bootstrap(options, restify, logger)
{
  var server = restify.createServer({
    name: options.name,
    version: options.version,
    log: logger
  });

  server.use(restify.acceptParser(server.acceptable));
  server.use(restify.queryParser());
  server.use(restify.bodyParser());
  server.use(restify.requestLogger());

  server.pre(function (request, response, next) {
    request.log.info({ req: request }, 'REQUEST');
    return next();
  });

  return server;
}

module.exports = bootstrap;
