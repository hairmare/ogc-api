"use strict";

function setup(server, images) {

  var idParam = function(handler) {
    return function(req, res, next) {
      req.params.id = req.params[0];
      return handler(req, res, next);
    }
  }
  server.get('/images', function(req) { console.log(req.params); images.query()});
  server.get('/images/:id', images.detail());
  server.get(/^\/images\/(.*)/, idParam(images.detail()));
  server.post('/images', images.insert());
  server.put(/^\/images\/(.*)/, idParam(images.update()));
  server.del(/^\/images\/(.*)/, idParam(images.remove()));
}

module.exports = setup;
