"use strict";

function bootstrap(options, mongoose)
{
  mongoose.connect('mongodb://'+options.mongodHost+':'+options.mongodbPort+'/'+options.mongodbDb);
  return mongoose;
}

module.exports = bootstrap;
