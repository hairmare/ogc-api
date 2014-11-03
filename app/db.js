"use strict";

function bootstrap(options, mongoose)
{
  mongoose.connect(options.mongodb_url);
  return mongoose;
}

module.exports = bootstrap;
