"use strict";

function setup(server, images) {
  server.get('/images', images.query());
  server.get('/images/:id', images.detail());
  server.post('/images', images.insert());
  server.patch('/images/:id', images.update());
  server.del('/images/:id', images.remove());
}

module.exports = setup;
