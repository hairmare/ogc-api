"use strict";

var routes = [];
var mainAction = function(req, res, next) {
  res.send({
    routes: routes
  });

  return next();
}

function main(_, router)
{
  var newRoutes = [];
  _.each(router.mounts, function(mount) {
    if (mount.spec.method == "GET" && typeof mount.spec.path == 'string') {
      newRoutes.push({
        "$ref": mount.spec.path
      });
    }
  });
  routes = newRoutes;

  return mainAction;
}

module.exports = main;
