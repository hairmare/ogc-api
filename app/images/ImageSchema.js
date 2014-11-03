"use strict";

function ImageSchema(mongoose)
{
  return new mongoose.Schema({
    title : { type : String, required : true },
    date : { type : Date, default: Date.now},
    tags : [String]
  });
}

module.exports = ImageSchema;
