"use strict";

function bootstrap(options, mongoose)
{
  mongoose.connect('mongodb://'+options.mongodbHost+':'+options.mongodbPort+'/'+options.mongodbDb);
  return mongoose;
}

module.exports = bootstrap;
