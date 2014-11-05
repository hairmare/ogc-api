"use strict";

function BuildSchema(mongoose, zmqSock)
{
  var schema = new mongoose.Schema({
    date : { type : Date, default: Date.now},
    runStage: { type: String, default: 'pull' },
    image: {
      $ref: { type: String, required: true },
      name: { type: String, required: true }
    },
    
    pull: {
      date: Date,
      done: Date,
      log:  []
    },
    run: {
      date: Date,
      done: Date,
      log:  []
    },
    result: {
      date: Date,
      done: Date,
      log:  []
    },
    clean: {
      date: Date,
      done: Date,
      log:  []
    }
  });

  schema.post('save', function (doc) {
    zmqSock.send(JSON.stringify({
      event: '/build/save',
      "$ref": '/builds/' + doc._id
    }));
  });

  return schema;
}

module.exports = BuildSchema;
