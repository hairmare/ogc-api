"use strict";

function publisher(options, zmq) {
  var sock = zmq.socket('push')

  sock.bindSync(options.zmqPublisher);

  return sock;
}

module.exports = publisher;
