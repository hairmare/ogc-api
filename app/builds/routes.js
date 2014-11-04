"use strict";

function setup(server, builds) {
  server.get('/builds', builds.query());
  server.get('/builds/:id', builds.detail());
  server.post('/builds', builds.insert());
  server.put('/builds/:id', builds.update());
  server.del('/builds/:id', builds.remove());
}

module.exports = setup;
