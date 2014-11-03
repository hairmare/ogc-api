"use strict";

function ImageModel(mongoose, schema)
{
    return mongoose.model('images', schema);
}

module.exports = ImageModel;
