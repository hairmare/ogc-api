"use strict";

function ImageSchema(mongoose, zmqSock)
{
  var schema = new mongoose.Schema({
    title : { type : String, required : true },
    date : { type : Date, default: Date.now},
    tags : [String]
  });

  schema.post('save', function (doc) {
    zmqSock.send(JSON.stringify({
      event: '/schema/save',
      docid: doc._id
    }));
  });

  return schema;
}

module.exports = ImageSchema;
