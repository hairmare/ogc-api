"use strict";

function publisher(options, zmq) {
  var sock = zmq.socket('push')

  sock.bindSync(options.zmq.publisher);

  return sock;
}

module.exports = publisher;
