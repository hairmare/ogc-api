"use strict";

function bootstrap(options, bunyan)
{
    return bunyan.createLogger({
      name: options.name,
      serializers: {
        req: bunyan.stdSerializers.req
      }
    });
}

module.exports = bootstrap;
