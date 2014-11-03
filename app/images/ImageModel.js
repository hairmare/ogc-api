"use strict";

function ImageModel(mongoose, schema)
{
    return mongoose.model('images', schema(mongoose));
}

module.exports = ImageModel;
