"use strict";

function bootstrap(options, version, restify, logger)
{
  var server = restify.createServer({
    name: options.name,
    version: version,
    log: logger
  });

  server.use(restify.acceptParser(server.acceptable));
  server.use(restify.queryParser());
  server.use(restify.bodyParser());
  server.use(restify.requestLogger());
  if (options.allowCors) {
    server.use(restify.CORS());
  }

  server.pre(function (request, response, next) {
    request.log.info({ req: request }, 'REQUEST');
    return next();
  });

  return server;
}

module.exports = bootstrap;
