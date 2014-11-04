"use strict";

function BuildModel(mongoose, schema)
{
    return mongoose.model('builds', schema);
}

module.exports = BuildModel;
