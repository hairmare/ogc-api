"use strict";

function ImageSchema(mongoose, zmqSock)
{
  var schema = new mongoose.Schema({
    _id : { type : String, required : true },
    date : { type : Date, default: Date.now},
    syncHub: { type: Boolean, default: true },
    hub: {
      description: String,
      is_official: Boolean,
      is_trusted: Boolean,
      name: String,
      star_count: Number
    },
    needsBuild: { type: Boolean, default: true },
    recentBuilds: { type: Array, default: [] }
  });

  schema.post('save', function (doc) {
    zmqSock.send(JSON.stringify({
      event: '/image/save',
      "$ref": '/images/' + doc._id
    }));
  });

  return schema;
}

module.exports = ImageSchema;
