var server = require("./server")
  ,router = require("./router")
  ,requestHandler = require("./requestHandler");

var handle = {}
handle["/"] = requestHandler.todo;
handle["/todo"] = requestHandler.todo;

server.start(router.route, handle);
